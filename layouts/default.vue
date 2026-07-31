<template>
  <a href="#main-content" class="skip-link">К содержимому</a>
  <Header />
  <main id="main-content" class="site-main" :class="{ 'site-main--inner': !isHome }">
    <slot />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";

const route = useRoute();
const isHome = computed(() => route.path === "/");
</script>

<style scoped>
.site-main {
  min-height: 50vh;
}

.site-main--inner {
  padding-top: var(--header-h);
}
</style>
