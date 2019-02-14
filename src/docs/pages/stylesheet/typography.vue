<template>
<article class="page">
	<head-title type="h2" title="typography"/>

	<blockquote>
		<strong>Source: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/css/typography.scss" target="_blank">typography.scss</a></strong>
	</blockquote>

	<p>
		프로젝트에서 사용하는 타이포 스타일에 대한 css 클래스들에 대해서 다룹니다.
	</p>

	<section>
		<head-title type="h3" title="description"/>
		<p>글 본문에서 사용할 수 있습니다.</p>
		<div class="example">
			<div class="typo-description">
				<p class="typo-description__title">description subject</p>
				<p>
					I was in an office building and they have this screen shooting electrical pulses I took a few photos feeling something was there more than meets the eye.<br/>
					so I played with various images and after rotating and flipping...
				</p>
			</div>
		</div>
		<pre class="example-code">
			<code>&lt;!-- solo -->
&lt;p class="typo-description">body&lt;/p>

&lt;!-- with title -->
&lt;div class="typo-description">
	&lt;p class="typo-description__title">title&lt;/p>
	&lt;p>body&lt;/p>
&lt;/div></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="header"/>
		<p>
			페이지 제목으로 사용됩니다.<br/>
			`Page heading`은 한 페이지에 한개만 들어가고, <code>&lt;h1/></code>이나 <code>&lt;h2/></code> 엘리먼트를 사용하는것을 강력하게 권장합니다.
		</p>
		<div class="example">
			<h2 class="typo-heading--page">Page heading</h2>
			<hr>
			<h3 class="typo-heading--section">Section heading</h3>
		</div>
		<pre class="example-code">
			<code>&lt;h2 class="typo-heading--page">page heading&lt;/h2>
&lt;h3 class="typo-heading--section">section heading&lt;/h2></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="color"/>
		<p>공통적으로 사용하는 색상을 클래스 이름으로 사용합니다.</p>
		<div class="example">
			<p class="typo-color--base">text color-base</p>
			<p class="typo-color--key">text color-key</p>
			<p class="typo-color--sub">text color-sub</p>
			<p class="typo-color--success">text color-success</p>
			<p class="typo-color--error">text color-error</p>
		</div>
		<pre class="example-code">
			<code>&lt;p class="typo-color--base">text color-base&lt;/p>
&lt;p class="typo-color--key">text color-key&lt;/p>
&lt;p class="typo-color--sub">text color-sub&lt;/p>
&lt;p class="typo-color--success">text color-success&lt;/p>
&lt;p class="typo-color--error">text color-error&lt;/p></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="alignment"/>
		<p>클래스 이름으로 글자를 정렬합니다.</p>
		<div class="example">
			<p class="typo-align--left">text align - left</p>
			<hr>
			<p class="typo-align--center">text align - center</p>
			<hr>
			<p class="typo-align--right">text align - right</p>
			<hr>
			<p class="typo-align--justify">
				text align - justify text align - justify text align - justify text align - justify text align - justify text align - justify text align - justify text align - justify text align - justify text align - justify text align - justify text align - justifytext align - justifytext align - justify text align - justify text align - justify...
			</p>
		</div>
		<pre class="example-code">
			<code>&lt;p class="typo-align--left">text&lt;/p>
&lt;p class="typo-align--center">text&lt;/p>
&lt;p class="typo-align--right">text&lt;/p>
&lt;p class="typo-align--justify">text&lt;/p></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="list"/>
		<p>목록에서 사용할 수 있는 스타일</p>
		<div class="example">
			<ul class="typo-list">
				<li>apple</li>
				<li>banana</li>
				<li>mango</li>
			</ul>
			<hr>
			<ul class="typo-list--not-native">
				<li>apple</li>
				<li>banana</li>
				<li>mango</li>
			</ul>
		</div>
		<pre class="example-code">
			<code>&lt;ul class="typo-list">
	&lt;li>...&lt;/li>
&lt;/ul>

&lt;ul class="typo-list--not-native">
	&lt;li>...&lt;/li>
&lt;/ul></code>
		</pre>

		<p>inline 형식으로 가로로 정렬할 수 있습니다.</p>
		<div class="example">
			<ul class="typo-list--inline">
				<li>apple</li>
				<li>banana</li>
				<li>mango</li>
			</ul>
		</div>
		<pre class="example-code">
			<code>&lt;ul class="typo-list--inline">
	&lt;li>...&lt;/li>
&lt;/ul></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="description list"/>
		<p>글 본문의 제목과 내용의 조합으로 사용합니다.</p>
		<div class="example">
			<dl class="typo-description-list">
				<dt>Description lists</dt>
				<dd>A description list is perfect for defining terms.</dd>
				<dt>Euismod</dt>
				<dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
			</dl>
		</div>
		<pre class="example-code">
			<code>&lt;dl class="typo-description-list">
	&lt;dt>&lt;/dt>
	&lt;dd>&lt;/dd>
	&lt;dt>&lt;/dt>
	&lt;dd>&lt;/dd>
&lt;/dl></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="blockquote"/>
		<p>특정 문장을 강조할때 사용합니다.</p>
		<div class="example">
			<blockquote class="typo-blockquote">
				<h3 class="typo-description__title">Euismod</h3>
				<p class="typo-description">
					Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
				</p>
			</blockquote>
		</div>
		<pre class="example-code">
			<code>&lt;blockquote class="typo-blockquote">
	&lt;p class="typo-description">
		...
	&lt;/p>
&lt;/blockquote></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="bracket"/>
		<p>글을 따옴표나 괄호를 감쌀때 사용합니다.</p>
		<div class="example">
			<p class="typo-bracket">bracket</p>
			<p class="typo-bracket--square">bracket square</p>
			<p class="typo-bracket--quot">quot</p>
			<p class="typo-bracket--small-quot">small quot</p>
		</div>
		<pre class="example-code">
			<code>&lt;p class="typo-bracket">bracket&lt;/p>
&lt;p class="typo-bracket--square">bracket square&lt;/p>
&lt;p class="typo-bracket--quot">quot&lt;/p>
&lt;p class="typo-bracket--small-quot">small quot&lt;/p></code>
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
