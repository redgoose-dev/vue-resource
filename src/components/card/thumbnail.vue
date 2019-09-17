<template>
<i
  class="card-thumbnail"
  :class="[
    `card-thumbnail--type-${type}`,
    fullHeight && `card-thumbnail--full-height`,
  ]">
  <img :src="src" :alt="title"/>
  <slot/>
</i>
</template>

<script>
export default {
  name: 'card-thumbnail',
  props: {
    src: { type: String, default: null }, // image url
    title: { type: String, default: 'image' }, // alt
    type: { type: String, default: 'cover' }, // cover,contain
    fullHeight: { type: Boolean, default: false }, // true: 높이가 100%, false: 높이가 임의 크기로 지정
  },
};
</script>
<style src="./thumbnail.scss" lang="scss" scoped></style>
