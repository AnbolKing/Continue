<template>
    <div class="warpper">
        <div class="swiper-content">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <img src="static/imgs/touxiang/批注 2020-03-11 002619.jpg" class="slide-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="static/imgs/touxiang/批注 2020-03-11 002241.jpg" class="slide-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="static/imgs/touxiang/ile-soniq-day-1-50-of-821-1366x800.jpg" class="slide-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="static/imgs/touxiang/批注 2020-03-11 002757.jpg" class="slide-img">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        <div class="item">本周热续 || 雨打芭蕉湿</div>
    </div>
</template>

<script>
export default {
  name: 'ExploreSwiper',
  data: function() {
      return {
          swiperOption: {
              autoplay:3000,
              pagination: '.swiper-pagination',
              loop:true
          }
      }
  }
}
</script>

<style lang="stylus" scoped>
  .warpper 
    position: relative
    overflow: hidden
    height: 3.54rem
    border-radius: .22rem 
    margin-left: 0.4rem
    margin-right: 0.4rem
    margin-bottom 0.4rem
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.16)
    .swiper-content
      height: 3.54rem
      width: 100%
      img
        max-width: 100%
        max-height: 100%
    .swiper-content >>> .swiper-container 
      width: 100%
      height: 100%
    .swiper-content >>> .swiper-pagination-bullet-active
      background: #ffffff
      .slider-img 
        height: 100%
    .item 
      position absolute
      left 0.28rem
      bottom 0.22rem
      z-index: 10
      font-size: .32rem
      font-weight: 600
      color: #ffffff
</style>
