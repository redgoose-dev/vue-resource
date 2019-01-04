<template>
<article class="page">
	<head-title type="h2" title="grid"/>

	<blockquote>
		<p>
			<strong>Source: <a href="https://github.com/redgoose-dev/vue-redgoose-source/blob/master/src/css/grid.scss" target="_blank">grid.scss</a></strong>
		</p>
	</blockquote>

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
					<div class="col"><span>col</span></div>
					<div class="col"><span>col</span></div>
				</div>
			</div>
		</div>
		<pre class="example-code">
			<code>&lt;div class="row">
	&lt;div class="col">col&lt;/div>
	&lt;div class="col">col&lt;/div>
&lt;/div></code>
		</pre>
		<p>만약 여러가지 속성을 같이 사용하고 싶다면 멀티클래스 형식으로 작성해준다.</p>
		<pre><code>&lt;div class="row row-gutter row-v-center"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="size"/>
		<p>
			기본 컬럼을 넣는다면 일정한 비율로 사이즈 조절이 되지만 총 사이즈를 나눈 수치를 클래스 이름으로 넣는다면 총 가로영역에서 등분된 사이즈로 컬럼이 표시된다.<br/>
			예제를 보는것이 이해하는데 도움이 될것이다.
		</p>
		<div class="example">
			<div class="example-grid">
				<div class="row">
					<div class="col col-4"><span>col col-4</span></div>
					<div class="col col-4"><span>col col-4</span></div>
					<div class="col col-4"><span>col col-4</span></div>
				</div>
			</div>
		</div>
		<pre class="example-code">
			<code>&lt;div class="row">
	&lt;div class="col col-4">col&lt;/div>
	&lt;div class="col col-4">col&lt;/div>
	&lt;div class="col col-4">col&lt;/div>
&lt;/div></code>
		</pre>
		<head-title type="h4" title="반응형 레이아웃에 대한 컬럼 사이즈 표"/>
		<p>
			다음 표는 스크린 사이즈의 조건에 맞으면 컬럼의 사이즈가 변하게 된다. <b>참고로 모바일 퍼스트 기준이며 반응형 사이즈 기준에 따라 달라진다.</b>
		</p>
		<table>
			<caption>Size table</caption>
			<thead>
			<tr>
				<th>Mobile</th>
				<th>Tablet</th>
				<th>Desktop</th>
				<th>Desktop large</th>
				<th>Desktop extra</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th>none</th>
				<th>.col-sm-</th>
				<th>.col-md-</th>
				<th>.col-lg-</th>
				<th>.col-xl-</th>
			</tr>
			</tbody>
		</table>
		<p>반응형 사이즈를 참고하여 다음과 같이 스크린 사이즈가 변함에 따라 컬럼 사이즈를 변경할 수 있다.</p>
		<div class="example">
			<div class="example-grid">
				<div class="row">
					<div class="col"><span>col</span></div>
					<div class="col-8 col-lg-2"><span>col-8 col-lg-2</span></div>
					<div class="col"><span>col</span></div>
				</div>
			</div>
			<hr>
			<div class="example-grid">
				<div class="row">
					<div class="col-4 col-md-2"><span>col-4 col-md-2</span></div>
					<div class="col-4 col-md-8"><span>col-4 col-md-8</span></div>
					<div class="col-4 col-md-2"><span>col-4 col-md-2</span></div>
				</div>
			</div>
		</div>
		<pre class="example-code">
			<code>&lt;div class="row">
	&lt;div class="col">col&lt;/div>
	&lt;div class="col-8 col-lg-2">col&lt;/div>
	&lt;div class="col">col&lt;/div>
&lt;/div>

&lt;div class="row">
	&lt;div class="col-4 col-md-2">col&lt;/div>
	&lt;div class="col-4 col-md-8">col&lt;/div>
	&lt;div class="col-4 col-md-2">col&lt;/div>
&lt;/div></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="none size"/>
		<p>특정 스크린 사이즈에 따라 컬럼의 고정된 사이즈를 가변사이즈로 변경한다.</p>
		<div class="example">
			<div class="example-grid">
				<div class="row">
					<div class="col"><span>col</span></div>
					<div class="col-auto"><span>col-auto</span></div>
					<div class="col col-md-auto"><span>col col-md-auto</span></div>
				</div>
			</div>
		</div>
		<pre class="example-code">
			<code>&lt;div class="row">
	&lt;div class="col">col&lt;/div>
	&lt;div class="col-auto">col-auto&lt;/div>
	&lt;div class="col col-md-auto">col col-md-auto&lt;/div>
&lt;/div></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="gutter"/>
		<p>
			컬럼 사이의 가로 여백을 넣을 수 있다.<br/>
			간격 사이즈의 한 컬럼 사이즈는 <code>variables.scss</code> 파일에 있는 <code>$size-grid-col-gutter</code> 값에서 변경할 수 있다.
		</p>
		<div class="example">
			<div class="example-grid">
				<div class="row row-gutter">
					<div class="col col-6"><span>col-6</span></div>
					<div class="col col-6"><span>col-6</span></div>
					<div class="col col-6"><span>col-6</span></div>
					<div class="col col-6"><span>col-6</span></div>
				</div>
			</div>
		</div>
		<pre class="example-code">
			<code>&lt;div class="row row-gutter">
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
&lt;/div></code>
		</pre>
		<p>
			기본적으로 사용하면 위와같이 가로,세로축의 여백이 생긴다.<br/>
			컬럼 엘리먼트에서 padding 값을 임의로 조정하고 있기 때문에 대략적으로 다음과 같은 형태로 컬럼속에 엘리먼트 하나를 감싼 상태에서 무언가를 넣는것을 권장한다.
		</p>
		<pre><code>&lt;div class="col">
	&lt;span>content&lt;/span>
&lt;/div></code></pre>

		<div class="example">
			<div class="example-grid">
				<div class="row row-gutter-h">
					<div class="col col-6"><span>col-6</span></div>
					<div class="col col-6"><span>col-6</span></div>
					<div class="col col-6"><span>col-6</span></div>
					<div class="col col-6"><span>col-6</span></div>
				</div>
			</div>
			<hr>
			<div class="example-grid">
				<div class="row row-gutter-v">
					<div class="col col-6"><span>col-6</span></div>
					<div class="col col-6"><span>col-6</span></div>
					<div class="col col-6"><span>col-6</span></div>
					<div class="col col-6"><span>col-6</span></div>
				</div>
			</div>
		</div>
		<pre>
			<code>&lt;div class="row row-gutter-h">
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
&lt;/div>

&lt;div class="row row-gutter-v">
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
&lt;/div></code>
		</pre>
		<p>가로나 세로 한쪽 축으로만 여백을 넣을 수 있다.</p>
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
