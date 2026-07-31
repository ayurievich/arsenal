<template>
  <section class="trust" aria-label="Почему нам доверяют">
    <div class="container">
      <ul class="trust__list">
        <li v-for="(item, i) in TRUST_ITEMS" :key="item.title" class="trust__item">
          <span class="trust__idx" aria-hidden="true">0{{ i + 1 }}</span>
          <div>
            <h2 class="trust__title">{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TRUST_ITEMS } from "~/data/site";
</script>

<style scoped lang="scss">
.trust {
  padding: 18px 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.trust__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
}

.trust__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  padding: 14px 16px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);

  p {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.45;
    color: var(--color-text-muted);
  }
}

.trust__idx {
  font-family: var(--font-display);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: var(--color-warm);
  padding-top: 2px;
}

.trust__title {
  margin: 0 0 4px;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--color-ink);
}
</style>
