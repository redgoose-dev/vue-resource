<template>
<article class="page">
	<head-title type="h2" title="error / content"/>
  <blockquote>
    <p>
      <strong>
        component: <a :href="`${$store.state.url.github}tree/master/src/components/error/content`" target="_blank">error-content</a>
      </strong>
    </p>
  </blockquote>
  <p>컨텐츠 내부에서 사용하는 컴포넌트</p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적인 형태로 사용합니다.</p>
    <div class="example">
      <error-content/>
    </div>
    <pre class="example-code"><code>&lt;error-content
  icon="cloud"
  message="message text"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col" style="width: 120px">Name</th>
          <th scope="col" style="width: 120px">Type</th>
          <th scope="col">Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>message</td>
          <td>String</td>
          <td class="typo-align--left">오류 메시지</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td class="typo-align--left"><code>icon</code> 컴포넌트 이름</td>
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
    'error-content': () => import('@/components/error/content'),
	},
}
</script>
