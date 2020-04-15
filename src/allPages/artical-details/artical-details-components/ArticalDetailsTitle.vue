<template>
    <div class='wrapper'>
        <div class='top'>{{this.$store.state.artical.passage.title}}</div>
        <div class='bottom'>
            <div class='left'>
                <div class='img'>
                    <img src="static/imgs/touxiang/批注 2020-02-10 002238.jpg" alt="" class="img-img">
                </div>
                <div class='desc'>由{{this.$store.state.artical.passage.user_nickname}}发起</div>
            </div>
            <div class='right'>
                <img src='static/icons/middle/74 – 1.png'>
                <img src='static/icons/middle/73 – 1.png'>
                <img src='static/icons/middle/49 – 1.png'>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticalDetailsTitle',
    props: {
      contents: Object
    }
}
</script>

<style lang='stylus' scoped>
  @import '../../../assets/styles/dayChange.styl';
  .wrapper 
      margin-bottom: .4rem
    .top 
      line-height: .86rem
      font-size: .64rem
      margin-left: .4rem
      color: #ffffff
    .bottom
      height: .5rem
      line-height: .5rem
      margin: 0 .4rem
      .left
        float: left 
        height: .5rem
        min-width: 2.4rem
        border-radius: .24rem
        background-color: #ffffff
        opacity: 0.9
        .img 
          float: left
          width: .5rem
          height: .5rem
          border-radius: 100%
          //background: red
          .img-img
            width: .5rem
            height: .5rem
            border-radius: 100%
        .desc 
          float: right
          color $fontColor
      .right
        float: right 
        height: .5rem
        img 
          height: .46rem
          margin-left: .3rem
</style>