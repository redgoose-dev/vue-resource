<template>
<article class="page">
	<head-title type="h2" title="form / radio"/>

	<blockquote>
		<p>
			<strong>
				unit component: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/radio.vue" target="_blank">radio.vue</a><br/>
				group component: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/radios.vue" target="_blank">radios.vue</a>
			</strong>
		</p>
	</blockquote>

	<p>여러 항목들 중에 하나를 선택하는 컴포넌트 입니다.</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>기본적인 형태로 사용합니다.</p>
		<div class="example">
			<form-radio name="foo" label="label-name"/>
			<form-radio name="foo" label="label-name"/>
			<form-radio name="foo" label="label-name"/>
		</div>
	</section>

	<section>
		<head-title type="h3" title="size"/>
	</section>

	<section>
		<head-title type="h3" title="color"/>
	</section>

	<section>
		<head-title type="h3" title="disabled"/>
	</section>

	<section>
		<head-title type="h3" title="animation"/>
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
}
</script>
