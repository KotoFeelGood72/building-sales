<template>
  <div class="whats-block">
    <SectionHead :level="3" title="Почему клиенты выбирают нас?" />
    <WhatsList />
  </div>
</template>

<script setup lang="ts">
import WhatsList from "../list/WhatsList.vue";
import SectionHead from "../ui/SectionHead.vue";
</script>

<style scoped lang="scss"></style>
