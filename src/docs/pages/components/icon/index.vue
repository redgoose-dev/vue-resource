<template>
<article class="page">
	<head-title type="h2" title="icon"/>

	<blockquote>
		<p>
			<strong>
				component: <a href="https://github.com/redgoose-dev/vue-resource/tree/master/src/components/icons" target="_blank">icons</a>
			</strong>
		</p>
	</blockquote>

	<p>
		<code>SVG</code> 코드를 이용한 아이콘 컴포넌트 입니다.<br/>
		웹폰트 아이콘을 사용할 수 없고, 색상이나 사이즈를 컴포넌트나 `stylesheet`로 수정할 수 있도록할때 사용할 수 있습니다.
	</p>
	<p>
		만드는것은 상당히 만들기 번거로운 편이지만 쉽게 사용할 수 있습니다.<br/>
		주로 아이콘이 디자인에 의해 커스터마이즈가 되고 사용 갯수가 정해져 있다면 <code>&lt;img/></code>엘리먼트를 사용하는것보다 효과적입니다.
	</p>

	<section>
		<head-title type="h3" title="icons list"/>
		<p>먼저 예제로 만들어진 아이콘들을 다음과 같이 확인해볼 수 있습니다.</p>
		<div class="example">
			TODO: 아이콘 목록 만들기
		</div>
	</section>

	<section>
		<head-title type="h3" title="add icon"/>
		<p>먼저 svg 파일로 만들어진 아이콘 이미지로 아이콘 요소로 추가해보겠습니다.</p>
		<p>TODO: 계속 작성하기..</p>
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
