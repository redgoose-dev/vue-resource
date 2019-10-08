<template>
<article class="page">
  <head-title type="h2" title="Scripts introduce"/>
  <p>스크립트 함수들에 대한 모음입니다.</p>
  <p>nsdigsg</p>

  <section>
    <head-title type="h3" title="sleep"/>
  </section>
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
