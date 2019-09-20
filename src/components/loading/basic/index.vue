<template>
<i
  v-if="!!typeComponent"
  class="loading-basic"
  :style="size && { width:`${size}px`, height:`${size}px` }">
  <keep-alive>
    <component :is="typeComponent" :options="options"/>
  </keep-alive>
</i>
</template>

<script>
const types = [
  'ios', 'ring', 'circle', 'material', 'boxes', 'box', 'balls', 'blocks',
];
export default {
  name: 'loading-basic',
  props: {
    type: { type: String, default: 'ios' },
    size: { type: Number, default: 18 },
    options: { type: Object, default: null },
  },
  computed: {
    typeComponent()
    {
      if (!this.type) return null;
      return (types.indexOf(this.type) > -1) ? () => import(`./types/${this.type}`) : null;
    },
  },
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
