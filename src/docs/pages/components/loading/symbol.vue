<template>
<article class="page">
	<head-title type="h2" title="loading - symbol"/>

	<blockquote>
		<p>
			<strong>
				component: <a href="#" target="_blank">TODO: symbol.vue</a><br/>
				scss: <a href="#" target="_blank">TODO: symbol.scss</a>
			</strong>
		</p>
	</blockquote>

	<p>
		무언가 처리하고 있을때의 모습을 보여줄때 사용하는 컴포넌트.<br/>
		심볼 형태로 된 모습입니다.
	</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>기본적으로 사용할때의 모습</p>
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
