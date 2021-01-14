<template>
   <div class="recommendView">
     <div v-for="item in recommend" class="recommend-item">
       <a :href="item.link">
         <img :src="item.image"  alt=""/>
         <div>{{item.title}}</div>
       </a>
     </div>
   </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommendView{
  padding: 10px 0 20px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size:12px;
  border-bottom: 8px solid #eee;
}

.recommend-item{
  text-align: center;
}

.recommend-item img{
  width: 70px;
  height: 70px;
}

</style>
