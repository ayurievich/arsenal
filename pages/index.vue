<template>
  <div>
    <Hero />
    <Trust />
    <Problem />
    <Services />
    <Turnkey />
    <WorksPreview />
    <HowWorks />
    <FaqPreview />
    <FormSection />
    <Map />
  </div>
</template>

<script setup lang="ts">
import Hero from "~/components/home/hero.vue";
import Trust from "~/components/home/trust.vue";
import Problem from "~/components/home/problem.vue";
import Services from "~/components/home/services.vue";
import Turnkey from "~/components/home/turnkey.vue";
import WorksPreview from "~/components/home/works-preview.vue";
import HowWorks from "~/components/home/how-works.vue";
import FaqPreview from "~/components/home/faq-preview.vue";
import FormSection from "~/components/home/form-section.vue";
import Map from "~/components/home/map.vue";

usePageSeo({
  title: "Остекление окон и балконов в Красноярске под ключ | Окна Арсенал",
  description:
    "Установка окон ПВХ и остекление балконов в Красноярске. Профили Montblanc. Бесплатный замер, монтаж за 1 день. Гарантия 1 год. ☎ +7 (962) 072-76-34",
  path: "/",
});
</script>
