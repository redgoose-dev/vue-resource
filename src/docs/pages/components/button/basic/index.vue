<template>
<article class="page">
	<head-title type="h2" title="button - basic"/>

	<blockquote>
		<p>
			<strong>Source: <a href="https://github.com/redgoose-dev/vue-resource/tree/master/src/components/button/basic" target="_blank">button/basic</a></strong>
		</p>
	</blockquote>

	<p>버튼으로 사용되는 컴포넌트입니다.</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>기본 디자인의 버튼 컴포넌트입니다. <code>props</code> 값 상황에 따라서 버튼 컴포넌트가 변합니다.</p>
		<div class="example">
			<div class="row row-gutter-h">
				<div class="col">
					<button-basic to="/">router-link</button-basic>
				</div>
				<div class="col">
					<button-basic href="/">anchor</button-basic>
				</div>
				<div class="col">
					<button-basic>button</button-basic>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>// router-link
&lt;button-basic to="/">router-link&lt;/button-basic>

// anchor
&lt;button-basic href="/">anchor&lt;/button-basic>

// button
&lt;button-basic>button&lt;/button-basic></code></pre>
	</section>

	<section>
		<head-title type="h3" title="color"/>
		<p>버튼의 컬러</p>
		<div class="example">
			<div>
				<div class="row row-gutter">
					<div class="col col-4">
						<button-basic>default</button-basic>
					</div>
					<div class="col col-4">
						<button-basic color="sub">sub</button-basic>
					</div>
					<div class="col col-4">
						<button-basic color="light">light</button-basic>
					</div>
					<div class="col col-4">
						<button-basic color="dark">dark</button-basic>
					</div>
					<div class="col col-4">
						<button-basic color="none">none</button-basic>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<head-title type="h3" title="size"/>
		<p>버튼의 사이즈</p>
		<div class="example">
			<div>
				<div class="row row-v-center row-gutter">
					<div class="col col-4">
						<button-basic size="small">small</button-basic>
					</div>
					<div class="col col-4">
						<button-basic>normal</button-basic>
					</div>
					<div class="col col-4">
						<button-basic size="large">large</button-basic>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<head-title type="h3" title="outline"/>
		<p>버튼의 외곽선 스타일로 변경합니다.</p>
		<div class="example">
			<button-basic :outline="true">button</button-basic>
		</div>
	</section>

	<section>
		<head-title type="h3" title="round"/>
		<p>버튼의 가장자리를 둥글게 변경합니다.</p>
		<div class="example">
			<button-basic :round="true">button</button-basic>
		</div>
	</section>

	<section>
		<head-title type="h3" title="disabled"/>
		<p>버튼을 비활성화 합니다.</p>
		<div class="example">
			<div class="row row-gutter-h">
				<div class="col">
					<button-basic :disabled="false" @click="alert">button</button-basic>
				</div>
				<div class="col">
					<button-basic :disabled="true" @click="alert">disabled</button-basic>
				</div>
			</div>
		</div>
	</section>

	<section>
		<head-title type="h3" title="inline"/>
		<p>버튼을 <code>inline-block</code>으로 변경합니다.</p>
		<div class="example">
			<button-basic :inline="true">button</button-basic>
		</div>
	</section>

	<section>
		<head-title type="h3" title="props"/>
		<p>이 컴포넌트에서 사용되는 props 목록입니다.</p>
		<table class="table table--center table--bordered">
			<thead>
			<tr>
				<th scope="col">Name</th>
				<th scope="col" width="60">Type</th>
				<th scope="col">Value</th>
				<th scope="col">Default</th>
				<th scope="col">Comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>to</td>
				<td><code>String</code></td>
				<td></td>
				<td><code>null</code></td>
				<td class="typo-align--left"><code>&lt;router-link/></code>로 사용합니다.</td>
			</tr>
			<tr>
				<td>href</td>
				<td><code>String</code></td>
				<td></td>
				<td><code>null</code></td>
				<td class="typo-align--left"><code>&lt;a/></code>로 사용합니다.</td>
			</tr>
			<tr>
				<td>target</td>
				<td><code>String</code></td>
				<td></td>
				<td><code>null</code></td>
				<td class="typo-align--left"><code>&lt;a/></code> 엘리먼트에서 `target` 속성으로 사용합니다.</td>
			</tr>
			<tr>
				<td>type</td>
				<td><code>String</code></td>
				<td>button,reset,submit</td>
				<td><code>null</code></td>
				<td class="typo-align--left"><code>&lt;button/></code> 엘리먼트에서의 `type` 속성값입니다.</td>
			</tr>

			<tr>
				<td>title</td>
				<td><code>String</code></td>
				<td></td>
				<td><code>null</code></td>
				<td class="typo-align--left">제목</td>
			</tr>
			<tr>
				<td>size</td>
				<td><code>String</code></td>
				<td>small,large</td>
				<td><code>null</code></td>
				<td class="typo-align--left">사이즈</td>
			</tr>
			<tr>
				<td>color</td>
				<td><code>String</code></td>
				<td>sub,light,dark,none</td>
				<td><code>null</code></td>
				<td class="typo-align--left">컬러</td>
			</tr>
			<tr>
				<td>outline</td>
				<td><code>Boolean</code></td>
				<td>true,false</td>
				<td><code>false</code></td>
				<td class="typo-align--left">외곽선 스타일로 변경</td>
			</tr>
			<tr>
				<td>round</td>
				<td><code>Boolean</code></td>
				<td>true,false</td>
				<td><code>false</code></td>
				<td class="typo-align--left">겉부분을 둥글게 바꿉니다.</td>
			</tr>
			<tr>
				<td>disabled</td>
				<td><code>Boolean</code></td>
				<td>true,false</td>
				<td><code>false</code></td>
				<td class="typo-align--left">비활성화 합니다.</td>
			</tr>
			<tr>
				<td>inline</td>
				<td><code>Boolean</code></td>
				<td>true,false</td>
				<td><code>false</code></td>
				<td class="typo-align--left"><code>display: inline-block</code> 형식으로 속성을 바꿉니다.</td>
			</tr>
			</tbody>
		</table>
	</section>

	<section>
		<head-title type="h3" title="event"/>
		<p>컴포넌트에서 사용하는 이벤트</p>
		<table class="table table--center table--bordered">
			<thead>
			<tr>
				<th>name</th>
				<th>comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>@click</td>
				<td class="typo-align--left">버튼을 클릭했을때 발생하는 이벤트</td>
			</tr>
			</tbody>
		</table>
	</section>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/component/title'),
		'button-basic': () => import('@/components/button/basic'),
	},
	methods: {
		alert()
		{
			alert('alert message');
		}
	}
}
</script>
