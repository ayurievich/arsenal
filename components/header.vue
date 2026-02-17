<template>
  <header class="header">
    <div class="container">
      <nav class="header-menu">
        <NuxtLink to="/">Главная</NuxtLink>
        <NuxtLink to="/uslugi">Услуги</NuxtLink>
        <NuxtLink to="/faq">Вопрос-ответ</NuxtLink>
        <NuxtLink to="/company">О компании</NuxtLink>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
      </nav>
      <div class="header-btns">
        <a class="btn" href="/#about">Рассчитать стоимость</a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-menu {
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 991px) {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 640px) {
    gap: 0.75rem;
    font-size: 0.9rem;
  }
}

:deep(.header-menu a) {
  color: #16111a;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;

  &:hover {
    color: #003770;
  }

  &.router-link-active {
    color: #003770;
    font-weight: 600;

    &::after {
      width: 100%;
    }
  }
}
</style>
