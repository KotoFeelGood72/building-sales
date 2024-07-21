<template>
  <div class="form">
    <div class="form__row">
      <Inputs id="form-name" v-model="name" />
      <PressPhone id="form-phone" v-model="phone" />
      <Buttons name="отправить заявку" />
    </div>
    <div class="form_notice">
      Отправляю данную форму даю согласие на обработку персональных данных
    </div>
  </div>
</template>

<script setup lang="ts">
import Inputs from "./Inputs.vue";
import PressPhone from "./PressPhone.vue";
import Buttons from "./Buttons.vue";

const name = ref<string>();
const phone = ref<string>();
</script>

<style scoped lang="scss"></style>
