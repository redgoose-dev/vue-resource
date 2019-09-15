<template>
<router-link
  v-if="to"
  :to="to"
  :title="title"
  :class="classNames"
  @click.native="onClick">
  <slot/>
</router-link>
<a
  v-else-if="href"
  :href="href"
  :target="target"
  :title="title"
  :class="classNames"
  @click="onClick">
  <slot/>
</a>
<button
  v-else
  :type="type"
  :title="title"
  :disabled="disabled"
  :class="classNames"
  @click="onClick">
  <slot/>
</button>
</template>

<script>
export default {
  name: 'button-basic',
  props: {
    to: { type: String, default: null },
    href: { type: String, default: null },
    target: { type: String, default: null },
    type: { type: String, default: 'button' }, // button,reset,submit
    title: { type: String, default: null },
    size: { type: String, default: null }, // small,large
    color: { type: String, default: null }, // sub,light,dark,none
    outline: { type: Boolean, default: false }, // true,false
    round: { type: Boolean, default: false }, // true,false
    disabled: { type: Boolean, default: false }, // true,false
    inline: { type: Boolean, default: false }, // true,false
  },
  computed: {
    classNames()
    {
      return [
        'button',
        this.size && `button--size-${this.size}`,
        this.color && `button--color-${this.color}`,
        this.round && 'button--round',
        this.outline && 'button--outline',
        this.inline && 'button--inline',
        (this.disabled && (this.to || this.href)) && `button--disabled`,
      ];
    },
  },
  methods: {
    onClick(e)
    {
      if (this.disabled)
      {
        e.preventDefault();
        return;
      }
      this.$emit('click', e);
    }
  },
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
