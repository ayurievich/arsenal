<template>
  <form class="contact-form" action="/" method="POST" noValidate @submit.prevent="formSend">
    <div class="contact-form__field">
      <label for="name">Имя</label>
      <input
        v-model="form.name"
        type="text"
        required
        name="name"
        id="name"
        placeholder="Как к вам обращаться?"
        class="contact-form__input"
      />
    </div>
    <div class="contact-form__field">
      <label for="tel">Телефон</label>
      <input
        ref="phoneInputRef"
        :value="phoneDisplay"
        type="tel"
        required
        name="tel"
        id="tel"
        placeholder="+7 (000) 000-00-00"
        :class="['contact-form__input', { 'contact-form__input--error': phoneError }]"
        maxlength="18"
        autocomplete="tel"
        inputmode="numeric"
        @input="onPhoneInput"
        @blur="validatePhone"
      />
      <span v-if="phoneError" class="contact-form__error">{{ phoneError }}</span>
    </div>
    <div class="contact-form__field">
      <label for="message">Комментарий</label>
      <textarea
        v-model="form.message"
        name="message"
        id="message"
        rows="3"
        placeholder="Опишите задачу или задайте вопрос"
        class="contact-form__input contact-form__textarea"
      />
    </div>
    <button
      type="submit"
      class="contact-form__btn btn"
      :disabled="!isFormValid"
    >
      Отправить заявку
    </button>
    <p v-if="alert" class="contact-form__alert">
      {{ alert }}
    </p>
  </form>
</template>

<script setup>
import { reactive, ref, computed, nextTick } from "vue";

function formatRuPhone(digits) {
  if (!digits) return "";
  const d = digits.replace(/\D/g, "").replace(/^[78]/, "").slice(0, 10);
  if (!d.length) return "";
  let s = "+7 (";
  if (d.length <= 3) return s + d;
  s += d.slice(0, 3) + ") ";
  if (d.length <= 6) return s + d.slice(3);
  s += d.slice(3, 6) + "-";
  if (d.length <= 8) return s + d.slice(6);
  s += d.slice(6, 8) + "-";
  return s + d.slice(8);
}

const form = reactive({
  phone: "",
  name: "",
  message: "",
});

const alert = ref("");
const phoneError = ref("");
const phoneInputRef = ref(null);

function isValidRussianPhone(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10 && digits[0] === "9") return true;
  if (digits.length === 11 && (digits[0] === "7" || digits[0] === "8") && digits[1] === "9") return true;
  return false;
}

const phoneDisplay = computed(() => formatRuPhone(form.phone));

function onPhoneInput(e) {
  const raw = e.target.value;
  const digits = raw.replace(/\D/g, "").replace(/^[78]/, "").slice(0, 10);
  form.phone = digits;
  if (!digits) {
    phoneError.value = "";
    return;
  }
  phoneError.value = isValidRussianPhone(digits) ? "" : "Введите корректный номер: +7 (000) 000-00-00";
  nextTick(() => {
    const el = phoneInputRef.value;
    if (el) el.setSelectionRange(phoneDisplay.value.length, phoneDisplay.value.length);
  });
}

function validatePhone() {
  const v = form.phone.trim();
  if (!v) {
    phoneError.value = "";
    return true;
  }
  if (!isValidRussianPhone(v)) {
    phoneError.value = "Введите корректный номер: +7 (000) 000-00-00";
    return false;
  }
  phoneError.value = "";
  return true;
}

const isFormValid = computed(() => {
  const nameOk = form.name.trim() !== "";
  const phone = form.phone.trim();
  const phoneOk = phone !== "" && isValidRussianPhone(phone);
  return nameOk && phoneOk;
});

const formSend = async () => {
  if (!validatePhone()) return;
  try {
    await $fetch('/bot.php', {
      method: 'POST',
      body: {
        name: form.name,
        phone: formatRuPhone(form.phone),
        message: form.message,
      },
    });

    alert.value = "Спасибо! Мы скоро перезвоним";
    form.name = "";
    form.phone = "";
    form.message = "";
  } catch (error) {
    alert.value = "Ошибка отправки. Позвоните нам: +7 (962) 072-76-34";
    console.error('Ошибка при отправке формы:', error);
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  background: #fff;
  padding: var(--gap4);
  border-radius: 16px;
  border: 2px solid rgba(0, 55, 112, 0.12);
  box-shadow: 0 4px 20px rgba(0, 55, 112, 0.08);
  transition: box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    border-color: rgba(0, 55, 112, 0.2);
    box-shadow: 0 8px 28px rgba(0, 55, 112, 0.12);
  }
}

.contact-form__field {
  margin-bottom: var(--gap3);

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: #16111a;
    margin-bottom: var(--gap1);
  }
}

.contact-form__input {
  width: 100%;
  padding: 14px 18px;
  font-size: 1rem;
  font-family: inherit;
  color: #16111a;
  background: #f8fafc;
  border: 2px solid rgba(0, 55, 112, 0.1);
  border-radius: 12px;
  transition: border-color 0.2s ease, background 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:hover {
    border-color: rgba(0, 55, 112, 0.2);
  }

  &:focus {
    outline: none;
    border-color: #003770;
    background: #fff;
  }

  &--error {
    border-color: #dc2626;
    background: #fef2f2;

    &:focus {
      border-color: #dc2626;
    }
  }
}

.contact-form__error {
  display: block;
  margin-top: 6px;
  font-size: 0.8125rem;
  color: #dc2626;
}

.contact-form__textarea {
  resize: vertical;
  min-height: 80px;
}

.contact-form__btn {
  width: 100%;
  margin-top: var(--gap2);
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.contact-form__alert {
  margin: var(--gap2) 0 0;
  font-size: 0.9375rem;
  color: #003770;
  text-align: center;
}
</style>
