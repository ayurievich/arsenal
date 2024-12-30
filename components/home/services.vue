<template>
  <section class="section section_services" id="services">
    <div class="container text-center">
      <h3 class="">{{benefits.text}}</h3>
      <div class="cards">
        <article class="card" v-for="(card, ind) in benefits.list" :key="ind">
          <img :src="card.icon" :key="card.text" width="64" height="64" />
          <div class="card-title">{{ card.text }}</div>
<!--          <div class="card-desc">{{ card.desc }}</div>-->
<!--          <a href="#about" class="btn-bd">{{ card.btn.label }}</a>-->
        </article>
      </div>
      <a class="btn" href="#about">{{benefits.buttonText}}</a>
    </div>
  </section>
</template>

<script setup>
import i1 from "~/assets/img/i1.svg";
import i2 from "~/assets/img/i2.svg";
import i3 from "~/assets/img/i3.svg";

import {data} from "public/content.js"
import {reactive} from "vue";

const benefits = reactive(data.benefits)

const services = [
  {
    icon: i1,
    title: "Personal loan",
    desc: "Personal loans provide borrowers with flexibility in how they use the funds.",
    btn: {
      label: "Apply now",
      url: "#",
    },
  },
  {
    icon: i2,
    title: "Business loan",
    desc: "Business Loan Services provide financial assistance to businesses for various purposes..",
    btn: {
      label: "Apply now",
      url: "#",
    },
  },
  {
    icon: i3,
    title: "Auto loan",
    desc: "Auto Loan Services provide financing options for individuals businesses to purchase a vehicle.",
    btn: {
      label: "Apply now",
      url: "#",
    },
  },
];
</script>
