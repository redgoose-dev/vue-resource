<template>
<article class="page">
	<head-title type="h2" title="mixins"/>

	<blockquote>
		<strong>Source: <a href="https://github.com/redgoose-dev/vue-redgoose-source/blob/master/src/css/mixins.scss" target="_blank">mixins.scss</a></strong>
	</blockquote>

	<p>
		<a href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins" target="_blank">mixin</a>은 <code>scss</code>의 함수라고 볼 수 있다.<br/>
		스타일시트를 작성하는데 많이 도움이 되는 툴들이 들어있다.
	</p>
	<pre>
		<code>@include text-single-line();</code>
	</pre>
	<p>자세한 파라메터나 스타일 속성들은 다음 섹션을 참고하거나 소스 URL을 참고하는것을 권장한다.</p>

	<section>
		<head-title type="h3" title="responsive"/>
		<p>
			쉽고 통일된 사이즈로 media query 구현할 수 있다.<br/>
			모바일 퍼스트 기준으로 만들어져 있다. 예를들어 <code>tablet 보다 크다면..</code> 조건이 성립되면 해당 스타일로 바뀐다.
		</p>
		<pre>
			<code>@include responsive('tablet') {}
@include responsive('desktop') {}
@include responsive('desktop-1280') {}
@include responsive('desktop-1440') {}
@include responsive('desktop-1920') {}</code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="retina"/>
		<p>레티나 디스플레이일 경우에 해당 스타일로 바뀐다.</p>
		<pre>
			<code>@include retina() {}</code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="color-linear-gradient"/>
		<p>선형 그라디언트 컬러 표현을 한다.</p>
		<pre>
			<code>@include color-linear-gradient($matt-color, $start, $end, $direction);</code>
		</pre>
		<table>
			<caption>Parameters</caption>
			<thead>
			<tr>
				<th>name</th>
				<th>value</th>
				<th>comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th><code>$matt-color</code></th>
				<th></th>
				<td>그라디언트가 지원안될때 사용되는 단색컬러</td>
			</tr>
			<tr>
				<th><code>$start</code></th>
				<th></th>
				<td>시작 컬러</td>
			</tr>
			<tr>
				<th><code>$end</code></th>
				<th></th>
				<td>종료 컬러</td>
			</tr>
			<tr>
				<th><code>$direction</code></th>
				<th>vertical,horizontal</th>
				<td>그라디언트의 방향을 정한다.</td>
			</tr>
			</tbody>
		</table>
	</section>

	<section>
		<head-title type="h3" title="image-background"/>
		<p>배경 이미지 지원</p>
		<pre>
			<code>@include image-background();</code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="image-sprite"/>
		<p>
			스프라이드 이미지.<br/>
			이미지 경로는 파일이름까지 적는다. <code>@</code> 앞까지..
		</p>
		<pre>
			<code>@include image-sprite($src-1x, $src-2x, $width, $height);</code>
		</pre>
		<table>
			<caption>Parameters</caption>
			<thead>
			<tr>
				<th>name</th>
				<th>example</th>
				<th>comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th><code>$src-1x</code></th>
				<th>./sp-image.jpg</th>
				<td>스프라이드 1x 사이즈 이미지 경로</td>
			</tr>
			<tr>
				<th><code>$src-2x</code></th>
				<th>./sp-image@2x.jpg</th>
				<td>스프라이드 2x 사이즈 이미지 경로</td>
			</tr>
			<tr>
				<th><code>$width</code></th>
				<th>320px</th>
				<td>스프라이드 이미지 가로사이즈</td>
			</tr>
			<tr>
				<th><code>$height</code></th>
				<th>240px</th>
				<td>스프라이드 이미지 세로사이즈</td>
			</tr>
			</tbody>
		</table>
	</section>

	<section>
		<head-title type="h3" title="text-single-line"/>
		<p>한줄 텍스트 표현</p>
		<pre>
			<code>@include text-single-line();</code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="text-multi-line"/>
		<p>여러줄 텍스트 표현을 할 수 있다.</p>
		<pre>
			<code>@include text-multi-line($height, $row);</code>
		</pre>
		<table>
			<caption>Parameters</caption>
			<thead>
			<tr>
				<th>name</th>
				<th>value</th>
				<th>comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th><code>$height</code></th>
				<th>1rem</th>
				<td>1 라인당 높이 사이즈</td>
			</tr>
			<tr>
				<th><code>$row</code></th>
				<th>3</th>
				<td>최대 라인 수</td>
			</tr>
			</tbody>
		</table>
	</section>

	<section>
		<head-title type="h3" title="button-touch-options"/>
		<p>버튼에서 터치에 대한 추가속성을 넣는다.</p>
		<pre>
			<code>@include button-touch-options($opacity);</code>
		</pre>
		<table>
			<caption>Parameters</caption>
			<thead>
			<tr>
				<th>name</th>
				<th>value</th>
				<th>comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th><code>$opacity</code></th>
				<th>true</th>
				<td>버튼을 누르고 있을때 투명하게 한다.</td>
			</tr>
			</tbody>
		</table>
	</section>

	<section>
		<head-title type="h3" title="blind"/>
		<p>화면에서 안보이도록 한다.</p>
		<pre>
			<code>@include blind();</code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="horizontal scroll"/>
		<p>가로 스크롤을 표현한다. 주로 모바일에서 유용하다.</p>

		<head-title type="h4" title="horizontal-scroll-wrap"/>
		<p>아이템들을 감싸는 목록에서 적용해줘야한다.</p>
		<pre>
			<code>@include horizontal-scroll-wrap($padding-side, $padding-bottom);</code>
		</pre>
		<table>
			<caption>Parameters</caption>
			<thead>
			<tr>
				<th>name</th>
				<th>value</th>
				<th>comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th><code>$padding-side</code></th>
				<th>16px</th>
				<td>사이드 여백 사이즈</td>
			</tr>
			<tr>
				<th><code>$padding-bottom</code></th>
				<th>16px</th>
				<td>아래쪽 여백 사이즈. 아래쪽에 스크롤이 나오기때문에 여백이 필요하다.</td>
			</tr>
			</tbody>
		</table>
		<head-title type="h4" title="horizontal-scroll-item"/>
		<p>아이템에서 적용해줘야한다.</p>
		<pre>
			<code>@include horizontal-scroll-item($padding-side);</code>
		</pre>
		<table>
			<caption>Parameters</caption>
			<thead>
			<tr>
				<th>name</th>
				<th>value</th>
				<th>comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th><code>$padding-side</code></th>
				<th>16px</th>
				<td>사이드 여백 사이즈</td>
			</tr>
			<tr>
				<th><code>$padding-side-outer</code></th>
				<th>16px</th>
				<td>사이드 외곽영역 여백 사이즈.<br/>이 값이 없으면 <code>$padding-side</code>값으로 사용한다.</td>
			</tr>
			</tbody>
		</table>
		<head-title type="h4" title="example"/>
		<p>이것을 적용하면 다음과 같이 표현된다.</p>
		<div class="example">
			<ul class="horizontal-scroll-demo">
				<li v-for="o in Array(10)"><span>item</span></li>
			</ul>
		</div>
		<pre class="example-code">
			<code>ul {
	padding: 15px 0 0;
	@include horizontal-scroll-wrap(16px, 15px);
	margin: 0 -20px;
	list-style: none;
	box-sizing: border-box;
	background: #f4f4f4;
	li {
		@include horizontal-scroll-item(8px, 16px);
		span {
			display: block;
			width: 100px;
			height: 100px;
			background: $color-key;
		}
	}
}</code>
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

<style lang="scss" scoped>
@import "../../../css/variables";
@import "../../../css/mixins";

.horizontal-scroll-demo {
	padding: 15px 0 0;
	@include horizontal-scroll-wrap(16px, 15px);
	margin: 0 -20px;
	list-style: none;
	box-sizing: border-box;
	background: #f4f4f4;
	li {
		@include horizontal-scroll-item(8px, 16px);
		span {
			position: relative;
			display: block;
			width: 100px;
			height: 100px;
			background: $color-key;
			font-size: 0;
			&:after {
				content: 'item';
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 12px;
				color: #fff;
			}
		}
	}
}
</style>
