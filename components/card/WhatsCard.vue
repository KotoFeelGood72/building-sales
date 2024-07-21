<template>
  <div class="card">
    <div class="card__icon">
      <img :src="card.icon" alt="" />
    </div>
    <div class="card__content">
      <p>{{ card.title }}</p>
      <span>{{ card.txt }}</span>
    </div>
    <div class="num">{{ card.num }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  card?: any;
}>();
</script>

<style scoped lang="scss"></style>
