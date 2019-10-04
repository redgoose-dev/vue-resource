<template>
<article class="page">
	<head-title type="h2" title="navigation / dropdown"/>
  <blockquote>
    <p>
      <strong>component: <a :href="`${$store.state.url.github}tree/master/src/components/navigation/dropdown`" target="_blank">navigation-dropdown</a></strong>
    </p>
  </blockquote>
  <p>드롭다운 형태의 네비게이션 컴포넌트입니다.</p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적인 형태로 사용합니다.</p>
    <div class="example">
      <div class="row row-v-center">
        <div>
          <navigation-dropdown
            :context="[
              { label: 'apple', click: onClickContextMenu },
              { label: 'banana', click: onClickContextMenu },
              { label: 'mango', click: onClickContextMenu },
            ]"
            @change="onChangeContextOpen">
            <span class="basic-button">open context</span>
          </navigation-dropdown>
        </div>
        <p style="margin: 0 0 0 15px">Selected menu: {{basic}}</p>
      </div>
    </div>
    <pre class="example-code"><code>&lt;navigation-dropdown
  :context="[
    { label: 'apple', click: function() {} },
    { label: 'banana', click: function() {} },
    { label: 'mango', click: function() {} },
  ]">
  &lt;span>button&lt;/span>
&lt;/navigation-dropdown></code></pre>
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
          <td>context</td>
          <td>Array</td>
          <td class="typo-align--left">메뉴 목록</td>
        </tr>
        <tr>
          <td>event-name</td>
          <td>String</td>
          <td class="typo-align--left">컨텍스트 메뉴 선택 이벤트 이름</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section>
    <head-title type="h3" title="context"/>
    <p>
      컨텍스트 메뉴에서 사용되는 메뉴 목록에 대한 섹션입니다.<br/>
      메뉴를 선택하면 이벤트가 실행됩니다.
    </p>
    <p>컨텍스트에서 사용하는 <code>props</code>값의 항목들중 하나는 다음과 같습니다.</p>
    <pre class="example-code"><code>{ label: 'apple', click: function() {} }</code></pre>
    <p>위와같은 객체를 배열로 만들어 <code>context</code>값에 넣으면 됩니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col" style="width:100px">Name</th>
          <th scope="col">Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>label</td>
          <td class="typo-align--left">메뉴 이름</td>
        </tr>
        <tr>
          <td>click</td>
          <td class="typo-align--left">메뉴를 클릭했을때의 이벤트</td>
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
    'button-basic': () => import('@/components/button/basic'),
    'navigation-dropdown': () => import('@/components/navigation/dropdown'),
	},
  data()
  {
    return {
      basic: 'none',
    };
  },
  methods: {
	  onClickContextMenu(value)
    {
      this.basic = value.label;
    },
    onChangeContextOpen(sw)
    {
      console.warn(`opened context: ${sw}`);
    },
  },
}
</script>
<style lang="scss" scoped>
.basic-button {
  display: block;
  padding: 10px 15px;
  background: #eee;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  &:active {
    background: #f4f4f4;
  }
}
</style>
