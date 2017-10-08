<template>
  <div id="app">
    <div class="w header">
      <div class="logo"><img src="https://static.pgyer.com/static-20171001/assets/img/logoNewest.png" alt=""></div>
      <div class="nav">
        <ul>
          <li><a href="javascript:;">首页</a></li>
          <li><a href="javascript:;">产品展示</a></li>
          <li><a href="javascript:;">关于我们</a></li>
          <li><a href="javascript:;">新闻资讯</a></li>
          <li><a href="javascript:;">联系我们</a></li>
        </ul>
      </div>
      <div class="login">
        <ul>
          <li><a href="javascript:;">登录</a></li>
          <li><a href="javascript:;">注册</a></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .header{
    background-color: #292C33;
    height: 62px;
    line-height: 62px;
    font-size: 16px;
    /*padding-left: 80px;*/
    /*padding-right: 80px;*/
    .logo{
      float: left;
      img{
        width: 120px;
        height: 42px;
      }
    }
    .nav{
      margin-left: 20px;
      float: left;
      ul{
        li{
          float: left;
          a{
            
            display: block;
            color: #fff;
            /*float: left;*/
            text-decoration: none;
            padding: 0 10px;
            line-height: 60px;
            box-sizing: border-box;
          }
          a:hover{
            color: #1ABC9C;
            border-bottom: 2px #1ABC9C solid;
          }
        }
      }
    }
    .login{
      float: right;
      ul{
        li{
          float: left;
          a{
            display: block;
            color: #fff;
            /*float: left;*/
            text-decoration: none;
            padding: 0 10px;
            line-height: 60px;
          }
          a:hover{
            color: #1ABC9C;
            border-bottom: 2px #1ABC9C solid;
          }
        }
      }
    }
  }
}

</style>
