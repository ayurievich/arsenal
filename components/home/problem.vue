<template>
  <section class="problem">
    <div class="problem__grid">
      <div class="problem__col problem__col--dark">
        <div class="problem__content">
          <p class="problem__label">Проблема</p>
          <h2>Холодно, шумно, старые окна мешают жить</h2>
          <ul>
            <li>Сквозняки и потери тепла зимой</li>
            <li>Конденсат на стёклах и откосах</li>
            <li>Уличный шум в спальне и гостиной</li>
            <li>Риск повторных проблем после слабого монтажа</li>
          </ul>
        </div>
      </div>
      <div class="problem__col">
        <div class="problem__content">
          <p class="problem__label">Решение</p>
          <h2>Производство и монтаж под ключ</h2>
          <ul>
            <li>Профили Montblanc под задачу и бюджет</li>
            <li>Своё производство в Красноярске</li>
            <li>Бесплатный замер и понятная смета</li>
            <li>Монтаж с гарантией 1 год</li>
          </ul>
          <NuxtLink class="problem__link" to="/company">О компании</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.problem {
  padding: 0;
  margin: 0;
  background: var(--color-surface);
}

.problem__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin: 0;
  padding: 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}

.problem__col {
  min-width: 0;
  background: var(--color-surface);

  &--dark {
    background: var(--color-accent);
    color: #fff;

    .problem__label {
      color: var(--color-accent-soft);
    }

    li {
      color: rgba(255, 255, 255, 0.88);
      border-color: rgba(255, 255, 255, 0.16);
    }

    .problem__content {
      margin-left: auto;
    }
  }
}

.problem__content {
  max-width: calc(var(--container) / 2);
  padding: 40px var(--container-pad);
  box-sizing: border-box;

  @media (max-width: 800px) {
    max-width: none;
    margin: 0;
  }
}

.problem__label {
  margin: 0 0 10px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-warm);
}

h2 {
  margin: 0 0 18px;
  font-size: clamp(1.35rem, 2.4vw, 1.85rem);
  line-height: 1.2;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 10px 0;
  border-top: 1px solid var(--color-border);
  font-size: 0.975rem;
  line-height: 1.45;
  color: var(--color-text-muted);

  &:last-child {
    border-bottom: 1px solid var(--color-border);
  }
}

.problem__col--dark li:last-child {
  border-bottom-color: rgba(255, 255, 255, 0.16);
}

.problem__link {
  display: inline-flex;
  margin-top: 20px;
  color: var(--color-accent);
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1.5px solid currentColor;
  padding-bottom: 2px;

  &:hover {
    color: var(--color-warm);
  }
}
</style>
