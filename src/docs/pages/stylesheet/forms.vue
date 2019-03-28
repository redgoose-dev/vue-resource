<template>
<article class="page">
	<head-title type="h2" title="forms"/>

	<blockquote>
		<p>
			<strong>Source: <a href="https://github.com/redgoose-dev/vue-redgoose-source/blob/master/src/css/forms.scss" target="_blank">forms.scss</a></strong>
		</p>
	</blockquote>

	<p>
		<code>forms.scss</code> 파일에 들어있는 스타일시트들은 폼 관련 컴포넌트들을 그루핑하거나 보조하는 스타일들을 작성해서 관리합니다.<br/>
		예를들어 <code>폼 항목의 필드, 필드셋, 폼에대한 도움말 및 오류 메시지..</code> 같은 부분들에서 사용하는 스타일시트를 만들어 사용합니다.
	</p>
	<p>프로젝트에 따라 많은 조정이 필요한 부분이므로 스타일시트로만 만들어 사용하는것이 좋아 보입니다.</p>
	<p>현재 파일에서는 다른 클래스와의 이름 구분을 위하여 <code>.forms-</code>이라는 프리픽스를 사용합니다.</p>

	<section>
		<head-title type="h3" title="demo"/>
		<p>
			다음 예제는 `forms`에서 사용되는 클래스와 각 폼 컴포넌트들을 조합할때의 모습입니다.<br/>
			이 예제는 데모를 위하여 약간 수정한것 뿐이고, 프로젝트에서 사용할 스타일을 상황에 맞게 고쳐야 할것입니다.
		</p>
		<div class="example">
			<form action="#">
				<fieldset class="forms-fieldset">
					<legend>입력 폼 그룹</legend>
					<div class="forms-field">
						<div class="row row-v-center">
							<div class="col-12 col-sm-3">
								<label for="example1" class="forms-label">E-Mail</label>
							</div>
							<div class="col-12 col-sm">
								<form-text type="email" id="example1" placeholder="please input text"/>
							</div>
						</div>
					</div>
					<div class="forms-field">
						<div class="row row-v-center">
							<div class="col-12 col-sm-3">
								<label for="example2" class="forms-label">Password</label>
							</div>
							<div class="col-12 col-sm">
								<form-text type="password" id="example2" placeholder="please input text"/>
								<p class="forms-help">forms-help message</p>
							</div>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
	</section>

	<section>
		<head-title type="h3" title="forms-fieldset"/>
		<p>
			필드의 그룹이 되는 엘리먼트인 <code>fieldset</code>에서 사용한다. 글 작성폼에서 하나의 섹션이라고 볼 수 있습니다.<br/>
			`fieldset` 엘리먼트의 기본 스타일을 삭제하고 그 하위의 legend 엘리먼트를 안보이게 하는 역할을 합니다.
		</p>
		<pre><code>&lt;fieldset class="forms-fieldset">
	&lt;legend>필수입력항목 작성 폼&lt;/legend>
	&lt;div>
		&lt;div class="forms-field">..&lt;/div>
		&lt;div class="forms-field">..&lt;/div>
	&lt;/div>
&lt;/fieldset></code></pre>
	</section>

	<section>
		<head-title type="h3" title="forms-field"/>
		<p>
			글을 작성하는 폼 항목 하나를 표현할때 사용한다. 폼과 레이블, 도움말 메시지의 조합으로 이루어집니다.
		</p>
		<pre><code>&lt;div class="forms-field">
	&lt;div class="row">
		&lt;div class="col-3">
			&lt;label for="example">Label name&lt;/label>
		&lt;/div>
		&lt;div class="col">
			&lt;input type="text"/>
		&lt;/div>
	&lt;/div>
&lt;/div></code></pre>
	</section>

	<section>
		<head-title type="h3" title="forms-label"/>
		<p>
			폼을 설명하거나 이름이 되는 레이블에 대한 스타일이다. 통일된 레이블 스타일을 위하여 사용합니다.
		</p>
		<pre><code>&lt;label for="example">Label name&lt;/label></code></pre>

		<head-title type="h3" title="forms-help"/>
		<p>
			현재 필드를 설명하는 텍스트 스타일입니다.<br/>
			필드가 오류났거나 다른 상태에 대한 메시지를 표현하기도 합니다.
		</p>
		<div class="example">
			<p class="forms-help">help message - basic</p>
			<p class="forms-help forms-help--success">help message - success</p>
			<p class="forms-help forms-help--error">help message - error</p>
		</div>
		<pre class="example-code"><code>&lt;p class="forms-help">help message - basic&lt;/p>
&lt;p class="forms-help forms-help--success">help message - success&lt;/p>
&lt;p class="forms-help forms-help--error">help message - error&lt;/p></code></pre>
	</section>

	<section>
		<head-title type="h3" title="Form components"/>
		<p>다음은 입력폼에서 사용하는 컴포넌트들입니다.</p>
		<ul>
			<li><router-link to="/components/form/text">text</router-link></li>
			<li><router-link to="/components/form/select">select</router-link></li>
			<li><router-link to="/components/form/radio">radio</router-link></li>
			<li><router-link to="/components/form/checkbox">checkbox</router-link></li>
			<li><router-link to="/components/form/switch">switch</router-link></li>
		</ul>
	</section>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/layout/title'),
		'form-text': () => import('@/components/forms/text'),
		'button-basic': () => import('@/components/button/basic'),
	},
}
</script>
