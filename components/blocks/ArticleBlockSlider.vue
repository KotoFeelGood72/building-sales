<template>
  <section class="articles_slider__w">
    <SectionHead :level="5" title="Полезные статьи">
      <div class="articles_slider__nav">
        <div class="articles_slider__left">
          <Icon name="ci:chevron-left" size="25" />
        </div>
        <div class="articles_slider__right">
          <Icon name="ci:chevron-right" size="25" />
        </div>
      </div>
    </SectionHead>
    <Swiper
      :slides-per-view="3.6"
      :space-between="37"
      :modules="[Navigation, Pagination]"
      :navigation="{
        prevEl: `.articles_slider__left`,
        nextEl: `.articles_slider__right`,
      }"
      :pagination="{
        el: '.articles_slider__pagination',
        clickable: true,
      }"
    >
      <SwiperSlide v-for="(item, i) in articles" :key="'item-slide-' + i">
        <ArticleCard :article="item" />
      </SwiperSlide>
      <div class="articles_slider__pagination swiper-pagination"></div>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from "swiper/modules";
import ArticleCard from "@/components/card/ArticleCard.vue";
import SectionHead from "../ui/SectionHead.vue";

const articles = ref<any>([
  {
    title: "Очень довольны ремонтом! Быстро и качественно.",
    img: "/assets/img/home/main.jpg",
    readtime: "12 минут",
  },
  {
    title: "Очень довольны ремонтом! Быстро и качественно.",
    img: "/assets/img/home/main.jpg",
    readtime: "12 минут",
  },
  {
    title: "Очень довольны ремонтом! Быстро и качественно.",
    img: "/assets/img/home/main.jpg",
    readtime: "12 минут",
  },
  {
    title: "Очень довольны ремонтом! Быстро и качественно.",
    img: "/assets/img/home/main.jpg",
    readtime: "12 минут",
  },
]);
</script>

<style scoped lang="scss"></style>
