<template>
<span class="loading-type-balls">
  <span v-for="i in Array(3)">
    <em></em>
  </span>
</span>
</template>

<style lang="scss" scoped>
@import "../../../../css/variables";

.loading-type-balls {
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  align-items: center;
  > span {
    display: block;
    box-sizing: border-box;
    flex: 1;
    margin: 0 5%;
    > em {
      box-sizing: border-box;
      display: block;
      width: 100%;
      padding-top: 100%;
      background: $color-base;
      border-radius: 100%;
      animation: loading-type-balls-scale 1.4s infinite ease-in-out both;
    }
    &:nth-child(1) {
      > em {
        animation-delay: -.32s;
      }
    }
    &:nth-child(2) {
      > em {
        animation-delay: -.16s;
      }
    }
  }
  @keyframes loading-type-balls-scale {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
}
</style>
