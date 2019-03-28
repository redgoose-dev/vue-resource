<template>
<article class="page">
	<head-title type="h2" title="form / switch"/>

	<blockquote>
		<p>
			<strong>
				component: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/switch.vue" target="_blank">switch.vue</a>
			</strong><br/>
			<strong>
				scss: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/switch.scss" target="_blank">switch.scss</a>
			</strong>
		</p>
	</blockquote>

	<p>
		<code>Switch</code> 컴포넌트는 상태를 <code>on/off</code> 형식으로 조작하는 ui 컴포넌트입니다.<br/>
		한번 누를때마다 `ON`과 `OFF`의 상태가 토글링되는 특징을 가지고 있습니다.
	</p>
	<p>
		이 컴포넌트는 한번 정해지면 그대로 사용될거 같아서 단순하게 만들어졌습니다. 그래서 스타일 변경은 컴포넌트 스타일시트에서 변경하는것을 권장드립니다.<br/>
	</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>기본적으로 사용되는 모습입니다.</p>
		<div class="example">
			<div class="row row-v-center row-gutter-h">
				<form-switch v-model="basic"/>
				<div>Switch value: {{basic}}</div>
			</div>
		</div>
		<pre class="example-code"><code>&lt;form-switch v-model="basic"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="basic"/>
		<p>비활성화 되었을때의 모습입니다.</p>
		<div class="example">
			<form-switch v-model="basic" :disabled="true"/>
		</div>
		<pre class="example-code"><code>&lt;form-switch v-model="basic" :disabled="true"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="props"/>
		<p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
		<table class="table table--center table--bordered">
			<thead>
			<tr>
				<th>Name</th>
				<th>Type</th>
				<th>Comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>title</td>
				<td>String</td>
				<td class="typo-align--left">버튼의 <code>title</code> attribute 로 사용</td>
			</tr>
			<tr>
				<td>disabled</td>
				<td>Boolean</td>
				<td class="typo-align--left">비활성화</td>
			</tr>
			<tr>
				<td>sw</td>
				<td>Boolean</td>
				<td class="typo-align--left">스위치 값</td>
			</tr>
			</tbody>
		</table>
	</section>

	<section>
		<head-title type="h3" title="event"/>
		<p>이 컴포넌트는 다음과 같은 <code>event</code>를 사용합니다.</p>
		<table class="table table--center table--bordered">
			<thead>
			<tr>
				<th>name</th>
				<th>params</th>
				<th>comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>@change</td>
				<td><code>sw,event</code></td>
				<td class="typo-align--left">스위치 상태가 변했을때 이벤트 발생</td>
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
		'head-title': () => import('@/docs/layout/title'),
		'form-switch': () => import('@/components/forms/switch'),
	},
	data()
	{
		return {
			basic: false,
		};
	},
}
</script>
