<template>
<nav v-if="total > 0" class="navigation-paginate">
  <div class="navigation-paginate__wrap">
    <button
      v-if="showEndSideButtons"
      type="button"
      title="first page"
      :disabled="!(page > 1)"
      class="navigation-paginate-item navigation-paginate-item--dir"
      @click="onFirstPage">
      <icon name="arrows-first"/>
    </button>
    <button
      v-if="showRangeSideButtons"
      type="button"
      title="prev range page"
      :disabled="!(pageBlock > 0)"
      class="navigation-paginate-item navigation-paginate-item--dir"
      @click="onPrevRange">
      <icon name="arrows-left"/>
    </button>
    <button
      v-if="showSideButtons"
      type="button"
      title="prev page"
      :disabled="!(page > 1)"
      class="navigation-paginate-item navigation-paginate-item--dir"
      @click="onPrevPage">
      <icon name="arrow-left"/>
    </button>
    <template v-if="pages.length > 0">
      <button
        v-for="item in pages"
        type="button"
        :disabled="item.active"
        :title="`${item.no} page`"
        class="navigation-paginate-item navigation-paginate-item--number"
        @click="go(item.no)">
        {{item.no}}
      </button>
    </template>
    <button
      v-else
      type="button"
      :disabled="true"
      :title="`${page} page`"
      class="navigation-paginate-item navigation-paginate-item--number">
      {{page}}
    </button>
    <button
      v-if="showSideButtons"
      type="button"
      title="next page"
      :disabled="!(pageCount > page)"
      class="navigation-paginate-item navigation-paginate-item--dir"
      @click="onNextPage">
      <icon name="arrow-right"/>
    </button>
    <button
      v-if="showRangeSideButtons"
      type="button"
      title="next range page"
      :disabled="!(pageBlock < pageBlockTotal)"
      class="navigation-paginate-item navigation-paginate-item--dir"
      @click="onNextRange">
      <icon name="arrows-right"/>
    </button>
    <button
      v-if="showEndSideButtons"
      type="button"
      title="last page"
      :disabled="!(page < pageCount)"
      class="navigation-paginate-item navigation-paginate-item--dir"
      @click="onLastPage">
      <icon name="arrows-last"/>
    </button>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navigation-paginate',
  components: {
    'button-basic': () => import('@/components/button/basic'),
    'icon': () => import('@/components/icon'),
  },
  props: {
    page: { type: Number, default: 1 }, // 페이지 번호
    total: { type: Number, default: 0 }, // 모든 데이터의 갯수
    size: { type: Number, default: 10 }, // 한페이지에 보여지는 글 갯수
    range: { type: Number, default: 5 }, // 출력되는 페이지 번호 갯수
    showSideButtons: { type: Boolean, default: true }, // prev,next move buttons
    showRangeSideButtons: { type: Boolean, default: false }, // show x range move buttons
    showEndSideButtons: { type: Boolean, default: false }, // first,last move buttons
  },
  model: {
    prop: 'page',
    event: 'change',
  },
  computed: {
    /**
     * page count
     * 총 페이지 갯수
     *
     * @return Number
     */
    pageCount()
    {
      return Math.ceil(this.total / this.size);
    },
    /**
     * offset
     * 해당 페이지에서 시작하는 목록번호
     *
     * @return Number
     */
    offset()
    {
      return (this.page - 1) * this.size;
    },
    /**
     * page block
     * 10개씩 출력된다면 1~10 = 0, 11~20 = 1
     *
     * @return Number
     */
    pageBlock()
    {
      return Math.floor((this.page - 1) / this.range);
    },
    /**
     * page block total
     * 총 페이지 블럭
     *
     * @return Number
     */
    pageBlockTotal()
    {
      return Math.floor((this.pageCount - 1) / this.range);
    },
    /**
     * pages
     * 페이지 목록 객체들
     *
     * @return Array
     */
    pages()
    {
      let items = [];
      let startPage = this.pageBlock * this.range + 1;
      for (let i=1; i < this.range + 1 && startPage <= this.pageCount; i++, startPage++)
      {
        items[i-1] = {
          no: startPage,
          active: (startPage === this.page),
        };
      }
      // check empty item
      let checkEmpty = false;
      items.forEach((o) => {
        if (o.active) checkEmpty = true;
      });
      return (checkEmpty) ? items : [];
    },
  },
  methods: {
    onPrevPage()
    {
      if (this.page > 1)
      {
        this.go(this.page - 1);
      }
    },
    onNextPage()
    {
      if (this.page < this.pageCount)
      {
        this.go(this.page + 1);
      }
    },
    onPrevRange()
    {
      if (this.page > 1)
      {
        let n = this.page - this.range;
        n = (n > 1) ? n : 1;
        this.go(n);
      }
    },
    onNextRange()
    {
      if (this.pageBlock < this.pageBlockTotal)
      {
        let n = this.page + this.range;
        n = (n > this.pageCount) ? this.pageCount : n;
        this.go(n);
      }
    },
    onFirstPage()
    {
      if (this.page > 1)
      {
        this.go(1);
      }
    },
    onLastPage()
    {
      if (this.page < this.pageCount)
      {
        this.go(this.pageCount);
      }
    },
    go(page)
    {
      if (this.page !== page)
      {
        this.$emit('change', page);
      }
    },
  },
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
