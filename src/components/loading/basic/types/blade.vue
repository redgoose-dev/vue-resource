<template>
<span class="loading-type-blade">
  <em v-for="o in Array(3)"></em>
</span>
</template>

<script>
export default {
  name: 'loading-type-blade',
  props: {
    options: { type: Object, default: null },
  },
}
</script>
<style lang="scss" scoped>
@import "../../../../css/variables";

$color: $color-key;
$border-width: 2px;

.loading-type-blade {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  perspective: 800px;
  box-sizing: border-box;
  > em {
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    &:nth-child(1) {
      left: 0;
      top: 0;
      animation: rotate-one 1s linear infinite;
      border-bottom: $border-width solid $color;
    }
    &:nth-child(2) {
      right: 0;
      top: 0;
      animation: rotate-two 1s linear infinite;
      border-right: $border-width solid $color;
    }
    &:nth-child(3) {
      right: 0;
      bottom: 0;
      animation: rotate-three 1s linear infinite;
      border-top: $border-width solid $color;
    }
  }

  @keyframes rotate-one {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }
  @keyframes rotate-two {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }
  @keyframes rotate-three {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
}
</style>
