<template>
<div class="error-content">
  <div class="error-content__wrap">
    <icon :name="icon" class="error-content__icon"/>
    <p class="error-content__message">{{message}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'error-content',
  components: {
    'icon': () => import('@/components/icon'),
  },
  props: {
    message: { type: String, default: 'error message' },
    icon: { type: String, default: 'cloud' },
  },
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
