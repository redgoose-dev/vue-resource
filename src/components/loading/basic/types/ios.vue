<template>
  <span
    v-else
    :class="[
      'spinner',
      play && 'spinner--animating',
      dark && 'spinner--dark',
    ]">
    <em v-for="o in Array(12)" class="spinner__blade"></em>
  </span>
</template>

<script>
export default {
  name: 'loading-type-spinner',
  props: {
    options: { type: Object, default: null },
  },
  computed: {
    play()
    {
      // default true
      return !(this.options && !!this.options.play);
    },
    dark()
    {
      // default true
      return !(this.options && !!this.options.dark);
    },
  },
}
</script>

<style lang="scss" scoped>
.spinner {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  > em {
    display: block;
    position: absolute;
    left: 44.5%;
    top: 37%;
    width: 10%;
    height: 25%;
    border-radius: 50% / 20%;
    animation: spinner-blade 1s linear infinite;
    animation-play-state: paused;
    background-color: white;
    @for $i from 1 through 12 {
      &:nth-child(#{$i}) {
        animation-delay: 1s / 12 * ($i - 21);
        transform: rotate(#{360deg / 12 * $i}) translate(0, -150%);
      }
    }
  }
  &--animating {
    > em {
      animation-play-state: running;
      will-change: opacity;
    }
  }
  &--dark {
    > em {
      background-color: #8c8c8c;
    }
  }
  @keyframes spinner-blade {
    0% { opacity: 0.85; }
    50% { opacity: 0.25; }
    100% { opacity: 0.25; }
  }
}
</style>
