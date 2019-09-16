<template>
<svg
  xmlns="http://www.w3.org/2000/svg"
  :width="size"
  :height="size"
  :color="color"
  viewBox="0 0 24 24"
  :aria-labelledby="name"
  role="img">
  <g fill="none" fill-rule="evenodd">
    <keep-alive>
      <component v-bind:is="iconComponent"/>
    </keep-alive>
    <slot/>
  </g>
</svg>
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: { type: String, default: null },
    size: { type: Number, default: 24 }, // width, height
    color: { type: String, default: null }, // red, #ff0000
  },
  computed: {
    iconComponent()
    {
      if (!this.name) return null;
      return () => import(`./src/icon-${this.name}`);
    }
  },
}
</script>
