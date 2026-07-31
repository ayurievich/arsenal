<template>
  <section class="section section_map">
    <div class="container">
      <p class="map-label">Производство</p>
      <h2>Где мы находимся</h2>
      <p class="map-lead">
        {{ SITE.address }}. Приезжайте или вызовите замерщика на объект.
      </p>
    </div>
    <div class="map-frame-wrap">
      <iframe
        class="map-frame"
        title="Карта производства Окна Арсенал"
        :src="mapEmbedUrl"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      />
    </div>
    <div class="container map-actions">
      <a class="map-link" :href="mapOpenUrl" target="_blank" rel="noopener noreferrer">
        Открыть в Яндекс.Картах
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SITE } from "~/data/site";

const [lat, lon] = SITE.mapCoords;
const mapEmbedUrl = `https://yandex.ru/map-widget/v1/?ll=${lon}%2C${lat}&z=16&pt=${lon},${lat},pm2dbl&l=map`;
const mapOpenUrl = `https://yandex.ru/maps/?ll=${lon}%2C${lat}&z=16&pt=${lon},${lat}`;
</script>

<style scoped>
.section_map {
  margin-bottom: 0;
  padding-top: var(--gapSection);
  background: var(--color-bg);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad) var(--gap3);
}

.map-label {
  margin: 0 0 10px;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-warm);
}

h2 {
  margin: 0 0 8px;
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
}

.map-lead {
  margin: 0;
  text-align: center;
  color: var(--color-text-muted);
}

.map-frame-wrap {
  width: 100%;
  height: 420px;
  background: var(--color-bg-muted);
  overflow: hidden;
}

.map-frame {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.map-actions {
  padding-top: var(--gap2);
  padding-bottom: var(--gap4);
  text-align: center;
}

.map-link {
  color: var(--color-accent);
  font-weight: 700;
  text-decoration: none;
}

.map-link:hover {
  color: var(--color-warm);
}
</style>
