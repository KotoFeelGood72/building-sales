<template>
  <div class="section-head">
    <div class="section_head__title">
      <component :is="`h${level}`">{{ title }}</component>
      <p v-if="description">{{ description }}</p>
    </div>
    <div class="section_head__content"><slot /></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  level?: number;
  title?: string;
  description?: string;
}>();
</script>

<style scoped lang="scss">
.section-head {
  @include flex-space;
  margin-bottom: 60px;
}

h2 {
  font-size: 64px;
  font-family: $font_6;
  font-weight: 400;
  position: relative;
  padding-bottom: 10px;
  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 121px;
    height: 3px;
    background: $linea;
    content: "";
  }
}
h3 {
}
h4 {
}
h5 {
}
</style>
