<template>
  <div class="inputs">
    <label :for="id">{{ label }}</label>
    <input type="text" :id="id" v-model="localValue" />
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const props = defineProps<{
  label?: string;
  id?: string;
  modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<style scoped lang="scss"></style>
