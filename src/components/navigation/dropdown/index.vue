<template>
<div class="navigation-dropdown" @click="onClickWrap">
  <div class="navigation-dropdown__trigger">
    <button type="button" @click="onClickTrigger(!open)">
      <slot/>
    </button>
  </div>
  <nav v-if="context && open" class="navigation-dropdown__context-wrap">
    <ul class="navigation-dropdown-context">
      <li v-for="(o,n) in context">
        <button type="button" @click="o.click ? o.click(o) : null">{{o.label}}</button>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
  name: 'navigation-dropdown',
  props: {
    context: { type: [Array,Object], default: null },
  },
  data()
  {
    return {
      open: false,
    };
  },
  methods: {
    onClickTrigger(sw)
    {
      if (this.open === sw) return;
      if (sw)
      {
        window.on('click.navigation-dropdown', () => {
          this.onChangeOpen(false);
          window.off('click.navigation-dropdown');
        });
        this.onChangeOpen(true);
      }
      else
      {
        window.off('click.navigation-dropdown');
        this.onChangeOpen(false);
      }
    },
    onClickWrap(e)
    {
      e.stopPropagation();
    },
    onChangeOpen(sw)
    {
      this.open = sw;
      this.$emit('change', sw);
    },
  },
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
