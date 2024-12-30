<template>
  <section class="section section_hero">
    <div class="container">
      <div class="row_1">
        <div>
          <hgroup>
            <h1>
              {{ hero.title }}
            </h1>
            <p>
              {{hero.subtitle}}
            </p>
          </hgroup>
          <a class="btn-bd" href="#about">
            {{hero.buttonText}}
          </a>
        </div>
        <div>
          <img class="hero-img" :src="img" alt="Logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import img from "~/assets/img/vecteezy.jpg";
import {data} from "public/content.js"
import {reactive} from "vue";

const hero = reactive(data.hero)
</script>

<style lang="scss" scoped>
.hero-img {
  border-radius: 20px;
}
</style>
