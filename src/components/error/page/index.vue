<template>
<article class="error-page">
  <div class="error-page__wrap">
    <header class="error-page__header">
      <em>{{code}}</em>
      <h2>{{title}}</h2>
    </header>
    <figure class="error-page__image">
      <img src="./image.jpg" alt="">
    </figure>
    <p class="error-page__description">
      {{description}}
    </p>
    <nav class="row row-h-center error-page__nav">
      <button-basic :to="link">Go to home</button-basic>
    </nav>
  </div>
</article>
</template>

<script>
export default {
  name: 'error-page',
  components: {
    'button-basic': () => import('@/components/button/basic'),
  },
  props: {
    title: { type: String, default: `This page isn't working` },
    code: { type: Number, default: 500 },
    description: { type: String, default: `There was an error. Please try again later. That's all we know.` },
    link: { type: String, default: '/' },
  },
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
