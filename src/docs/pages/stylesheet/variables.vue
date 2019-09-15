<template>
<article class="page">
	<head-title type="h2" title="variables"/>

	<blockquote>
		<strong>Source: <a :href="`${$store.state.url.github}blob/master/src/css/variables.scss`" target="_blank">variables.scss</a></strong>
	</blockquote>

	<p>
		만드는 서비스에서 사용하는 변수들을 지정해놓은 파일들입니다.<br/>
		다음과 같이 섹션을 나누어서 그룹을 정해두었습니다.
	</p>


	<head-title type="h3" title="section"/>
	<p>
		스타일시트 변수들은 다음과 같은 섹션으로 분류되고 거기에 해당되는 값들을 지정합니다.<br/>
		변수 이름은 섹션 이름을 프리픽스로 두고 정합니다.
	</p>
	<pre><code>// color
$color-base: #222;

// size
$size-screen-min: 320px;</code></pre>

	<head-title type="h4" title="color"/>
	<p>자주 사용되는 컬러들을 지정합니다.</p>
	<pre><code>$color-base: $ff0000;</code></pre>

	<head-title type="h4" title="size"/>
	<p>사이즈에 대한 변수를 지정합니다.</p>
	<pre><code>$size-screen-min: 320px;</code></pre>

	<head-title type="h4" title="font"/>
	<p>글꼴에 대한 변수값을 지정합니다. 웹폰트나 새로운 폰트를 사용하고 싶을때 변수로 만들어서 사용합니다.</p>
	<pre><code>$font-eng: Helvetica, Arial, sans-serif;</code></pre>

	<head-title type="h4" title="etc"/>
	<p>그 외에 여러가지 변수값들을 지정합니다.</p>
	<pre><code>$shadow-basic: 0 1px 5px rgba(#000, .15); // shadow default</code></pre>

	<head-title type="h3" title="import"/>
	<p>
		<code>variables.scss</code> 파일은 한번 불러오면 <code>scss</code>가 연결된 내용이라면 언제나 사용할 수 있지만 IDE 프로그램에서는 그걸 제대로 인식하지 못하기 때문에 scss 파일마다 따로 import 해주는것을 권장합니다. (그것이 정석인듯..)
	</p>
	<pre><code>@import './variables'</code></pre>


	<head-title type="h3" title="customize"/>
	<p>
		현재 작성된 변수명은 가이드를 위하여 임의로 작성된것이기 때문에 자신의 환경에 맞춰 반드시 구조나 값들을 변경해서 사용하길 권장합니다.<br/>
		그리고 지정한 변수들은 왠만하면 주석을 붙여두는게 좋을거 같습니다. 어디에 사용하고 어떻게 사용하는지에 대한 구체적인 설명이 많을수록 사용에 도움이 될것입니다.
	</p>
	<pre><code>${PREFIX}-{NAME}: {VALUE}; // {COMMENT}</code></pre>
	<p>
		변수 네이밍은 길더라도 최대한 이름으로 알아볼 수 있도록 자세하게 이름을 짓는것이 좋습니다.<br/>
		단어를 축약해서 사용하거나 코드형식으로 사용하는것은 권장하지 않습니다.
	</p>
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
