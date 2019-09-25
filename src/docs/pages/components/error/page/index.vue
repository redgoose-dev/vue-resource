<template>
<article class="page">
  <head-title type="h2" title="error / page"/>
<!--  <blockquote>-->
<!--    <p>-->
<!--      <strong>-->
<!--        component: <a :href="`${$store.state.url.github}blob/master/src/components/forms/checkbox.vue`" target="_blank">checkbox.vue</a><br/>-->
<!--        scss: <a :href="`${$store.state.url.github}blob/master/src/components/forms/checkbox.scss`" target="_blank">checkbox.scss</a>-->
<!--      </strong>-->
<!--    </p>-->
<!--  </blockquote>-->
<!--  <p>페이지 오류를 표현하는 컴포넌트 입니다.</p>-->

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
