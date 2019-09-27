<template>
<div class="page">
  <head-title type="h2" title="vue-resource project"/>
  <p>
    <code>vue-resource</code> 프로젝트는 <code>vue.js</code>를 이용하여 서비스나 프로그램 프로젝트들을 진행하면서 만들어진 소스코드들을 정리해서 보관하고 나중에 다른 프로젝트를 진행할때 좀더 도움이 되길 바라며 만들게 되었습니다.
  </p>
  <p>
    이 프로젝트는 프레임워크가 아니며 <code>vue.js</code> 리소스나 가이드들이 담겨있는 보관함에 더 가깝습니다.<br/>
    그래서 그대로 사용하는것보다 소스들을 필요한곳에 참고하면서 사용하는것을 권장드립니다.
  </p>

  <head-title type="h3" title="feature"/>
  <p>
    다음 항목은 <code>vue-resource</code> 프로젝트에서 다음과 같은 내용들에 대하여 다룹니다.<br/>
  </p>
  <ul class="typo-list">
    <li><code>vue.js</code>와 <code>nuxt.js</code>의 팁들</li>
    <li>프로젝트에서 사용하는 스타일시트(scss) 가이드와 컴포넌트들</li>
    <li><code>vue.js</code> 컴포넌트</li>
    <li>유용한 javascript 도구들</li>
  </ul>

  <head-title type="h3" title="future works"/>
  <p>
    앞으로 유용한 컴포넌트들이나 팁들은 계속 기록할 예정입니다.
  </p>
  <p>
    문의나 기능 개선할 필요가 있는 부분이 있다면 <a :href="`${$store.state.url.github}issues`" target="_blank">GitHub issues</a>에서 글 부탁드립니다.
  </p>
</div>
</template>

<script>
export default {
  name: 'home',
  components: {
    'head-title': () => import('@/docs/layout/title'),
  },
}
</script>
