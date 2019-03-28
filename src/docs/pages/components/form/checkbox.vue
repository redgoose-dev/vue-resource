<template>
<article class="page">
	<head-title type="h2" title="form / checkbox"/>

	<blockquote>
		<p>
			<strong>
				component: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/checkbox.vue" target="_blank">checkbox.vue</a><br/>
				scss: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/checkbox.scss" target="_blank">checkbox.scss</a>
			</strong>
		</p>
	</blockquote>

	<p>여러 항목들을 선택하는 컴포넌트 입니다.</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>기본적인 형태로 사용합니다.</p>
		<div class="example">
			<div class="row row-v-center">
				<div class="col--auto">
					<form-checkbox v-model="basic[0]" name="basic" label="Apple"/>
				</div>
				<div class="col--auto">
					<form-checkbox v-model="basic[1]" name="basic" label="Banana"/>
				</div>
				<div class="col--auto">
					<form-checkbox v-model="basic[2]" name="basic" label="Mango"/>
				</div>
			</div>
			<hr>
			<p>Selected : {{basic}}</p>
		</div>
		<pre class="example-code"><code>&lt;form-checkbox v-model="checked" label="apple"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="size"/>
		<p>컴포넌트의 사이즈</p>
		<div class="example">
			<div class="row row-v-center">
				<div class="col--auto">
					<form-checkbox name="size" size="small" label="Small"/>
				</div>
				<div class="col--auto">
					<form-checkbox name="size" label="Normal"/>
				</div>
				<div class="col--auto">
					<form-checkbox name="size" size="large" label="Large"/>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>// small
&lt;form-checkbox size="small"/>

// normal
&lt;form-checkbox/>

// large
&lt;form-checkbox size="large"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="color"/>
		<p>컴포넌트의 컬러</p>
		<div class="example">
			<div class="row row-v-center">
				<div class="col--auto">
					<form-checkbox name="color" label="Normal"/>
				</div>
				<div class="col--auto">
					<form-checkbox name="color" color="sub" label="Sub"/>
				</div>
				<div class="col--auto">
					<form-checkbox name="color" color="success" label="Success"/>
				</div>
				<div class="col--auto">
					<form-checkbox name="color" color="error" label="Error"/>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>// sub
&lt;form-checkbox color="sub"/>

// success
&lt;form-checkbox color="success"/>

// error
&lt;form-checkbox color="error"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="disabled"/>
		<p>비활성화 되었을때의 모습입니다.</p>
		<div class="example">
			<form-checkbox name="disabled" label="Disabled" :disabled="true"/>
		</div>
		<pre class="example-code"><code>&lt;form-checkbox :disabled="true"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="animation"/>
		<p>체크했을때의 애니메이션 방식</p>
		<div class="example">
			<div class="row row-v-center">
				<div class="col--auto">
					<form-checkbox name="color" label="Normal"/>
				</div>
				<div class="col--auto">
					<form-checkbox name="color" animation="elastic" label="Elastic"/>
				</div>
				<div class="col--auto">
					<form-checkbox name="color" animation="none" label="None"/>
				</div>
			</div>
		</div>
		<pre class="example-code"><code>// elastic
&lt;form-checkbox animation="elastic"/>

// none
&lt;form-checkbox animation="none"/></code></pre>
	</section>

	<section>
		<head-title type="h3" title="Check all event"/>
		<p>여러가지 체크박스를 모두 켜고 끌수 있습니다.</p>
		<div class="example">
			<div class="row row-v-center">
				<div class="col--auto">
					<form-checkbox v-model="checkAll[0]" name="check_all" label="Checkbox0"/>
				</div>
				<div class="col--auto">
					<form-checkbox v-model="checkAll[1]" name="check_all" label="Checkbox1"/>
				</div>
			</div>
			<hr>
			<p>checked: {{checkAll}}</p>
			<hr>
			<nav>
				<button-basic :inline="true" @click="onClickCheckAll(true)">on check all</button-basic>
				&nbsp;
				<button-basic :inline="true" color="sub" @click="onClickCheckAll(false)">off check all</button-basic>
			</nav>
		</div>
		<pre class="example-code"><code>// data
{ checkAll: [false, false] }

