<template>
<div class="loading-progress">
  <div class="loading-progress__wrap">
    <span class="loading-progress__bar" :style="{ 'max-width': `${computedPercent}%` }"></span>
  </div>
  <em v-if="showLabel" class="loading-progress__label">
    {{computedPercent}}%
  </em>
</div>
</template>

<script>
export default {
  name: 'loading-progress',
  props: {
    percent: { type: Number, default: null },
    total: { type: Number, default: null },
    current: { type: Number, default: 0 },
    showLabel: { type: Boolean, default: true },
  },
  computed: {
    computedPercent()
    {
      if (!!this.percent)
      {
        return this.percent;
      }
      else if (this.total)
      {
        return Math.floor(this.current / this.total * 100);
      }
      else
      {
        return 0;
      }
    },
  },
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
