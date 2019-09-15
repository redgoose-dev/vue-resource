<template>
<label
  class="form-select-wrapper"
  :class="[
    !!state && `form-select-wrapper--state-${state}`,
    !!inline && `form-select-wrapper--inline`,
    !!disabled && `form-select-wrapper--disabled`,
  ]">
  <slot/>
  <i class="form-select-wrapper__icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6">
      <path fill="currentColor" d="M12 0L6 6 0 0z"></path>
    </svg>
  </i>
</label>
</template>

<script>
export default {
  props: {
    state: { type: String, default: null }, // primary,success,error
    inline: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
}
</script>

<style src="./select-wrapper.scss" lang="scss" scoped></style>
