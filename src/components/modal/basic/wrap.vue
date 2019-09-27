<template>
<div class="modal-basic-body" @click="(e) => { e.stopPropagation() }">
  <slot/>
</div>
</template>

<style lang="scss" scoped>
.modal-basic-body {
  min-width: 320px;
  cursor: auto;
  background: #fff;
}
</style>
