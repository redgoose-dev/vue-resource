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
  'ios',
];
export default {
  name: 'loading-basic',
  props: {
    type: { type: String, default: 'ios' }, // ios
    size: { type: Number, default: 16 },
    options: { type: Object, default: null },
  },
  computed: {
    typeComponent()
    {
      if (!this.type) return null;
      if (types.indexOf(this.type) > -1)
      {
        return () => import(`./types/${this.type}`);
      }
      else
      {
        return null;
      }
    },
  },
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
