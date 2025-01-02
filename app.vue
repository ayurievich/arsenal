<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Окна Арсенал",
  ogTitle: "Окна Арсенал",
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
    { name: 'yandex-verification', content: '75c81ffbf6bdaf5a' }
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
