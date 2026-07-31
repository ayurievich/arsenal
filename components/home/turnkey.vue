<template>
  <section class="turnkey">
    <div class="container">
      <div class="turnkey__head">
        <div>
          <p class="turnkey__label">Под ключ</p>
          <h2>Что входит в установку</h2>
        </div>
        <p class="turnkey__lead">
          Один подрядчик на весь цикл — от замера до сдачи готовых окон и дверей.
        </p>
        <AppButton href="/#form" variant="primary">Оставить заявку</AppButton>
      </div>
      <ol class="turnkey__list">
        <li v-for="(item, i) in KEY_STEPS" :key="item">
          <span>{{ String(i + 1).padStart(2, "0") }}</span>
          <strong>{{ item }}</strong>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { KEY_STEPS } from "~/data/site";
</script>

<style scoped lang="scss">
.turnkey {
  padding: 56px 0;
  background: var(--color-bg-muted);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.turnkey__head {
  display: grid;
  grid-template-columns: 1.1fr 1fr auto;
  gap: 20px 32px;
  align-items: end;
  margin-bottom: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
}

.turnkey__label {
  margin: 0 0 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-warm);
}

h2 {
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.15;
}

.turnkey__lead {
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.5;
  max-width: 40ch;
}

.turnkey__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }

  li {
    display: flex;
    gap: 12px;
    align-items: baseline;
    padding: 16px 18px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    font-size: 0.975rem;
    line-height: 1.35;

    span {
      font-family: var(--font-display);
      font-size: 0.8rem;
      color: var(--color-warm);
      flex-shrink: 0;
    }

    strong {
      font-weight: 600;
    }
  }
}
</style>
