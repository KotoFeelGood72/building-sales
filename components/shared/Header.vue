<template>
  <header class="header">
    <div class="container">
      <div class="header_main">
        <Logo />
        <Nav />
        <div class="header__phone">
          <a href="#">+7 (985) 123-456-78</a> <span>Время работы: c 9:00-18:00</span>
        </div>
        <Buttons name="Заказать звонок" size="small" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/components/ui/Logo.vue";
import Nav from "../ui/Nav.vue";
import Buttons from "../ui/Buttons.vue";
</script>

<style scoped lang="scss">
.header_main {
  @include flex-space;
  font-family: $font_3;
  gap: 40px;
  padding: 20px 0;
}

.header__phone {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    @include colorfull;
    font-size: $normal_2;
  }
  span {
    font-size: $small_1;
    color: $black;
    font-family: $font_2;
  }
}
</style>
