<template>
  <section class="section section_company">
    <div class="container">
      <h1 class="company-title">О компании</h1>

      <div class="company-lead">
        <p>
          Работаем на рынке остекления уже <strong>15 лет</strong>.<br>
          За это время установили тысячи окон и дверей в Красноярске и крае.
        </p>
      </div>

      <div class="company-grid">
        <div class="company-card">
          <h3>Официальные партнёры</h3>
          <p>
            Являемся партнёрами <strong>Montblanc</strong> и <strong>Mako</strong> — ведущих производителей профилей ПВХ и фурнитуры в России. Работаем только с сертифицированными материалами.
          </p>
        </div>
        <div class="company-card">
          <h3>Собственное производство</h3>
          <p>
            У нас своё производство в Красноярске. Изготавливаем окна и двери под заказ, контролируем качество на каждом этапе — от замеров до монтажа.
          </p>
        </div>
        <div class="company-card">
          <h3>Как мы работаем</h3>
          <ul>
            <li>Бесплатный замер и расчёт</li>
            <li>Изготовление от 2 недель</li>
            <li>Монтаж за 1 день</li>
            <li>Гарантия 15 лет</li>
          </ul>
        </div>
      </div>

      <div class="company-footer">
        <p>
          На сайте вы можете оставить заявку — перезвоним и ответим на вопросы. Работаем с юридическими и физическими лицами.
        </p>
        <a class="btn-bd" href="/#about">Оставить заявку</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: "inner" });

const siteUrl = "https://okna-arsenal24.ru";

useSeoMeta({
  title: "О компании | Окна Арсенал — Красноярск",
  description:
    "15 лет на рынке. Официальные партнёры Montblanc и Mako. Собственное производство. ☎ +7 (962) 072-76-34",
  ogUrl: siteUrl + "/company",
  ogImage: siteUrl + "/og-image.jpg",
});
useHead({ link: [{ rel: "canonical", href: siteUrl + "/company" }] });
</script>

<style scoped lang="scss">
.company-title {
  text-align: center;
  margin-bottom: var(--gapSection);
}

.company-lead {
  max-width: 720px;
  margin: 0 auto var(--gapSection);
  text-align: center;

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #16111a;

    strong {
      color: #003770;
    }
  }
}

.company-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap4);
  margin-bottom: var(--gapSection);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.company-card {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(0, 55, 112, 0.12);
  border-radius: 12px;
  padding: var(--gap4);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 var(--gap2);
    color: #16111a;
  }

  p {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #3d4654;

    strong {
      color: #003770;
    }
  }

  ul {
    margin: 0;
    padding-left: 1.25em;
    font-size: 0.9375rem;
    line-height: 1.8;
    color: #3d4654;

    li {
      margin-bottom: var(--gap1);
    }
  }
}

.company-footer {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
  padding: var(--gap4);
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(0, 55, 112, 0.1);

  p {
    margin: 0 0 var(--gap4);
    font-size: 1rem;
    line-height: 1.6;
    color: #16111a;
  }
}
</style>
