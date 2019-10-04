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
      <navigation-paginate
        v-model="page"/>

      <navigation-paginate-foo
        v-model="page"
        url="https://redgoose.me"
        :page-count="10"
        :page-range="5"
        :margin-pages="0"/>
    </div>
  </section>

</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/layout/title'),
    'navigation-paginate': () => import('@/components/navigation/paginate'),
    'navigation-paginate-foo': () => import('@/components/navigation/paginate/foo'),
	},
  data()
  {
    return {
      page: 1,
    };
  },
}
</script>
