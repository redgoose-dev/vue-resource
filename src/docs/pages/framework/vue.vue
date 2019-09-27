<template>
<article class="page">
  <head-title type="h2" title="Vue.js notes"/>

  <p>
    vue.js notes
  </p>
</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
  },
}
</script>
