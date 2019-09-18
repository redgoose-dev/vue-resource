<template>
<article class="page">
	<head-title type="h2" title="card"/>
	<blockquote>
		<p>
			<strong>component: <a :href="`${$store.state.url.github}tree/master/src/components/card`" target="_blank">card</a></strong>
		</p>
	</blockquote>
	<p>
		이미지 목록에서 썸네일 이미지로 사용하는 컴포넌트입니다.<br/>
		주로 목록에서 하나의 요소로 사용됩니다.
	</p>

	<section>
		<head-title type="h3" title="thumbnail"/>
		<p>
      정해진 사이즈에서 이미지가 노출되는 형태입니다.<br/>
      `slot`을 통하여 컴포넌트속에 요소를 삽입할 수 있습니다.
    </p>
		<div class="example">
			<card-thumbnail
				src="https://images.unsplash.com/photo-1568579021373-6a0de16e2ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
				title="title"
				type="cover"/>
		</div>
		<pre class="example-code"><code>&lt;card-thumbnail src="image.jpg" type="cover">
  &lt;div>box&lt;/div>
&lt;/card-thumbnail></code></pre>
    <p>
      사이즈는 `props`로 설정하지 않았습니다. 가장 큰 이유는 반응형웹에서 사용하는 media query를 사용하려면 css에서 사용할 수 있기 때문에 inline style로 사이즈를 고정시키면 반응형 디자인에 대응할 수 없습니다.<br/>
      그래서 사이즈에 관한 부분은 css로 처리하는것을 권장드립니다.
    </p>

		<head-title type="h4" title="props"/>
		<p><code>card-thumbnail</code> 컴포넌트에서 사용되는 `props`는 다음과 같습니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <colgroup>
          <col style="width: 100px">
          <col style="width: 80px">
          <col style="width: 100px">
          <col>
        </colgroup>
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Value</th>
          <th scope="col">Comment</th>
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
          <td>full-height</td>
          <td>Boolean</td>
          <td></td>
          <td class="typo-align--left">높이를 100%로 채울지에 대한 여부</td>
        </tr>
        </tbody>
      </table>
    </div>
	</section>

	<section>
		<head-title type="h3" title="row"/>
		<p>위아래 조합의 썸네일 이미지 요소입니다.</p>
		<div class="example">
			<card-row
				src="https://images.unsplash.com/photo-1568494354741-fa226f3722e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
				title="In friendship diminution instrument so"
        description="Brother set had private his letters observe outward resolve."
				image-fit="cover"
        class="out-card-row"/>
		</div>
    <pre class="example-code"><code>&lt;card-row
  src="image.jpg"
  title="title message"
  description="description message"/></code></pre>

    <head-title type="h4" title="props"/>
    <p><code>card-row</code> 컴포넌트에서 사용되는 `props`는 다음과 같습니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col" style="width: 100px">Name</th>
          <th scope="col" style="width: 80px">Type</th>
          <th scope="col" style="width: 100px">Value</th>
          <th scope="col">Comment</th>
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
          <td class="typo-align--left">제목</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String</td>
          <td></td>
          <td class="typo-align--left">설명</td>
        </tr>
        <tr>
          <td>image-fit</td>
          <td>String</td>
          <td><code>cover,contain</code></td>
          <td class="typo-align--left">이미지의 표시방식</td>
        </tr>
        </tbody>
      </table>
    </div>

    <head-title type="h4" title="slots"/>
    <p><code>card-row</code> 컴포넌트에서 사용되는 `slots`는 다음과 같습니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>image</td>
          <td class="typo-align--left">이미지 영역에서 요소를 추가합니다.</td>
        </tr>
        <tr>
          <td>body</td>
          <td class="typo-align--left">본문 영역에서 요소를 추가합니다.</td>
        </tr>
        <tr>
          <td>before</td>
          <td class="typo-align--left">컴포넌트 속 첫번째 위치에 요소를 추가합니다.</td>
        </tr>
        <tr>
          <td>after</td>
          <td class="typo-align--left">컴포넌트 속 마지막 위치에 요소를 추가합니다.</td>
        </tr>
        </tbody>
      </table>
    </div>
	</section>

	<section>
		<head-title type="h3" title="cell"/>
		<p>
      좌우 조합의 썸네일 이미지 요소입니다.<br/>
      이 컴포넌트의 높이 사이즈에 맞춰서 이미지
    </p>
    <div class="example">
      <card-cell
        src="https://images.unsplash.com/photo-1568583891504-630e325e9f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60"
        title="In friendship diminution instrument so"
        description="Brother set had private his letters observe outward resolve."
        class="out-card-cell"/>
    </div>
    <pre class="example-code"><code>&lt;card-cell
  src="image.jpg"
  title="title message"
  description="description message"/></code></pre>

    <head-title type="h4" title="props"/>
    <p><code>card-cell</code> 컴포넌트에서 사용되는 `props`는 다음과 같습니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col" style="width: 100px">Name</th>
          <th scope="col" style="width: 80px">Type</th>
          <th scope="col">Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>src</td>
          <td>String</td>
          <td class="typo-align--left">이미지 url</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td class="typo-align--left">제목</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String</td>
          <td class="typo-align--left">설명</td>
        </tr>
        <tr>
          <td>image-size</td>
          <td>Number</td>
          <td class="typo-align--left">컴포넌트의 높이와 이미지 사이즈가 같이 사용됩니다.</td>
        </tr>
        </tbody>
      </table>
    </div>

    <head-title type="h4" title="slots"/>
    <p><code>card-cell</code> 컴포넌트에서 사용되는 `slots`는 다음과 같습니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>image</td>
          <td class="typo-align--left">이미지 영역에서 요소를 추가합니다.</td>
        </tr>
        <tr>
          <td>body</td>
          <td class="typo-align--left">본문 영역에서 요소를 추가합니다.</td>
        </tr>
        <tr>
          <td>before</td>
          <td class="typo-align--left">컴포넌트 속 첫번째 위치에 요소를 추가합니다.</td>
        </tr>
        <tr>
          <td>after</td>
          <td class="typo-align--left">컴포넌트 속 마지막 위치에 요소를 추가합니다.</td>
        </tr>
        </tbody>
      </table>
    </div>

    <head-title type="h4" title="customize image size"/>
    <p>이미지의 가로사이즈를 설정하는 방법이 까다로웠습니다.</p>
    <p>외부에서 사이즈를 정할 수 있어야 하며 브라우저 사이즈에 따라 이미지 사이즈가 변할 수 있어야 하는 조건을 충족시키기 위하여 css의 값을 변수화 시키면 가능했습니다.</p>
    <p>
      먼저 사용할 컴포넌트 클래스 이름을 예제로 `cell`로 지정해둡니다.<br/>
      다음 css 예제코드에서 컴포넌트 높이를 통하여 이미지를 정사각형으로 유지할 수 있습니다. 그리고 미디어쿼리를 활용할 수 있다는것을 확실할 수 있습니다.
    </p>
    <pre class="example-code"><code>.cell {
  --card-cell-size: 80px;
}
@media (min-width: 1024px) {
  .cell {
    --card-cell-size: 120px;
  }
}</code></pre>
    <p>이 문서에 가변적으로 사이즈를 변경하는 모습으로 코드가 작성되어 있으니 <a href="https://github.com/redgoose-dev/vue-resource/blob/master/src/docs/pages/components/card/index.vue" target="_blank">문서 소스코드</a>를 참고하시길 바랍니다.</p>
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
.out-card-row {
  height: 240px;
}
.out-card-cell {
  --card-cell-size: 80px;
  @media (min-width: 1024px) {
    --card-cell-size: 120px;
  }
}
</style>
