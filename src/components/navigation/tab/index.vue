<template>
<nav
  v-if="items && items.length > 0"
  class="navigation-tab">
  <div class="navigation-tab__wrap">
    <div
      v-for="(item,n) in items"
      :class="['navigation-tab__item', active === n && 'on']">
      <button type="button" @click="onChangeTab(n)">
        <span>{{item}}</span>
      </button>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navigation-tab',
  props: {
    items: { type: [Array,Object], default: null },
    active: { type: Number, default: 0 },
  },
  methods: {
    onChangeTab(n)
    {
      if (this.active !== n)
      {
        this.$emit('change', n);
      }
    },
  },
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
