<template>
<article class="page">
  <head-title type="h2" title="elements"/>
  <blockquote>
    <p>
      <strong>Source: <a :href="`${$store.state.url.github}blob/master/src/css/elements.scss`" target="_blank">elements.scss</a></strong>
    </p>
  </blockquote>
  <p>
    작업하는 프로젝트에서 엘리먼트들을 기본세팅을 하는데 작성합니다.<br/>
    <router-link to="/stylesheet/normalize">normalize</router-link>를 사용하면 엘리먼트를 리셋하기전에 먼저 import 해주면 커스텀 엘리먼스 속성을 덮을 수 있습니다.
  </p>
  <p>
    엘리먼트 리셋을 하는 용도로 사용할 수 있지만 자주 사용되는 클래스를 정해줘도 괜찮다고 생각합니다.
  </p>
  <p>
    <router-link to="/stylesheet/variables">variables.css</router-link>를 `import`로 리소스를 가져와서 사용하는것을 권장합니다.
  </p>
  <pre><code>@import "./variables";

a {
  color: $color-key;
}
body {
  margin: 0;
  font-size: 16px;
}</code></pre>
</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
  },
}
</script>
