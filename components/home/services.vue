<template>
  <section class="section section_services" id="services">
    <div class="container text-center">
      <h3 class="">{{benefits.text}}</h3>
      <div class="cards">
        <article class="card" v-for="(card, ind) in benefits.list" :key="ind">
          <LucideIcon :name="card.icon" :size="64" />
          <div class="card-title">{{ card.text }}</div>
<!--          <div class="card-desc">{{ card.desc }}</div>-->
<!--          <a href="/#about" class="btn-bd">{{ card.btn.label }}</a>-->
        </article>
      </div>
      <a class="btn" href="/#about">{{benefits.buttonText}}</a>
    </div>
  </section>
</template>

<script setup>
import { data } from "public/content.js"
import {reactive} from "vue";

const benefits = reactive(data.benefits)
</script>
