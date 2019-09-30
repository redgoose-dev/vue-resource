<template>
<header class="modal-basic-header">
  <div class="row row-v-center row-h-between">
    <h2>{{title}}</h2>
    <nav>
      <button type="button" title="close" @click="$emit('close')">
        <icon name="close"/>
      </button>
    </nav>
  </div>
</header>
</template>

<script>
export default {
  name: 'modal-basic-header',
  components: {
    'icon': () => import('@/components/icon'),
  },
  props: {
    title: { type: String, default: 'title' },
  },
}
</script>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "../../../css/mixins";

.modal-basic-header {
  padding: 10px 20px;
  background: #f4f4f4;
  h2 {
    margin: 0;
    font-size: 1rem;
  }
  nav {
    button {
      display: block;
      font-size: 0;
      margin: -10px;
      padding: 4px;
      background: none;
      border: none;
      @include button-touch-options(true);
      svg {
        display: block;
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>
