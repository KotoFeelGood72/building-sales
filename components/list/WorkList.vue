<template>
  <div class="list">
    <Work v-for="(item, index) in items" :key="'work-item-' + index" />
  </div>
</template>

<script setup lang="ts">
import Work from "../card/Work.vue";

const items = [1, 2, 3, 4, 5, 6];
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.list > * {
  flex: 1 1 calc(33.333% - 12px);
  margin: 5px;
}

.list > *:nth-child(3n) {
  flex: 1 1 100%;
}
</style>
