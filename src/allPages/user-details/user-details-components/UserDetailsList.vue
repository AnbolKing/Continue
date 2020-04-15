<template>
    <div class='list' ref='wrapper'>
        <ul class='wrapper'>
            <li class='item' v-for="(item,index) in datas" :key="index">
                <div class='item-top'>
                    <div class='item-title'>|| {{item.passage_title}}</div>
                </div>
                <div class='item-content'>{{item.section_content}}</div>
                <div class='item-name'>
                    <div class='item-name-left'>
                        <div class='item-name-img'>
                            <img src="static/imgs/touxiang/批注 2020-02-10 002238.jpg" alt="">
                        </div>
                        <div class='item-name-name'>{{data.nickname}}</div>
                    </div>
                    <div class='item-name-right'>{{new Date().toLocaleDateString(item.create_at)}}</div>
                </div>
            </li>
        </ul>
        <div class='foot'>没有了呢</div>
    </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'CollectionsList',
  props: {
      datas:Array,
      data:Object
  },
  data:function() {
      return {
          display:true,
      }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  .list 
    .foot 
      font-size: .22rem
      text-align: center
      margin-bottom: 2rem
    .wrapper
      .item
        height: 2.28rem  
        margin-left: .4rem
        margin-right: .4rem
        border-radius: .22rem
        padding-left: .28rem
        padding-right: .28rem
        margin-bottom: .3rem
        //border: solid .01rem
        background-color rgba(255,255,255,0.9)
        .item-top 
          display: flex 
          justify-content: space-between
          align-items: center
          .item-title
            height: .72rem
            line-height: .8rem
            font-size: .32rem
        .item-content
          height: 1rem
          font-size: .3rem
          color: #707070
        .item-name
          display: flex
          justify-content: space-between
          height: .58rem
          padding-bottom: .2rem
          .item-name-right 
            height: .56rem
            line-height: .56rem
          .item-name-left
            height: .56rem
            display: flex 
            align-items: center
            .item-name-img
              border-radius: 100%
              width: .4rem
              height: .4rem
              background: red
              float: left 
              img 
                width .4rem
                height .4rem
                border-radius 50%
            .item-name-name
              float: right
              height: .56rem
              line-height: .56rem
              margin-left: .1rem
</style>
