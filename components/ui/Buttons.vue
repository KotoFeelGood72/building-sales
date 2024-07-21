<template>
  <div class="button" :class="[isSize]">
    <button type="button">
      <div class="left-icon"><slot name="left" /></div>
      <p>{{ name }}</p>
      <div class="right-icon"><slot name="right" /></div>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string;
    size?: "small" | "normal" | "large";
  }>(),
  {
    size: "normal",
  }
);

const slots = defineSlots<{
  left: () => void;
  right: () => void;
}>();

const isSize = computed(() => {
  switch (props.size) {
    case "small":
      return "size__small";
    case "normal":
      return "size__normal";
    case "large":
      return "size__large";
    default:
      return "size__normal";
  }
});
</script>

<style scoped lang="scss">
.button {
  position: relative;
  cursor: pointer;
  z-index: 2;
  display: inline-flex;
  button {
    cursor: pointer;
    font-family: $font_3;
    text-transform: uppercase;
    @include flex-center;
    color: $white;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $linea;
    content: "";
    z-index: -1;
  }

  &.size__small {
    button {
      padding: 12px 40px;
      font-size: $small_1;
    }
  }
  &.size__normal {
    button {
      font-size: $normal_1;
      padding: 24px 40px;
    }
  }
  &.size__large {
    button {
      padding: 24px 40px;
    }
  }
}
</style>
