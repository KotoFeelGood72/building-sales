<template>
  <nav class="nav">
    <NuxtLink :to="item.link" v-for="(item, i) in MainNav" :key="'mavigation-item-' + i">
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { MainNav } from "~/consts/Nav";
</script>

<style scoped lang="scss">
.nav {
  @include flex-end;
  flex-grow: 1;
  gap: 50px;
  a {
    text-transform: uppercase;
    font-size: $small_1;
    font-family: $font_4;
    transition: all 0.3s ease;
    &:hover {
      @include colorfull;
    }
  }
}
</style>
