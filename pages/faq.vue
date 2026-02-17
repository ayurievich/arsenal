<template>
  <div>
    <section class="section section_faq">
      <div class="container">
        <h1 class="faq-title">Вопрос-ответ</h1>
        <div class="faq-list">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="faq-item"
            :class="{ 'faq-item_open': openIndex === index }"
          >
            <button
              type="button"
              class="faq-question"
              @click="toggle(index)"
              :aria-expanded="openIndex === index"
            >
              <span class="faq-question__text">{{ item.question }}</span>
              <span class="faq-question__icon" aria-hidden="true">+</span>
            </button>
            <Transition name="faq-answer">
              <div v-show="openIndex === index" class="faq-answer">
                <p>{{ item.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
        <div class="faq-cta-wrap">
          <a class="btn-bd faq-cta" href="/#about">Задать свой вопрос</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "inner" });

const siteUrl = "https://okna-arsenal24.ru";

useSeoMeta({
  title: "Вопрос-ответ об окнах ПВХ | Окна Арсенал — Красноярск",
  description:
    "Ответы на популярные вопросы об пластиковых окнах и дверях: установка, уход, остекление балконов. ☎ +7 (962) 072-76-34",
  ogUrl: siteUrl + "/faq",
  ogImage: siteUrl + "/og-image.jpg",
});
useHead({ link: [{ rel: "canonical", href: siteUrl + "/faq" }] });

const faqItems = [
  {
    question: "Сколько служат пластиковые окна?",
    answer:
      "При качественном монтаже и нормальной эксплуатации пластиковые окна служат 20–40 лет и больше. Гарантия производителя обычно 5–10 лет, мы даём гарантию 15 лет на установку.",
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
      "Да, монтаж пластиковых окон возможен при температуре до −15 °C. Используем зимнюю монтажную пена и соблюдаем технологию. Ограничение — сильный ветер и снегопад.",
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
      "Замерщик приезжает бесплатно, снимает размеры и составляет смету. После подписания договора и предоплаты запускаем производство. В день монтажа бригада приезжает с готовыми окнами, демонтирует старые, устанавливает новые и выполняет отделку откосов. Сроки зависят от объёма работ.",
  },
  {
    question: "Какая оплата и рассрочка?",
    answer:
      "Работаем по предоплате 50–70% при заключении договора, остаток — после монтажа.",
  },
  {
    question: "Есть ли доставка?",
    answer:
      "Да, доставка входит в стоимость «под ключ» и выполняется в день монтажа. Выезжаем по Красноярску и краю. Для удалённых объектов возможна отдельная договорённость.",
  },
  {
    question: "Какая гарантия на окна и монтаж?",
    answer:
      "Гарантия на профиль и фурнитуру — по условиям производителя (обычно 5–10 лет). На монтаж мы даём гарантию 15 лет.",
  },
];

const openIndex = ref<number | null>(null);

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}

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
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }),
    },
  ],
});
</script>

<style scoped lang="scss">
.faq-title {
  text-align: center;
  margin-bottom: var(--gapSection);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: var(--gapSection, 48px);
}

.faq-item {
  border: 2px solid rgba(0, 55, 112, 0.1);
  border-radius: 12px;
  margin-bottom: 8px;
  overflow: hidden;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(0, 55, 112, 0.25);
  }

  &_open {
    border-color: #003770;
    box-shadow: 0 2px 10px rgba(0, 55, 112, 0.1);
  }
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 600;
  color: #16111a;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: #003770;
    background: rgba(0, 55, 112, 0.03);
  }

  &:focus {
    outline: none;
    background: rgba(0, 55, 112, 0.05);
  }

  &__text {
    flex: 1;
  }

  &__icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(0, 55, 112, 0.1);
    color: #003770;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 400;
    transition: transform 0.3s ease, background 0.2s ease;
  }
}

.faq-item_open .faq-question__icon {
  transform: rotate(45deg);
  background: #003770;
  color: #fff;
}

.faq-answer {
  border-top: 1px solid rgba(0, 55, 112, 0.1);

  p {
    margin: 0;
    padding: 20px 24px 24px;
    font-size: 1rem;
    line-height: 1.6;
    color: #16111a;
  }
}

.faq-answer-enter-active,
.faq-answer-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.faq-answer-enter-from,
.faq-answer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.faq-cta-wrap {
  text-align: center;
  margin-top: var(--gap4);
}

.faq-cta {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .faq-question {
    padding: 16px 20px;
    font-size: 1rem;
  }

  .faq-answer p {
    padding: 16px 20px 20px;
    font-size: 0.95rem;
  }
}
</style>
