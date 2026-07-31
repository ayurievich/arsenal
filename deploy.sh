#!/bin/bash
# Деплой Nuxt 3 на сервер
# Использование: ./deploy.sh [пароль]
# Или: SSHPASS=пароль ./deploy.sh

set -e
HOST="194.67.119.121"
USER="root"
REPO="https://github.com/ayurievich/arsenal.git"
PROJECT_DIR="/var/www/arsenal"
DOMAIN="okna-arsenal24.ru"
CERTBOT_EMAIL="yuri6464@mail.ru"

# Проверка sshpass
if ! command -v sshpass &>/dev/null; then
  echo "Установите sshpass: sudo apt install sshpass"
  exit 1
fi

PASS="${1:-$SSHPASS}"
if [ -z "$PASS" ]; then
  echo "Укажите пароль: ./deploy.sh <пароль> или SSHPASS=<пароль> ./deploy.sh"
  exit 1
fi

export SSHPASS="$PASS"

echo "==> Подключение к $HOST..."
# Копируем nginx-конфиг на сервер для использования после git pull
sshpass -e scp -o StrictHostKeyChecking=no nginx-arsenal.conf "$USER@$HOST":/tmp/arsenal-nginx.conf

# Секреты не в git: синхронизируем локальный .env на сервер, если он есть
if [ -f .env ]; then
  echo "==> Копирование .env на сервер..."
  sshpass -e scp -o StrictHostKeyChecking=no .env "$USER@$HOST":/tmp/arsenal.env
else
  echo "==> Локальный .env не найден — на сервере должен уже лежать /var/www/arsenal/.env"
fi

sshpass -e ssh -o StrictHostKeyChecking=no "$USER@$HOST" bash -s << REMOTE
set -e
HOST="$HOST"
REPO="$REPO"
PROJECT_DIR="$PROJECT_DIR"
DOMAIN="$DOMAIN"
CERTBOT_EMAIL="$CERTBOT_EMAIL"

# Node.js (если нет)
if ! command -v node &>/dev/null; then
  echo "==> Установка Node.js 20..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

# PM2
if ! command -v pm2 &>/dev/null; then
  echo "==> Установка PM2..."
  npm install -g pm2
fi

# Клонирование/обновление
mkdir -p /var/www
if [ -d "$PROJECT_DIR/.git" ]; then
  echo "==> Обновление репозитория..."
  cd "$PROJECT_DIR"
  git fetch origin
  # Прод-дерево часто грязное после прошлых правок — жёстко синхронизируем с main,
  # .env сохраняем (он в gitignore и не должен пропасть).
  git reset --hard origin/main
  git clean -fd -e .env -e .output -e node_modules
else
  echo "==> Клонирование репозитория..."
  git clone "$REPO" "$PROJECT_DIR"
  cd "$PROJECT_DIR"
fi

if [ -f /tmp/arsenal.env ]; then
  echo "==> Установка .env..."
  mv /tmp/arsenal.env "$PROJECT_DIR/.env"
  chmod 600 "$PROJECT_DIR/.env"
fi

if [ ! -f "$PROJECT_DIR/.env" ]; then
  echo "ERROR: нет $PROJECT_DIR/.env — Telegram-токен не будет работать"
  exit 1
fi

echo "==> Env keys on server:"
grep -E '^[A-Z0-9_]+=' "$PROJECT_DIR/.env" | sed 's/=.*/=***/'

echo "==> Установка зависимостей и сборка..."
npm install
rm -rf .output .nuxt node_modules/.cache node_modules/.vite
npm run build

echo "==> Перезапуск приложения..."
pm2 delete arsenal 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 startup 2>/dev/null || true
pm2 save

# Nginx (если нет)
if ! command -v nginx &>/dev/null; then
  echo "==> Установка nginx..."
  apt-get update && apt-get install -y nginx
fi

# Certbot (если нет)
if ! command -v certbot &>/dev/null; then
  echo "==> Установка certbot..."
  apt-get install -y certbot python3-certbot-nginx
fi

# SSL-сертификат при первом запуске
if [ ! -f /etc/letsencrypt/live/okna-arsenal24.ru/fullchain.pem ]; then
  echo "==> Выпуск SSL-сертификата..."
  cat > /etc/nginx/conf.d/arsenal.conf << 'NGX'
server {
    listen 80;
    listen [::]:80;
    server_name okna-arsenal24.ru www.okna-arsenal24.ru;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
NGX
  nginx -t 2>/dev/null && systemctl reload nginx 2>/dev/null || systemctl start nginx
  certbot certonly --nginx -d okna-arsenal24.ru -d www.okna-arsenal24.ru --non-interactive --agree-tos --email "$CERTBOT_EMAIL"
fi

# Рабочий конфиг nginx из репозитория
cp /tmp/arsenal-nginx.conf /etc/nginx/conf.d/arsenal.conf
nginx -t && systemctl reload nginx

echo "==> Готово! Приложение на порту 3000, nginx проксирует HTTPS"
REMOTE

echo ""
echo "Деплой завершён. Сайт: https://okna-arsenal24.ru"
