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

  runtimeConfig: {
    telegramBotToken: process.env.NUXT_TELEGRAM_BOT_TOKEN || "",
    telegramChatId: process.env.NUXT_TELEGRAM_CHAT_ID || "",
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://okna-arsenal24.ru",
      indexable: process.env.NUXT_PUBLIC_INDEXABLE || "false",
      yandexMetrikaId: process.env.NUXT_PUBLIC_YANDEX_METRIKA_ID || "",
      yandexVerification:
        process.env.NUXT_PUBLIC_YANDEX_VERIFICATION || "e3e0b37628743bf6",
      googleVerification:
        process.env.NUXT_PUBLIC_GOOGLE_VERIFICATION ||
        "1mrNL2rElb5zsXDdQW5m5ss0uPxBxkYvpE17LnqS5hc",
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
