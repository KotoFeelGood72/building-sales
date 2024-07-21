<template>
  <div class="quiz-head">
    <div class="num">{{ num }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  num: number | undefined;
  title: string;
}>();
</script>

<style scoped lang="scss"></style>
