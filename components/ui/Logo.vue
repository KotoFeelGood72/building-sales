<template>
  <div class="logo">
    <NuxtLink to="/">
      <img src="/assets/img/logo.png" alt="" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
  width: 65px;
  height: 65px;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  a {
    @include flex-center;
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
