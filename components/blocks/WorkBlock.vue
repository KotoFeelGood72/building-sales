<template>
  <section class="work-block">
    <div class="container">
      <SectionHead :level="2" title="Наши работы">
        <div class="work_head__content">
          <div class="counter">3 589</div>
          <div class="description">Отремонтированных помещений</div>
        </div>
      </SectionHead>
      <WorkList />
      <Buttons name="посмотреть еще 9 проектов" />
    </div>
  </section>
</template>

<script setup lang="ts">
import WorkList from "~/components/list/WorkList.vue";
import SectionHead from "../ui/SectionHead.vue";
import Buttons from "../ui/Buttons.vue";
</script>

<style scoped lang="scss">
.work_head__content {
  @include flex-start;
  font-family: $font_5;
  gap: 24px;
  .counter {
    @include colorfull;
    font-size: 52px;
  }

  .description {
    font-size: $small_2;
    text-transform: uppercase;
    max-width: 217px;
    line-height: 24px;
  }
}

.work-block {
  text-align: center;
}
</style>
