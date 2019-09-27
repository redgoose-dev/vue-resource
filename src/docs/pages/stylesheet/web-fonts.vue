<template>
<article class="page">
  <head-title type="h2" title="web-fonts"/>
  <blockquote>
    <p>
      <strong>Source: <a :href="`${$store.state.url.github}blob/master/src/css/fonts.scss`" target="_blank">fonts.scss</a></strong>
    </p>
  </blockquote>
  <p>
    서비스에서 클라이언트 시스템에 없는 새로운 글꼴을 사용할때 웹폰트를 이용합니다.<br/>
    딱히 제대로된 리소스는 적어놓을것들은 없을거 같고, 글꼴을 불러오는데 사용하는 예제로 <a href="https://fonts.google.com/specimen/Roboto" target="_blank">Roboto</a>, <a href="https://material.io/tools/icons/?style=baseline" target="_blank">Material design icons</a> 글꼴을 불러오는 예제정도로 기록해 두었습니다.
  </p>
  <p>
    <code>@font-face</code>를 통하여 웹폰트를 불러오는 초기화할때 반복되는 코드를 줄이고 싶으면 <code>mixin</code>을 사용하면 많은 도움이 됩니다.<br/>
    사용법은 소스에서 `Roboto`폰트를 불러오는 부분에서 참고할 수 있습니다.
  </p>

  <section>
    <head-title type="h3" title="참고 사이트"/>
    <ul>
      <li><a href="https://fonts.google.com/specimen/Roboto" target="_blank">Roboto</a></li>
      <li><a href="https://material.io/tools/icons/?style=baseline" target="_blank">Material design icons</a></li>
      <li><a href="https://spoqa.github.io/spoqa-han-sans/ko-KR/" target="_blank">스포카 한 산스</a></li>
    </ul>
  </section>
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
