<template>
<article class="page">
	<head-title type="h2" title="form - text"/>

	<blockquote>
		<p>
			<strong>
				component: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/text.vue" target="_blank">text.vue</a><br/>
				scss: <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/text.scss" target="_blank">text.scss</a>
			</strong>
		</p>
	</blockquote>

	<p>
		<code>&lt;form-text/></code>컴포넌트는 텍스트 입력폼으로 사용되는 컴포넌트다.<br/>
		기능성보다 컴포넌트의 통일성에 더욱 촛점에 맞춰져있는 용도로 사용할 수 있다.
	</p>

	<section>
		<head-title type="h3" title="basic"/>
		<p>
			기본적으로 사용되는 컴포넌트<br/>
			입력폼은 기본적으로 block 스타일로 나온다.
		</p>
		<div class="example">
			<form-text placeholder="Please input message"/>
		</div>
		<pre class="example-code">
			<code>&lt;form-text placeholder="Please input message"/></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="textarea"/>
		<p>
			<code>&lt;textarea/></code> 엘리먼트 형식으로 입력폼을 만들때 사용한다.
		</p>
		<div class="example">
			<form-text type="textarea" placeholder="Please input message" :rows="3"/>
		</div>
		<pre class="example-code">
			<code>&lt;form-text type="textarea" :rows="2"/></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="size"/>
		<p>
			입력폼의 사이즈를 변경한다. 기본사이즈와 <code>small</code>, <code>large</code> 사이즈를 사용할 수 있다.<br/>
			<router-link to="#">form-select</router-link> 컴포넌트나 <router-link to="#">button-basic</router-link> 컴포넌트와의 사이즈가 호환되므로 같은 사이즈 타입으로 나란히 정렬 가능하다.
		</p>
		<div class="example">
			<div class="row row-h-center row-gutter-h">
				<div class="col"><form-text size="small" placeholder="small"/></div>
				<div class="col"><form-text placeholder="basic"/></div>
				<div class="col"><form-text size="large" placeholder="large"/></div>
			</div>
		</div>
		<pre class="example-code">
			<code>&lt;form-text size="small" placeholder="small"/>
&lt;form-text placeholder="basic"/>
&lt;form-text size="large" placeholder="large"/></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="readonly"/>
		<p>입력폼을 읽기전용으로 속성을 사용한다.</p>
		<div class="example">
			<form-text :readonly="true" placeholder="readonly"/>
		</div>
		<pre class="example-code">
			<code>&lt;form-text :readonly="true"/></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="disabled"/>
		<p>폼의 <code>disabled</code> 속성을 사용하여 비활성화 시킨다.</p>
		<div class="example">
			<form-text :disabled="true" placeholder="disabled"/>
		</div>
		<pre class="example-code">
			<code>&lt;form-text :disabled="true"/></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="inline"/>
		<p>폼을 inline 형식으로 사용한다.</p>
		<div class="example">
			<form-text :inline="true" native-size="15" placeholder="inline style"/>
		</div>
		<pre class="example-code">
			<code>&lt;form-text :inline="true" native-size="15"/></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="status"/>
		<p>폼이 어떤 상태인지 표시한다. 주로 잘못 입력했을때 폼에서 시각적으로 알려주면 많은 도움이 된다.</p>
		<div class="example">
			<div class="row row-gutter-h">
				<div class="col"><form-text state="primary" placeholder="primary"/></div>
				<div class="col"><form-text state="success" placeholder="success"/></div>
				<div class="col"><form-text state="error" placeholder="error"/></div>
			</div>
		</div>
		<pre class="example-code">
			<code>&lt;form-text state="primary"/>
&lt;form-text state="success"/>
&lt;form-text state="error"/></code>
		</pre>
	</section>

	<section>
		<head-title type="h3" title="props"/>
		<p>이 컴포넌트는 다음과 같은 `props`를 사용한다.</p>
		<table>
			<thead>
			<tr>
				<th>name</th>
				<th>description</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th>type</th>
				<td>
					입력폼 타입을 정한다. <code>text, textarea, email, date, tel ...</code><br/>
					<a href="https://www.w3schools.com/tags/att_input_type.asp" target="_blank">HTML &lt;input> type Attribute</a> 페이지를 참고한다.
				</td>
			</tr>
			<tr>
				<th>name</th>
				<td>`name` attribute 로 사용된다.</td>
			</tr>
			<tr>
				<th>id</th>
				<td>`id` attribute 로 사용된다.</td>
			</tr>
			<tr>
				<th>value</th>
				<td>내용 값</td>
			</tr>
			<tr>
				<th>placeholder</th>
				<td>내용이 없을때 임시로 표시되는 메시지</td>
			</tr>
			<tr>
				<th>maxlength</th>
				<td>최대 글자길이 제한.</td>
			</tr>
			<tr>
				<th>required</th>
				<td>필수값인지에 대한 여부</td>
			</tr>
			<tr>
				<th>disabled</th>
				<td>비활성화</td>
			</tr>
			<tr>
				<th>readonly</th>
				<td>읽기전용</td>
			</tr>
			<tr>
				<th>inline</th>
				<td>인라인 형식으로 사용</td>
			</tr>
			<tr>
				<th>native-size</th>
				<td>`size` attribute 로 사용된다.</td>
			</tr>
			<tr>
				<th>rows</th>
				<td>`rows` attribute 로 사용된다. <code>type=textarea</code> 일때 사용된다.</td>
			</tr>
			<tr>
				<th>state</th>
				<td>컴포넌트의 상태</td>
			</tr>
			<tr>
				<th>size</th>
				<td>컴포넌트의 사이즈</td>
			</tr>
			</tbody>
		</table>
	</section>

	<section>
		<head-title type="h3" title="event"/>
		<p>이 컴포넌트는 다음과 같은 `event`를 사용한다.</p>
		<table>
			<thead>
			<tr>
				<th>name</th>
				<th>description</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th>change</th>
				<td>내용이 변했을때 호출된다.</td>
			</tr>
			<tr>
				<th>position</th>
				<td>클락하거나 내용을 입력할때 커서 위치를 알려준다.</td>
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
		'form-text': () => import('@/components/forms/text'),
	},
}
</script>
