<template>
  <div class="quiz-bottom">
    <div class="quiz__pagination">
      <div class="quiz_start">Шаг {{ current }}</div>
      <div class="quiz_separator"></div>
      <div class="quiz_end">из {{ summary }}</div>
    </div>
    <Buttons name="cледующий шаг" @click="nextStep(current)" />
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import Buttons from "../ui/Buttons.vue";
const props = defineProps<{
  current: number;
  summary: number;
  isEnd?: boolean;
}>();

const emit = defineEmits(["update"]);

const nextStep = (count: number) => {
  if (!props.isEnd) {
    emit("update", count + 1);
  }
};
</script>

<style scoped lang="scss"></style>
