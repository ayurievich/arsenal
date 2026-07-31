<template>
  <section class="hero">
    <div class="hero__media" aria-hidden="true">
      <img
        class="hero__img"
        :src="heroSrc"
        alt=""
        width="1536"
        height="1024"
        fetchpriority="high"
        decoding="async"
      />
      <div class="hero__veil" />
    </div>

    <div class="hero__content">
      <p class="hero__brand">Окна Арсенал</p>
      <h1>Остекление под ключ в Красноярске</h1>
      <p class="hero__lead">
        Своё производство, профили Montblanc, бесплатный замер и монтаж за один день.
      </p>
      <div class="hero__actions">
        <AppButton href="/#form" variant="primary" @click="onCta">Бесплатный замер</AppButton>
        <AppButton to="/uslugi" variant="secondary">Смотреть услуги</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroSrc from "~/assets/img/hero-windows.jpg";
import { trackEvent } from "~/utils/analytics";

function onCta() {
  trackEvent("cta_hero");
}
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  min-height: min(92vh, 820px);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  color: #fff;
  background: #071820;
}

.hero__media {
  position: absolute;
  inset: 0;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 62% center;
  animation: hero-zoom 7s ease-out forwards;
}

.hero__veil {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(105deg, rgba(7, 24, 32, 0.92) 0%, rgba(7, 24, 32, 0.62) 42%, rgba(7, 24, 32, 0.22) 72%, rgba(7, 24, 32, 0.12) 100%),
    linear-gradient(0deg, rgba(7, 24, 32, 0.55) 0%, transparent 42%);
}

.hero__content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: calc(var(--header-h) + 48px) var(--container-pad) 64px;
  animation: rise-in 0.8s ease both;
}

.hero__brand {
  margin: 0 0 18px;
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3.5vw, 2.35rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
  color: #fff;
}

.hero h1 {
  margin: 0 0 18px;
  max-width: 14ch;
  font-size: clamp(2rem, 5.4vw, 4rem);
  line-height: 1.05;
  font-weight: 600;
  color: #fff;
}

.hero__lead {
  margin: 0 0 32px;
  max-width: 34ch;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
  font-weight: 500;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  :deep(.app-btn--secondary) {
    border-color: rgba(255, 255, 255, 0.7);
    color: #fff;

    &:hover {
      background: #fff;
      color: var(--color-ink);
      border-color: #fff;
    }
  }

  :deep(.app-btn--primary) {
    background: #fff;
    border-color: #fff;
    color: var(--color-ink);

    &:hover {
      background: var(--color-accent-soft);
      border-color: var(--color-accent-soft);
      color: var(--color-ink);
    }
  }
}

@media (max-width: 640px) {
  .hero {
    min-height: 88vh;
    align-items: flex-end;
  }

  .hero__content {
    padding-bottom: 48px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__img {
    animation: none;
  }

  .hero__content {
    animation: none;
  }
}
</style>
