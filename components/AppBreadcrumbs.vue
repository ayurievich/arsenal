<template>
  <nav class="breadcrumbs" aria-label="Хлебные крошки">
    <ol class="breadcrumbs__list">
      <li v-for="(item, i) in items" :key="item.to || item.label" class="breadcrumbs__item">
        <NuxtLink v-if="item.to && i < items.length - 1" :to="item.to" class="breadcrumbs__link">
          {{ item.label }}
        </NuxtLink>
        <span v-else aria-current="page">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  items: { label: string; to?: string }[];
}>();
</script>

<style scoped lang="scss">
.breadcrumbs {
  margin-bottom: 18px;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.breadcrumbs__list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumbs__item:not(:last-child)::after {
  content: "/";
  margin-left: 8px;
  opacity: 0.45;
}

.breadcrumbs__link {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: var(--color-warm);
  }
}
</style>
