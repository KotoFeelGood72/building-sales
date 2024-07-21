<template>
  <div class="home">
    <MainSlider />
    <WorkBlock />
    <ServicesBlock />
    <QuizBloc />
    <WhatsBlock />
    <AboutBlock />
    <CallForm />
    <ReviewsBlock />
    <ArticleBlockSlider />
  </div>
</template>

<script setup lang="ts">
import MainSlider from "~/components/blocks/MainSlider.vue";
import WorkBlock from "~/components/blocks/WorkBlock.vue";
import ServicesBlock from "~/components/blocks/ServicesBlock.vue";
import QuizBloc from "~/components/blocks/QuizBloc.vue";
import WhatsBlock from "~/components/blocks/WhatsBlock.vue";
import AboutBlock from "~/components/blocks/AboutBlock.vue";
import CallForm from "~/components/shared/CallForm.vue";
import ReviewsBlock from "~/components/blocks/ReviewsBlock.vue";
import ArticleBlockSlider from "~/components/blocks/ArticleBlockSlider.vue";
</script>

<style scoped lang="scss"></style>
