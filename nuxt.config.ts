// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/sass/main.sass"],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: { lang: "ru" },
    },
  },

  image: {
    dir: "assets/img",
  },

  modules: ["@nuxt/image"],

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  compatibilityDate: "2026-02-17",
});