<template>
  <section class="page">
    <div class="container">
      <AppBreadcrumbs :items="[{ label: 'Главная', to: '/' }, { label: 'Услуги' }]" />
      <p class="page__label">Услуги</p>
      <h1>Услуги по остеклению в Красноярске</h1>
      <p class="page__lead">
        Остекление квартир, балконов, домов и объектов. Подберём профиль Montblanc и рассчитаем стоимость на бесплатном замере.
      </p>

      <ul class="service-list">
        <li
          v-for="(item, i) in services"
          :id="item.id"
          :key="item.id"
          class="service-list__item"
        >
          <span class="service-list__num">0{{ i + 1 }}</span>
          <div class="service-list__body">
            <h2>{{ item.title }}</h2>
            <p>{{ item.desc }}</p>
          </div>
        </li>
      </ul>

      <div class="page__cta">
        <AppButton href="/#form" variant="primary">Бесплатный замер</AppButton>
        <AppButton to="/contacts" variant="secondary">Контакты</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
usePageSeo({
  title: "Услуги по остеклению в Красноярске | Окна Арсенал",
  description:
    "Остекление квартир, балконов, домов, коттеджей и производств. Окна с ламинацией. Профили Montblanc. Бесплатный замер. ☎ +7 (962) 072-76-34",
  path: "/uslugi",
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
            { "@type": "ListItem", position: 2, name: "Услуги", item: absoluteUrl("/uslugi") },
          ],
        }),
      },
    ],
  });
}

const services = [
  {
    id: "kvartiry",
    title: "Квартиры и балконы",
    desc: "Пластиковые окна ПВХ, тёплое и холодное остекление балконов и лоджий, замена старых окон.",
  },
  {
    id: "doma",
    title: "Частные дома",
    desc: "Панорамные окна, остекление террас и веранд.",
  },
  {
    id: "dveri",
    title: "Двери ПВХ",
    desc: "Изготовление и установка пластиковых дверей под ключ.",
  },
  {
    id: "laminaciya",
    title: "Ламинация",
    desc: "Окна и двери с ламинацией в цвет и текстуру под ваш интерьер.",
  },
  {
    id: "proizvodstva",
    title: "Производства",
    desc: "Остекление цехов, складов, офисов и торговых площадей.",
  },
  {
    id: "zamer",
    title: "Бесплатный замер",
    desc: "Выезд замерщика, размеры и предварительная смета без оплаты.",
  },
];
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

.service-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-border);
}

.service-list__item {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 16px;
  padding: 24px 0;
  border-bottom: 1px solid var(--color-border);
  scroll-margin-top: calc(var(--header-h) + 16px);

  @media (max-width: 560px) {
    grid-template-columns: 44px 1fr;
  }
}

.service-list__num {
  font-family: var(--font-display);
  font-size: 0.875rem;
  color: var(--color-warm);
  padding-top: 4px;
}

.service-list__body h2 {
  margin: 0 0 6px;
  font-family: var(--font-display);
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  font-weight: 600;
  color: var(--color-ink);
  text-transform: none;
}

.service-list__body p {
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.5;
  max-width: 58ch;
}

.page__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}
</style>
