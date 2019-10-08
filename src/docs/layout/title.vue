<template>
<component :is="type" class="title">
	<span>{{title}}</span>
	<slot/>
</component>
</template>

<script>
export default {
	name: 'heading-title',
	props: {
		type: { type: String, default: 'h2', required: true },
		title: { type: String, default: 'title', required: true },
	},
}
</script>

<style lang="scss" scoped>
.title {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
h2.title {
	margin: 0 0 2rem;
	border-bottom: 1px solid #ddd;
	font-size: 1.75rem;
	font-weight: 600;
	line-height: 1.5;
	letter-spacing: -.1rem;
}
h3.title {
	margin: 3rem 0 1rem;
	font-size: 1.25rem;
	font-weight: 600;
	line-height: 1.5;
}
h4.title {
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.5;
}
</style>
