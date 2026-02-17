<template>
  <section class="section section_how-works" id="str">
    <div class="container">
      <hgroup class="text-center">
        <h2>
          {{montage.title}}
        </h2>
      </hgroup>

      <div class="montage-list">
        <div class="row_2" v-for="(item, ind) in montage.list" :key="ind">
          <div class="row_2-icon">
            <LucideIcon :name="item.icon" :size="72" />
          </div>
          <div class="row_2-col">
            <h3>{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {data} from "public/content.js"
import {reactive} from "vue";

const montage = reactive(data.montage)
</script>

<style scoped>
.row_2-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.montage-list .row_2 {
  gap: var(--gap4);
}

.montage-list .row_2:nth-child(2n) .row_2-icon {
  order: 1;
}

.montage-list .row_2:nth-child(2n) .row_2-col {
  order: 2;
}

@media (max-width: 768px) {
  .row_2-icon {
    margin-bottom: var(--gap2);
  }
}
</style>
