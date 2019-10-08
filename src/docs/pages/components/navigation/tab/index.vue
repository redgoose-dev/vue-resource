<template>
<article class="page">
	<head-title type="h2" title="navigation - tab"/>
  <blockquote>
    <p>
      <strong>component: <a :href="`${$store.state.url.github}tree/master/src/components/navigation/tab`" target="_blank">navigation-tab</a></strong>
    </p>
  </blockquote>
  <p>탭 형태의 네비게이션 컴포넌트입니다.</p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적인 형태로 사용합니다.</p>
    <div class="example">
      <navigation-tab
        :items="['apple', 'banana', 'mango']"
        :active="basic"
        @change="basic = $event"/>
      <p>active tab: {{basic}}</p>
    </div>
    <pre class="example-code"><code>&lt;navigation-tab
  :items="['apple', 'banana', 'mango']"
  :active="basic"
  @change="basic = $event"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
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
        <td>items</td>
        <td>Array</td>
        <td class="typo-align--left">탭 이름</td>
      </tr>
      <tr>
        <td>active</td>
        <td>Number</td>
        <td class="typo-align--left">활성화된 탭 번호</td>
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
        <th scope="col">name</th>
        <th scope="col">params</th>
        <th>comment</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>@change</td>
        <td><code>active</code></td>
        <td class="typo-align--left">활성화된 탭이 바뀌었을때 실행되는 이벤트</td>
      </tr>
      </tbody>
    </table>
  </section>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/layout/title'),
    'navigation-tab': () => import('@/components/navigation/tab'),
	},
  data()
  {
    return {
      basic: 0,
    };
  },
}
</script>
