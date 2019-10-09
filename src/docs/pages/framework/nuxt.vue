<template>
<article class="page">
  <head-title type="h2" title="Nuxt.js"/>
  <p>
    <code>nuxt.js</code> 프로젝트에 관련된 노트입니다.
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
