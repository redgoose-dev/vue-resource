<template>
<article class="page">
  <head-title type="h2" title="form / text"/>
  <blockquote>
    <p>
      <strong>
        component: <a :href="`${$store.state.url.github}blob/master/src/components/forms/text.vue`" target="_blank">text.vue</a><br/>
        scss: <a :href="`${$store.state.url.github}blob/master/src/components/forms/text.scss`" target="_blank">text.scss</a>
      </strong>
    </p>
  </blockquote>
  <p>
    <code>&lt;form-text/></code>컴포넌트는 텍스트 입력폼으로 사용되는 컴포넌트입니다.<br/>
    기능성보다 컴포넌트의 통일성에 더욱 촛점에 맞춰져있는 용도로 사용할 수 있습니다.
  </p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>
      기본적으로 사용되는 컴포넌트.<br/>
      입력폼은 기본적으로 block 스타일로 나옵니다.
    </p>
    <div class="example">
      <form-text placeholder="Please input message"/>
    </div>
    <pre class="example-code"><code>&lt;form-text placeholder="Please input message"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 `props`를 사용합니다.</p>
    <table class="table table--center table--bordered">
      <thead>
      <tr>
        <th>name</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>type</td>
        <td class="typo-align--left">
          입력폼 타입을 정합니다. <code>text, textarea, email, date, tel ...</code><br/>
          <a href="https://www.w3schools.com/tags/att_input_type.asp" target="_blank">HTML &lt;input> type Attribute</a> 페이지를 참고합니다.
        </td>
      </tr>
      <tr>
        <td>name</td>
        <td class="typo-align--left">`name` attribute 로 사용됩니다.</td>
      </tr>
      <tr>
        <td>id</td>
        <td class="typo-align--left">`id` attribute 로 사용됩니다.</td>
      </tr>
      <tr>
        <td>value</td>
        <td class="typo-align--left">내용 값</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td class="typo-align--left">내용이 없을때 임시로 표시되는 메시지</td>
      </tr>
      <tr>
        <td>maxlength</td>
        <td class="typo-align--left">최대 글자길이 제한.</td>
      </tr>
      <tr>
        <td>required</td>
        <td class="typo-align--left">필수값인지에 대한 여부</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td class="typo-align--left">비활성화</td>
      </tr>
      <tr>
        <td>readonly</td>
        <td class="typo-align--left">읽기전용</td>
      </tr>
      <tr>
        <td>inline</td>
        <td class="typo-align--left">인라인 형식으로 사용</td>
      </tr>
      <tr>
        <td>native-size</td>
        <td class="typo-align--left">`size` attribute 로 사용됩니다.</td>
      </tr>
      <tr>
        <td>rows</td>
        <td class="typo-align--left">`rows` attribute 로 사용하며 <code>type=textarea</code> 일때 사용됩니다.</td>
      </tr>
      <tr>
        <td>state</td>
        <td class="typo-align--left">컴포넌트의 상태</td>
      </tr>
      <tr>
        <td>size</td>
        <td class="typo-align--left">컴포넌트의 사이즈</td>
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
        <td>@change</td>
        <td class="typo-align--left">내용이 변했을때 발생하는 이벤트</td>
      </tr>
      <tr>
        <td>@position</td>
        <td class="typo-align--left">클릭하거나 내용을 입력할때 커서 위치를 알려줍니다.</td>
      </tr>
      </tbody>
    </table>
  </section>

  <section>
    <head-title type="h3" title="textarea"/>
    <p>
      <code>&lt;textarea/></code> 엘리먼트 형식으로 입력폼을 만들때 사용합니다.
    </p>
    <div class="example">
      <form-text type="textarea" placeholder="Please input message" :rows="3"/>
    </div>
    <pre class="example-code"><code>&lt;form-text type="textarea" :rows="2"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="size"/>
    <p>
      입력폼의 사이즈를 변경한다. 기본사이즈와 <code>small</code>, <code>large</code> 사이즈를 사용할 수 있습니다.<br/>
      <router-link to="#">form-select</router-link> 컴포넌트나 <router-link to="#">button-basic</router-link> 컴포넌트와의 사이즈가 호환되므로 같은 사이즈 타입으로 나란히 정렬 가능합니다.
    </p>
    <div class="example">
      <div class="row row-h-center row-gutter-h">
        <div class="col"><form-text size="small" placeholder="small"/></div>
        <div class="col"><form-text placeholder="basic"/></div>
        <div class="col"><form-text size="large" placeholder="large"/></div>
      </div>
    </div>
    <pre class="example-code"><code>// small
&lt;form-text size="small" placeholder="small"/>

// normal
&lt;form-text placeholder="basic"/>

// large
&lt;form-text size="large" placeholder="large"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="readonly"/>
    <p>입력폼을 읽기전용으로 속성을 사용합니다.</p>
    <div class="example">
      <form-text :readonly="true" placeholder="readonly"/>
    </div>
    <pre class="example-code"><code>&lt;form-text :readonly="true"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="disabled"/>
    <p>폼의 <code>disabled</code> 속성을 사용하여 비활성화 시킵니다.</p>
    <div class="example">
      <form-text :disabled="true" placeholder="disabled"/>
    </div>
    <pre class="example-code"><code>&lt;form-text :disabled="true"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="inline"/>
    <p>폼을 inline 형식으로 사용합니다.</p>
    <div class="example">
      <form-text :inline="true" native-size="15" placeholder="inline style"/>
    </div>
    <pre class="example-code"><code>&lt;form-text :inline="true" native-size="15"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="state"/>
    <p>
      폼이 어떤 상태인지 표시합니다.<br/>
      주로 잘못 입력했을때 폼에서 시각적으로 알려주면 많은 도움이 됩니다.
    </p>
    <div class="example">
      <div class="row row-gutter-h">
        <div class="col"><form-text state="primary" placeholder="primary"/></div>
        <div class="col"><form-text state="success" placeholder="success"/></div>
        <div class="col"><form-text state="error" placeholder="error"/></div>
      </div>
    </div>
    <pre class="example-code"><code>// primary
&lt;form-text state="primary"/>

// success
&lt;form-text state="success"/>

// error
&lt;form-text state="error"/></code></pre>
  </section>
</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
    'form-text': () => import('@/components/forms/text'),
  },
}
</script>
