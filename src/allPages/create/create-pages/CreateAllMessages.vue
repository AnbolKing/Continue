<template>
    <div>
        <div class='header'>
            <router-link to='/create'>
                <img src='static/icons/middle/39 – 1.png'>
            </router-link>
            <div class="allMessage">所有消息</div>
            <img @click='changeShow()' :src=this.rightUrl ref='change'>
        </div>
        <div class='list' v-show='messageShow'>
            <ul class='wrapper'>
                <li class='item' v-for="(item,index) in datas" :key="index">
                    <div class='item-title'>|| {{item.passage_title}}<span class='gray'> 有了新的续作</span></div>
                    <div class='item-content'>{{item.passage_content}}</div>
                    <div class='item-name'>
                        <div class='item-name-left'>
                            <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='item-name-img'>
                            <div class='item-name-name'>{{item.doer_nickname}}</div>
                        </div>
                        <div class='item-name-right'>{{new Date().toLocaleDateString(item.create_at)}}</div>
                    </div>
                </li>
            </ul>
            <div class='foot'>没有了呢</div>
        </div>
        <transition>
        <div class='reverse' v-show='!messageShow'>
            <router-link to="/myself">
                <div class='reverse-item'>收藏创作更新</div>
                <div class='reverse-item'>关注的用户</div>
                <div class='reverse-item'>收藏的续作</div>
                <div class='reverse-item'>收藏的原创</div>
            </router-link>
        </div>
        </transition>
        <transition>
            <div class="shawdo" v-show="!messageShow"></div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'CreateAllMessages',
    data () {
        return {
            messageShow: true,
            rightUrl:'static'+'/'+'icons'+'/'+'middle'+'/'+'36 – 1.png',
            datas:[],
        }
    },
    methods: {
        changeShow () {
            this.messageShow = !this.messageShow 
            if(!this.messageShow) {
                this.$refs.change.src='static'+'/'+'icons'+'/'+'middle'+'/'+'35 – 1.png'
            } else {
                this.$refs.change.src = 'static'+'/'+'icons'+'/'+'middle'+'/'+'36 – 1.png'
            }
        }
    },
    mounted() {
        //记得加一个setInterval 时间是5min
        fetch('http://api.gxy.ink/v1/notifications',{
            mode:'cors',
            method:'GET',
            headers:
                new Headers({
                    'Content-Type':'application/json',
                    'Authorization':localStorage.token_id
                })
        }).then(res => res.json().then(body => {
            console.log(body)
            if(body.code === 0) {
                this.datas = body.data;
            }
        })).catch(error => console.log("error: ", error))
    },
}
</script>

<style lang='stylus' scoped>
  @import '../../../assets/styles/dayChange.styl';
  .shawdo {
      position absolute
      top 1rem
      height 100%
      width  100%
      background-color $bgApColoe
      z-index 0
  }
  .header
    background-color: #ffffff
    margin-top: .4rem
    //margin-bottom: .4rem
    padding-left: .4rem
    padding-right: .4rem
    height: .88rem
    line-height: .88rem
    font-size: .36rem
    display: flex 
    justify-content: space-between 
    align-items: center
    z-index 99
    img 
      height: .46rem
  .list 
    padding-top 0.4rem
    .foot 
      font-size: .22rem
      text-align: center
      color #ffffff
    .wrapper
      .item
        height: 2.28rem  
        margin-left: .4rem
        margin-right: .4rem
        border-radius: .22rem
        padding-left: .28rem
        padding-right: .28rem
        margin-bottom: .2rem
        opacity: 0.9
        background-color: $bgColor
        box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.16)
        .item-title
          height: .8rem
          line-height: .8rem
          font-size: .32rem
          color $fontColor
          .gray 
            color: #000000
            opacity: 0.54
            font-size: .3rem
        .item-content
          height: .9rem
          line-height: .4rem
          font-size: .3rem
          color $fontColor
        .item-name
          display: flex
          justify-content: space-between
          height: .58rem
          .item-name-right 
            height: .58rem
            line-height: .58rem
            color $fontColor
          .item-name-left
            height: .58rem
            .item-name-img
              border-radius: 100%
              width: .54rem
              height: .54rem
              background: red
              float: left 
            .item-name-name
              float: right
              height: .58rem
              line-height: .58rem
              margin-left: .1rem
              color $fontColor
  .reverse
    position: absolute 
    top: 1.5rem
    right: 0
    width: 3.6rem
    z-index 99
    .reverse-item
      height: 1.2rem
      line-height: 1.2rem
      font-size: .36rem
      width: 3.6rem
      padding-left: .26rem
      margin-top: .12rem
      margin-bottom: .12rem
      //border: solid .02rem #707070
      background-color $bgColor
      color $fontColor
  .v-enter,.v-leave-to 
    opacity: 0
  .v-enter-active,.v-leave-active 
    transition: opacity .5s
</style>