<template>
<article class="page">
	<head-title type="h2" title="loading - icon"/>

	<blockquote>
		<p>
      <strong>component: <a :href="`${$store.state.url.github}tree/master/src/components/loading/icon`" target="_blank">icon.vue</a></strong>
		</p>
	</blockquote>

	<p>
		무언가 처리하고 있을때의 모습을 보여줄때 사용하는 컴포넌트<br/>
		<code>slot</code>을 이용하여 아이콘이나 이미지를 넣고 회전하는 애니메이션하는 역할을 하고 있습니다.
	</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>기본적으로 사용할때의 모습</p>
    <div class="example">
      <loading-icon :visible="true" :play="true" :size="false" class="foo">
        <icon name="star"/>
      </loading-icon>
    </div>
	</section>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/layout/title'),
    'loading-icon': () => import('@/components/loading/icon'),
    'icon': () => import('@/components/icon'),
	},
}
</script>

<style lang="scss" scoped>
  .foo {
    width: 64px;
    height: 64px;
  }
</style>
