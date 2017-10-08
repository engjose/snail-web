<template>
  <div id="home">
	<Swiper></Swiper>
	<!-- 产品列表 -->
	<div class="product-list w">
		<div class="product-info">
    		<a href="#">
      			<img src="../../static/product1.png">
    		</a>
		</div>
		<div class="product-info">
    		<a href="#">
      			<img src="../../static/product1.png">
    		</a>
		</div>
		<div class="product-info">
    		<a href="#">
      			<img src="../../static/product1.png">
    		</a>
		</div>
	</div>
  </div>
</template>

<script>
	import Swiper from "./Swiper.vue"
	export default {
		components: {
			Swiper
		}
	}
</script>

<style scoped lang="less">
#home{
	.product-list{
		padding-top: 15px;
		padding-bottom: 15px;
		display: flex;
		flex-wrap: nowrap;
		background-color: #202020;
		.product-info{
			width: 50%;
			margin: 0 10px;
			a{
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}

</style>
