<template>
  <section class="section section_contacts">
    <div class="container">
      <h1 class="contacts-title">Контакты</h1>

      <div class="contacts-grid">
        <a href="tel:+79620727634" class="contacts-card">
          <div class="contacts-card__icon">
            <LucideIcon name="Phone" :size="40" />
          </div>
          <h3 class="contacts-card__title">Телефон</h3>
          <span class="contacts-card__value">+7 (962) 072-76-34</span>
        </a>
        <a href="mailto:yuri6464@mail.ru" class="contacts-card">
          <div class="contacts-card__icon">
            <LucideIcon name="Mail" :size="40" />
          </div>
          <h3 class="contacts-card__title">Email</h3>
          <span class="contacts-card__value">yuri6464@mail.ru</span>
        </a>
        <div class="contacts-card contacts-card--static">
          <div class="contacts-card__icon">
            <LucideIcon name="MapPin" :size="40" />
          </div>
          <h3 class="contacts-card__title">Адрес</h3>
          <span class="contacts-card__value">Красноярск, Затонская улица, 44/2</span>
        </div>
      </div>

      <div class="contacts-cta">
        <a class="btn-bd" href="/#about">Оставить заявку</a>
      </div>
    </div>
    <Map />
  </section>
</template>

<script setup lang="ts">
import Map from "~/components/home/map.vue";

definePageMeta({ layout: "inner" });

const siteUrl = "https://okna-arsenal24.ru";

useSeoMeta({
  title: "Контакты | Окна Арсенал — Красноярск",
  description:
    "Адрес, телефон, email. Красноярск, Затонская 44/2. ☎ +7 (962) 072-76-34",
  ogUrl: siteUrl + "/contacts",
  ogImage: siteUrl + "/og-image.jpg",
});
useHead({ link: [{ rel: "canonical", href: siteUrl + "/contacts" }] });
</script>

<style scoped lang="scss">
.contacts-title {
  text-align: center;
  margin-bottom: var(--gapSection);
}

.contacts-grid {
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

.contacts-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--gap4);
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(0, 55, 112, 0.12);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.25s ease;

  &:hover:not(.contacts-card--static) {
    border-color: rgba(0, 55, 112, 0.35);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 55, 112, 0.1);

    .contacts-card__value {
      color: #003770;
    }
  }

  &--static {
    cursor: default;
  }

  &__icon {
    width: 56px;
    height: 56px;
    margin-bottom: var(--gap2);

    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 var(--gap1);
    color: #16111a;
    text-transform: uppercase;
  }

  &__value {
    font-size: 1rem;
    line-height: 1.5;
    color: #3d4654;
    transition: color 0.2s ease;
  }
}

.contacts-cta {
  text-align: center;
}
</style>
