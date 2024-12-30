<template>
  <section class="section section_about" id="about">
    <div class="container">
      <div class="row_1">
        <div>
          <h2>
            {{about.title}}
          </h2>
          <p>
            {{about.text}}
          </p>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Form from "~/components/_form.vue";
import {data} from "public/content.js"
import {reactive} from "vue";

const about = reactive(data.about)
</script>

<style scoped lang="scss">
p {
  font-size: 16px;
}
</style>
