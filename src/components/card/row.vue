<template>
<article class="card-row">
  <slot name="before"/>
  <figure v-if="!!src || !!$slots.image" class="card-row__image">
    <img v-if="src" :src="src" :alt="title" :class="['img', !!imageFit && `img--fit-${imageFit}`]">
    <slot name="image"/>
  </figure>
  <div class="card-row__body">
    <h3 v-if="title" class="card-row__title">{{title}}</h3>
    <p v-if="description" class="card-row__description">{{description}}</p>
    <slot name="body"/>
  </div>
  <slot name="after"/>
</article>
</template>

<script>
export default {
  name: 'card-row',
  components: {
    'card-thumbnail': () => import('@/components/card/thumbnail'),
  },
  props: {
    src: { type: String, default: null }, // image url
    title: { type: String, default: 'card title' }, // title
    description: { type: String, default: null }, // description
    imageFit: { type: String, default: null }, // contain,cover
  },
}
</script>
<style src="./row.scss" lang="scss" scoped></style>
