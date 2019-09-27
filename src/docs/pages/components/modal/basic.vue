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
      <button-basic :inline="true" @click="basic = true">open modal</button-basic>
    </div>
    <pre class="example-code"><code>&lt;modal-basic :visible="show" @click="show = false">
  &lt;p>modal content&lt;/p>
&lt;/modal-basic></code></pre>
  </section>

  <modal-basic
    :visible="basic"
    :flex="true"
    background="light"
    html-class-name="foo bar"
    @click="basic = false">
    <modal-basic-wrap>
      <modal-basic-header/>
      <p>modal content</p>
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
  },
  data()
  {
    return {
      basic: false,
    };
  },
}
</script>
