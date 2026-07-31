<template>
  <header class="site-header" :class="{ 'is-solid': solid }">
    <div class="container site-header__inner">
      <NuxtLink to="/" class="site-header__brand" @click="closeMenu">
        <span class="site-header__logo">Окна Арсенал</span>
        <span class="site-header__tag">Красноярск</span>
      </NuxtLink>

      <nav class="site-header__nav" aria-label="Основная навигация">
        <NuxtLink
          v-for="item in NAV"
          :key="item.to"
          :to="item.to"
          class="site-header__link"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="site-header__actions">
        <a class="site-header__phone" :href="`tel:${SITE.phoneTel}`">{{ SITE.phoneDisplay }}</a>
        <AppButton class="site-header__cta" href="/#form" variant="primary">Заявка</AppButton>
        <button
          type="button"
          class="site-header__burger"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          aria-label="Открыть меню"
          @click="toggleMenu"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-show="menuOpen"
        class="site-header__overlay"
        aria-hidden="true"
        @click="closeMenu"
      />

      <nav
        id="mobile-nav"
        class="site-header__drawer"
        :class="{ 'is-open': menuOpen }"
        :aria-hidden="!menuOpen"
        aria-label="Мобильное меню"
      >
        <div class="site-header__drawer-top">
          <span class="site-header__logo">Окна Арсенал</span>
          <button type="button" class="site-header__close" aria-label="Закрыть меню" @click="closeMenu">
            ×
          </button>
        </div>
        <NuxtLink
          v-for="item in NAV"
          :key="`m-${item.to}`"
          :to="item.to"
          class="site-header__drawer-link"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>
        <a class="site-header__drawer-link" :href="`tel:${SITE.phoneTel}`" @click="closeMenu">
          {{ SITE.phoneDisplay }}
        </a>
        <AppButton href="/#form" variant="primary" block @click="closeMenu">Бесплатный замер</AppButton>
      </nav>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { NAV, SITE } from "~/data/site";

const route = useRoute();
const menuOpen = ref(false);
const scrolled = ref(false);

const solid = computed(() => route.path !== "/" || scrolled.value || menuOpen.value);

function onScroll() {
  scrolled.value = window.scrollY > 24;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") closeMenu();
}

watch(menuOpen, (open) => {
  if (!import.meta.client) return;
  document.body.style.overflow = open ? "hidden" : "";
});

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKey);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKey);
  document.body.style.overflow = "";
});
</script>

<style scoped lang="scss">
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-header);
  color: #fff;
  transition: background-color var(--motion-base) ease, color var(--motion-base) ease,
    border-color var(--motion-base) ease, backdrop-filter var(--motion-base) ease;
  border-bottom: 1px solid transparent;

  &.is-solid {
    color: var(--color-ink);
    background: rgba(247, 248, 246, 0.92);
    border-bottom-color: var(--color-border);
    backdrop-filter: blur(12px);

    .site-header__logo {
      color: var(--color-accent);
    }

    .site-header__burger span {
      background: var(--color-ink);
    }
  }
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap2);
  min-height: var(--header-h);
  max-width: var(--container);
  margin: 0 auto;
  padding: 12px var(--container-pad);
}

.site-header__brand {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
}

.site-header__logo {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
  color: inherit;
}

.site-header__tag {
  font-size: 0.7rem;
  opacity: 0.72;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.site-header__nav {
  display: none;
  align-items: center;
  gap: 1.35rem;

  @media (min-width: 992px) {
    display: flex;
  }
}

.site-header__link {
  color: inherit;
  font-weight: 500;
  font-size: 0.9375rem;
  text-decoration: none;
  opacity: 0.9;
  padding: 0.35rem 0;

  &:hover,
  &.router-link-active {
    opacity: 1;
  }

  &.router-link-active {
    font-weight: 700;
  }
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.site-header__phone {
  display: none;
  color: inherit;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  font-size: 0.9375rem;

  @media (min-width: 768px) {
    display: inline;
  }
}

.site-header__cta {
  display: none;

  @media (min-width: 992px) {
    display: inline-flex;
  }
}

.site-header:not(.is-solid) .site-header__cta :deep(.app-btn--primary) {
  background: #fff;
  border-color: #fff;
  color: var(--color-ink);
}

.site-header__burger {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 10px;
  border: none;
  background: transparent;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }

  span {
    display: block;
    height: 2px;
    width: 100%;
    background: currentColor;
    border-radius: 1px;
  }
}

.site-header__overlay {
  position: fixed;
  inset: 0;
  background: rgba(18, 23, 28, 0.55);
  z-index: 1000;

  @media (min-width: 992px) {
    display: none;
  }
}

.site-header__drawer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 400px;
  height: 100%;
  height: 100dvh;
  padding: 20px;
  padding-top: max(20px, env(safe-area-inset-top));
  background: #ffffff;
  color: #12171c;
  box-shadow: -12px 0 40px rgba(18, 23, 28, 0.18);
  transform: translateX(100%);
  transition: transform var(--motion-base) ease;
  visibility: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &.is-open {
    transform: translateX(0);
    visibility: visible;
  }

  @media (min-width: 992px) {
    display: none;
  }

  .site-header__logo {
    color: #0b3d5c;
  }
}

.site-header__drawer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.site-header__close {
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  color: var(--color-ink);
}

.site-header__drawer-link {
  display: block;
  padding: 14px 4px;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-ink);
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;

  &:hover,
  &.router-link-active {
    color: var(--color-accent);
  }
}
</style>
