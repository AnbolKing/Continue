<template>
    <div>
        <div class='head'>
            <div class='head-left'>消息</div>
                <div class='head-right' @click="goMore">更多</div>
        </div>
        <ul class='wrapper'>
            <li class='item' v-for="(item,index) in datas" :key="index">
                <div class='item-top'>|| {{item.passage_title}}</div>
                <div class='item-bottom'>
                    <div class='bottom-left'>
                        <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='img'>
                        <div class='desc'>{{item.doer_nickname}}</div>
                    </div>
                    <div class='bottom-right'>{{new Date().toLocaleDateString(item.create_at)}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'CreateMessage',
    props: {
        datas:Array
    },
    methods: {
        goMore() {
            this.$router.push('/createAllMessages')
        }
    }
}
</script>

<style lang='stylus' scoped>
  @import '../../../assets/styles/dayChange.styl';
  .head 
    color #ffffff
    height: .6rem
    line-height: .6rem
    font-size: .36rem
    margin-left: .4rem
    margin-right: .4rem
    margin-bottom: .1rem
    .head-left
      float: left 
    .head-right
      float: right
      color #ffffff
  .wrapper 
    .item 
      background-color $bgColor
      height: 1.3rem
      margin-left: .4rem
      margin-right: .4rem
      margin-bottom: .2rem
      border-radius: .22rem
      //border: solid .01rem
      padding-top: .2rem
      padding-left: .28rem
      padding-right: .28rem
      .item-top 
        line-height: .5rem
        font-size: .32rem
        margin-bottom: .2rem
        color $fontColor
      .item-bottom 
        height: .4rem
        color: #707070
        display: flex
        justify-content: space-between
        .bottom-left 
          height: .4rem
          min-width: 1.44rem
          display: flex
          justify-content: space-between
          .img 
            height: .38rem
            width: .38rem
            border-radius: 100%
            background: red
          .desc 
            line-height: .4rem
            font-size: .24rem
            color $fontColor
        .bottom-right 
          line-height: .4rem
          color $fontColor
</style>