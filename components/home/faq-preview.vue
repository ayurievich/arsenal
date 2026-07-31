<template>
  <section class="faq-preview">
    <div class="container">
      <div class="faq-preview__head">
        <div>
          <p class="faq-preview__label">FAQ</p>
          <h2>Частые вопросы</h2>
        </div>
        <NuxtLink to="/faq" class="faq-preview__all">Все ответы →</NuxtLink>
      </div>
      <div class="faq-preview__list">
        <details v-for="item in FAQ_PREVIEW" :key="item.question" class="faq-preview__item">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FAQ_PREVIEW } from "~/data/site";
</script>

<style scoped lang="scss">
.faq-preview {
  padding: var(--gapSection) 0;
  background: var(--color-bg);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.faq-preview__head {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: var(--gap4);
}

.faq-preview__label {
  margin: 0 0 10px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-warm);
}

h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.faq-preview__all {
  color: var(--color-accent);
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: var(--color-warm);
  }
}

.faq-preview__item {
  border-top: 1px solid var(--color-border);
  padding: 4px 0;

  &:last-child {
    border-bottom: 1px solid var(--color-border);
  }

  summary {
    cursor: pointer;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.1rem;
    padding: 22px 0;
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }
  }

  p {
    margin: 0 0 22px;
    max-width: 62ch;
    color: var(--color-text-muted);
    line-height: 1.6;
  }
}
</style>
