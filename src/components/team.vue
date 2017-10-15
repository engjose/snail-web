<template>
  <div class="team">
    <Nav></Nav>
    <div class="banner">
      <img src="/static/img/team-banner.jpg" alt=""/>
    </div>
  </div>
</template>

<script>
  import Nav from "./nav.vue";
  export default {
    components: {
      Nav
    }
  };
</script>

<style scoped lang="less">
  .team{
    .banner{
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
</style>
