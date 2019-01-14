<template>
<article class="page">
	<head-title type="h2" title="form - text"/>
	<p>
		<code>&lt;form-text/></code>컴포넌트는 텍스트 입력폼으로 사용되는 컴포넌트다.<br/>
		기능성보다 컴포넌트의 통일성에 더욱 촛점에 맞춰져있는 용도로 사용할 수 있다.
	</p>

	<head-title type="h3" title="basic"/>
	<p>
		기본적으로 사용되는 컴포넌트<br/>
		입력폼은 기본적으로 block 스타일로 나온다.
	</p>
	<div class="example">
		<form-text placeholder="Please input message"/>
	</div>
	<pre class="example-code">
		<code>&lt;form-text placeholder="Please input message"/></code>
	</pre>

	<head-title type="h3" title="textarea"/>
	<p>
		<code>&lt;textarea/></code> 엘리먼트 형식으로 입력폼을 만들때 사용한다.
	</p>
	<div class="example">
		<form-text type="textarea" placeholder="Please input message" :rows="3"/>
	</div>
	<pre class="example-code">
		<code>&lt;form-text type="textarea" :rows="2"/></code>
	</pre>

	<head-title type="h3" title="size"/>
	<p>
		입력폼의 사이즈를 변경한다. 기본사이즈와 <code>small</code>, <code>large</code> 사이즈를 사용할 수 있다.<br/>
		<router-link to="#">form-select</router-link> 컴포넌트나 <router-link to="#">button-basic</router-link> 컴포넌트와의 사이즈가 호환되므로 같은 사이즈 타입으로 나란히 정렬 가능하다.
	</p>
	<div class="example">
		<div class="row row-h-center row-gutter-h">
			<div class="col"><form-text size="small" placeholder="small"/></div>
			<div class="col"><form-text placeholder="basic"/></div>
			<div class="col"><form-text size="large" placeholder="large"/></div>
		</div>
	</div>
	<pre class="example-code">
		<code>&lt;form-text size="small" placeholder="small"/>
&lt;form-text placeholder="basic"/>
&lt;form-text size="large" placeholder="large"/></code>
	</pre>

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
