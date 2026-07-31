<template>
  <form class="contact-form" action="/" method="POST" noValidate @submit.prevent="formSend">
    <div class="contact-form__row">
      <div class="contact-form__field">
        <label for="name">Имя</label>
        <input
          v-model="form.name"
          type="text"
          required
          name="name"
          id="name"
          autocomplete="name"
          placeholder="Как к вам обращаться?"
          class="contact-form__input"
          :disabled="loading"
          @input="markStart"
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
          :aria-invalid="phoneError ? 'true' : 'false'"
          :aria-describedby="phoneError ? 'tel-error' : undefined"
          :disabled="loading"
          @input="onPhoneInput"
          @blur="validatePhone"
        />
        <span v-if="phoneError" id="tel-error" class="contact-form__error" role="alert">{{ phoneError }}</span>
      </div>
    </div>

    <div class="contact-form__field">
      <label for="message">Комментарий</label>
      <textarea
        v-model="form.message"
        name="message"
        id="message"
        rows="3"
        placeholder="Адрес объекта, тип остекления или вопрос"
        class="contact-form__input contact-form__textarea"
        :disabled="loading"
        @input="markStart"
      />
    </div>

    <button
      type="submit"
      class="contact-form__btn"
      :disabled="!isFormValid || loading"
      :aria-busy="loading"
    >
      {{ loading ? "Отправляем…" : "Отправить заявку" }}
    </button>

    <p v-if="alert" class="contact-form__alert" role="status" aria-live="polite">
      {{ alert }}
    </p>
  </form>
</template>

<script setup>
import { reactive, ref, computed, nextTick } from "vue";
import { trackEvent } from "~/utils/analytics";

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
const loading = ref(false);
const started = ref(false);

function markStart() {
  if (started.value) return;
  started.value = true;
  trackEvent("form_start");
}

function isValidRussianPhone(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10 && digits[0] === "9") return true;
  if (digits.length === 11 && (digits[0] === "7" || digits[0] === "8") && digits[1] === "9") return true;
  return false;
}

const phoneDisplay = computed(() => formatRuPhone(form.phone));

function onPhoneInput(e) {
  markStart();
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
  if (loading.value) return;
  if (!validatePhone()) return;
  loading.value = true;
  alert.value = "";
  try {
    await $fetch("/bot.php", {
      method: "POST",
      body: {
        name: form.name,
        phone: formatRuPhone(form.phone),
        message: form.message,
      },
    });

    alert.value = "Спасибо! Мы скоро перезвоним";
    trackEvent("form_success");
    form.name = "";
    form.phone = "";
    form.message = "";
    started.value = false;
  } catch (error) {
    alert.value = "Ошибка отправки. Позвоните нам: +7 (962) 072-76-34";
    trackEvent("form_error");
    console.error("Ошибка при отправке формы:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  background: transparent;
  padding: 0;
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
}

.contact-form__field {
  margin-bottom: 14px;

  label {
    display: block;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--color-ink);
    margin-bottom: 8px;
  }
}

.contact-form__input {
  width: 100%;
  padding: 13px 14px;
  font-size: 1rem;
  font-family: inherit;
  color: var(--color-ink);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition: border-color var(--motion-fast) ease, background var(--motion-fast) ease;

  &::placeholder {
    color: #8a94a0;
  }

  &:hover:not(:disabled) {
    border-color: rgba(11, 61, 92, 0.35);
  }

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    background: #fff;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  &--error {
    border-color: var(--color-error);
    background: #fef2f2;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

.contact-form__error {
  display: block;
  margin-top: 6px;
  font-size: 0.8125rem;
  color: var(--color-error);
}

.contact-form__textarea {
  resize: vertical;
  min-height: 96px;
}

.contact-form__btn {
  width: 100%;
  margin-top: 4px;
  min-height: 52px;
  border: 1.5px solid var(--color-accent);
  border-radius: var(--radius-sm);
  background: var(--color-accent);
  color: #fff;
  font: 700 0.975rem/1.2 var(--font-sans);
  cursor: pointer;
  transition: background-color var(--motion-fast) ease, border-color var(--motion-fast) ease;

  &:hover:not([disabled]) {
    background: var(--color-accent-hover);
    border-color: var(--color-accent-hover);
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.contact-form__alert {
  margin: 14px 0 0;
  font-size: 0.9375rem;
  color: var(--color-accent);
  text-align: center;
}
</style>
