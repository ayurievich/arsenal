<template>
  <div class="works-gallery">
    <ul class="works-gallery__grid" :class="{ 'works-gallery__grid--compact': compact }">
      <li v-for="(item, index) in items" :key="item.id">
        <button
          type="button"
          class="works-gallery__card"
          :aria-label="`Открыть фото: ${item.title}`"
          @click="open(index)"
        >
          <img
            :src="item.thumb"
            :alt="item.alt"
            loading="lazy"
            decoding="async"
            width="720"
            height="720"
          />
          <span class="works-gallery__caption">{{ item.title }}</span>
        </button>
      </li>
    </ul>

    <Teleport to="body">
      <div
        v-if="active !== null"
        class="works-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="current?.title || 'Просмотр работы'"
        @click.self="close"
      >
        <button type="button" class="works-lightbox__close" aria-label="Закрыть" @click="close">
          ×
        </button>
        <button
          type="button"
          class="works-lightbox__nav works-lightbox__nav--prev"
          aria-label="Предыдущее фото"
          @click="prev"
        >
          ‹
        </button>
        <figure class="works-lightbox__figure">
          <img
            :src="current?.src"
            :alt="current?.alt"
            decoding="async"
          />
          <figcaption>
            <span>{{ current?.title }}</span>
            <span class="works-lightbox__count">{{ (active ?? 0) + 1 }} / {{ items.length }}</span>
          </figcaption>
        </figure>
        <button
          type="button"
          class="works-lightbox__nav works-lightbox__nav--next"
          aria-label="Следующее фото"
          @click="next"
        >
          ›
        </button>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type { WorkItem } from "~/data/works";

const props = withDefaults(
  defineProps<{
    items: WorkItem[];
    compact?: boolean;
  }>(),
  { compact: false },
);

const active = ref<number | null>(null);
const current = computed(() => (active.value === null ? null : props.items[active.value]));

function open(index: number) {
  active.value = index;
}

function close() {
  active.value = null;
}

function prev() {
  if (active.value === null || !props.items.length) return;
  active.value = (active.value - 1 + props.items.length) % props.items.length;
}

function next() {
  if (active.value === null || !props.items.length) return;
  active.value = (active.value + 1) % props.items.length;
}

function onKey(e: KeyboardEvent) {
  if (active.value === null) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowLeft") prev();
  if (e.key === "ArrowRight") next();
}

watch(active, (value) => {
  if (!import.meta.client) return;
  document.body.style.overflow = value !== null ? "hidden" : "";
});

onMounted(() => {
  window.addEventListener("keydown", onKey);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKey);
  document.body.style.overflow = "";
});
</script>

<style scoped lang="scss">
.works-gallery__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }

  &--compact {
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.works-gallery__card {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: zoom-in;
  background: var(--color-bg-muted);
  aspect-ratio: 4 / 5;
  text-align: left;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform var(--motion-base) ease;
  }

  &:hover img,
  &:focus-visible img {
    transform: scale(1.04);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
  }
}

.works-gallery__caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 28px 14px 12px;
  background: linear-gradient(transparent, rgba(7, 24, 32, 0.78));
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
}

.works-lightbox {
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: grid;
  place-items: center;
  background: rgba(7, 24, 32, 0.92);
  padding: 24px;
}

.works-lightbox__figure {
  margin: 0;
  max-width: min(960px, 100%);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 12px;

  img {
    display: block;
    max-width: 100%;
    max-height: calc(90vh - 48px);
    width: auto;
    height: auto;
    margin: 0 auto;
    border-radius: var(--radius-sm);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  }

  figcaption {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    color: #fff;
    font-size: 0.95rem;
  }
}

.works-lightbox__count {
  opacity: 0.65;
  white-space: nowrap;
}

.works-lightbox__close,
.works-lightbox__nav {
  position: absolute;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  cursor: pointer;
  border-radius: 999px;
  transition: background var(--motion-fast) ease;

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.22);
  }
}

.works-lightbox__close {
  top: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  font-size: 2rem;
  line-height: 1;
}

.works-lightbox__nav {
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  font-size: 2rem;
  line-height: 1;

  &--prev {
    left: 12px;
  }

  &--next {
    right: 12px;
  }

  @media (max-width: 700px) {
    display: none;
  }
}
</style>