// components
&lt;form-checkbox v-model="checkAll[0]" label="Checkbox0"/>
&lt;form-checkbox v-model="checkAll[1]" label="Checkbox1"/>

// buttons
&lt;button @click="event(true)">on check all&lt;/button>
&lt;button @click="event(false)">off check all&lt;/button>

// button method
event(sw)
{
	switch(sw)
	{
		case true:
			this.checkAll = [true, true];
			break;
		case false:
			this.checkAll = [false, false];
			break;
	}
}</code></pre>
	</section>

	<section>
		<head-title type="h3" title="Custom event"/>
		<p>이 컴포넌트는 기본적으로 <code>v-model</code>을 사용하지만 직접 컨트롤 할 수 있습니다.</p>
		<div class="example">
			<form-checkbox name="custom" label="Custom checkbox" :checked="custom" @change="onChangeCheckbox"/>
			<p>checked: {{custom}}</p>
		</div>
		<pre class="example-code"><code>// data
{ custom: false }

// component
&lt;form-checkbox :checked="custom" @change="event"/>

// event method
event(sw, event)
{
	this.custom = sw;
}</code></pre>
	</section>

	<p>
		// TODO: 체크된 value 값 가져오기 작성예정.<br/>
		// TODO: <code>name=foo[]</code> 형식으로도 시도해볼 필요가 있음<br/>
		// TODO: https://github.com/redgoose-dev/vue-resource/issues/7
	</p>

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
				<td>name</td>
				<td>String</td>
				<td class="typo-align--left"><code>name</code> attribute 로 사용</td>
			</tr>
			<tr>
				<td>id</td>
				<td>String</td>
				<td class="typo-align--left"><code>id</code> attribute 로 사용</td>
			</tr>
			<tr>
				<td>label</td>
				<td>String</td>
				<td class="typo-align--left">항목에 표시되는 이름입니다. 값이 없으면 라디오 폼만 나타납니다.</td>
			</tr>
			<tr>
				<td>value</td>
				<td>String,Number,Boolean</td>
				<td class="typo-align--left"><code>value</code> attribute 로 사용</td>
			</tr>
			<tr>
				<td>checked</td>
				<td>String,Boolean</td>
				<td class="typo-align--left">체크되어있는지의 여부</td>
			</tr>
			<tr>
				<td>disabled</td>
				<td>Boolean</td>
				<td class="typo-align--left">비활성화</td>
			</tr>
			<tr>
				<td>required</td>
				<td>Boolean</td>
				<td class="typo-align--left">필수값인지에 대한 여부</td>
			</tr>
			<tr>
				<td>color</td>
				<td>String</td>
				<td class="typo-align--left">컴포넌트의 색상 <code>sub,success,error</code></td>
			</tr>
			<tr>
				<td>size</td>
				<td>String</td>
				<td class="typo-align--left">컴포넌트의 사이즈 <code>small,large</code></td>
			</tr>
			<tr>
				<td>animation</td>
				<td>String</td>
				<td class="typo-align--left">체크할때의 애니메이션 방식 <code>elastic,none</code></td>
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
				<th>params</th>
				<th>comment</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>@change</td>
				<td><code>sw,event</code></td>
				<td class="typo-align--left">체크박스의 상태가 변했을때 이벤트 발생</td>
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
		'form-checkbox': () => import('@/components/forms/checkbox'),
		'head-title': () => import('@/docs/layout/title'),
		'button-basic': () => import('@/components/button/basic'),
	},
	data()
	{
		return {
			basic: [true, false, false],
			checkAll: [false, false],
			custom: false,
		};
	},
	methods: {
		onClickCheckAll(sw)
		{
			switch(sw)
			{
				case true:
					this.checkAll = [true, true];
					break;
				case false:
					this.checkAll = [false, false];
					break;
			}
		},
		onChangeCheckbox(sw, event)
		{
			this.custom = sw;
		}
	},
}
</script>
