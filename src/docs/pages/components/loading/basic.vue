<template>
<article class="page">
  <head-title type="h2" title="loading - basic"/>
  <blockquote>
    <p>
      <strong>component: <a :href="`${$store.state.url.github}tree/master/src/components/loading/basic`" target="_blank">basic</a></strong>
    </p>
  </blockquote>
  <p>
    무언가 처리하고 있을때의 모습을 보여줄때 사용하는 컴포넌트<br/>
    아이콘 형태의 모습을 하고 있으며 반복적으로 움직입니다.
  </p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적인 형태로 사용합니다.</p>
    <div class="example">
      <loading-basic :size="18" type="ios"/>
    </div>
    <pre class="example-code"><code>&lt;loading-basic :size="16"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col" style="width:100px">Name</th>
          <th scope="col" style="width:80px">Type</th>
          <th scope="col">Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>name</td>
          <td>String</td>
          <td class="typo-align--left">로딩의 타입</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Number</td>
          <td class="typo-align--left">
            컴포넌트의 사이즈입니다.<br/>
            스타일시트로 사이즈를 조정하고 싶다면 값을 <code>null</code>로 변경해주세요.<br/>
            옵션에 대한 내용은 <a :href="link_types" target="_blank">loading-types</a>페이지에서 참고해주세요.
          </td>
        </tr>
        <tr>
          <td>options</td>
          <td>Object</td>
          <td class="typo-align--left">컴포넌트 타입에 관한 옵션</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section>
    <head-title type="h3" title="type"/>
    <p>타입에 따라 로딩의 디자인이 변합니다.</p>
    <div class="example">
      <div class="row row-gutter types-index">
        <div v-for="(name,k) in types" class="col col-4 col-sm-3 col-md-2">
          <div>
            <span>
              <loading-basic :size="24" :type="name"/>
            </span>
          </div>
          <em>{{name}}</em>
        </div>
      </div>
    </div>
    <pre class="example-code"><code>&lt;loading-basic type="ring"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="size"/>
    <p>로딩 컴포너트의 사이즈</p>
    <div class="example">
      <div class="row row-v-center row-h-around">
        <div>
          <loading-basic :size="36" type="blocks"/>
        </div>
        <div>
          <loading-basic :size="null" type="ring" style="width: 16px; height: 16px"/>
        </div>
      </div>
    </div>
    <pre class="example-code"><code>// set number
&lt;loading-basic :size="36"/>

// using stylesheet
&lt;loading-basic :size="null" style="width: 16px; height: 16px"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="options"/>
    <p>
      타입에 따라서 다른 옵션들을 사용할 수 있습니다.<br/>
      옵션에 관한 내용은 <a :href="link_types" target="_blank">loading-types</a>페이지를 참고해주세요.
    </p>
    <div class="example">
      <div class="row row-v-center row-h-around">
        <div style="background-color: #222; padding: 16px">
          <loading-basic type="ios" :options="{ play: true, dark: true }"/>
        </div>
        <div>
          <loading-basic type="boxes" :options="{ color: 'green' }"/>
        </div>
      </div>
    </div>
    <pre class="example-code"><code>// ios
&lt;loading-basic type="ios" :options="{ play: true, dark: true }"/>

// boxes
&lt;loading-basic type="boxes" :options="{ color: 'green' }"/></code></pre>
  </section>
</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
    'loading-basic': () => import('@/components/loading/basic'),
  },
  data()
  {
    return {
      types: [
        'ios', 'ring', 'circle', 'material', 'boxes', 'box', 'balls', 'blocks',
      ],
      link_types: 'https://github.com/redgoose-dev/vue-resource/blob/master/src/components/loading/basic/types.md',
    };
  }
}
</script>
<style lang="scss" scoped>
.types-index {
  margin-top: -8px !important;
  margin-bottom: -8px !important;
  .col {
    > div {
      position: relative;
      display: block;
      background: #f5f5f5;
      padding-bottom: 100%;
      box-sizing: border-box;
      > span {
        position: absolute;
        display: block;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
    > em {
      display: block;
      margin-top: 4px;
      text-align: center;
      font-size: 10px;
      font-style: normal;
      line-height: 1;
    }
  }
}
</style>
