<template>
  <section class="section section_how-works" id="str">
    <div class="container">
      <hgroup class="text-center">
        <h2>
          {{montage.title}}
        </h2>
      </hgroup>

      <div class="">
        <div class="row_2" v-for="(item, ind) in montage.list" :key="ind">
          <div>
            <img :src="item.icon" :alt="item.title" />
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
