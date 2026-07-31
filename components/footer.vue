<template>
  <footer class="site-footer">
    <div class="container site-footer__top">
      <div class="site-footer__brand">
        <p class="site-footer__name">Окна Арсенал</p>
        <p class="site-footer__desc">
          Остекление окон и балконов в Красноярске под ключ. Профили Montblanc, своё производство.
        </p>
      </div>
      <a class="site-footer__phone" :href="`tel:${SITE.phoneTel}`">{{ SITE.phoneDisplay }}</a>
    </div>

    <div class="container site-footer__grid">
      <div>
        <p class="site-footer__title">Разделы</p>
        <ul class="site-footer__list">
          <li v-for="item in NAV" :key="item.to">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <p class="site-footer__title">Контакты</p>
        <ul class="site-footer__list">
          <li>
            <a :href="`mailto:${SITE.email}`">{{ SITE.email }}</a>
          </li>
          <li>{{ SITE.addressShort }}</li>
          <li>{{ SITE.hours }}</li>
        </ul>
      </div>

      <div>
        <p class="site-footer__title">Мы на картах</p>
        <ul class="site-footer__list">
          <li>
            <a href="https://yandex.ru/maps/org/arsenal/170560753128/" target="_blank" rel="noopener noreferrer">
              Яндекс Карты
            </a>
          </li>
          <li>
            <a href="https://2gis.ru/krasnoyarsk/firm/70000001096841792" target="_blank" rel="noopener noreferrer">
              2ГИС
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container site-footer__bottom">
      <p>© {{ year }} Окна Арсенал</p>
      <div class="site-footer__legal">
        <NuxtLink to="/privacy">Политика конфиденциальности</NuxtLink>
        <NuxtLink to="/cookies">Файлы cookie</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { NAV, SITE } from "~/data/site";

const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
.site-footer {
  margin-top: 0;
  background: #071820;
  color: #fff;
  padding: var(--gap6) 0 var(--gap3);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.site-footer__top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  align-items: end;
  padding-bottom: var(--gap4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: var(--gap4);
}

.site-footer__name {
  margin: 0 0 10px;
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 600;
  letter-spacing: -0.02em;
}

.site-footer__desc {
  margin: 0;
  font-size: 0.975rem;
  line-height: 1.5;
  opacity: 0.78;
  max-width: 36ch;
}

.site-footer__phone {
  color: #fff;
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  font-weight: 600;
  text-decoration: none;
}

.site-footer__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap4);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

.site-footer__title {
  margin: 0 0 14px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.55;
}

.site-footer__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.975rem;

  a {
    color: inherit;
    text-decoration: none;
    opacity: 0.9;

    &:hover {
      opacity: 1;
      color: var(--color-accent-soft);
    }
  }
}

.site-footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  margin-top: var(--gap5);
  padding-top: var(--gap3);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.8125rem;
  opacity: 0.7;

  p {
    margin: 0;
  }
}

.site-footer__legal {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  a {
    color: inherit;
    text-decoration: underline;
  }
}
</style>
