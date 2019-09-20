<template>
<span class="loading-type-boxes">
  <em v-for="i in Array(4)"></em>
</span>
</template>

<style lang="scss" scoped>
@import "../../../../css/variables";

.loading-type-boxes {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotateZ(45deg);
  > em {
    position: relative;
    float: left;
    width: 50%;
    height: 50%;
    transform: scale(1.1);
    &:before {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-base;
      animation: loading-type-boxes-fold 2.76s infinite linear both;
      transform-origin: 100% 100%;
    }
    &:nth-child(2) {
      transform: scale(1.1) rotateZ(90deg);
      &:before {
        animation-delay: 0.35s;
      }
    }
    &:nth-child(4) {
      transform: scale(1.1) rotateZ(180deg);
      &:before {
        animation-delay: 0.69s;
      }
    }
    &:nth-child(3) {
      transform: scale(1.1) rotateZ(270deg);
      &:before {
        animation-delay: 1.04s;
      }
    }
  }
  @keyframes loading-type-boxes-fold {
    0%, 10% {
      transform: perspective(136px) rotateX(-180deg);
      opacity: 0;
    }
    25%, 75% {
      transform: perspective(136px) rotateX(0deg);
      opacity: 1;
    }
    90%, 100% {
      transform: perspective(136px) rotateY(180deg);
      opacity: 0;
    }
  }
}
</style>
