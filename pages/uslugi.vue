<template>
  <section class="section section_inner section_services">
    <div class="container">
      <div class="uslugi-hero">
        <h1>Услуги</h1>
      </div>

      <div class="uslugi-grid">
        <article
          v-for="(item, i) in services"
          :key="i"
          class="uslugi-card"
        >
          <div class="uslugi-card__icon">
            <LucideIcon :name="item.icon" :size="48" />
          </div>
          <h3>{{ item.title }}</h3>
          <p v-if="item.desc">{{ item.desc }}</p>
          <a v-if="item.href" class="btn-bd uslugi-card__btn" :href="item.href">{{ item.buttonText || 'Рассчитать стоимость' }}</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: "inner" });

const siteUrl = "https://okna-arsenal24.ru";

useSeoMeta({
  title: "Услуги по остеклению в Красноярске | Окна Арсенал",
  description:
    "Остекление квартир, балконов, домов, коттеджей и производств. Окна с ламинацией. Профили Montblanc. Бесплатный замер. ☎ +7 (962) 072-76-34",
  ogUrl: siteUrl + "/uslugi",
  ogImage: siteUrl + "/og-image.jpg",
});
useHead({ link: [{ rel: "canonical", href: siteUrl + "/uslugi" }] });

const services = [
  { title: "Квартиры и балконы", desc: "Пластиковые окна ПВХ, тёплое и холодное остекление балконов и лоджий, замена старых окон.", icon: "Building2" },
  { title: "Частные дома", desc: "Панорамные окна, остекление террас и веранд.", icon: "Home" },
  { title: "Двери ПВХ", desc: "Изготовление и установка пластиковых дверей под ключ.", icon: "DoorOpen" },
  { title: "Ламинация", desc: "Окна и двери с ламинацией в любой цвет и текстуру.", icon: "Palette" },
  { title: "Производства", desc: "Остекление цехов, складов, офисов и торговых площадей.", icon: "Factory" },
  { title: "Бесплатный замер", desc: "", icon: "Ruler", href: "/#about", buttonText: "Записаться" },
];
</script>

<style scoped lang="scss">
.uslugi-hero {
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--gapSection);
}

.uslugi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap4);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.uslugi-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(0, 55, 112, 0.12);
  border-radius: 12px;
  padding: var(--gap4);
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(0, 55, 112, 0.35);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 55, 112, 0.1);
  }

  &__icon {
    width: 48px;
    height: 48px;
    margin-bottom: var(--gap2);

    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 var(--gap1);
    color: #16111a;
  }

  p {
    margin: 0 0 var(--gap2);
    font-size: 0.9375rem;
    line-height: 1.5;
    color: #3d4654;
  }

  &__btn {
    margin-top: auto;
    align-self: center;
  }
}
</style>
