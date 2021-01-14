<template>
  <div class="DetailNavBar">
    <NavBar>
      <div slot="left" class="left" @click="Back">
        <img src="~assets/img/back.png" alt="">
      </div>
      <div slot="center" class="center2">
        <div v-for="(item,index) in title">
          {{item}}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {NavBar},
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐']
    }
  },
  methods: {
    Back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.center2 {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid gainsboro;
}
.left img {
  width: 25px;
  height: 25px;
  margin-top: 10px;
}
</style>
