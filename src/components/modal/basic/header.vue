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
.modal-basic-header {
  h2 {
    margin: 0;
    font-size: 1.25rem;
  }
  nav {
    button {
      display: block;
      font-size: 0;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
