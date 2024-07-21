<template>
  <div class="inputs">
    <label :for="id">{{ label }}</label>
    <div class="inputs__w">
      <input
        type="text"
        :id="id"
        v-model="localValue"
        v-mask="'+7 ### ###-##-##'"
        placeholder="+7 (999) 999-99-99"
      />
      <div class="phone-icon"><Icon name="entypo:phone" /></div>
    </div>
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
