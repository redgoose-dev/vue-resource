<template>
<button :title="title" :disabled="disabled" @click="onChange" class="form-switch">
  <span class="form-switch-icon" :class="switchIconClass">
    <i>{{switchLabel}}</i>
  </span>
</button>
</template>

<script>
export default {
  name: 'form-switch',
  props: {
    title: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    sw: { type: Boolean, default: false },
  },
  model: {
    prop: 'sw',
    event: 'change',
  },
  computed: {
    switchIconClass()
    {
      return !!this.sw ? 'form-switch-icon--on' : '';
    },
    switchLabel()
    {
      return this.sw ? 'on' : 'off';
    },
  },
  methods: {
    onChange(e)
    {
      this.$emit('change', !this.sw, e);
    },
  },
};
</script>

<style src="./switch.scss" lang="scss" scoped></style>
