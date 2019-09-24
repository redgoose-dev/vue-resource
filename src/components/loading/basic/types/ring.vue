<template>
<svg viewBox="0 0 50 50" class="loading-type-ring">
  <circle cx="25" cy="25" r="20" fill="none" :stroke="color"/>
</svg>
</template>

<script>
export default {
  name: 'loading-type-ring',
  props: {
    options: { type: Object, default: null }, // color
  },
  computed: {
    color()
    {
      return (this.options && !!this.options.color) ? this.options.color : '#222';
    },
  },
}
</script>
<style lang="scss" scoped>
@import "../../../../css/variables";

$border-width: 6px;
$border-color: $color-base;
$animation-speed: 2s;

.loading-type-ring {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  animation: rotate $animation-speed linear infinite;
  & circle {
    stroke-width: $border-width;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    100% { transform: rotate(360deg); }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
}
</style>
