<template>
<article class="page">
	<head-title type="h2" title="form - select wrapper"/>

	<p>
		<router-link to="/components/form/select">form-select</router-link> 컴포넌트에서 좀더 직관적인 모습을 가진 모습으로 만들기 위하여 사용하는 <code>&lt;form-select/></code>래퍼 컴포넌트입니다.<br/>
		대략적으로 select 컴포넌트가 네이티브 형태로 되어있는 스타일에서 커스텀화를 한다고 볼 수 있습니다.
	</p>
	<p>
		<b>TODO: 컴포넌트 제작하기</b>
	</p>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/component/title'),
		'form-select': () => import('@/components/forms/select'),
	},
	data()
	{
		return {
			fruit: '',
		};
	},
}
</script>
