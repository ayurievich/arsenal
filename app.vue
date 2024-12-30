<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Окна арсенал",
  ogTitle: "Окна арсенал",
  description: "Мы объединились для того, чтобы в домах наших Клиентов был солнечный свет, тепло и уют",
  ogDescription: "Мы объединились для того, чтобы в домах наших Клиентов был солнечный свет, тепло и уют",
});

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: 'fav/favicon.svg' },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      href: 'fav/favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: 'fav/favicon.svg',
      color: '#003770',
    },
  ],
  meta: [
    { name: "msapplication-TileColor", content: "#003770" },
    { name: "theme-color", content: "#003770" },
    { name: 'yandex-verification', content: 'ebc6bc6cf4b40115' }
  ],
  script: [
    {
      async: true,
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "http://schema.org/",
        "@type": "Organization",
        name: "XFR",
        brand: "XFR",
        alternateName: "XFR",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Затонская улица, 44/2",
          addressLocality: "Красноярск",
          addressCountry: "Россия",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+7 (962) 072-76-34",
            email: "yuri6464@mail.ru",
            contactType: "customer support",
            areaServed: "RUS",
            availableLanguage: ["Russia"],
          },
        ],
      }),
    },
  ],
});
</script>
