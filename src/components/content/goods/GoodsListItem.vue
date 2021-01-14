<template>
    <div class="goods-list-item" @click="GotoDetail">
      <img  :src="goodsItem.show.img" @load="imageLoad"/><!--图片加载完成的函数-->
      <div class="goodsInfo">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')//事件总线 发送一个所有都监听得到的事件
    },
    GotoDetail() {
      this.$router.push(`/detail/${this.goodsItem.iid}`)
    }
  }
}
</script>

<style scoped>
.goods-list-item{
  padding-bottom: 40px;
  position: relative;
  width:48%;
}

.goods-list-item img{
  width: 100%;
  border-radius: 5px;
}

.goodsInfo{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goodsInfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goodsInfo .price{
  color:var(--color-high-text)
}

.goodsInfo .collect{
  position: relative;
}

.goodsInfo .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -10px;
  width: 14px;
  height: 14px;
  /*background: url() 0 0/14px 14px;*/
}


</style>
