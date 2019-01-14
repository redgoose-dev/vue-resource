<template>
<article class="page">
	<head-title type="h2" title="form - text"/>
	<p>
		<code>&lt;form-text/></code>컴포넌트는 텍스트 입력폼을 위한 
	</p>

	<p>basic</p>
	<div class="example">
		<form-text placeholder="Please input message"/>
	</div>

	<p>textarea</p>
	<div class="example">
		<form-text type="textarea" placeholder="Please input message"/>
	</div>

	<p>size</p>
	<div class="example">
		<div class="row row-h-center row-gutter-h">
			<div class="col"><form-text size="small" placeholder="small"/></div>
			<div class="col"><form-text placeholder="basic"/></div>
			<div class="col"><form-text size="large" placeholder="large"/></div>
		</div>
	</div>

	<p>readonly</p>
	<div class="example">
		<form-text :readonly="true" placeholder="readonly"/>
	</div>

	<p>disabled</p>
	<div class="example">
		<form-text :disabled="true" placeholder="disabled"/>
	</div>

	<p>inline</p>
	<div class="example">
		<form-text :inline="true" native-size="15" placeholder="inline style"/>
	</div>

	<p>state</p>
	<div class="example">
		<div class="row row-gutter-h">
			<div class="col"><form-text state="primary" placeholder="primary"/></div>
			<div class="col"><form-text state="success" placeholder="success"/></div>
			<div class="col"><form-text state="error" placeholder="error"/></div>
		</div>
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
