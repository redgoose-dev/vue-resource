<template>
<article class="page">
  <head-title type="h2" title="form / select-wrapper"/>
  <blockquote>
    <p>
      <strong>
        component: <a :href="`${$store.state.url.github}blob/master/src/components/forms/select-wrapper.vue`" target="_blank">select-wrapper.vue</a><br/>
        scss: <a :href="`${$store.state.url.github}blob/master/src/components/forms/select-wrapper.scss`" target="_blank">select-wrapper.scss</a>
      </strong>
    </p>
  </blockquote>
  <p>
    <router-link to="/components/form/select">form-select</router-link> 컴포넌트에서 좀더 직관적인 모습을 가진 모습으로 만들기 위하여 사용하는 <code>&lt;form-select/></code> 래퍼 컴포넌트입니다.<br/>
    대략적으로 select 컴포넌트가 네이티브 형태로 되어있는 스타일에서 커스텀화 하기위하여 만들어졌습니다.
  </p>
  <blockquote class="typo-blockquote">
    <code>&lt;form-select-wrapper/></code> 컴포넌트 내부에서 <code>&lt;form-select/></code> 컴포넌트를 사용하지 않기 때문에 직접 <code>&lt;form-select/></code> 컴포넌트를 slot 형태로 넣어줘야 합니다.
  </blockquote>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적인 사용법입니다.</p>
    <div class="example">
      <form-select-wrapper>
        <form-select v-model="fruit" :native="false">
          <option v-for="(o,k) in statics.options" :value="o.value">{{o.label}}</option>
        </form-select>
      </form-select-wrapper>
    </div>
    <pre class="example-code"><code>&lt;form-select-wrapper>
  &lt;form-select :native="false"/>
&lt;/form-select-wrapper></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
    <table class="table table--center table--bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Value</th>
        <th>Comment</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>state</td>
        <td>String</td>
        <td>primary,success,error</td>
        <td class="typo-align--left">컴포넌트의 상태</td>
      </tr>
      <tr>
        <td>inline</td>
        <td>Boolean</td>
        <td></td>
        <td class="typo-align--left">인라인 형식으로 사용</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>Boolean</td>
        <td></td>
        <td class="typo-align--left">비활성화</td>
      </tr>
      </tbody>
    </table>
  </section>

  <section>
    <head-title type="h3" title="state"/>
    <p>상태에 따른 화살표 아이콘 색깔을 변경합니다.</p>
    <div class="example">
      <div>
        <div class="row row-gutter-h">
          <div class="col">
            <form-select-wrapper state="primary">
              <form-select v-model="fruit" :native="false" state="primary" placeholder="primary">
                <option v-for="(o,k) in statics.options" :value="o.value">{{o.label}}</option>
              </form-select>
            </form-select-wrapper>
          </div>
          <div class="col">
            <form-select-wrapper state="success">
              <form-select v-model="fruit" :native="false" state="success" placeholder="success">
                <option v-for="(o,k) in statics.options" :value="o.value">{{o.label}}</option>
              </form-select>
            </form-select-wrapper>
          </div>
          <div class="col">
            <form-select-wrapper state="error">
              <form-select v-model="fruit" :native="false" state="error" placeholder="error">
                <option v-for="(o,k) in statics.options" :value="o.value">{{o.label}}</option>
              </form-select>
            </form-select-wrapper>
          </div>
        </div>
      </div>
    </div>
    <pre class="example-code"><code>// primary
&lt;form-select-wrapper state="primary">
  &lt;form-select :native="false" state="primary"/>
&lt;/form-select-wrapper>

// success
&lt;form-select-wrapper state="success">
  &lt;form-select :native="false" state="success"/>
&lt;/form-select-wrapper>

// error
&lt;form-select-wrapper state="error">
  &lt;form-select :native="false" state="error"/>
&lt;/form-select-wrapper></code></pre>
  </section>

  <section>
    <head-title type="h3" title="inline"/>
    <p><code>display: inline-block</code> 속성으로 변환할때 사용합니다.</p>
    <div class="example">
      <form-select-wrapper :inline="true">
        <form-select v-model="fruit" :native="false" :inline="true">
          <option v-for="(o,k) in statics.options" :value="o.value">{{o.label}}</option>
        </form-select>
      </form-select-wrapper>
    </div>
    <pre class="example-code"><code>&lt;form-select-wrapper :inline="true">
  &lt;form-select :native="false" :inline="true"/>
&lt;/form-select-wrapper></code></pre>
  </section>

  <section>
    <head-title type="h3" title="disabled"/>
    <p>폼을 비활성화 상태의 모습으로 바꿔줍니다.</p>
    <div class="example">
      <form-select-wrapper :disabled="true">
        <form-select v-model="fruit" :native="false" :disabled="true">
          <option v-for="(o,k) in statics.options" :value="o.value">{{o.label}}</option>
        </form-select>
      </form-select-wrapper>
    </div>
    <pre class="example-code"><code>&lt;form-select-wrapper :disabled="true">
  &lt;form-select :native="false" :disabled="true"/>
&lt;/form-select-wrapper></code></pre>
  </section>
</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
    'form-select': () => import('@/components/forms/select'),
    'form-select-wrapper': () => import('@/components/forms/select-wrapper'),
  },
  data()
  {
    return {
      fruit: '',
    };
  },
  created()
  {
    this.statics = {
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Mango', value: 'mango' },
      ],
    };
  },
}
</script>
