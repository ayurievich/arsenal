<template>
  <component
    :is="tag"
    :class="['app-btn', `app-btn--${variant}`, { 'app-btn--block': block }]"
    :type="tag === 'button' ? type : undefined"
    :disabled="tag === 'button' ? disabled || loading : undefined"
    :aria-disabled="disabled || loading ? 'true' : undefined"
    :aria-busy="loading ? 'true' : undefined"
    v-bind="linkProps"
  >
    <span v-if="loading" class="app-btn__spinner" aria-hidden="true" />
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "ghost";
    to?: string;
    href?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
  }>(),
  {
    variant: "primary",
    type: "button",
    disabled: false,
    loading: false,
    block: false,
  }
);

const tag = computed(() => {
  if (props.to) return resolveComponent("NuxtLink");
  if (props.href) return "a";
  return "button";
});

const linkProps = computed(() => {
  if (props.to) return { to: props.to };
  if (props.href) return { href: props.href };
  return {};
});
</script>

<style scoped lang="scss">
.app-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 52px;
  min-width: 44px;
  padding: 14px 22px;
  border-radius: var(--radius-sm);
  border: 1.5px solid transparent;
  font: 600 0.9375rem/1.2 var(--font-sans);
  letter-spacing: 0.01em;
  text-decoration: none;
  cursor: pointer;
  transition: background-color var(--motion-base) ease, color var(--motion-base) ease,
    border-color var(--motion-base) ease, transform var(--motion-fast) ease;

  &--block {
    width: 100%;
  }

  &--primary {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: #fff;

    &:hover {
      background: var(--color-accent-hover);
      border-color: var(--color-accent-hover);
      color: #fff;
    }
  }

  &--secondary {
    background: transparent;
    border-color: var(--color-accent);
    color: var(--color-accent);

    &:hover {
      background: var(--color-accent);
      color: #fff;
    }
  }

  &--ghost {
    background: transparent;
    border-color: transparent;
    color: var(--color-accent);
    min-width: 0;
    padding-inline: 8px;

    &:hover {
      color: var(--color-warm);
    }
  }

  &[disabled],
  &[aria-disabled="true"] {
    opacity: 0.55;
    cursor: not-allowed;
  }
}

.app-btn__spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
