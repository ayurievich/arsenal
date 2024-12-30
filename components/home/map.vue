<template>
  <section class="section">
    <hgroup class="text-center">
      <h2>
        Наш офис
      </h2>
    </hgroup>
    <div id="map" style="width: 100%; height: 400px"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
const config = useRuntimeConfig()
const url = `https://api-maps.yandex.ru/2.1/?apikey=194695cd-fc73-44c3-bff9-920773fdc959&lang=ru_RU`

useHead({
  script: [
    {
      src: url,
      type: 'text/javascript',
    },
  ],
})

onMounted(() => {
  if (process.client) {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [55.978684, 92.937534],
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl'],
        theme: 'dark',
      })

      const placemark = new ymaps.Placemark(
          [55.978684, 92.937534],
          {
            hintContent: 'Наш магазин',
            balloonContent: 'Мы находимся здесь!',
          },
          {
            preset: 'islands#icon',
            iconColor: 'blue',
          },
      )
      map.geoObjects.add(placemark)
    })
  }
})
</script>