<template>
  <div class="seo">
    <div class="container">
      <div class="seo_main">
        <component :is="`h${level}`">{{ title }}</component>
        <slot></slot>
        <div class="seo_btn__more"><Icon name="ph:arrow-right" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
