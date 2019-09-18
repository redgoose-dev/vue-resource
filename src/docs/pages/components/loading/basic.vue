<template>
<article class="page">
  <head-title type="h2" title="loading - icon"/>
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
