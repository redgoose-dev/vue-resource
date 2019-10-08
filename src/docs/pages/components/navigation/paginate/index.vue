<template>
<article class="page">
  <head-title type="h2" title="navigation / paginate"/>
  <blockquote>
    <p>
      <strong>component: <a :href="`${$store.state.url.github}tree/master/src/components/navigation/paginate`" target="_blank">navigation-paginate</a></strong>
    </p>
  </blockquote>
  <p>목록 네비게이션 컴포넌트입니다.</p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적인 형태로 사용합니다.</p>
    <div class="example">
      <navigation-paginate v-model="page" :total="total"/>
    </div>
    <pre class="example-code"><code>&lt;navigation-paginate v-model="page" :total="total"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col" style="width:180px">Name</th>
          <th scope="col" style="width:80px">Type</th>
          <th scope="col">Default</th>
          <th scope="col">Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>page</td>
          <td>Number</td>
          <td>1</td>
          <td class="typo-align--left">페이지 번호</td>
        </tr>
        <tr>
          <td>total</td>
          <td>Number</td>
          <td>0</td>
          <td class="typo-align--left">아이템 총 갯수</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Number</td>
          <td>10</td>
          <td class="typo-align--left">한 페이지에서 출력되는 아이템 갯수</td>
        </tr>
        <tr>
          <td>range</td>
          <td>Number</td>
          <td>5</td>
          <td class="typo-align--left">네비게이션 블럭 범위</td>
        </tr>
        <tr>
          <td>show-side-buttons</td>
          <td>Boolean</td>
          <td>true</td>
          <td class="typo-align--left">prev,next 이동버튼 표시</td>
        </tr>
        <tr>
          <td>show-range-side-buttons</td>
          <td>Boolean</td>
          <td>false</td>
          <td class="typo-align--left"><code>range</code>값만큼 prev,next 이동버튼 표시</td>
        </tr>
        <tr>
          <td>show-end-side-buttons</td>
          <td>Boolean</td>
          <td>false</td>
          <td class="typo-align--left">first,last 이동버튼 표시</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section>
    <head-title type="h3" title="events"/>
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
        <td>page</td>
        <td class="typo-align--left">변경된 페이지 번호</td>
      </tr>
      </tbody>
    </table>
  </section>

  <section>
    <head-title type="h3" title="direction buttons"/>
    <p>이전, 다음 버튼들을 표시합니다.</p>
    <div class="example">
      <navigation-paginate
        v-model="page"
        :total="total"
        :show-side-buttons="true"
        :show-range-side-buttons="true"
        :show-end-side-buttons="true"/>
    </div>
    <pre class="example-code"><code>&lt;navigation-paginate
  v-model="page"
  :total="total"
  :show-side-buttons="true"
  :show-range-side-buttons="true"
  :show-end-side-buttons="true"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="page event"/>
    <p>페이지 번호가 변할때 <code>v-model</code>을 사용하지 않고 직접 이벤트를 다룹니다.</p>
    <div class="example">
      <navigation-paginate
        :page="page"
        :total="total"
        @change="page = $event"/>
    </div>
    <pre class="example-code"><code>&lt;navigation-paginate
  :page="page"
  :total="total"
  @change="page = $event"/></code></pre>
  </section>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/layout/title'),
    'navigation-paginate': () => import('@/components/navigation/paginate'),
	},
  data()
  {
    return {
      total: 200,
      page: 1,
    };
  },
}
</script>
