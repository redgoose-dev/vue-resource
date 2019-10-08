<template>
<select
  :name="name"
  :id="id"
  :value="selected"
  :required="required"
  :disabled="disabled"
  :multiple="multiple"
  class="form-select"
  :class="[
    inline && 'form-select--inline',
    size && `form-select--size-${size}`,
    state && `form-select--state-${state}`,
    !!isSelected && `form-select--selected`,
    multiple && `form-select--multiple`,
    !native && `form-select--not-native`,
  ]"
  @input="onChange">
    <option v-if="placeholder" value="" :disabled="false">
      {{placeholder}}
    </option>
    <slot/>
</select>
</template>

<script>
export default {
  name: 'form-select',
  props: {
    name: { type: String },
    id: { type: String },
    selected: { type: [String,Number], default: '' },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    native: { type: Boolean, default: true }, // use native component
    placeholder: { type: String, default: '선택하기' },
    size: { type: String }, // small, large
    state: { type: String }, // primary, success, error
  },
  model: {
    prop: 'selected',
    event: 'change',
  },
  computed: {
    isSelected()
    {
      return !!this.selected;
    }
  },
  methods: {
    onChange: function(e)
    {
      this.$emit('change', e.target.value);
    }
  }
}
</script>

<style src="./index.scss" lang="scss" scoped></style>
