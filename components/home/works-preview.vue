<template>
  <section class="works-preview" id="raboty">
    <div class="container">
      <div class="works-preview__head">
        <p class="works-preview__label">Портфолио</p>
        <h2>Наши работы</h2>
        <p class="works-preview__intro">
          Объекты в Красноярске и крае: панорамные фасады, двери с ламинацией, остекление срубов и каркасных домов.
        </p>
      </div>

      <WorksGallery :items="preview" compact />

      <div class="works-preview__cta">
        <AppButton to="/raboty" variant="secondary">Смотреть все фото</AppButton>
        <AppButton href="/#form" variant="primary">Хочу так же</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { WORKS } from "~/data/works";

const preview = WORKS.slice(0, 8);
</script>

<style scoped lang="scss">
.works-preview {
  padding: var(--gapSection) 0;
  background: var(--color-bg-muted);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.works-preview__label {
  margin: 0 0 12px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-warm);
}

.works-preview__head h2 {
  margin: 0 0 14px;
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-ink);
}

.works-preview__intro {
  margin: 0 0 var(--gap5);
  max-width: 48ch;
  color: var(--color-text-muted);
  line-height: 1.55;
  font-size: 1.0625rem;
}

.works-preview__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: var(--gap4);
}
</style>
