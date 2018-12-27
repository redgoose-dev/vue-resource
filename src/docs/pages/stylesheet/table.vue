<template>
<article class="page">
	<head-title type="h2" title="table"/>

	<p>
		테이블에 관한 스타일시트
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
