<template>
  <div class="icon_btn">
    <Icon name="ph:arrow-right" size="30" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.icon_btn {
  width: 60px;
  height: 60px;
  @include flex-center;
  position: relative;
  color: $white;
  cursor: pointer;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: $linea;
  }
}
</style>
