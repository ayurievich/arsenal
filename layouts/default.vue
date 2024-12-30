<template>
  <Header />
  <Hero />
  <Services />
  <HowWorks />
  <About />
  <Map/>
  <Footer />
  <slot />
</template>
<script setup lang="ts">
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
import Hero from "~/components/home/hero.vue";
import Services from "~/components/home/services.vue";
import HowWorks from "~/components/home/how-works.vue";
import About from "~/components/home/about.vue";
import Map from "~/components/home/map.vue";
</script>
