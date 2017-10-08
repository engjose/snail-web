<template>
  <div id="home">
  <!-- 第一个页面：logo及页面内导航展示 -->
	<div class="firstPage">
		<div class="head">
			DO THING & MOST PROFESSIONAL
		</div>
		<div class="logo">
			<img src="/static/logo.png" alt="">
		</div>
		<div class="nav">
			<ul>
				<li><a href="#">TEAM</a></li>/
				<li><a href="#">ABOUT</a></li>/
				<li><a href="#">PRODUCT</a></li>/
				<li><a href="#">CONTONT</a></li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script>
	
	export default {
		data(){
			return {

			}
		},
		beforeCreate(){
			$(function(){
					var clientHeight=$(window).height();
					var clientWidth=$(window).width();
					// alert(clientHeight);
					$(".firstPage").width(clientWidth).height(clientHeight).css("background", "#292929")

				})
		},
		methods:{
			
			
		}

	}
</script>

<style scoped lang="less">
#home{
	align-items: stretch;
	color: #fff;
	/*position: relative;*/
	.firstPage{
		
		.logo{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
			img{
				width: 100%;
			}

		}
		.nav{
			position: absolute;
			left: 50%;
			bottom: 50px;
			transform: translateX(-50%);
			ul{
				display: flex;
				font-weight: 700;
				font-size: 16px;
				color: #F74139;
				li{
					box-sizing: border-box;
					float: left;
					margin: 0 10px;
					a{
						display: block;
						position: relative;
						padding-bottom: 5px;
						text-decoration: none;
						font-weight: 700;
						font-size: 16px;
						color: #F74139;
						-webkit-transition: color .2s ease-in-out;
						transition: color .2s ease-in-out;
					}
					a:before{
						content: "";
						position: absolute;
						bottom: 0;
						width: 0;
						border-bottom: 4px solid #fff;
					}
					a:hover:before {

						width: 100%;
					}
					a:before {
						-webkit-transition: width .2s ease-in-out;
						transition: width .2s ease-in-out;
					}
					
				}
			}
		}
		.head{
			position: absolute;
			left: 50%;
			top: 50px;
			transform: translateX(-50%);
			z-index: 100;
			font-weight: 700;
			font-size: 16px;
			color: #F74139;
		}
	}
}

</style>
