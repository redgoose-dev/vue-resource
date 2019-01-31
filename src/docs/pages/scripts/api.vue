<template>
<article class="page">
	<head-title type="h2" title="api"/>
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
