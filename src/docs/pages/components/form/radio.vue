<template>
<article class="page">
  <head-title type="h2" title="form / radio"/>
  <blockquote>
    <strong>
      component: <a :href="`${$store.state.url.github}blob/master/src/components/forms/radio`" target="_blank">radio</a>
    </strong>
  </blockquote>
  <p>여러 항목들 중에 하나를 선택하는 컴포넌트 입니다.</p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적인 형태로 사용합니다.</p>
    <div class="example">
      <div class="row row-v-center">
        <div class="col--auto">
          <form-radio v-model="basic" name="basic" label="Apple" value="apple"/>
        </div>
        <div class="col--auto">
          <form-radio v-model="basic" name="basic" label="Banana" value="banana"/>
        </div>
      </div>
      <hr>
      <p>Selected : {{basic}}</p>
    </div>
    <pre class="example-code"><code>&lt;form-radio v-model="value" label="Label name" value="apple"/></code></pre>
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
        <td class="typo-align--left">라디오 버튼의 상태가 변했을때 이벤트 발생</td>
      </tr>
      </tbody>
    </table>
  </section>

  <section>
    <head-title type="h3" title="size"/>
    <p>컴포넌트의 사이즈</p>
    <div class="example">
      <div class="row row-v-center">
        <div class="col--auto">
          <form-radio name="size" size="small" label="Small"/>
        </div>
        <div class="col--auto">
          <form-radio name="size" label="Normal"/>
        </div>
        <div class="col--auto">
          <form-radio name="size" size="large" label="Large"/>
        </div>
      </div>
    </div>
    <pre class="example-code"><code>// small
&lt;form-radio size="small"/>

// normal
&lt;form-radio/>

// large
&lt;form-radio size="large"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="color"/>
    <p>컴포넌트의 컬러</p>
    <div class="example">
      <div class="row row-v-center">
        <div class="col--auto">
          <form-radio name="color" label="Normal"/>
        </div>
        <div class="col--auto">
          <form-radio name="color" color="sub" label="Sub"/>
        </div>
        <div class="col--auto">
          <form-radio name="color" color="success" label="Success"/>
        </div>
        <div class="col--auto">
          <form-radio name="color" color="error" label="Error"/>
        </div>
      </div>
    </div>
    <pre class="example-code"><code>// sub
&lt;form-radio color="sub"/>

// success
&lt;form-radio color="success"/>

// error
&lt;form-radio color="error"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="disabled"/>
    <p>비활성화 되었을때의 모습입니다.</p>
    <div class="example">
      <form-radio name="disabled" label="Disabled" :disabled="true"/>
    </div>
    <pre class="example-code"><code>&lt;form-radio :disabled="true"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="animation"/>
    <p>체크했을때의 애니메이션 방식</p>
    <div class="example">
      <div class="row row-v-center">
        <div class="col--auto">
          <form-radio name="color" label="Normal"/>
        </div>
        <div class="col--auto">
          <form-radio name="color" animation="elastic" label="Elastic"/>
        </div>
        <div class="col--auto">
          <form-radio name="color" animation="none" label="None"/>
        </div>
      </div>
    </div>
    <pre class="example-code"><code>// elastic
&lt;form-radio animation="elastic"/>

// none
&lt;form-radio animation="none"/></code></pre>
  </section>
</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
    'form-radio': () => import('@/components/forms/radio'),
  },
  data()
  {
    return {
      basic: 'apple',
    };
  },
}
</script>
