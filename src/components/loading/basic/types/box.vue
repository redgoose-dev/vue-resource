<template>
<span class="loading-type-box" :style="color && { '--color': color }"></span>
</template>

<script>
export default {
  name: 'loading-type-box',
  props: {
    options: { type: Object, default: null }, // color
  },
  computed: {
    color()
    {
      return (this.options && !!this.options.color) ? this.options.color : null;
    },
  },
}
</script>
<style lang="scss" scoped>
@import "../../../../css/variables";

$animation-speed: 1.2s;

.loading-type-box {
  display: block;
  width: 100%;
  height: 100%;
  background-color: var(--color, #{$color-base});
  animation: loading-type-box-rotate $animation-speed infinite ease-in-out;

  @keyframes loading-type-box-rotate {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
}
</style>
