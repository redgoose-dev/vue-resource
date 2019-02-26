<template>
<article class="page">
	<head-title type="h2" title="form / radio"/>

	<blockquote>
		<p>
			<strong>
				unit component: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/radio.vue" target="_blank">radio.vue</a><br/>
				group component: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/radio.scss" target="_blank">radios.scss</a>
			</strong>
		</p>
	</blockquote>

	<p>여러 항목들 중에 하나를 선택하는 컴포넌트 입니다.</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>기본적인 형태로 사용합니다.</p>
		<div class="example">
			<div class="row row-v-center">
				<div class="col--auto">
					<form-radio v-model="basic" name="basic" label="Apple" value="apple"/>
				</div>
				<div class="col--auto">
					<form-radio v-model="basic" name="basic" label="Banana" value="banana"/>
				</div>
			</div>
			<hr>
			<p>Selected : {{basic}}</p>
		</div>
		<pre class="example-code"><code>&lt;form-radio v-model="value" label="Label name" value="apple"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="size"/>
		<p>컴포넌트의 사이즈</p>
		<div class="example">
			<div class="row row-v-center">
				<div class="col--auto">
					<form-radio name="size" size="small" label="Small"/>
				</div>
				<div class="col--auto">
					<form-radio name="size" label="Normal"/>
				</div>
				<div class="col--auto">
					<form-radio name="size" size="large" label="Large"/>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>// small
&lt;form-radio size="small"/>

// normal
&lt;form-radio/>

// large
&lt;form-radio size="large"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="color"/>
		<p>컴포넌트의 컬러</p>
		<div class="example">
			<div class="row row-v-center">
				<div class="col--auto">
					<form-radio name="color" label="Normal"/>
				</div>
				<div class="col--auto">
					<form-radio name="color" color="sub" label="Sub"/>
				</div>
				<div class="col--auto">
					<form-radio name="color" color="success" label="Success"/>
				</div>
				<div class="col--auto">
					<form-radio name="color" color="error" label="Error"/>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>// sub
&lt;form-radio color="sub"/>

// success
&lt;form-radio color="success"/>

// error
&lt;form-radio color="error"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="disabled"/>
		<p>비활성화 되었을때의 모습입니다.</p>
		<div class="example">
			<form-radio name="disabled" label="Disabled" :disabled="true"/>
		</div>
		<pre class="example-code"><code>&lt;form-radio :disabled="true"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="animation"/>
		<p>체크했을때의 애니메이션 방식</p>
		<div class="example">
			<div class="row row-v-center">
				<div class="col--auto">
					<form-radio name="color" label="Normal"/>
				</div>
				<div class="col--auto">
					<form-radio name="color" animation="elastic" label="Elastic"/>
				</div>
				<div class="col--auto">
					<form-radio name="color" animation="none" label="None"/>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>// elastic
&lt;form-radio animation="elastic"/>

// none
&lt;form-radio animation="none"/></code></pre>
	</section>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/layout/title'),
		'form-radio': () => import('@/components/forms/radio'),
	},
	data()
	{
		return {
			basic: 'apple',
		};
	},
}
</script>
