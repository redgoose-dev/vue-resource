<template>
<textarea
  v-if="type === 'textarea'"
  :name="name"
  :id="id"
  :value="value"
  :placeholder="placeholder"
  :maxlength="maxlength"
  :required="required"
  :disabled="disabled"
  :readonly="readonly"
  :rows="rows"
  :size="nativeSize"
  class="form-text"
  :class="[
    'form-text--textarea',
    size && `form-text--size-${size}`,
    state && `form-text--state-${state}`,
  ]"
  @click="onChangePosition"
  @keyup="onChangePosition"
  @input="onChange">
</textarea>
<input
  v-else
  :type="type"
  :name="name"
  :id="id"
  :value="value"
  :placeholder="placeholder"
  :maxlength="maxlength"
  :required="required"
  :disabled="disabled"
  :readonly="readonly"
  :size="nativeSize"
  class="form-text"
  :class="[
    inline && `form-text--inline`,
    size && `form-text--size-${size}`,
    state && `form-text--state-${state}`,
  ]"
  @click="onChangePosition"
  @keyup="onChangePosition"
  @input="onChange">
</template>

<script>
export default {
  name: 'form-text',
  props: {
    type: { type: String, default: 'text' },
    name: { type: String, default: null },
    id: { type: String, default: null },
    value: { type: [String,Number], default: null },
    placeholder: { type: String, default: null },
    maxlength: { type: Number },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
    nativeSize: { type: [String,Number] },
    rows: { type: Number, default: 5 },
    state: { type: String, default: null },
    size: { type: String },
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  methods: {
    onChange: function(e)
    {
      this.$emit('change', e.target.value);
    },
    onChangePosition: function(e)
    {
      if (!('selectionStart' in e.target)) return;
      this.$emit('position', {
        start: e.target.selectionStart,
        end: e.target.selectionEnd
      });
    },
  },
}
</script>

<style src="./text.scss" lang="scss" scoped></style>
