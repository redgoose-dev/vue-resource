<template>
<article class="page">
	<head-title type="h2" title="forms"/>

	<blockquote>
		<p>
			<strong>Source: <a href="https://github.com/redgoose-dev/vue-redgoose-source/blob/master/src/css/forms.scss" target="_blank">forms.scss</a></strong>
		</p>
	</blockquote>

	<p>
		<code>forms.scss</code> 파일에 들어있는 스타일시트들은 폼 관련 컴포넌트들을 그루핑하거나 보조하는 스타일들을 작성해서 관리한다.<br/>
		예를들어 <code>폼 항목의 필드, 필드셋, 폼에대한 도움말 및 오류 메시지..</code> 같은 부분들에서 사용하는 스타일시트를 만들어 사용한다.
	</p>
	<p>
		프로젝트에 따라 많은 조정이 필요한 부분이므로 스타일시트로만 만들어 사용하는것이 좋아 보인다.
	</p>
	<p>
		현재 파일에서는 다른 클래스와의 이름 구분을 위하여 <code>.form-</code>이라는 프리픽스를 사용한다.
	</p>

	<head-title type="h3" title="fieldset"/>
	<p>
		...
	</p>

	<head-title type="h3" title="field"/>
	<p>
		...
	</p>

	<head-title type="h3" title="폼 관련 컴포넌트 목록"/>
	<p>다음은 입력폼에서 사용하는 컴포넌트들이다.</p>
	<ul>
		<li><router-link to="/">text</router-link></li>
		<li><router-link to="/">textarea</router-link></li>
	</ul>
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
