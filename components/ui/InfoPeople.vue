<template>
  <div class="people">
    <div class="people__img">
      <img :src="data.img" alt="" />
    </div>
    <div class="people__content">
      <div class="people__title">{{ data.title }}</div>
      <div class="people__txt">{{ data.txt }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
</script>

<style scoped lang="scss"></style>
