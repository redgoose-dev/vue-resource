<template>
<article class="page">
	<head-title type="h2" title="grid"/>

	<ul>
		<li><strong>Source: <a href="https://github.com/redgoose-dev/vue-redgoose-source/blob/master/src/css/grid.scss" target="_blank">grid.scss</a></strong></li>
	</ul>

	<p>
		그리드 레이아웃 시스템에 대한 스타일시트.<br/>
		이 그리드의 컬럼은 총 12개로 되어있으며 <a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox의_기본_개념" target="_blank">Flexbox의 기본 개념</a>을 이용하여 그리드 레이아웃을 만들고 있다.
	</p>
	<p>
		레이아웃을 만들때 자주 사용되고 반응형 레이아웃을 만들떄 유용하게 사용할 수 있다.<br>
		무엇보다 중요한것은 미리 정해져있는 룰을 사용한 스타일시트를 사용하기 때문에 통일되고 규칙에 맞는 스타일 레이아웃을 유지할 수 있다는 점에서 사용하는데 의미가 크다고 본다.
	</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>기초적인 사용법은 다음과 같다.</p>
		<div class="example">
			<div class="example-grid">
				<div class="row">
					<div class="col">col</div>
					<div class="col">col</div>
				</div>
			</div>
		</div>
		<pre>
			<code>&lt;div class="row">
	&lt;div class="col">col&lt;/div>
	&lt;div class="col">col&lt;/div>
&lt;/div></code>
		</pre>
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
