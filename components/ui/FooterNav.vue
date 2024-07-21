<template>
  <div class="footer-nav">
    <p>{{ title }}</p>
    <nav>
      <NuxtLink :to="item.link" v-for="(item, i) in nav" :key="'footer-nav-item-' + i">
        {{ item.name }}
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  nav: any;
}>();
</script>

<style scoped lang="scss"></style>
