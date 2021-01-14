<template>
  <div class="tab-control">
      <span v-for="(item, index) in titles" class="tab-control-item"
            :class="{active: index === currentIndex}" @click="itemClick(index)">{{ item }}</span>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  z-index: 9;
}

.tab-control-item {

}

.active {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}

</style>
