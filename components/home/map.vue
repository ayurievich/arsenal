<template>
  <section class="section section_map">
    <hgroup class="text-center">
      <h2>
        Наше производство
      </h2>
    </hgroup>
    <div :id="mapId" style="width: 100%; height: 400px"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const mapId = `ymap-${Math.random().toString(36).slice(2)}`

const YANDEX_MAPS_BASE = 'https://api-maps.yandex.ru/2.1/?apikey=194695cd-fc73-44c3-bff9-920773fdc959&lang=ru_RU'

function createMap(ymaps) {
  const container = document.getElementById(mapId)
  if (!container || container.dataset.initialized) return
  container.dataset.initialized = '1'

  ymaps.ready(() => {
    const map = new ymaps.Map(mapId, {
      center: [55.978684, 92.937534],
      zoom: 16,
      controls: ['zoomControl', 'fullscreenControl'],
      theme: 'dark',
    })
    const placemark = new ymaps.Placemark(
      [55.978684, 92.937534],
      { hintContent: 'Наше производство', balloonContent: 'Мы находимся здесь!' },
      { preset: 'islands#icon', iconColor: 'blue' }
    )
    map.geoObjects.add(placemark)
  })
}

function loadScript() {
  return new Promise((resolve) => {
    if (typeof ymaps !== 'undefined') {
      createMap(ymaps)
      return
    }
    const existing = document.querySelector('script[src*="api-maps.yandex.ru"]')
    if (existing) {
      const check = () => {
        if (typeof ymaps !== 'undefined') {
          createMap(ymaps)
          return
        }
        setTimeout(check, 50)
      }
      check()
      return
    }
    const callbackName = `ymapsOnload_${mapId}`
    window[callbackName] = (ymaps) => {
      delete window[callbackName]
      createMap(ymaps)
    }
    const script = document.createElement('script')
    script.src = `${YANDEX_MAPS_BASE}&onload=${callbackName}`
    script.type = 'text/javascript'
    script.async = true
    script.onerror = () => delete window[callbackName]
    document.head.appendChild(script)
  })
}

onMounted(() => {
  if (process.client) {
    loadScript()
  }
})
</script>

<style scoped>
.section_map {
  margin-bottom: 0;
}
</style>