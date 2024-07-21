<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_main">
        <div class="footer_col">
          <Logo />
        </div>
        <div class="footer_col__nav">
          <FooterNav :nav="FooterNavServices" title="Услуги" />
          <FooterNav :nav="FooterNavClient" title="Клиентам" />
        </div>
        <div class="footer_col__info">
          <div class="footer_phone">
            <a href="#">+7 (985) 123-456-78</a>
          </div>
          <Buttons name="перезвоните мне">
            <template #right>
              <Icon name="entypo:phone" />
            </template>
          </Buttons>
          <div class="footer__envelope">
            <a href="mailto:mailto:ddc-sellers@yandex.ru">
              <p>ddc-sellers@yandex.ru</p>
              <span>Напишите нам</span>
            </a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>2022 © Все права защищены</p>
        <a href="https://dynamic-devs-collective.ru/" target="_blank">Разработано DDC</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Logo from "../ui/Logo.vue";
import FooterNav from "../ui/FooterNav.vue";
import Buttons from "../ui/Buttons.vue";
import { FooterNavServices, FooterNavClient } from "~/consts/Nav";
</script>

<style scoped lang="scss"></style>
