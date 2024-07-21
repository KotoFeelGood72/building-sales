<template>
  <section class="reviews_slider__w">
    <SectionHead :level="5" title="Лучше всего о нас расскажут отзывы довольных клиентов">
      <div class="reviews_slider__nav">
        <div class="reviews_slider__left">
          <Icon name="ci:chevron-left" size="25" />
        </div>
        <div class="reviews_slider__right">
          <Icon name="ci:chevron-right" size="25" />
        </div>
      </div>
    </SectionHead>
    <Swiper
      :slides-per-view="1.8"
      :loop="true"
      :space-between="30"
      :modules="[Navigation, Pagination]"
      :navigation="{
        prevEl: `.reviews_slider__left`,
        nextEl: `.reviews_slider__right`,
      }"
      :pagination="{
        el: '.reviews_slider__pagination',
        clickable: true,
      }"
    >
      <SwiperSlide v-for="(item, i) in reviews" :key="'item-slide-' + i">
        <ReviewsCard :review="item" />
      </SwiperSlide>
      <div class="reviews_slider__pagination swiper-pagination"></div>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from "swiper/modules";
import ReviewsCard from "../card/ReviewsCard.vue";
import SectionHead from "../ui/SectionHead.vue";

const reviews = ref<any>([
  {
    title: "Очень довольны ремонтом! Быстро и качественно.",
    txt:
      "Сделали ремонт по типовому проекту. Стоимость и сроки были прописаны в договоре, все честно. Ремонт сделали на совесть, но со сроками подзадержались. Квартиру сдавали чистой, самый едкий строительный белый налет вымыли, чем очень облегчили участь супруге перед переездом.",
    img: "/assets/img/home/main.jpg",
    source: "Яндекс",
    people: {
      img: "/assets/img/home/main.jpg",
      title: "Святослав Воробейников",
      txt: "19.01.2020",
    },
  },
  {
    title: "Очень довольны ремонтом! Быстро и качественно.",
    txt:
      "Сделали ремонт по типовому проекту. Стоимость и сроки были прописаны в договоре, все честно. Ремонт сделали на совесть, но со сроками подзадержались. Квартиру сдавали чистой, самый едкий строительный белый налет вымыли, чем очень облегчили участь супруге перед переездом.",
    img: "/assets/img/home/main.jpg",
    source: "Яндекс",
    people: {
      img: "/assets/img/home/main.jpg",
      title: "Святослав Воробейников",
      txt: "19.01.2020",
    },
  },
  {
    title: "Очень довольны ремонтом! Быстро и качественно.",
    txt:
      "Сделали ремонт по типовому проекту. Стоимость и сроки были прописаны в договоре, все честно. Ремонт сделали на совесть, но со сроками подзадержались. Квартиру сдавали чистой, самый едкий строительный белый налет вымыли, чем очень облегчили участь супруге перед переездом.",
    img: "/assets/img/home/main.jpg",
    source: "Яндекс",
    people: {
      img: "/assets/img/home/main.jpg",
      title: "Святослав Воробейников",
      txt: "19.01.2020",
    },
  },
]);
</script>

<style scoped lang="scss"></style>
