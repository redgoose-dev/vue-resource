<template>
<article class="page">
  <head-title type="h2" title="navigation / paginate"/>
  <blockquote>
    <p>
      <strong>component: <a :href="`${$store.state.url.github}tree/master/src/components/navigation/paginate`" target="_blank">navigation-paginate</a></strong>
    </p>
  </blockquote>
  <p>목록 네비게이션 컴포넌트입니다.</p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적인 형태로 사용합니다.</p>
    <div class="example">
      <p>page: {{page}}</p>
      <hr>
      <navigation-paginate v-model="page" :total="100"/>
    </div>
    <pre class="example-code"><code>&lt;navigation-paginate v-model="page" :total="100"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
  </section>

</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/layout/title'),
    'navigation-paginate': () => import('@/components/navigation/paginate'),
	},
  data()
  {
    return {
      page: 1,
    };
  },
}
</script>
