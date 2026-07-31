<template>
  <a href="#main-content" class="skip-link">К содержимому</a>
  <Header />
  <main id="main-content" class="site-main site-main--inner">
    <slot />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
</script>

<style scoped>
.site-main--inner {
  min-height: 50vh;
  padding-top: var(--header-h);
}
</style>
