<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComponents/DetailNavBar";

import {getDetail} from "@/api/detail";

export default {
  name: "Detail",
  components: {DetailNavBar},
  data() {
    return {
      goodsId: null
    }
  },
  created() {
    this.goodsId = this.$route.params.iid
    getDetail(this.goodsId).then((res) => {
      console.log(res)
    })
  },
  watch: {
    $route() {
      this.goodsId = this.$route.params.iid
    }
  }
}
</script>

<style scoped>

</style>
