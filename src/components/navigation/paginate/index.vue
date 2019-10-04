<template>
<nav class="navigation-paginate">
  <div class="navigation-paginate__wrap">

  </div>
</nav>
</template>

<script>
export default {
  name: 'navigation-paginate',
  components: {
    'button-basic': () => import('@/components/button/basic'),
  },
  props: {
    url: { type: String, default: '' }, // prefix url
    total: { type: Number, default: 0 }, // 모든글의 갯수
    size: { type: Number, default: 10 }, // 한페이지에 보여지는 글 갯수, limitList
    range: { type: Number, default: 5 }, // scale (출력되는 페이지 번호 갯수), limitPage
    showShortSideButton: { type: Boolean, default: false }, // prev,next buttons
    showFarSideButton: { type: Boolean, default: false }, // first,last buttons
  },
  model: {
    prop: 'page',
    event: 'change',
  },
  computed: {
    pages()
    {
      let items = {};
    },
  },
  methods: {

  },
}
</script>
