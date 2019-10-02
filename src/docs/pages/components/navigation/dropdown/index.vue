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
            <span :style="{
              display: 'block',
              padding: '10px 20px',
            }">button</span>
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
