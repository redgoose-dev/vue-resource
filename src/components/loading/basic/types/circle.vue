<template>
<span
  class="loading-type-circle"
  :style="{
    ...(activeColor && { '--border-color': activeColor }),
    ...(bgColor && { '--bg-color': bgColor }),
  }"></span>
</template>

<script>
export default {
  name: 'loading-type-circle',
  props: {
    options: { type: Object, default: null }, // color,bgColor
  },
  computed: {
    activeColor()
    {
      return (this.options && !!this.options.color) ? this.options.color : null;
    },
    bgColor()
    {
      return (this.options && !!this.options.bgColor) ? this.options.bgColor : null;
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../../../css/variables";

$border-width: 3px;
$border-bg-color: $color-gray-light;
$border-color: $color-key;
$animation-speed: 1s;

.loading-type-circle {
  height: 100%;
  width: 100%;
  color: var(--bg-color, #{$border-bg-color});
  position: relative;
  display: block;
  border: $border-width solid;
  border-radius: 50%;
  border-right-color: var(--border-color, #{$color-base});
  animation: rotate $animation-speed linear infinite;
  box-sizing: border-box;
  @keyframes rotate {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
}
</style>
