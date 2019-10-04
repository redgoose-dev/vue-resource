<template>
  <nav class="rg-paginate">
    <a
      v-if="firstLastButton"
      href="#"
      @click.prevent="selectFirstPage()"
      title="First"
      :class="[ firstPageSelected() && 'disabled' ]">
      <<
    </a>
    <a
      v-if="!(hidePrevNext && firstPageSelected())"
      href="#"
      @click.prevent="prevPage()"
      title="Prev"
      :class="[ firstPageSelected() && 'disabled' ]">
      <
    </a>

    <template v-for="page in pages">
		<span v-if="page.breakView" :class="[ 'dots' ]">
			<em>…</em>
		</span>
      <span v-else-if="page.disabled" :class="[ page.selected && 'active', 'disabled' ]">
			<em>{{ page.content }}</em>
		</span>
      <a v-else href="#" @click.prevent="handlePageSelected(page.index + 1)" :class="[ page.selected && 'active' ]">
        <em>{{ page.content }}</em>
      </a>
    </template>

    <a
      v-if="!(hidePrevNext && lastPageSelected())"
      href="#"
      @click.prevent="nextPage()"
      title="Next"
      :class="[ lastPageSelected() && 'disabled' ]">
      >
    </a>
    <a
      v-if="firstLastButton"
      href="#"
      @click.prevent="selectLastPage()"
      title="Last"
      :class="[ lastPageSelected() && 'disabled' ]">
      >>
    </a>
  </nav>
</template>

<script>
  // original repo: https://github.com/lokyoung/vuejs-paginate

  export default {
    props: {
      value: { type: Number, default: 1 },
      url: { type: String, required: true },
      pageCount: { type: Number, required: true },
      forcePage: { type: Number },
      pageRange: { type: Number, default: 4 },
      marginPages: { type: Number, default: 1 },
      firstLastButton: { type: Boolean, default: true },
      hidePrevNext: { type: Boolean, default: false },
    },
    beforeUpdate() {
      if (this.forcePage === undefined) return;
      if (this.forcePage !== this.selected) this.selected = this.forcePage;
    },
    computed: {
      selected: function()
      {
        return this.value;
      },
      pages: function ()
      {
        let items = {};
        if (this.pageCount <= this.pageRange)
        {
          for (let index = 0; index < this.pageCount; index++)
          {
            items[index] = {
              index: index,
              content: index + 1,
              selected: index === (this.selected - 1)
            };
          }
        }
        else
        {
          const halfPageRange = Math.floor(this.pageRange / 2);
          let setPageItem = index => {
            items[index] = {
              index: index,
              content: index + 1,
              selected: index === (this.selected - 1)
            };
          };
          let setBreakView = index => {
            items[index] = {
              disabled: true,
              breakView: true
            };
          };

          // 1st - loop thru low end of margin pages
          for (let i = 0; i < this.marginPages; i++)
          {
            setPageItem(i);
          }

          // 2nd - loop thru selected range
          let selectedRangeLow = 0;
          if (this.selected - halfPageRange > 0)
          {
            selectedRangeLow = this.selected - 1 - halfPageRange;
          }

          let selectedRangeHigh = selectedRangeLow + this.pageRange - 1;
          if (selectedRangeHigh >= this.pageCount)
          {
            selectedRangeHigh = this.pageCount - 1;
            selectedRangeLow = selectedRangeHigh - this.pageRange + 1;
          }

          for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++)
          {
            setPageItem(i);
          }

          // Check if there is breakView in the left of selected range
          if (selectedRangeLow > this.marginPages) {
            setBreakView(selectedRangeLow - 1)
          }

          // Check if there is breakView in the right of selected range
          if (selectedRangeHigh + 1 < this.pageCount - this.marginPages)
          {
            setBreakView(selectedRangeHigh + 1)
          }

          // 3rd - loop thru high end of margin pages
          for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--)
          {
            setPageItem(i);
          }
        }
        return items
      }
    },
    methods: {
      handlePageSelected(selected)
      {
        if (this.selected === selected) return;
        this.$emit('input', selected);
      },
      prevPage()
      {
        if (this.selected <= 1) return;
        this.$emit('input', this.selected - 1);
      },
      nextPage() {
        if (this.selected >= this.pageCount) return;
        this.$emit('input', this.selected + 1);
      },
      firstPageSelected()
      {
        return this.selected === 1;
      },
      lastPageSelected()
      {
        return (this.selected === this.pageCount) || (this.pageCount === 0);
      },
      selectFirstPage()
      {
        if (this.selected <= 1) return;
        this.$emit('input', 1);
      },
      selectLastPage()
      {
        if (this.selected >= this.pageCount) return;
        this.$emit('input', this.pageCount);
      }
    }
  }
</script>
<style lang="scss" scoped>
.rg-paginate {
  display: flex;
  align-items: center;
  a, span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    cursor: default;
    box-sizing: border-box;
  }
  .active {
    background: lime;
  }
  em {
    font-style: normal;
  }
}
</style>
