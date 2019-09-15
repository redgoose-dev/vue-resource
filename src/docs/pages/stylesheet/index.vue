<template>
<article class="page">
	<head-title type="h2" title="introduce"/>

	<blockquote>
		<strong>Source: <a :href="`${$store.state.url.github}tree/master/src/css`" target="_blank">css</a></strong>
	</blockquote>

	<p>
		공통적으로 사용하는 css library 영역에서 사용하는 리소스들입니다.<br/>
		프로젝트에 기본적으로 자주, 반복적으로 사용되는 요소들을 모아두어 여기 소스들을 활용하여 만드려는 프로그램에 좀더 도움이 될것입니다.
	</p>
	<p>
		여기서 사용되는 <code>css</code>는 전부 <a href="https://sass-lang.com" target="_blank">Sass: Syntactically Awesome Style Sheets</a>로 작성되었습니다.
	</p>

	<head-title type="h3" title="Using"/>
	<p>
		서비스를 위한 공통적인 스타일시트를 만들때 scss 에서는 <code>app.scss</code> 파일 하나를 만들어서 다른 scss 파일들을 import 해올것입니다.<br/>
		여기에서 필요한 <code>scss</code>들을 다음과 같은 방법으로 불러와서 사용할 수 있습니다.
	</p>
	<pre><code>@import "./fonts";
@import "./variables";
@import "./mixins";
@import "./elements";
@import "./grid";
@import "./typography";
@import "./forms";
@import "./table";
@import "./etc";</code></pre>
	<p>각 리소스들은 Stylesheet 그룹의 각 페이지에서 자세히 다룹니다.</p>

	<blockquote>
		<p>
			스타일시트의 리소스를 만든 의도는 그대로 쓰라고 만든것이 아니라 이 소스를 베이스로 만드려는 프로그램에 도움이 되라고 만든것입니다.<br/>
			가장 중요한건 참고용이지 답안지가 절대 아닙니다.
		</p>
		<p>이것을 참고로 원하는 모습으로 제작에 더 빨리 접근 할 수 있도록 도움되길 바랍니다.</p>
	</blockquote>
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
