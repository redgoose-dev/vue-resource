<template>
<article class="page">
	<head-title type="h2" title="etc"/>

	<blockquote>
		<strong>Source: <a :href="`${$store.state.url.github}blob/master/src/css/etc.scss`" target="_blank">etc.scss</a></strong>
	</blockquote>

	<p>그 외에 쓸만한 스타일들을 소개합니다.</p>

	<section>
		<head-title type="h3" title="background blur"/>
		<p>..</p>
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
