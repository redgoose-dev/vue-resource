<template>
<div class="navigation-dropdown" @click="onClickWrap">
  <div class="navigation-dropdown__trigger">
    <button type="button" class="navigation-dropdown__button" @click="onChangeOpen(!open)">
      <slot/>
    </button>
  </div>
  <nav v-if="context && open" class="navigation-dropdown__context-wrap">
    <ul class="navigation-dropdown-context">
      <li v-for="(o,n) in context">
        <button type="button" @click="onClickContextMenu(o)">{{o.label}}</button>
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
    eventName: { type: String, default: 'navigation-dropdown' },
  },
  data()
  {
    return {
      open: false,
    };
  },
  methods: {
    onClickWrap(e)
    {
      e.stopPropagation();
    },
    onClickContextMenu(obj)
    {
      if (obj.click)
      {
        this.onChangeOpen(false);
        obj.click(obj);
      }
    },
    onChangeOpen(sw)
    {
      if (this.open === sw) return;
      if (sw)
      {
        window.on(`click.${this.eventName}`, () => this.onChangeOpen(false));
      }
      else
      {
        window.off(`click.${this.eventName}`);
      }
      this.open = sw;
      this.$emit('change', sw);
    },
  },
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
