<template>
<article class="page">
	<head-title type="h2" title="button - basic"/>
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