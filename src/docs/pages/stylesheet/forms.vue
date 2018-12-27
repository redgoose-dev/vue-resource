<template>
<article class="page">
	<head-title type="h2" title="forms"/>

	<p>
		폼에 관련된 스타일시트
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
