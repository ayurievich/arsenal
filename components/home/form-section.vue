<template>
  <section class="form-section" id="form">
    <div class="container">
      <div class="form-section__panel">
        <div class="form-section__copy">
          <p class="form-section__label">Заявка</p>
          <h2>Оставить заявку на замер</h2>
          <ul class="form-section__points">
            <li>Перезвоним и согласуем время</li>
            <li>Выезд замерщика бесплатный</li>
            <li>Смета без скрытых пунктов</li>
          </ul>
          <p class="form-section__alt">
            Или сразу:
            <a :href="`tel:${SITE.phoneTel}`">{{ SITE.phoneDisplay }}</a>
          </p>
        </div>
        <div class="form-section__form">
          <Form />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Form from "~/components/_form.vue";
import { SITE } from "~/data/site";
</script>

<style scoped lang="scss">
.form-section {
  padding: 56px 0;
  background: var(--color-bg-muted);
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.form-section__panel {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 0;
  background: var(--color-surface);
  border: 1px solid var(--color-border);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
}

.form-section__copy {
  padding: 36px 40px;
  border-right: 1px solid var(--color-border);

  @media (max-width: 860px) {
    border-right: 0;
    border-bottom: 1px solid var(--color-border);
    padding: 28px 22px;
  }
}

.form-section__label {
  margin: 0 0 10px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-warm);
}

h2 {
  margin: 0 0 18px;
  max-width: 12ch;
  font-size: clamp(1.55rem, 2.8vw, 2.1rem);
  line-height: 1.15;
}

.form-section__points {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 10px 0;
    border-top: 1px solid var(--color-border);
    color: var(--color-text-muted);
    line-height: 1.45;
    font-size: 0.975rem;

    &:last-child {
      border-bottom: 1px solid var(--color-border);
    }
  }
}

.form-section__alt {
  margin: 20px 0 0;
  color: var(--color-text-muted);
  font-size: 0.975rem;

  a {
    color: var(--color-accent);
    font-weight: 700;
    text-decoration: none;

    &:hover {
      color: var(--color-warm);
    }
  }
}

.form-section__form {
  padding: 28px 32px;

  @media (max-width: 640px) {
    padding: 22px;
  }
}
</style>
