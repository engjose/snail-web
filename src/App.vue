<template>
  <div id="app">
    <div class="nav">
      <span class="glyphicon glyphicon-align-left" v-on:click="showMenu"></span>
      <div class="navShow">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">WORK</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">PEOPLE</a></li>
          <li><a href="#">CONTECT</a></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:true
    }
  },
  methods:{
      showMenu(){
        
        var height = $(window).height();
        var width = $(window).width();
        $(".navShow").width(width).height(height).css({"background": "rgba(0,0,0,0.8)"},{"display":"block"}).slideToggle("slow");
        
        var attr = this.show?"glyphicon glyphicon-remove":"glyphicon glyphicon-align-left";
        $(".nav>span").attr("class",attr);
        this.show=!this.show;
      }
    }
}
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .nav{
    span{
      position: fixed;
      left: 20px;
      top: 20px;
      font-size: 40px;
      color: #F74139;
      cursor: pointer;
      z-index: 2000;
    }
    .navShow{
      position: absolute;
      z-index: 1000;
      display: none;
      ul{
        margin-top: 100px;
        li{
          a{
            text-align: center;
            display: block;
            text-decoration: none;
            font-size: 30px;
            height: 70px;
            line-height: 70px;
            color: #fff;
          }
          a:hover{
            background-color: #171717;
          }
        }
      }
    }
  }
}

</style>
