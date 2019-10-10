<template>
<article class="page">
  <head-title type="h2" title="error / page"/>
  <blockquote>
    <p>
      <strong>
        component: <a :href="`${$store.state.url.github}tree/master/src/components/error/page`" target="_blank">error.page</a>
      </strong>
    </p>
  </blockquote>
  <p>페이지 오류를 표현하는 컴포넌트 입니다.</p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적인 형태로 사용합니다.</p>
    <div class="example">
      <error-page/>
    </div>
    <pre class="example-code"><code>&lt;error-page
  :code="500"
  title="title message"
  description="description message"
  link="/"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
    <div class="table--overflow">
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
          <td>code</td>
          <td>Number</td>
          <td class="typo-align--left">오류코드</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td class="typo-align--left">제목</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String</td>
          <td class="typo-align--left">설명</td>
        </tr>
        <tr>
          <td>link</td>
          <td>String</td>
          <td class="typo-align--left">홈 화면으로 이동하는 링크주소</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
    'error-page': () => import('@/components/error/page'),
  },
}
</script>
