<template>
    <div class='list' ref='wrapper'>
        <ul class='wrapper'>
            <li class='item' v-for="(item,index) in datas" :key="index">
                <div class='item-top'>
                    <div class='item-title'>|| {{item.title}}</div>
                    <img src='static/icons/small/61 – 1.png'>
                </div>
                <div class='item-content'>{{item.content}}</div>
                <div class='item-name'>
                    <div class='item-name-left'>
                        <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='item-name-img'>
                        <div class='item-name-name'>{{item.user_nickname}}</div>
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
  data: function(){
      return {
          datas:[],
      }
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
        //获取我的收藏
        fetch('http://api.gxy.ink/v1/collections', {
        mode:'cors',
        method:'GET',
        headers:
            new Headers({
                'Content-Type':'application/json',
                'Authorization':localStorage.token_id
            })
        }).then(res => res.json().then(body => {
        console.log(body)
        if(body.code === 0){
            console.log(body.message)
            this.datas = body.data
        }
        })).catch(error => console.log("error: ", error))

  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  @import '../../../../assets/styles/dayChange.styl';
  .list 
    .foot 
      font-size: .22rem
      text-align: center
      margin-bottom: 2rem
      color #ffffff
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
        background-color $bgColor
        .item-top 
          display: flex 
          justify-content: space-between
          align-items: center
          img  
            height: .4rem
          .item-title
            height: .72rem
            line-height: .8rem
            font-size: .32rem
            color $fontColor
        .item-content
          height: 1rem
          font-size: .3rem
          color $fontColor
        .item-name
          display: flex
          justify-content: space-between
          height: .58rem
          padding-bottom: .2rem
          .item-name-right 
            height: .56rem
            line-height: .56rem
            color $fontColor
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
            .item-name-name
              float: right
              height: .56rem
              line-height: .56rem
              margin-left: .1rem
              color $fontColor
</style>
