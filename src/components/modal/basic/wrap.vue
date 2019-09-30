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
  box-sizing: border-box;
  box-shadow: 0 2px 15px rgba(#000, .1);
}
</style>
