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

<style scoped lang="scss">
.service-block {
  background-color: $dark;
  color: $white;
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 458px;
    height: 837px;
    background: url("../../assets/vector/service.svg");
    content: "";
  }
}
</style>
