<template>
  <div class="whats-list">
    <WhatsCard v-for="item in whats" :key="item.num" :card="item" />
  </div>
</template>

<script setup lang="ts">
import WhatsCard from "../card/WhatsCard.vue";

const whats = ref<any>([
  {
    icon: "./assets/img/home/mini-service-1.png",
    title: "Ремонт от А до Я",
    txt:
      "Косметический ремонт квартир обычно включает в себя: окрашивание потолков, поклейка обоев на стены",
    num: "01",
  },
  {
    icon: "./assets/img/home/mini-service-2.png",
    title: "Лидер независимых рейтингов",
    txt:
      "Косметический ремонт квартир обычно включает в себя: окрашивание потолков, поклейка обоев на стены",
    num: "02",
  },
  {
    icon: "./assets/img/home/mini-service-3.png",
    title: "По договору точно в срок",
    txt:
      "Косметический ремонт квартир обычно включает в себя: окрашивание потолков, поклейка обоев на стены",
    num: "03",
  },
  {
    icon: "./assets/img/home/mini-service-4.png",
    title: "Поэтапная оплата",
    txt:
      "Косметический ремонт квартир обычно включает в себя: окрашивание потолков, поклейка обоев на стены",
    num: "04",
  },
]);
</script>

<style scoped lang="scss"></style>
