<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const siteUrl = "https://okna-arsenal24.ru";

useSeoMeta({
  title: "Остекление окон и балконов в Красноярске под ключ | Окна Арсенал",
  ogTitle: "Остекление окон и балконов в Красноярске под ключ | Окна Арсенал",
  description: "Установка окон ПВХ и остекление балконов в Красноярске. Профили Montblanc. Бесплатный замер, монтаж за 1 день. Гарантия 15 лет. ☎ +7 (962) 072-76-34",
  ogDescription: "Установка окон ПВХ и остекление балконов в Красноярске. Профили Montblanc. Бесплатный замер, монтаж за 1 день. Гарантия 15 лет. ☎ +7 (962) 072-76-34",
  ogImage: "https://okna-arsenal24.ru/og-image.jpg",
  ogType: "website",
  ogUrl: "https://okna-arsenal24.ru/",
});

useHead({
  link: [
    { rel: "canonical", href: siteUrl + "/" },
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
    { name: 'yandex-verification', content: '75c81ffbf6bdaf5a' },
    { name: 'google-site-verification', content: 'QsaXa9mWSZR-JS0YveM1-CAgy1g1PlryMEGEeczJnsc' }
  ],
  script: [
    {
      async: true,
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        url: "https://okna-arsenal24.ru",
        name: "Окна Арсенал",
        brand: { "@type": "Brand", name: "Окна Арсенал" },
        alternateName: "Арсенал",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Затонская улица, 44/2",
          addressLocality: "Красноярск",
          addressCountry: "RU",
        },
        telephone: "+7 (962) 072-76-34",
        email: "yuri6464@mail.ru",
        openingHours: "Mo-Fr 09:00-18:00",
        priceRange: "₽₽",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+7 (962) 072-76-34",
          email: "yuri6464@mail.ru",
          contactType: "customer service",
          areaServed: "RU",
          availableLanguage: "Russian",
        },
      }),
    },
    {
      type: "text/javascript",
      children: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(99394081, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });`,
    },
  ],
});
</script>
