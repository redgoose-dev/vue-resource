<template>
<article class="card-row">
  <figure class="card-row__wrap">
    <div class="card-row__image">
      <img src="https://images.unsplash.com/photo-1554565998-1ca88fdf1fcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="">
    </div>
    <figcaption class="card-row__caption">
      <h2 class="card-row__title">title</h2>
      <p class="card-row__description">descriptioin</p>
    </figcaption>
  </figure>
</article>
</template>

<script>
export default {
  name: 'card-row',
  props: {
    src: { type: String, default: null }, // image url
    title: { type: String, default: 'card title' }, // title
    description: { type: String, default: null }, // description
  },
}
</script>

<style lang="scss" scoped>
.card-row {
  &__wrap {
    margin: 0;
    border: 1px solid #000;
  }
  &__image {
    position: relative;
    height: 200px;
    overflow: hidden;
    > img {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
    }
  }
  &__caption {}
  &__title {}
  &__description {}
}
</style>
