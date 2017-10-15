<template>
  <div id="home" onload="opener.location.reload()">
    <Nav></Nav>
  <!-- 第一个页面：logo及页面内导航展示 -->
    <div class="section firstPage">
      <div class="head">
        DO THING & MOST PROFESSIONAL
      </div>
      <div class="logo">
        <img src="/static/img/snail.jpg" alt="">
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
    <!--第二个页面-->
    <div class="section secondPage">
      <div class="left">
        <div class="logo">
          <img src="/static/img/about.jpg" alt="">
        </div>
      </div>
      <div class="right">
        <div class="content">
          <h4>I am a UX Designer and Art Director from Austria living in Berlin.</h4><br>
          <p>Artworks and illustrations were my gateway to the creative industry which led to the foundation of my own studio and to first steps in the digital world.</p>
          <br>
          <h3>Art Direction</h3>
          <br>
          <p>Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.</p>
          <br>
          <h4>Out of this love for aesthetic design my passion for functionality and structure evolved. Jumping right into Photoshop didn’t feel accurate anymore and skipping the steps of building a framework based on functionality and usability became inevitable.</h4>
          <br><br>
          <h3>UX Design</h3>
          <br>
          <p>A user-centered mindset and sensitivity for design turned out to be the perfect fit when collaborating with agencies, clients and brands to develop digital concepts and solve problems together.</p>
          <br>
          <p>This rough framework outlines my process of developing digital experiences:</p>
          <br>
          <ul>
            <li>1. RESEARCH and gather the present state </li>
            <li>2. STRUCTURE setup and content of the project </li>
            <li>3. CONCEPT AND STRATEGY </li>
            <li>4. CREATE, evaluate and iterate deliverables like
              <br><br>
              <ul>
                <li>Personas</li>
                <li>Site maps</li>
                <li>Use cases and scenarios</li>
                <li>User flow</li>
                <li>Sketches and Infographics</li>
                <li>Wireframes</li>
              </ul>
            </li>
          </ul>
          <br><br>
          <p>Communicating the conceptual approach/UX strategy and reasoning behind it, is present during the whole process.</p>
          <br>
          <h4>To achieve the goal of making the web a better place I trust in teamwork, latest technology and intuition.</h4>
          <br>
          <h4>I am a UX Designer and Art Director from Austria living in Berlin.</h4>
          <br>
          <p>Artworks and illustrations were my gateway to the creative industry which led to the foundation of my own studio and to first steps in the digital world.</p>
          <br>
          <h3>Art Direction</h3>
          <br>
          <p>Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.</p>
          <br>
          <h4>I am a UX Designer and Art Director from Austria living in Berlin.</h4>
          <p>Artworks and illustrations were my gateway to the creative industry which led to the foundation of my own studio and to first steps in the digital world.</p>
          <br>
          <h3>Art Direction</h3><br>
          <p>Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.</p>
          <br>
          <h4>I am a UX Designer and Art Director from Austria living in Berlin.</h4><br>
          <p>Artworks and illustrations were my gateway to the creative industry which led to the foundation of my own studio and to first steps in the digital world.</p>

          <br><h3>Art Direction</h3><br>
          <p>Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.</p>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Nav from "./nav.vue";
	export default {
    components: {
      Nav
    },
		data(){
			return {

			}
		},
		beforeCreate(){
			$(function(){
					var clientHeight=$(window).height();
					var clientWidth=$(window).width();
					// alert(clientHeight);
					$(".firstPage").width(clientWidth).height(clientHeight).css("background", "#292929");
          $(".secondPage").width(clientWidth).height(clientHeight);
				})
		},
//    created(){
//		  $(function () {
//        var clientHeight=$(window).height();
//        var scollTop = $(document).scrollTop();
//        console.log(scollTop)
//      })
//    },
		methods:{

		}

	};
 $(function () {
//   $(document).scroll(function () {
//     var scrollTop = $(this).scrollTop();
//     var clientHeight=$(window).height();
//     if(scrollTop>clientHeight/2){
////       $(".firstPage").css("display","none");
////       $(this).scrollTop(clientHeight);
//       console.log(scrollTop)
//     };
//
//   })
 })
</script>

<style scoped lang="less">
#home{
	align-items: stretch;

	/*position: relative;*/
	.firstPage{
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
		.logo{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
    width: 33.3%;
    /*height: 50%;*/
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
  .secondPage{
     display: flex;
     .left{
       position: relative;
       width: 50%;
       height: 100%;
       background-color: #F7484E;
       .logo{
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%,-50%);
         img{

         }
       }
     }
     .right{
       width: 50%;
       height: 100%;
       background-color: #ffffff;
       padding: 20px 20px 20px 20px;
       overflow: hidden;
       .content{
         height: 100%;
         width: 105%;
         overflow: auto;
       }
     }
   }

}

</style>
