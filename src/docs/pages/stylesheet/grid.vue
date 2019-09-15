<template>
<article class="page">
	<head-title type="h2" title="grid"/>

	<blockquote>
		<p>
			<strong>Source: <a :href="`${$store.state.url.github}blob/master/src/css/grid.scss`" target="_blank">grid.scss</a></strong>
		</p>
	</blockquote>

	<p>
		그리드 레이아웃 시스템에 대한 스타일시트.<br/>
		이 그리드의 컬럼은 총 12개로 되어있으며 <a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox의_기본_개념" target="_blank">`Flexbox`의 기본 개념</a>을 이용하여 그리드 레이아웃을 만들고 있습니다.
	</p>
	<p>
		레이아웃을 만들때 자주 사용되고 반응형 레이아웃을 만들떄 유용하게 사용할 수 있습니다.<br>
		무엇보다 중요한것은 미리 정해져있는 룰을 사용한 스타일시트를 사용하기 때문에 통일되고 규칙에 맞는 스타일 레이아웃을 유지할 수 있다는 점에서 사용하는데 의미가 크다고 봅니다.
	</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>기초적인 사용법은 다음과 같습니다.</p>
		<div class="example">
			<div class="example-grid">
				<div class="row">
					<div class="col"><span>col</span></div>
					<div class="col"><span>col</span></div>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>&lt;div class="row">
	&lt;div class="col">col&lt;/div>
	&lt;div class="col">col&lt;/div>
&lt;/div></code></pre>
		<p>만약 여러가지 속성을 같이 사용하고 싶다면 멀티클래스 형식으로 작성해줍니다.</p>
		<pre><code>&lt;div class="row row-gutter row-v-center"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="size"/>
		<p>
			기본 컬럼을 넣는다면 일정한 비율로 사이즈 조절이 되지만 총 사이즈를 나눈 수치를 클래스 이름으로 넣는다면 총 가로영역에서 등분된 사이즈로 컬럼이 표시됩니다.<br/>
			예제를 보는것이 이해하는데 도움이 될것입니다.
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
		<pre class="example-code"><code>&lt;div class="row">
	&lt;div class="col col-4">col&lt;/div>
	&lt;div class="col col-4">col&lt;/div>
	&lt;div class="col col-4">col&lt;/div>
&lt;/div></code></pre>
		<head-title type="h4" title="반응형 레이아웃에 대한 컬럼 사이즈 표"/>
		<p>
			다음 표는 스크린 사이즈의 조건에 맞으면 컬럼의 사이즈가 변하게 됩니다. <b>참고로 모바일 퍼스트 기준이며 반응형 사이즈 기준에 따라 달라집니다.</b>
		</p>
		<table class="table table--center table--bordered">
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
				<td>none</td>
				<td>.col-sm-</td>
				<td>.col-md-</td>
				<td>.col-lg-</td>
				<td>.col-xl-</td>
			</tr>
			</tbody>
		</table>
		<p>반응형 사이즈를 참고하여 다음과 같이 스크린 사이즈가 변함에 따라 컬럼 사이즈를 변경할 수 있습니다.</p>
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
		<pre class="example-code"><code>&lt;div class="row">
	&lt;div class="col">col&lt;/div>
	&lt;div class="col-8 col-lg-2">col&lt;/div>
	&lt;div class="col">col&lt;/div>
&lt;/div>

&lt;div class="row">
	&lt;div class="col-4 col-md-2">col&lt;/div>
	&lt;div class="col-4 col-md-8">col&lt;/div>
	&lt;div class="col-4 col-md-2">col&lt;/div>
&lt;/div></code></pre>
	</section>

	<section>
		<head-title type="h3" title="none size"/>
		<p>특정 스크린 사이즈에 따라 컬럼의 고정된 사이즈를 가변사이즈로 변경합니다.</p>
		<div class="example">
			<div class="example-grid">
				<div class="row">
					<div class="col"><span>col</span></div>
					<div class="col-auto"><span>col-auto</span></div>
					<div class="col col-md-auto"><span>col col-md-auto</span></div>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>&lt;div class="row">
	&lt;div class="col">col&lt;/div>
	&lt;div class="col-auto">col-auto&lt;/div>
	&lt;div class="col col-md-auto">col col-md-auto&lt;/div>
&lt;/div></code></pre>
	</section>

	<section>
		<head-title type="h3" title="gutter"/>
		<p>
			컬럼 사이의 가로 여백을 넣을 수 있습니다.<br/>
			간격 사이즈의 한 컬럼 사이즈는 <a :href="`${$store.state.url.github}blob/master/src/css/variables.scss`" target="_blank">variables.scss</a> 파일에 있는 <code>$size-grid-col-gutter</code> 값에서 변경할 수 있습니다.
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
		<pre class="example-code"><code>&lt;div class="row row-gutter">
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
	&lt;div class="col col-6">col-6&lt;/div>
