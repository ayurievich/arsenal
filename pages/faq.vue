<template>
  <section class="page">
    <div class="container">
      <AppBreadcrumbs :items="[{ label: 'Главная', to: '/' }, { label: 'Вопрос-ответ' }]" />
      <p class="page__label">FAQ</p>
      <h1>Вопросы об окнах ПВХ и монтаже</h1>
      <p class="page__lead">
        Ответы на частые вопросы о сроках, уходе, остеклении балконов, оплате и гарантии.
      </p>

      <div class="faq-list">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq-item"
          :class="{ 'is-open': openIndex === index }"
        >
          <h2 class="faq-item__heading">
            <button
              type="button"
              class="faq-question"
              :id="`faq-btn-${index}`"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-panel-${index}`"
              @click="toggle(index)"
            >
              <span class="faq-question__text">{{ item.question }}</span>
              <span class="faq-question__icon" aria-hidden="true">{{ openIndex === index ? "−" : "+" }}</span>
            </button>
          </h2>
          <div
            :id="`faq-panel-${index}`"
            role="region"
            :aria-labelledby="`faq-btn-${index}`"
            v-show="openIndex === index"
            class="faq-answer"
          >
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <div class="page__cta">
        <AppButton href="/#form" variant="primary">Задать свой вопрос</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqItems = [
  {
    question: "Сколько служат пластиковые окна?",
    answer:
      "При качественном монтаже и нормальной эксплуатации пластиковые окна служат 20–40 лет и больше. Гарантия производителя обычно 5–10 лет, мы даём гарантию 1 год на установку.",
  },
  {
    question: "Как ухаживать за пластиковыми окнами?",
    answer:
      "Достаточно мыть рамы и стекло тёплой водой с мягким моющим средством. Резиновые уплотнители раз в год смазывайте силиконовой смазкой. Фурнитуру смазывайте раз в 1–2 года — это продлит срок службы.",
  },
  {
    question: "Что такое тёплое и холодное остекление балкона?",
    answer:
      "Тёплое остекление — с 2–3 камерными стеклопакетами и утеплённым подоконником. Балкон становится продолжением комнаты. Холодное — с однокамерными стеклопакетами или без них. Подходит для защиты от осадков, но зимой будет холодно.",
  },
  {
    question: "Сколько стоит установка пластикового окна?",
    answer:
      "Цена зависит от размера, количества створок и профиля. Одностворчатое окно — от 10 500 ₽, двустворчатое — от 12 900 ₽. Точный расчёт бесплатно при замере.",
  },
  {
    question: "Какой профиль выбрать для окна?",
    answer:
      "Мы работаем с профилями Montblanc: Eco Line — экономичный, Lux Line — оптимальный для большинства, Multi Line — премиум с лучшей теплоизоляцией. Поможем подобрать под ваш бюджет и задачи.",
  },
  {
    question: "Почему запотевают пластиковые окна?",
    answer:
      "Чаще всего из‑за высокой влажности и плохой вентиляции в комнате. Улучшите проветривание или установите приточный клапан. Если «плачут» стёкла между камерами — это брак, обращайтесь по гарантии.",
  },
  {
    question: "Можно ли устанавливать окна зимой?",
    answer:
      "Да, монтаж пластиковых окон возможен при температуре до −15 °C. Используем зимнюю монтажную пену и соблюдаем технологию. Ограничение — сильный ветер и снегопад.",
  },
  {
    question: "Как выбрать стеклопакет для шумоизоляции?",
    answer:
      "Для шумных улиц подойдут многослойные (триплекс) или толстые двухкамерные стеклопакеты. Разная толщина стёкол в камерах тоже снижает шум. Менеджер подберёт вариант под ваш объект.",
  },
  {
    question: "Сколько занимает изготовление окон?",
    answer:
      "Изготовление занимает от 2 недель с момента замера и подтверждения заказа. Срок может меняться в зависимости от загрузки производства и сложности заказа. Точные сроки сообщим при оформлении.",
  },
  {
    question: "Как проходит установка окон?",
    answer:
      "Замерщик приезжает бесплатно, снимает размеры и составляет смету. После подписания договора и предоплаты запускаем производство. В день монтажа бригада приезжает с готовыми окнами, демонтирует старые, устанавливает новые и выполняет отделку откосов.",
  },
  {
    question: "Какая оплата и рассрочка?",
    answer: "Работаем по предоплате 50–70% при заключении договора, остаток — после монтажа.",
  },
  {
    question: "Есть ли доставка?",
    answer:
      "Да, доставка входит в стоимость «под ключ» и выполняется в день монтажа. Выезжаем по Красноярску и краю. Для удалённых объектов возможна отдельная договорённость.",
  },
  {
    question: "Какая гарантия на окна и монтаж?",
    answer:
      "Гарантия на профиль и фурнитуру — по условиям производителя (обычно 5–10 лет). На монтаж мы даём гарантию 1 год.",
  },
];

const openIndex = ref<number | null>(null);

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}

usePageSeo({
  title: "Вопрос-ответ об окнах ПВХ | Окна Арсенал — Красноярск",
  description:
    "Ответы на популярные вопросы о пластиковых окнах и дверях: установка, уход, остекление балконов. ☎ +7 (962) 072-76-34",
  path: "/faq",
});

const siteUrl = useSiteUrl();
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }),
    },
    ...(siteUrl
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Главная", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Вопрос-ответ", item: absoluteUrl("/faq") },
              ],
            }),
          },
        ]
      : []),
  ],
});
</script>

<style scoped lang="scss">
.page {
  padding: 32px 0 64px;
  background: var(--color-bg);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.page__label {
  margin: 0 0 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-warm);
}

h1 {
  margin: 0 0 12px;
  font-size: clamp(1.75rem, 3.5vw, 2.6rem);
  line-height: 1.1;
  color: var(--color-ink);
}

.page__lead {
  margin: 0 0 28px;
  color: var(--color-text-muted);
  max-width: 52ch;
  line-height: 1.55;
}

.faq-list {
  border-top: 1px solid var(--color-border);
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
  background: transparent;
}

.faq-item__heading {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 0;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.35;
  color: var(--color-ink);

  &:hover {
    color: var(--color-accent);
  }
}

.faq-question__icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  font-size: 1.25rem;
  font-weight: 500;
}

.faq-answer p {
  margin: 0;
  padding: 0 0 20px;
  max-width: 68ch;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.page__cta {
  margin-top: 32px;
}
</style>
