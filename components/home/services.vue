<template>
  <section class="services" id="services">
    <div class="container">
      <div class="services__head">
        <p class="services__label">Услуги</p>
        <h2>Что делаем</h2>
        <p class="services__intro">
          Остекление квартир, домов и объектов. Выберите направление или оставьте заявку на расчёт.
        </p>
      </div>

      <ul class="services__list">
        <li v-for="(item, i) in HOME_SERVICES" :key="item.title" class="services__row">
          <span class="services__num">0{{ i + 1 }}</span>
          <span class="services__body">
            <span class="services__title">{{ item.title }}</span>
            <span class="services__text">{{ item.text }}</span>
          </span>
        </li>
      </ul>

      <div class="services__cta">
        <AppButton to="/uslugi" variant="secondary">Все услуги</AppButton>
        <AppButton href="/#form" variant="primary">Рассчитать стоимость</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HOME_SERVICES } from "~/data/site";
</script>

<style scoped lang="scss">
.services {
  padding: var(--gapSection) 0;
  background: var(--color-surface);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.services__label {
  margin: 0 0 12px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-warm);
}

.services__head h2 {
  margin: 0 0 14px;
  font-size: clamp(2rem, 4vw, 3rem);
}

.services__intro {
  margin: 0 0 var(--gap5);
  max-width: 42ch;
  color: var(--color-text-muted);
  line-height: 1.55;
  font-size: 1.0625rem;
}

.services__list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-border);
}

.services__row {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 20px;
  align-items: center;
  padding: 28px 0;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 640px) {
    grid-template-columns: 48px 1fr;
    gap: 12px;
  }
}

.services__num {
  font-family: var(--font-display);
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.services__title {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  font-weight: 600;
  margin-bottom: 6px;
}

.services__text {
  display: block;
  color: var(--color-text-muted);
  line-height: 1.5;
  max-width: 48ch;
}

.services__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: var(--gap5);
}
</style>
