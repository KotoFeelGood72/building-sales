<template>
  <div class="quiz-block">
    <SectionHead :level="3" title="Рассчитайте стоимость ремонта за 2 минуты" />
    <component :is="currentStepComponent" @update="changeStep" />
    <QuizBottom
      :current="currentStep"
      :summary="totalStep"
      @update="changeStep"
      :isEnd="!isEndQuiz"
    />
  </div>
</template>

<script setup lang="ts">
import SectionHead from "../ui/SectionHead.vue";
import QuizBottom from "../quiz/QuizBottom.vue";

const currentStep = ref<number>(1);
const totalStep = ref<number>(4);
const currentStepComponent = ref<any>(null);

const isEndQuiz = computed(() => currentStep.value < totalStep.value);

const loadComponent = async (step: any) => {
  currentStepComponent.value = (
    await import(`@/components/quiz/${step}step.vue`)
  ).default;
};

const changeStep = (newStep: any) => {
  currentStep.value = newStep;
  loadComponent(newStep);
};

loadComponent(currentStep.value);
</script>

<style scoped lang="scss"></style>
