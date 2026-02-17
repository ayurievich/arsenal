<template>
  <section class="section section_form" id="about">
    <div class="container">
      <h2 class="form-section__title">Оставить заявку</h2>
      <p class="form-section__subtitle">
        Заполните форму — перезвоним в течение 30 минут
      </p>
      <div class="form-section__form">
        <Form />
      </div>
    </div>
  </section>
</template>

<script setup>
import Form from "~/components/_form.vue";
</script>

<style scoped lang="scss">
.form-section__title {
  text-align: center;
  margin-bottom: var(--gap2);
}

.form-section__subtitle {
  text-align: center;
  margin: 0 0 var(--gapSection);
  font-size: 1rem;
  color: #3d4654;
  line-height: 1.5;
}

.form-section__form {
  max-width: 420px;
  margin: 0 auto;
}
</style>
