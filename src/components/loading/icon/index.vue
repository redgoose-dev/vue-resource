<template>
<span
  :class="[
    'loading-icon',
    !visible && 'loading-icon--visible',
    size && 'loading-icon--size',
  ]">
  <em
    v-if="$slots.default"
    :class="[ 'loading-icon__unit', play && 'play' ]">
    <slot/>
  </em>
</span>
</template>

<script>
export default {
  name: 'loading-icon',
  props: {
    visible: { type: Boolean, default: true },
    size: { type: Boolean, default: true },
    play: { type: Boolean, default: true },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped></style>
