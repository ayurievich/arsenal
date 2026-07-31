<template>
  <section class="page-section">
    <div class="container prose">
      <AppBreadcrumbs :items="[{ label: 'Главная', to: '/' }, { label: 'Файлы cookie' }]" />
      <h1>Использование файлов cookie</h1>
      <p>
        Сайт «Окна Арсенал» может использовать cookie и сходные технологии, чтобы обеспечивать работу
        страниц и собирать обезличенную статистику посещений.
      </p>
      <h2>Какие cookie применяются</h2>
      <ul>
        <li>
          <strong>Необходимые</strong> — нужны для корректной работы сайта (например, технические настройки сессии браузера).
        </li>
        <li>
          <strong>Аналитические</strong> — при включённой Яндекс.Метрике помогают понять, какие страницы открывают
          посетители, и улучшать сайт. Счётчик подключается только если задан идентификатор в настройках окружения.
        </li>
      </ul>
      <h2>Как управлять cookie</h2>
      <p>
        Вы можете ограничить или удалить cookie в настройках браузера. Отключение некоторых cookie может повлиять
        на удобство использования сайта, но основные страницы и форма заявки останутся доступны.
      </p>
      <p>
        Подробнее об обработке персональных данных — в
        <NuxtLink to="/privacy">политике конфиденциальности</NuxtLink>.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
usePageSeo({
  title: "Файлы cookie | Окна Арсенал",
  description: "Какие cookie использует сайт «Окна Арсенал» и как ими управлять.",
  path: "/cookies",
});
</script>

<style scoped lang="scss">
.page-section {
  padding: var(--gap4) 0 var(--gapSection);
}

.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.prose {
  h1 {
    margin: 0 0 16px;
    font-size: clamp(1.75rem, 3vw, 2.25rem);
  }

  h2 {
    margin: 28px 0 10px;
    font-size: 1.25rem;
  }

  p,
  li {
    line-height: 1.6;
  }

  a {
    color: var(--color-accent);
  }
}
</style>
