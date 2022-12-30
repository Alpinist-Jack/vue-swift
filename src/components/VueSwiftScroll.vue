<template>
  <div class="root" ref="root" :style="rootStyle" @scroll.passive="handleScroll">
    <div class="viewport" ref="viewport" :style="viewportStyle">
      <div class="spacer" ref="spacer" :style="spacerStyle">
        <div v-for="item in visibleItems" :key="item">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VueSwiftScroll',
  props: {
    items: {
      required: true,
      type: Array
    },
    height: {
      type: Number
    },
    width: {
      type: Number
    },
    dir: {
      type: String,
      default: "vertical"
    }
  },
  data() {
    return {
      rowHeight: 30,
      scrollTop: 0,
      nodePadding: 20
    }
  },
  mounted() {
    // Calculate that initial row height dynamically
    const largestHeight = this.calculateInitialRowHeight();
    this.rowHeight =
      typeof largestHeight !== "undefined" && largestHeight !== null
        ? largestHeight
        : 30;
  },
  computed: {
    viewportHeight() {
      return this.itemCount * this.rowHeight;
    },
    startIndex() {
      let startNode =
        Math.floor(this.scrollTop / this.rowHeight) - this.nodePadding;
      startNode = Math.max(0, startNode);
      return startNode;
    },
    visibleNodeCount() {
      let count =
        Math.ceil(this.$props.height / this.rowHeight) + 2 * this.nodePadding;
      count = Math.min(this.itemCount - this.startIndex, count);
      return count;
    },
    visibleItems() {
      return this.$props.items.slice(
        this.startIndex,
        this.startIndex + this.visibleNodeCount
      );
    },
    itemCount() {
      return this.$props.items.length;
    },
    offsetY() {
      return this.startIndex * this.rowHeight;
    },
    spacerStyle() {
      return {
        transform: "translateY(" + this.offsetY + "px)"
      };
    },
    viewportStyle() {
      return {
        overflow: "hidden",
        height: this.viewportHeight + "px",
        position: "relative"
      };
    },
    rootStyle() {
      return {
        height: this.$props.height + "px",
        overflow: "auto"
      };
    }
  },
  methods: {
    handleScroll() {
      this.scrollTop = this.$refs.root.scrollTop;
    },
    calculateInitialRowHeight() {
      const children = this.$refs.spacer.children;
      let largestHeight = 0;
      for (let i = 0; i < children.length; i++) {
        if (children[i].offsetHeight > largestHeight) {
          largestHeight = children[i].offsetHeight;
        }
      }
      return largestHeight;
    }
  }
}
</script>


<style scoped>
.viewport {
  background: #fefefe;
  overflow-y: auto;
}

.spacer > div {
  padding: 0.5rem 0rem;
  border: 1px solid #f5f5f5;
}

</style>
