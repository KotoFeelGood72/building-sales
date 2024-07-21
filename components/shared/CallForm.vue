<template>
  <div class="form">
    <div class="container">
      <div class="form__main">
        <div class="form__img">
          <img src="" alt="" />
        </div>
        <div class="form_action__w">
          <SectionHead
            :level="4"
            title="У вас остались вопросы?"
            description="К Вашим услугам наши профессиональные сотрудники с большим опытом работы с интерьерами "
          />
          <div class="form__phone">
            <a href="#">
              <Icon name="line-md:phone-call-loop" />
              <p>+7 (985) 123-456-78</p>
            </a>
          </div>
          <Forms />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHead from "../ui/SectionHead.vue";
import Forms from "../ui/Forms.vue";
</script>

<style scoped lang="scss"></style>
