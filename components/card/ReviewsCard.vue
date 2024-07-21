<template>
  <div class="card">
    <div class="card__content">
      <p>{{ review.title }}</p>
      <span>{{ review.txt }}</span>
      <div class="card__source" v-if="review.source">
        <p>Отзыв размещен на</p>
        <img :src="isSource" alt="" />
      </div>
    </div>
    <div class="card_img__w">
      <img :src="review.img" alt="" />
      <div class="card__people"><InfoPeople :data="review.people" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoPeople from "../ui/InfoPeople.vue";

const props = defineProps<{
  review: any;
}>();

const isSource = computed(() => {
  switch (props.review.source) {
    case "Яндекс":
      return "/assets/img/yandex.png";
    case "Zoon":
      return "/assets/img/zoon.png";
  }
});
</script>

<style scoped lang="scss"></style>
