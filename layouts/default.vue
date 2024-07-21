<template>
  <main class="main">
    <Header />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Header from "~/components/shared/Header.vue";
import Footer from "~/components/shared/Footer.vue";
</script>

<style scoped lang="scss"></style>
