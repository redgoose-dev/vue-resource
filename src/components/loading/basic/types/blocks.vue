<template>
<span class="loading-type-blocks" :style="color && { '--color': color }">
  <em v-for="i in Array(9)"></em>
</span>
</template>

<script>
export default {
  name: 'loading-type-blocks',
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

.loading-type-blocks {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  > em {
    display: block;
    width: 33%;
    height: 33%;
    box-sizing: border-box;
    background-color: var(--color, #{$color-base});
    float: left;
    animation: loading-type-blocks-scales 1.3s infinite ease-in-out;
    &:nth-child(1) {
      animation-delay: .2s;
    }
    &:nth-child(2) {
      animation-delay: .3s;
    }
    &:nth-child(3) {
      animation-delay: .4s;
    }
    &:nth-child(4) {
      animation-delay: .1s;
    }
    &:nth-child(5) {
      animation-delay: .2s;
    }
    &:nth-child(6) {
      animation-delay: .3s;
    }
    &:nth-child(7) {
      animation-delay: 0s;
    }
    &:nth-child(8) {
      animation-delay: .1s;
    }
    &:nth-child(9) {
      animation-delay: .2s;
    }
  }
  @keyframes loading-type-blocks-scales {
    0%, 70%, 100% {
      transform: scale3D(1, 1, 1);
    }
    35% {
      transform: scale3D(0, 0, 1);
    }
  }
}
</style>
