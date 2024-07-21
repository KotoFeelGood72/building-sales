<template>
  <div class="card">
    <div class="card__link__btn">
      <IconBtn />
    </div>
    <div class="card_slider__w">
      <div class="card__slider">
        <img :src="images[currentIndex]" alt="Image" />
      </div>
    </div>
    <div class="card__bottom">
      <div class="card_slider__pagination">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="['pagination__dot', { active: index === currentIndex }]"
          @click="currentIndex = index"
          @mouseover="currentIndex = index"
        ></span>
      </div>
      <h3>Квартира 60 м²</h3>
      <ul class="card__character">
        <li>
          <span>Тип объекта</span>
          <p>Однокомнатная</p>
        </li>
        <li>
          <span>Площадь помещений</span>
          <p>60 м²</p>
        </li>
        <li>
          <span>Сроки разработки</span>
          <p>26 дней</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconBtn from "../ui/IconBtn.vue";
import { ref } from "vue";

const images = ref([
  "/assets/img/home/main.jpg",
  "/assets/img/home/main.jpg",
  "/assets/img/home/main.jpg",
  "/assets/img/home/main.jpg",
]);

const currentIndex = ref(0);
</script>

<style scoped lang="scss">
.card_slider__w {
  height: 100%;
  max-height: 540px;
}
.card__slider {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card__slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card_slider__pagination {
  position: absolute;
  top: -15px;
  left: 42px;
  z-index: 11;
  @include flex-start;
}

.pagination__dot {
  width: 50px;
  height: 3px;
  background-color: $white;
  margin: 0 5px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
}

.pagination__dot.active {
  opacity: 1;
}

.card {
  position: relative;
  overflow: hidden;
  min-height: 380px;
  text-align: left;
  &:hover {
    .card__bottom {
      transform: translateY(0);
    }
    .card__link__btn {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

.card__link__btn {
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  transform: translateX(100%);
  opacity: 0;
}

.card__bottom {
  background-color: $dark;
  color: $white;
  font-family: $font_2;
  padding: 15px 42px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s ease-in-out;
  transform: translateY(calc(100% + 15px));

  h3 {
    font-family: $font_6;
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 14px;
  }
}

.card__slider {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card__character {
  @include flex-start;
  gap: 40px;

  span {
    color: #bdbdbd;
    font-family: $font_1;
  }
  p {
    font-size: $normal_1;
  }
}
</style>
