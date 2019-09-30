<template>
<article class="page">
  <head-title type="h2" title="modal - basic"/>
  <blockquote>
    <p>
      <strong>
        component: <a :href="`${$store.state.url.github}tree/master/src/components/modal/basic`" target="_blank">modal.basic</a><br/>
      </strong>
    </p>
  </blockquote>
  <p>
    일종의 레이어 팝업이라고 볼 수 있으며 이 컴포넌트는 기본적인 형태의 modal 이라고 볼 수 있습니다.<br/>
    화면 중간에 열리기 때문에 적은 내용으로 사용하는것에 적절하다고 볼 수 있습니다.
  </p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적으로 사용할때의 모습</p>
    <div class="example">
      <button-basic :inline="true" @click="basic = true">open basic modal</button-basic>
    </div>
    <pre class="example-code"><code>&lt;modal-basic :visible="show" @click="show = false" :flex="true">
  &lt;p>modal content&lt;/p>
&lt;/modal-basic></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col" style="width: 120px">Name</th>
          <th scope="col" style="width: 80px">Type</th>
          <th scope="col">Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>visible</td>
          <td>Boolean</td>
          <td class="typo-align--left">팝업을 보이는 여부</td>
        </tr>
        <tr>
          <td>flex</td>
          <td>Boolean</td>
          <td class="typo-align--left"><code>display: flex</code> 속성을 사용하여 하위 내용을 중간으로 배치합니다.</td>
        </tr>
        <tr>
          <td>background</td>
          <td>String</td>
          <td class="typo-align--left">
            팝업의 배경색을 정합니다.
            <br/>사용할 수 있는 값은 <code>dark|light</code> 입니다.
          </td>
        </tr>
        <tr>
          <td>overflow</td>
          <td>Boolean</td>
          <td class="typo-align--left">팝업이 열릴때 스크롤바를 없앱니다.</td>
        </tr>
        <tr>
          <td>html-class-name</td>
          <td>String</td>
          <td class="typo-align--left">
            팝업이 열릴때 <code>html</code>엘리먼트에 들어가는 클래스 이름입니다.<br/>
            <code>overflow</code>값이 `true`일때 사용할 수 있습니다.
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section>
    <head-title type="h3" title="mixin"/>
    <p>관련 컴포넌트들를 조합하여 팝업화면을 만듭니다.</p>
    <div class="example">
      <button-basic :inline="true" @click="mixin = true">open mixin modal</button-basic>
    </div>
    <pre class="example-code"><code>&lt;modal-basic
  :visible="mixin"
  :flex="true"
  background="dark"
  html-class-name="custom-class-name"
  @click="mixin = false">
  &lt;modal-basic-wrap>
    &lt;modal-basic-header title="Popup title" @close="mixin = false"/>
    &lt;modal-basic-body>
      &lt;div>modal content&lt;/div>
    &lt;/modal-basic-body>
  &lt;/modal-basic-wrap>
&lt;/modal-basic></code></pre>
    <p>다음과 같은 하위 컴포넌트를 사용합니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col" style="width: 150px">Name</th>
          <th scope="col">Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>wrap</td>
          <td class="typo-align--left">팝업 내용을 덮는 컴포넌트</td>
        </tr>
        <tr>
          <td>header</td>
          <td class="typo-align--left">팝업에서 사용하는 헤더</td>
        </tr>
        <tr>
          <td>body</td>
          <td class="typo-align--left">팝업 안에서 사용하는 내용</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>

  <modal-basic
    :visible="basic"
    :flex="true"
    background="light"
    @click="basic = false">
    <div style="background:#fff;padding:20px;border: 5px solid red;">content text</div>
  </modal-basic>
  <modal-basic
    :visible="mixin"
    :flex="true"
    background="dark"
    html-class-name="foo bar"
    @click="mixin = false">
    <modal-basic-wrap>
      <modal-basic-header title="Popup title" @close="mixin = false"/>
      <modal-basic-body>
        <div>modal content</div>
      </modal-basic-body>
    </modal-basic-wrap>
  </modal-basic>
</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
    'button-basic': () => import('@/components/button/basic'),
    'modal-basic': () => import('@/components/modal/basic'),
    'modal-basic-wrap': () => import('@/components/modal/basic/wrap'),
    'modal-basic-header': () => import('@/components/modal/basic/header'),
    'modal-basic-body': () => import('@/components/modal/basic/body'),
  },
  data()
  {
    return {
      basic: false,
      mixin: false,
    };
  },
}
</script>
