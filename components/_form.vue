<template>
  <form class="form" action="/" method="POST" noValidate @submit.prevent="formSend">
    <div class="form-row">
      <label for="name">Имя</label>
      <input v-model="form.name" type="text" required name="name" id="name" />
    </div>
    <div class="form-row">
      <label for="tel">Телефон</label>
      <input v-model="form.phone" type="text" required name="tel" id="tel" />
    </div>
    <div class="form-row">
      <label for="message">Комментарий</label>
      <input v-model="form.message" type="text" required name="message" id="message" />
    </div>
    <div class="form-row">
      <button type="submit" class="btn" :disabled="!isFormValid">Отправить</button>
    </div>
    <p v-if="alert">
      {{alert}}
    </p>
  </form>
</template>

<script setup>
import { reactive, ref, computed } from "vue";

const form = reactive({
  phone: '',
  name: '',
  message: '',
})

const alert = ref('')

const isFormValid = computed(() => {
  return form.name.trim() !== "" && form.phone.trim() !== "";
});

const formSend = async () => {
  try {
    await $fetch( 'https://okna-arsenal24.ru/bot.php', {
      method: 'POST',
      body: {
        ...form
      }
    } );

    alert.value = "Форма отправлена успешно";
    form.name = "";
    form.phone = "";
    form.message = "";
  } catch (error) {
    alert.value = "Произошла ошибка";
    console.error('Ошибка при отправке формы:', error);
  }
};
</script>

<style lang="scss" scoped>
.form {
  box-shadow: 0px 5px 8px -4px rgba(34, 60, 80, 0.17)
}
</style>
