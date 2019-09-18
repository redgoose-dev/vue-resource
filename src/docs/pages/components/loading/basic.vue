<template>
<article class="page">
  <head-title type="h2" title="loading - basic"/>

  <blockquote>
    <p>
      <strong>component: <a :href="`${$store.state.url.github}tree/master/src/components/loading/basic`" target="_blank">basic</a></strong>
    </p>
  </blockquote>

  <p>
    무언가 처리하고 있을때의 모습을 보여줄때 사용하는 컴포넌트.<br/>
    아이콘 형태의 모습을 하고 있으며 반복적으로 움직입니다.
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
