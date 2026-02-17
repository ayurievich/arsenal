<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container footer-row">
        <div class="footer-left">
          <div class="footer-brand">
            <span class="footer-logo">Окна Арсенал</span>
            <span class="footer-tagline">Остекление окон и балконов в Красноярске</span>
          </div>
        </div>
        <div class="footer-right">
          <a href="tel:+79620727634" class="footer-link">
            <LucideIcon name="Phone" :size="18" />
            +7 (962) 072-76-34
          </a>
          <a href="mailto:yuri6464@mail.ru" class="footer-link">
            <LucideIcon name="Mail" :size="18" />
            yuri6464@mail.ru
          </a>
          <span class="footer-address">
            <LucideIcon name="MapPin" :size="18" />
            Красноярск, Затонская ул., 44/2
          </span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2025 Арсенал</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: #003770;
  color: white;

  :deep(svg) {
    color: white;
    stroke: white;
  }
}

.footer-main {
  padding: var(--gap3) var(--gap3) var(--gap2);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--gap3);
  }
}

.footer-row {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: var(--gap4);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--gap3);
  }
}

.footer-left {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--gap2) var(--gap3);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 2px;

  .footer-logo {
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .footer-tagline {
    font-size: 0.8125rem;
    opacity: 0.85;
  }
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--gap1);
  padding: 0;
  margin: 0;
  align-self: start;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
}

.footer-link,
.footer-address {
  display: inline-flex;
  align-items: center;
  gap: var(--gap1);
  font-size: 0.9375rem;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  opacity: 0.95;

  &:hover {
    opacity: 1;
  }
}

.footer-address {
  opacity: 0.9;
}

.footer-bottom {
  padding: var(--gap2) var(--gap3);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  text-align: center;
}

.footer-copy {
  margin: 0;
  font-size: 0.75rem;
  opacity: 0.8;
}
</style>
