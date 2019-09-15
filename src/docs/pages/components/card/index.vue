<template>
<article class="page">
	<head-title type="h2" title="card"/>
	<blockquote>
		<p>
			<strong>
				component: <a :href="`${$store.state.url.github}tree/master/src/components/card`" target="_blank">card</a>
			</strong>
		</p>
	</blockquote>
	<p>
		이미지 목록에서 썸네일 이미지로 사용하는 컴포넌트입니다.<br/>
		주로 목록에서 하나의 요소로 사용됩니다.
	</p>

	<section>
		<head-title type="h3" title="thumbnail"/>
		<p>이미지만 노출되는 형태입니다.</p>
		<p>
			사이즈는 `props`로 설정하지 않았습니다. 가장 큰 이유는 반응형웹에서 사용하는 media query를 사용하려면 css에서 사용할 수 있기 때문에 inline style로 사이즈를 고정시키면 반응형 디자인에 대응할 수 없습니다.<br/>
			그래서 사이즈에 관한 부분은 css로 처리하는것을 권장드립니다.
		</p>
		<div class="example">
			<card-thumbnail
				src="https://images.unsplash.com/photo-1554504099-1f8349c359fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
				title="title"
				type="cover"
				:full="false"
			/>
		</div>
		<pre class="example-code"><code>&lt;card-thumbnail src="image.jpg" type="cover"/></code></pre>

		<head-title type="h4" title="props"/>
		<p>
			<code>card-thumbnail</code> 컴포넌트에서 사용되는 props는 다음과 같습니다.
		</p>
		<table class="table table--center table--bordered">
			<thead>
			<tr>
				<th>Name</th>
				<th>Type</th>
				<th>Value</th>
				<th>Comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>src</td>
				<td>String</td>
				<td></td>
				<td class="typo-align--left">이미지 url</td>
			</tr>
			<tr>
				<td>title</td>
				<td>String</td>
				<td></td>
				<td class="typo-align--left">이미지 제목. <code>alt</code> 속성에서 사용됩니다.</td>
			</tr>
			<tr>
				<td>type</td>
				<td>String</td>
				<td><code>cover,contain</code></td>
				<td class="typo-align--left">이미지 표시방식</td>
			</tr>
			<tr>
				<td>full</td>
				<td>Boolean</td>
				<td></td>
				<td class="typo-align--left">높이를 100%로 채울지에 대한 여부</td>
			</tr>
			</tbody>
		</table>
	</section>

	<section>
		<head-title type="h3" title="row"/>
		<p>위아래 조합의 썸네일 이미지 요소입니다.</p>
		<div class="example">
			<card-row
				src="image.jpg"
				title="title"
				type="cover"
			/>
		</div>
	</section>

	<section>
		<head-title type="h3" title="cell"/>
		<p>좌우 조합의 썸네일 이미지 요소입니다.</p>
	</section>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/layout/title'),
		'card-thumbnail': () => import('@/components/card/thumbnail'),
		'card-row': () => import('@/components/card/row'),
		'card-cell': () => import('@/components/card/cell'),
	},
}
</script>

<style lang="scss" scoped>

</style>
