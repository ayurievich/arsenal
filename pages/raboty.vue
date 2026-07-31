<template>
  <section class="page">
    <div class="container">
      <AppBreadcrumbs :items="[{ label: 'Главная', to: '/' }, { label: 'Наши работы' }]" />
      <p class="page__label">Портфолио</p>
      <h1>Наши работы в Красноярске</h1>
      <p class="page__lead">
        Реальные объекты: панорамное остекление, входные группы, окна в срубах и каркасных домах.
        Нажмите на фото, чтобы открыть в полном размере.
      </p>

      <WorksGallery :items="WORKS" />

      <div class="page__cta">
        <AppButton href="/#form" variant="primary">Бесплатный замер</AppButton>
        <AppButton to="/uslugi" variant="secondary">Услуги</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { WORKS } from "~/data/works";

usePageSeo({
  title: "Наши работы — остекление в Красноярске | Окна Арсенал",
  description:
    "Фото работ «Окна Арсенал»: панорамные окна, двери ПВХ, остекление домов и срубов в Красноярске и крае. ☎ +7 (962) 072-76-34",
  path: "/raboty",
});

const siteUrl = useSiteUrl();
if (siteUrl) {
  useHead({
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Главная", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Наши работы", item: absoluteUrl("/raboty") },
              ],
            },
            {
              "@type": "ImageGallery",
              name: "Наши работы — Окна Арсенал",
              description: "Портфолио остекления объектов в Красноярске",
              url: absoluteUrl("/raboty"),
              image: WORKS.map((item) => absoluteUrl(item.src)),
            },
          ],
        }),
      },
    ],
  });
}
</script>

<style scoped lang="scss">
.page {
  padding: 32px 0 64px;
  background: var(--color-bg);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad);
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
  margin: 0 0 32px;
  max-width: 52ch;
  color: var(--color-text-muted);
  line-height: 1.55;
  font-size: 1.0625rem;
}

.page__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: var(--gap5);
}
</style>
