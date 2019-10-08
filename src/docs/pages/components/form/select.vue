<template>
<article class="page">
  <head-title type="h2" title="form / select"/>
  <blockquote>
    <strong>
      component: <a :href="`${$store.state.url.github}blob/master/src/components/forms/select`" target="_blank">select</a>
    </strong>
  </blockquote>
  <p>
    여러 항목들중에서 하나를 선택하는 <code>&lt;form-select/></code> 컴포넌트입니다.<br/>
    <code>slot</code>을 이용하여 <code>&lt;option/></code> 엘리먼트 요소를 만들어서 사용하는 방식입니다.
  </p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적인 형태로 사용합니다.</p>
    <div class="example">
      <form-select placeholder="Please pick fruit." v-model="fruit">
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="mango">mango</option>
      </form-select>
    </div>
    <pre class="example-code"><code>&lt;form-select placeholder="Please pick fruit." v-model="fruit">
  &lt;option value="apple">apple&lt;/option>
  &lt;option value="banana">banana&lt;/option>
  &lt;option value="mango">mango&lt;/option>
&lt;/form-select></code></pre>
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
        <td>selected</td>
        <td>String,Number</td>
        <td class="typo-align--left">선택된 value 값</td>
      </tr>
      <tr>
        <td>required</td>
        <td>Boolean</td>
        <td class="typo-align--left">필수값인지에 대한 여부</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>Boolean</td>
        <td class="typo-align--left">비활성화</td>
      </tr>
      <tr>
        <td>inline</td>
        <td>Boolean</td>
        <td class="typo-align--left">인라인 형식으로 사용</td>
      </tr>
      <tr>
        <td>multiple</td>
        <td>Boolean</td>
        <td class="typo-align--left">여러항목 사용</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>String</td>
        <td class="typo-align--left">
          컴포넌트를 설명하는 글을 넣습니다. 이것을 사용하면 값이없는 <code>option</code>이 첫번째로 만들어집니다.
        </td>
      </tr>
      <tr>
        <td>size</td>
        <td>String</td>
        <td class="typo-align--left">컴포넌트의 사이즈 <code>small, large</code></td>
      </tr>
      <tr>
        <td>state</td>
        <td>String</td>
        <td class="typo-align--left">컴포넌트의 상태 <code>primary, success, error</code></td>
      </tr>
      <tr>
        <td>native</td>
        <td>Boolean</td>
        <td class="typo-align--left">네이티브 형태의 모습으로 사용합니다.</td>
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
        <th>Name</th>
        <th>Comment</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>@change</td>
        <td class="typo-align--left">선택한 요소가 변경되면 호출됩니다.</td>
      </tr>
      </tbody>
    </table>
  </section>

  <section>
    <head-title type="h3" title="disabled"/>
    <p>비활성화 되었을때의 모습입니다.</p>
    <div class="example">
      <form-select :disabled="true" placeholder="disabled select"/>
    </div>
    <pre class="example-code"><code>&lt;form-select :disabled="true"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="multiple"/>
    <p>여러가지 항목을 선택할 용도로 사용합니다.</p>
    <div class="example">
      <form-select :multiple="true">
        <option value="option1">option #1</option>
        <option value="option2">option #2</option>
        <option value="option3">option #3</option>
      </form-select>
    </div>
    <pre class="example-code"><code>&lt;form-select :multiple="true"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="size"/>
    <p>컴포넌트의 높이 사이즈</p>
    <div class="example">
      <div class="row row-h-center row-gutter-h">
        <div class="col"><form-select size="small" placeholder="small"/></div>
        <div class="col"><form-select placeholder="basic"/></div>
        <div class="col"><form-select size="large" placeholder="large"/></div>
      </div>
    </div>
    <pre class="example-code"><code>// small
&lt;form-select size="small" placeholder="small"/>

// normal
&lt;form-select placeholder="basic"/>

// large
&lt;form-select size="large" placeholder="large"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="inline"/>
    <p>인라인 형식으로 사용합니다.</p>
    <div class="example">
      <form-select :inline="true" placeholder="inline select"/>
    </div>
    <pre class="example-code"><code>&lt;form-select :inline="true"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="state"/>
    <p>폼이 어떤 상태인지 표시합니다.</p>
    <div class="example">
      <div class="row row-h-center row-gutter-h">
        <div class="col"><form-select state="primary" placeholder="primary"/></div>
        <div class="col"><form-select state="success" placeholder="success"/></div>
        <div class="col"><form-select state="error" placeholder="error"/></div>
      </div>
    </div>
    <pre class="example-code"><code>// primary
&lt;form-select state="primary"/>

// success
&lt;form-select state="success"/>

// error
&lt;form-select state="error"/></code></pre>
  </section>
</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
    'form-select': () => import('@/components/forms/select'),
  },
  data()
  {
    return {
      fruit: '',
    };
  },
}
</script>
