<template>
  <div class="quiz-step">
    <QuizCard
      title="Первичное жилье"
      text="Недвижимость, строящаяся или построенная, право собственности на которую еще не оформлено"
      id="type-build-1"
      name="type"
      img="/assets/img/home/main.jpg"
      v-model="localValue"
    />
    <QuizCard
      title="Вторичное жилье"
      text="Недвижимость, на которую право собственности оформляется как минимум второй раз"
      id="type-build-2"
      name="type"
      img="/assets/img/home/main.jpg"
      v-model="localValue"
    />
    <button @click="nextStep">Next</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import QuizCard from "../card/QuizCard.vue";

const localValue = ref<string>();

const emit = defineEmits(["update"]);

const nextStep = () => {
  emit("update", 2);
};
</script>

<style scoped lang="scss"></style>
