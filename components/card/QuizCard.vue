<template>
  <div class="quiz-card">
    <input type="radio" :name="name" :id="id" :value="title" v-model="localValue" />
    <label :for="id">
      <img :src="img" />
      <div class="quiz_card__content">
        <div class="quiz_card__indicator"></div>
        <div class="quiz_card__text">
          <p>{{ title }}</p>
          <span>{{ text }}</span>
        </div>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, computed } from "vue";
const props = defineProps<{
  title?: string;
  img?: string;
  text?: string;
  modelValue?: string;
  name?: string;
  id?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<style scoped lang="scss"></style>
