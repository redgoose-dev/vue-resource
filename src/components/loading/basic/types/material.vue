<template>
<svg
  viewBox="0 0 66 66"
  xmlns="http://www.w3.org/2000/svg"
  class="loading-type-material">
  <circle
    fill="none"
    stroke-linecap="round"
    cx="33"
    cy="33"
    r="30"/>
</svg>
</template>

<style lang="scss" scoped>
$offset: 187;
$duration: 1400ms;
$size: 6;

.loading-type-material {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  animation: rotator $duration linear infinite;
  > circle {
    stroke-width: $size;
    stroke-dasharray: $offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash $duration ease-in-out infinite, colors ($duration*4) ease-in-out infinite;
  }
  @keyframes rotator {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }
  }
  @keyframes colors {
    0% { stroke: #4285F4; }
    25% { stroke: #DE3E35; }
    50% { stroke: #F7C223; }
    75% { stroke: #1B9A59; }
    100% { stroke: #4285F4; }
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: $offset;
    }
    50% {
      stroke-dashoffset: $offset/4;
      transform:rotate(135deg);
    }
    100% {
      stroke-dashoffset: $offset;
      transform:rotate(450deg);
    }
  }
}
</style>
