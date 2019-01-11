<template>
<article class="page">
	<head-title type="h2" title="form - text"/>

	<p>
		TODO: 여기서부터 작업..
	</p>
	<div class="example">
		<form-text
			placeholder="please input text"/>
	</div>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/component/title'),
		'form-text': () => import('@/components/forms/text'),
	},
}
</script>
