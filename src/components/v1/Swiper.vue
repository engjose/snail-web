<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(banner,index) in banners" :key="index">
          <img v-if="banner.src" :src="banner.src">
        </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  data () {
    return {
      banners: [{ src: '../../static/2.jpg'}, { src:'../../static/2.jpg'}, { src:'../../static/2.jpg'}],
      swiperOption: {
        notNextTick: true,
        autoplay: 2000,
        pagination: '.swiper-pagination',
        // paginationType : 'fraction',
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style scoped lang="less">

  .swiper-slide{
    
    height: 500px;
    img{
      height: 500px;
    }
  }

  



</style>