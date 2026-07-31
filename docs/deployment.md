# Развёртывание и откат

**Сейчас деплой не выполнять.** Сайт временно может открываться по IP; канонический домен — позже.

## До подключения домена

1. `NUXT_PUBLIC_INDEXABLE=false`
2. `NUXT_PUBLIC_SITE_URL` не указывать IP (оставить пустым или тестовый URL с noindex)
3. Canonical / JSON-LD / Sitemap не должны рекламировать IP
4. Секреты только в env на сервере, не в git
5. Ротировать Telegram-токен (ранее был в репозитории)

## Подключение домена

1. DNS A → IP сервера (apex + www)
2. Nginx: proxy на `127.0.0.1:3000` ([nginx-arsenal.conf](../nginx-arsenal.conf))
3. Certbot TLS
4. HTTP → HTTPS
5. Основной хост: apex `okna-arsenal24.ru`; www → 301 на apex
6. При возможности IP → 301 на домен
7. Env: `NUXT_PUBLIC_SITE_URL=https://okna-arsenal24.ru`, `NUXT_PUBLIC_INDEXABLE=true`, YM ID, Telegram
8. `npm ci && npm run build && pm2 restart arsenal`
9. Проверить canonical, robots, sitemap, JSON-LD, коды 200/301/404, аналитику
10. Бэкап `.output` + nginx conf; откат: предыдущий релиз + `pm2 restart`

## После домена

- Яндекс.Вебмастер + Google Search Console
- Отправить Sitemap
- Регион: Красноярск
- Переобход главных URL
- Следить за CWV, 404, дублями

## Локальные команды

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

Деплой (только после проверок): `./deploy.sh '<password>'` — обновить `HOST` в скрипте при смене IP.
