<template>
  <cube-slide :data="banner" id="banner">
    <cube-slide-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" class="bannerImg" @load="imgLoad">
      </a>
    </cube-slide-item>
  </cube-slide>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
    banner:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imgLoad() {
      if(!this.isLoad){
        this.$emit('SwiperImgLoad')
        this.isLoad = true
      }

    }
  }
}
</script>

<style scoped>
.bannerImg{
  width:100%;
  height: 100%;
}

</style>
