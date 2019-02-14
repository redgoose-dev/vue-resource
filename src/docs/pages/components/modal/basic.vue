<template>
<article class="page">
	<head-title type="h2" title="modal - basic"/>

	<blockquote>
		<p>
			<strong>
				component: <a href="#" target="_blank">TODO: basic.vue</a><br/>
				scss: <a href="#" target="_blank">TODO: basic.scss</a>
			</strong>
		</p>
	</blockquote>

	<p>
		일종의 레이어 팝업이라고 볼 수 있으며 이 컴포넌트는 기본적인 형태의 modal 이라고 볼 수 있습니다.<br/>
		화면 중간에 열리기 때문에 적은 내용으로 사용하는것에 적절하다고 볼 수 있습니다.
	</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>기본적으로 사용할때의 모습</p>
	</section>
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
