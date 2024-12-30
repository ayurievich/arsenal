# Приложение на nuxt 3

## Как происходит деплой
Все текста находятся в _/public/content.js_

# Как запустить
```bash
npm install


npm run dev
```

## Как происходит деплой
1. клонируем проект с github
2. устанавливаем [node.js](https://monovm.com/blog/install-npm-on-ubuntu/)
3. Докидываем nginx
4. Заходим в проект и делаем:
```bash
npm install

npm run build
```

важно!!!!
если идут ошибки скорее всего проблема в версиях node или совместимости с OS (да и такое тоже бывает).
в таком случае качаем nvm и играемся с версиями, важно помнить что собрать проект можно и на старых версиях ноды, но например тот же pm2 идет от 16 и выше

**Установка зависимостей в крайних случаях:**  
```bash
npm install --save --legacy-peer-deps   
```

# Работа с nginx
Это типовой пример того что должно быть в nginx для того чтоб запустился проект
Также в примере подключен [certbot](https://certbot.eff.org/) для получения самописного ssl сертификата

```bash
server {
    server_name your_domain;

    location / {
        proxy_pass http://localhost:3000;  # Прокси для Nuxt
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/your_domain/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/your_domain/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host =your_domain) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name your_domain;
    return 404; # managed by Certbot


}

```

# Записк своего приложения 
Скачивем пакетный менеджер [pm2](https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps) 

1. Проваливаемся в папку проекта, если еще не в ней и билдим проект, если этого еще не делалил 
2. после того как сбилдили проект пишем
 ```bash
pm2 start node -- .output/server/index.mjs
pm2 status
pm2 startup
pm2 save
```
С этими настроками у нас будет автоматически перезапускаться приложение при перезагрузке сервера, и также через **status** мы видим
Что у нас запущенно и запушенно ли вообще