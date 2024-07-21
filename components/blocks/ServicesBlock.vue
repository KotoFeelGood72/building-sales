<template>
  <section class="service-block">
    <SectionHead :level="3" title="Мы предлагаем" />
    <ServicesList />
  </section>
</template>

<script setup lang="ts">
import ServicesList from "../list/ServicesList.vue";
import SectionHead from "../ui/SectionHead.vue";
</script>

<style scoped lang="scss"></style>
