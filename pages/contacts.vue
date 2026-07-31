<template>
  <section class="page">
    <div class="container">
      <AppBreadcrumbs :items="[{ label: 'Главная', to: '/' }, { label: 'Контакты' }]" />
      <p class="page__label">Контакты</p>
      <h1>Контакты</h1>
      <p class="page__lead">Свяжитесь с нами удобным способом или оставьте заявку на бесплатный замер.</p>

      <div class="contacts-panel">
        <a :href="`tel:${SITE.phoneTel}`" class="contacts-row">
          <span class="contacts-row__label">Телефон</span>
          <span class="contacts-row__value">{{ SITE.phoneDisplay }}</span>
        </a>
        <a :href="`mailto:${SITE.email}`" class="contacts-row">
          <span class="contacts-row__label">Email</span>
          <span class="contacts-row__value">{{ SITE.email }}</span>
        </a>
        <div class="contacts-row contacts-row--static">
          <span class="contacts-row__label">Адрес</span>
          <span class="contacts-row__value">{{ SITE.address }}</span>
        </div>
        <div class="contacts-row contacts-row--static">
          <span class="contacts-row__label">Режим работы</span>
          <span class="contacts-row__value">{{ SITE.hours }}</span>
        </div>
      </div>

      <div class="page__cta">
        <AppButton href="/#form" variant="primary">Оставить заявку</AppButton>
      </div>
    </div>
    <Map />
  </section>
</template>

<script setup lang="ts">
import Map from "~/components/home/map.vue";
import { SITE } from "~/data/site";
import { trackEvent } from "~/utils/analytics";

onMounted(() => trackEvent("contacts_view"));

usePageSeo({
  title: "Контакты | Окна Арсенал — Красноярск",
  description: "Адрес, телефон, email. Красноярск, Затонская 44/2. ☎ +7 (962) 072-76-34",
  path: "/contacts",
});

const siteUrl = useSiteUrl();
if (siteUrl) {
  useHead({
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Контакты", item: absoluteUrl("/contacts") },
          ],
        }),
      },
    ],
  });
}
</script>

<style scoped lang="scss">
.page {
  padding: 32px 0 0;
  background: var(--color-bg);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad) 28px;
}

.page__label {
  margin: 0 0 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-warm);
}

h1 {
  margin: 0 0 12px;
  font-size: clamp(1.75rem, 3.5vw, 2.6rem);
  line-height: 1.1;
  color: var(--color-ink);
}

.page__lead {
  margin: 0 0 28px;
  color: var(--color-text-muted);
  max-width: 48ch;
  line-height: 1.55;
}

.contacts-panel {
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.contacts-row {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 16px;
  align-items: baseline;
  padding: 18px 22px;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;

  &:last-child {
    border-bottom: 0;
  }

  &:hover:not(.contacts-row--static) .contacts-row__value {
    color: var(--color-accent);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}

.contacts-row__label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-warm);
}

.contacts-row__value {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-ink);
  word-break: break-word;
}

.page__cta {
  margin-top: 24px;
}
</style>
