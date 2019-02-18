<template>
<article class="page">
	<head-title type="h2" title="button - basic"/>

	<blockquote>
		<p>
			<strong>Source: <a href="https://github.com/redgoose-dev/vue-resource/tree/master/src/components/button/basic" target="_blank">button/basic</a></strong>
		</p>
	</blockquote>

	<p>
		기본 디자인의 버튼 컴포넌트입니다.
	</p>

	<section>
		<div class="example">
			<button-basic to="/" @click="foo">sdgsdg</button-basic>
		</div>
	</section>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/component/title'),
		'button-basic': () => import('@/components/button/basic'),
	},
	methods: {
		foo(e)
		{
			console.log(e, 'foooo');
		}
	}
}
</script>
