<template>
<article class="page">
	<head-title type="h2" title="loading - progress"/>

	<blockquote>
		<p>
			<strong>
				component: <a href="#" target="_blank">TODO: progress.vue</a><br/>
				scss: <a href="#" target="_blank">TODO: progress.scss</a>
			</strong>
		</p>
	</blockquote>

	<p>
		무언가 처리하고 있을때의 모습을 보여줄때 사용하는 컴포넌트.<br/>
		프로그레스 바 형태의 모습을 가지고 있습니다. 파일 업로드를 할때 사용할 수 있습니다.
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
		'head-title': () => import('@/docs/layout/title'),
	},
}
</script>
