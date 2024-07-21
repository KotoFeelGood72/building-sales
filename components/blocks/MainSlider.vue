<template>
  <section class="main_slider">
    <div class="main_slider__nav">
      <div class="main_slider__left">
        <Icon name="ph:arrow-left" size="30" />
      </div>
      <div class="main_slider__right">
        <Icon name="ph:arrow-right" size="30" />
      </div>
    </div>
    <Swiper
      :slides-per-view="1.07"
      :space-between="13"
      :modules="[Navigation, Pagination]"
      :speed="700"
      :navigation="{
        prevEl: `.main_slider__left`,
        nextEl: `.main_slider__right`,
      }"
      :pagination="{
        el: '.main_slider__pagination',
        clickable: true,
      }"
    >
      <SwiperSlide v-for="(item, i) in 12" :key="'item-slide-' + i">
        <div
          class="main_slider__slide"
          :style="'background-image: url(' + './assets/img/home/main.jpg' + ')'"
        >
          <div class="container">
            <div class="main_slider__slide__content">
              <h1>Качественный ремонт квартир в Москве и МО</h1>
              <p>
                Бесплатный выезд замерщика в день обращения! Начинаем ремонт в течении 3
                дней!
              </p>
              <Buttons name="ЗАПИСАТЬСЯ НА ЗАМЕР" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div class="main_slider__pagination swiper-pagination"></div>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from "swiper/modules";
import Buttons from "../ui/Buttons.vue";
</script>

<style scoped lang="scss">
.main_slider {
  position: relative;
  margin-bottom: 113px;
}
.main_slider__slide {
  color: $white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    content: "";
    background: url("../../assets/vector/main.svg");
  }
}

.main_slider__slide__content {
  min-height: 620px;
  padding: 145px 0;
  max-width: 841px;
  padding-left: 70px;

  h1 {
    font-size: 64px;
    font-family: $font_6;
    font-weight: 400;
  }

  p {
    font-size: 24px;
    font-family: $font_2;
    padding: 20px 0 50px 0;
  }
}

.main_slider__nav {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  @include flex-space;
  z-index: 11;
  padding: 0 4.7%;

  div {
    background: $white;
    width: 60px;
    height: 60px;
    @include flex-center;
    color: #ff636e;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      background: $linea;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      color: $white;
      &:before {
        opacity: 1;
      }
    }
  }
}

.swiper-button-disabled {
  opacity: 0;
  visibility: hidden;
}

.main_slider__pagination {
  display: none;
}
</style>
