<template>
<transition name="modal-basic">
  <div
    v-if="visible"
    :class="[
      'modal-basic',
      background && `modal-basic--bg-${background}`,
      flex && `modal-basic--flex`,
    ]"
    @click="$emit('click')">
    <slot/>
  </div>
</transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    visible: { type: Boolean, default: false },
    flex: { type: Boolean, default: false },
    background: { type: String, default: null },
    overflow: { type: Boolean, default: true },
    htmlClassName: { type: String, default: null },
  },
  mounted()
  {
    if (this.visible)
    {
      this.switchRoot(true);
    }
    else
    {
      this.switchRoot(false);
    }
  },
  beforeUpdate()
  {
    this.switchRoot(this.visible);
  },
  methods: {
    switchRoot(sw)
    {
      if (!document || !this.overflow) return false;
      let className = `${this.htmlClassName ? this.htmlClassName : ''} popup-modal-basic`;
      className = className.replace(/(^\s*)|(\s*$)/gi, '');
      const $html = document.querySelector('html');
      const splitHtmlClass = className.split(' ');
      if (sw)
      {
        splitHtmlClass.forEach((name) => $html.classList.add(name));
      }
      else
      {
        splitHtmlClass.forEach((name) => $html.classList.remove(name));
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "../../../css/mixins";

.modal-basic {
  position: fixed;
  z-index: 100000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  cursor: zoom-out;

  &-enter-active,
  &-leave-active {
    transition: opacity 200ms ease-out;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &--bg {
    &-dark {
      background: rgba(#000, .5);
    }
    &-light {
      background: rgba(#fff, .5);
    }
  }
  &--flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
<style lang="scss">
.popup-modal-basic {
  &, & > body {
    overflow: hidden;
  }
}
</style>
