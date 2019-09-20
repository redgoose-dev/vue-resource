<template>
<span class="loading-type-circle"></span>
</template>

<style lang="scss" scoped>
@import "../../../../css/variables";

$border-width: 3px;
$border-bg-color: $color-gray-light;
$border-color: $color-key;
$animation-speed: 1s;

.loading-type-circle {
  height: 100%;
  width: 100%;
  color: $border-bg-color;
  position: relative;
  display: block;
  border: $border-width solid;
  border-radius: 50%;
  border-right-color: $color-base;
  animation: rotate $animation-speed linear infinite;
  box-sizing: border-box;
  @keyframes rotate {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
}
</style>
