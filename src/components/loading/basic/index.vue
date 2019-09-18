<template>
<i class="loading-basic">
  .loading-basic
</i>
</template>

<script>
export default {
  name: 'loading-basic',
  props: {
    type: { type: String, default: 'ios' }, // ios
    size: { type: Number, default: null },
  },
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