&lt;/div></code></pre>
		<p>
			기본적으로 사용하면 위와같이 가로,세로축의 여백이 생깁니다.<br/>
			컬럼 엘리먼트에서 padding 값을 임의로 조정하고 있기 때문에 대략적으로 다음과 같은 형태로 컬럼속에 엘리먼트 하나를 감싼 상태에서 무언가를 넣는것을 권장합니다.
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
		<pre class="example-code"><code>&lt;div class="row row-gutter-h">
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
&lt;/div></code></pre>
		<p>가로나 세로 한쪽 축으로만 여백을 넣을 수 있습니다.</p>
	</section>

	<section>
		<head-title type="h3" title="alignment vertical"/>
		<p>
			<code>row</code> 높이가 특정 사이즈로 설정되어있다면 높이의 기준으로 정렬합니다. <code>align-items</code> 속성을 이용합니다.
		</p>
		<div class="example">
			<div class="example-grid">
				<div class="row row-v-start fixed-v">
					<div><span>item</span></div>
					<div><span>item</span></div>
				</div>
			</div>
			<hr>
			<div class="example-grid">
				<div class="row row-v-center fixed-v">
					<div><span>item</span></div>
					<div><span>item</span></div>
				</div>
			</div>
			<hr>
			<div class="example-grid">
				<div class="row row-v-end fixed-v">
					<div><span>item</span></div>
					<div><span>item</span></div>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>&lt;div class="row row-v-start"/>
&lt;div class="row row-v-center"/>
&lt;div class="row row-v-end"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="alignment horizontal"/>
		<p>컬럼들을 가로를 기준으로 정렬하며 <code>justify-context</code> 속성을 이용합니다.</p>
		<div class="example">
			<div class="example-grid">
				<div class="row row-h-start fixed-h">
					<div><span>item</span></div>
					<div><span>item</span></div>
					<div><span>item</span></div>
				</div>
			</div>
			<hr>
			<div class="example-grid">
				<div class="row row-h-center fixed-h">
					<div><span>item</span></div>
					<div><span>item</span></div>
					<div><span>item</span></div>
				</div>
			</div>
			<hr>
			<div class="example-grid">
				<div class="row row-h-end fixed-h">
					<div><span>item</span></div>
					<div><span>item</span></div>
					<div><span>item</span></div>
				</div>
			</div>
			<hr>
			<div class="example-grid">
				<div class="row row-h-around fixed-h">
					<div><span>item</span></div>
					<div><span>item</span></div>
					<div><span>item</span></div>
				</div>
			</div>
			<hr>
			<div class="example-grid">
				<div class="row row-h-between fixed-h">
					<div><span>item</span></div>
					<div><span>item</span></div>
					<div><span>item</span></div>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>&lt;div class="row row-h-start"/>
&lt;div class="row row-h-center"/>
&lt;div class="row row-h-end"/>
&lt;div class="row row-h-around"/>
&lt;div class="row row-h-between"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="order"/>
		<p>
			컬럼의 순서를 변경할때 사용됩니다. 여기서 추가로 반응형으로 스크린 사이즈에 따라 순서를 바꿀 수 있습니다.<br/>
			최대 12까지 지정할 수 있으며 더 높은숫자나 특별한 숫자를 사용하고 싶다면 직접 스타일을 넣으세요.
		</p>
		<div class="example">
			<div class="example-grid">
				<div class="row row-gutter">
					<div class="col order-1 order-md-2"><span>order-1 order-md-2</span></div>
					<div class="col order-2 order-md-1"><span>order-2 order-md-1</span></div>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>&lt;div class="row row-gutter">
	&lt;div class="order-1 order-md-2">col&lt;/div>
	&lt;div class="order-2 order-md-1">col&lt;/div>
&lt;/div></code></pre>
	</section>

	<section>
		<head-title type="h3" title="wrapper"/>
		<p>
			<code>.row-gutter</code>가 적용된 그리드 레이아웃을 감싸기 위한 용도로 만들어졌습니다. <code>.row-gutter</code>를 적용하면 사이드가 돌출되는 부분을 <code>overflow: hidden;</code>속성을 가리기 위한 용도로 사용할 수 있습니다.
		</p>
		<pre class="example-code"><code>&lt;div class="row-wrap">
	&lt;div class="col">&lt;/div>
&lt;/div></code></pre>
		<p>
			만약 <code>.row-wrap</code> 엘리먼트의 영역을 벗어나는 자식 요소가 있다면 <code>overflow: hidden;</code> 속성 때문에 요소가 잘려서 안보이기 때문에 <code>.row-wrap</code> 클래스를 사용하지 않는것을 권장드립니다.
		</p>
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
