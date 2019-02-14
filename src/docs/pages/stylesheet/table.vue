<template>
<article class="page">
	<head-title type="h2" title="table"/>

	<blockquote>
		<strong>Source: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/css/table.scss" target="_blank">table.scss</a></strong>
	</blockquote>

	<p>
		테이블 스타일 가이드에 대하여 다룹니다.<br/>
		변화의 폭이 크기 때문에 컴포넌트 보다는 스타일시트로 만들어서 사용하는것이 좋아 보입니다.
	</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>기본적인 모습의 테이블</p>
		<div class="example">
			<table class="table">
				<thead>
				<tr>
					<th>Date</th>
					<th>Name</th>
					<th>Address</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				</tbody>
				<tbody>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				</tbody>
				<tfoot>
				<tr>
					<th>Sum</th>
					<td class="typo-align--right">1234</td>
					<td class="typo-align--right">5678</td>
				</tr>
				</tfoot>
			</table>
		</div>
		<pre class="example-code">
			<code>&lt;table class="table">
	&lt;thead>
	&lt;tr>
		&lt;th>Date&lt;/th>
		&lt;th>Name&lt;/th>
		&lt;th>Address&lt;/th>
	&lt;/tr>
	&lt;/thead>
	&lt;tbody>
	&lt;tr>
		&lt;td>2016-05-03&lt;/td>
		&lt;td>Tom&lt;/td>
		&lt;td>No. 189, Grove St, Los Angeles&lt;/td>
	&lt;/tr>
	&lt;/tbody>
	&lt;tfoot>
	&lt;tr>
		&lt;th>Sum&lt;/th>
		&lt;td class="typo-align--right">1234&lt;/td>
		&lt;td class="typo-align--right">5678&lt;/td>
	&lt;/tr>
	&lt;/tfoot>
&lt;/table></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="striped"/>
		<p>짝수열이 반복적으로 배경색이 강조됩니다.</p>
		<div class="example">
			<table class="table table--striped">
				<thead>
				<tr>
					<th>Date</th>
					<th>Name</th>
					<th>Address</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				</tbody>
			</table>
		</div>
		<pre class="example-code"><code>&lt;table class="table table--striped"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="bordered"/>
		<p>모든 방향에 외곽선을 넣습니다.</p>
		<div class="example">
			<table class="table table--bordered">
				<thead>
				<tr>
					<th>Date</th>
					<th>Name</th>
					<th>Address</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				<tr>
					<td>2016-05-03</td>
					<td>Tom</td>
					<td>No. 189, Grove St, Los Angeles</td>
				</tr>
				</tbody>
			</table>
		</div>
		<pre class="example-code"><code>&lt;table class="table table--bordered"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="overflow"/>
		<p>
			가로 사이즈가 더 크게 사용된다면 스크롤을 할 수 있게됩니다.<br/>
			주로 반응형 모바일화면에서 유용하게 사용할 수 있습니다.
		</p>
		<div class="example">
			<div class="table--overflow">
				<table class="table">
					<tbody>
					<tr>
						<td>2016-05-03</td>
						<td>Tom</td>
						<td>No. 189, Grove St, Los Angeles</td>
					</tr>
					<tr>
						<td>2016-05-03</td>
						<td>Tom</td>
						<td>No. 189, Grove St, Los Angeles</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
		<pre class="example-code">
			<code>&lt;div class="table--overflow">
	&lt;table class="table"/>
&lt;/div></code>
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
