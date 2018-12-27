<template>
<article class="page">
	<head-title type="h2" title="elements"/>

	<p>
		엘리먼트 기본세트
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
