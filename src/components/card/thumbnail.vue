<template>
<i
  class="card-thumbnail"
  :class="[
    `card-thumbnail--type-${type}`,
    full && `card-thumbnail--full`,
  ]">
  <img :src="src" :alt="title"/>
</i>
</template>

<script>
export default {
  name: 'card-thumbnail',
  props: {
    src: { type: String, default: null }, // image url
    title: { type: String, default: 'image' }, // alt
    type: { type: String, default: 'cover' }, // cover,contain
    full: { type: Boolean, default: false }, // false: 높이가 임의 크기로 지정, true: 높이가 100%
  },
};
</script>
<style src="./thumbnail.scss" lang="scss" scoped></style>
