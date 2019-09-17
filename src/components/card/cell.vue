<template>
<article
  class="card-cell"
  :style="imageSize && { '--card-cell-size': `${imageSize}px` }">
  <slot name="before"/>
  <figure v-if="!!src || !!$slots.image" class="card-cell__image">
    <img v-if="src" :src="src" :alt="title">
    <slot name="image"/>
  </figure>
  <div class="card-cell__body">
    <div class="card-cell__body-wrap">
      <h3 v-if="title" class="card-cell__title">{{title}}</h3>
      <p v-if="description" class="card-cell__description">{{description}}</p>
      <slot name="body"/>
    </div>
  </div>
  <slot name="after"/>
</article>
</template>

<script>
export default {
  name: 'card-cell',
  props: {
    src: { type: String, default: null }, // image url
    title: { type: String, default: 'card title' }, // title
    description: { type: String, default: null }, // description
    imageSize: { type: Number, default: null }, // custom image size
  },
}
</script>

<style src="./cell.scss" lang="scss" scoped></style>
