<template>
  <section class="how" id="how">
    <div class="container">
      <div class="how__head">
        <p class="how__label">Процесс</p>
        <h2>Как мы работаем</h2>
      </div>
      <ol class="how__list">
        <li v-for="(step, i) in HOW_STEPS" :key="step.title" class="how__item">
          <span class="how__num" aria-hidden="true">{{ String(i + 1).padStart(2, "0") }}</span>
          <div class="how__body">
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HOW_STEPS } from "~/data/site";
</script>

<style scoped lang="scss">
.how {
  padding: 56px 0;
  background: var(--color-bg);
  color: var(--color-ink);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.how__head {
  margin-bottom: 24px;
}

.how__label {
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
  color: var(--color-ink);
}

.how__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  border: 0;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

.how__item {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 14px;
  align-items: start;
  padding: 20px 22px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}

.how__num {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1;
  color: var(--color-accent);
  padding-top: 2px;
}

.how__body h3 {
  margin: 0 0 8px;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--color-ink);
  text-transform: none;
}

.how__body p {
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.5;
  font-size: 0.975rem;
}
</style>
