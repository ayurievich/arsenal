<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SITE } from "~/data/site";

const config = useRuntimeConfig();
const indexable = useIsIndexable();
const siteUrl = useSiteUrl();

useHead({
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/fav/favicon.svg?v=2" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/fav/favicon-32.png?v=2" },
    { rel: "shortcut icon", href: "/fav/favicon.ico?v=2" },
    { rel: "apple-touch-icon", href: "/fav/favicon.png?v=2" },
    { rel: "manifest", href: "/fav/site.webmanifest" },
  ],
  meta: [
    { name: "theme-color", content: "#0b3d5c" },
    { name: "msapplication-TileColor", content: "#0b3d5c" },
    { name: "geo.region", content: "RU-KYA" },
    { name: "geo.placename", content: "Красноярск" },
    { name: "geo.position", content: `${SITE.mapCoords[0]};${SITE.mapCoords[1]}` },
    { name: "ICBM", content: `${SITE.mapCoords[0]}, ${SITE.mapCoords[1]}` },
    ...(config.public.yandexVerification
      ? [{ name: "yandex-verification", content: String(config.public.yandexVerification) }]
      : []),
    ...(config.public.googleVerification
      ? [{ name: "google-site-verification", content: String(config.public.googleVerification) }]
      : []),
    ...(!indexable ? [{ name: "robots", content: "noindex, nofollow" }] : []),
  ],
  script: [
    ...(siteUrl
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "LocalBusiness"],
                  "@id": `${siteUrl}/#organization`,
                  url: siteUrl,
                  name: "Окна Арсенал",
                  brand: { "@type": "Brand", name: "Окна Арсенал" },
                  alternateName: "Арсенал",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Затонская улица, 44/2",
                    addressLocality: "Красноярск",
                    addressRegion: "Красноярский край",
                    addressCountry: "RU",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: SITE.mapCoords[0],
                    longitude: SITE.mapCoords[1],
                  },
                  areaServed: {
                    "@type": "City",
                    name: "Красноярск",
                  },
                  sameAs: [
                    "https://yandex.ru/maps/org/arsenal/170560753128/",
                    "https://2gis.ru/krasnoyarsk/firm/70000001096841792",
                  ],
                  telephone: "+7 (962) 072-76-34",
                  email: "yuri6464@mail.ru",
                  openingHours: "Mo-Fr 09:00-18:00",
                  priceRange: "₽₽",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+7 (962) 072-76-34",
                    email: "yuri6464@mail.ru",
                    contactType: "customer service",
                    areaServed: "Красноярск",
                    availableLanguage: "Russian",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "Окна Арсенал",
                  publisher: { "@id": `${siteUrl}/#organization` },
                  inLanguage: "ru-RU",
                },
              ],
            }),
          },
        ]
      : []),
    ...(config.public.yandexMetrikaId
      ? [
          {
            type: "text/javascript",
            children: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(${Number(config.public.yandexMetrikaId)}, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });`,
          },
        ]
      : []),
  ],
});
</script>
