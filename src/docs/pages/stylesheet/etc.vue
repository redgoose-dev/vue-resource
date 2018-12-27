<template>
<article class="page">
	<head-title type="h2" title="etc"/>

	<p>
		기타 쓸만한 스타일시트
	</p>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/component/title'),
	},
}
</script>
