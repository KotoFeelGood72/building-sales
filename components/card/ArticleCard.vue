<template>
  <NuxtLink :to="article.link">
    <div class="card">
      <div class="card__head">
        <h3>{{ article.title }}</h3>
      </div>
      <div class="card__img">
        <img :src="article.img" alt="" />
        <div class="card__link">
          <IconBtn />
        </div>
      </div>
      <div class="card__timread">
        <Icon name="svg-spinners:clock" />
        <span>{{ article.readtime }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import IconBtn from "../ui/IconBtn.vue";

const props = defineProps<{
  article: any;
}>();
</script>

<style scoped lang="scss"></style>
