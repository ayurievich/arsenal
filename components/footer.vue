<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-info">
          <div class="footer-note">
            © 2024 Арсенал. Все права защищены
          </div>
        </div>
        <div>
          <div class="footer-nav">
            <div>
              <div class="footer-nav-title">Свяжитесь с нами</div>
              <hr class="divider" />
              <nav class="contacts">
                <p v-for="(i, ind) in contacts" :key="ind">
                  <a :href="i.link">
                    <img :src="i.icon" :alt="i.name" width="24" height="24" /><span v-html="i.name"></span>
                  </a>
                </p>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {data} from "~/public/content.js"

const contacts = reactive(data.contacts)
</script>
