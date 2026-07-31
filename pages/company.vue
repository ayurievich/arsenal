<template>
  <section class="page">
    <div class="container">
      <AppBreadcrumbs :items="[{ label: 'Главная', to: '/' }, { label: 'О компании' }]" />
      <p class="page__label">О компании</p>
      <h1>О компании «Окна Арсенал»</h1>
      <p class="page__lead">
        Работаем на рынке остекления уже <strong>15 лет</strong>.
        Устанавливаем окна и двери в Красноярске и крае. Собственное производство и партнёрство с Montblanc и Mako.
      </p>

      <div class="company-panel">
        <article class="company-block">
          <p class="company-block__label">01</p>
          <h2>Официальные партнёры</h2>
          <p>
            Являемся партнёрами <strong>Montblanc</strong> и <strong>Mako</strong> — производителей профилей ПВХ и фурнитуры.
            Работаем с сертифицированными материалами.
          </p>
        </article>
        <article class="company-block">
          <p class="company-block__label">02</p>
          <h2>Собственное производство</h2>
          <p>
            Производство в Красноярске. Изготавливаем окна и двери под заказ и контролируем качество
            от замеров до монтажа.
          </p>
        </article>
        <article class="company-block">
          <p class="company-block__label">03</p>
          <h2>Как мы работаем</h2>
          <ul>
            <li>Бесплатный замер и расчёт</li>
            <li>Изготовление от 2 недель</li>
            <li>Монтаж за 1 день</li>
            <li>Гарантия 1 год</li>
          </ul>
        </article>
      </div>

      <div class="page__cta-bar">
        <p>
          Оставьте заявку — перезвоним и ответим на вопросы. Работаем с физическими и юридическими лицами.
        </p>
        <AppButton href="/#form" variant="primary">Оставить заявку</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
usePageSeo({
  title: "О компании | Окна Арсенал — Красноярск",
  description:
    "15 лет на рынке. Официальные партнёры Montblanc и Mako. Собственное производство. ☎ +7 (962) 072-76-34",
  path: "/company",
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
            { "@type": "ListItem", position: 2, name: "О компании", item: absoluteUrl("/company") },
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
  max-width: 58ch;
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--color-text-muted);

  strong {
    color: var(--color-ink);
  }
}

.company-panel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--color-border);
  background: var(--color-surface);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
}

.company-block {
  padding: 28px 26px;
  border-right: 1px solid var(--color-border);

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 860px) {
    border-right: 0;
    border-bottom: 1px solid var(--color-border);

    &:last-child {
      border-bottom: 0;
    }
  }
}

.company-block__label {
  margin: 0 0 10px;
  font-family: var(--font-display);
  font-size: 0.8rem;
  color: var(--color-warm);
}

.company-block h2 {
  margin: 0 0 12px;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-ink);
  text-transform: none;
}

.company-block p,
.company-block ul {
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.55;
  font-size: 0.975rem;
}

.company-block ul {
  list-style: none;
  padding: 0;

  li {
    padding: 8px 0;
    border-top: 1px solid var(--color-border);

    &:last-child {
      border-bottom: 1px solid var(--color-border);
    }
  }
}

.page__cta-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 28px;
  padding: 22px 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);

  p {
    margin: 0;
    max-width: 48ch;
    color: var(--color-text-muted);
    line-height: 1.5;
  }
}
</style>
