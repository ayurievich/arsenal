# SEO-план

## Рендеринг

Nuxt 3 SSR — публичные страницы отдаются с HTML. SPA-миграция не нужна.

## Метаданные

Каждая индексируемая страница: уникальные title/description, robots по `indexable`, абсолютный canonical из `NUXT_PUBLIC_SITE_URL`, OG + `og-image.jpg`, `lang=ru`, favicon, theme-color.

## Staging

`NUXT_PUBLIC_INDEXABLE=false` → `noindex, nofollow` + robots Disallow `/` + без Sitemap в robots.

## Production

`NUXT_PUBLIC_INDEXABLE=true` + `NUXT_PUBLIC_SITE_URL=https://okna-arsenal24.ru` (apex без www, www → apex на nginx).

## Sitemap / robots

Динамические Nitro-роуты `sitemap.xml` и `robots.txt`. Только канонические 200-страницы. Исключить `/bot.php`.

## Структурированные данные

- Organization + LocalBusiness + WebSite (глобально / главная)
- BreadcrumbList на внутренних
- FAQPage на `/faq`
- Без AggregateRating и выдуманных отзывов

## Перелинковка

Главная ↔ услуги ↔ FAQ ↔ компания ↔ контакты; CTA на `/#form`; breadcrumbs; footer.

## Изображения

Hero: `@nuxt/image`, не lazy, размеры; ниже fold — lazy; осмысленные alt.
