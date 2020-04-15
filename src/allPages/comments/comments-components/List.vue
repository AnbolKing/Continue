<template>
    <div>
        <div class='head'>
            | 添加评论
            <img src='static/icons/middle/56 – 1.png' class='img' @click='addComments'>
            <span ref='quxiao' @click='quxiao'></span>
        </div>
        <transition enter-active-class='animated fadeIn'>
          <div class='input-wrapper' v-show='commentsInputShow'>
            <textarea type='text' placeholder='请输入评论' v-model='addcomments'></textarea>
            <button @click='queren'>确认</button>
          </div>
        </transition>
        <ul class='wrapper'>
            <li class='item' v-for="(item,index) in this.$store.state.comments" :key="index">
                <div class='top'>
                    <div class='flex-wrapper'>
                        <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='img'>
                        <div class='name'>{{item.user_nickname}}</div>
                        <div class='time'>3月10日16:30</div>
                    </div>
                    <img :src=iconUrl ref='icon' @click='changeIcon()'>
                </div>
                <div class='content'>{{item.content}}</div>
            </li>
            <li class='item'>
                <div class='top'>
                    <div class='flex-wrapper'>
                        <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='img'>
                        <div class='name'>xxx用户</div>
                        <div class='time'>3月10日16:30</div>
                    </div>
                    <img src='static/icons/small/60 – 1.png'>
                </div>
                <div class='content'>评论功能暂时没写出来。。。</div>
            </li>
            <li class='item'>
                <div class='top'>
                    <div class='flex-wrapper'>
                        <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='img'>
                        <div class='name'>xxx用户</div>
                        <div class='time'>3月10日16:30</div>
                    </div>
                    <img src='static/icons/small/60 – 1.png'>
                </div>
                <div class='content'>后续会改进哦~</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CommentsList',
    data () {
      return {
        iconUrl: 'static'+'/'+'icons'+'/'+'small'+'/'+'组件 60 – 1.png',
        red: false,
        commentsInputShow: false,
        addcomments: ''
      }
    },
    methods: {
      changeIcon () {
        this.red = !this.red
        if (this.red) {
          this.$refs.icon.src = 'static'+'/'+'icons'+'/'+'small'+'/'+'组件 61 – 1.png'
        } else {
          this.$refs.icon.src = 'static'+'/'+'icons'+'/'+'small'+'/'+'组件 60 – 1.png'
        }
      },
      addComments () {
        this.commentsInputShow = true
        this.$refs.quxiao.innerHTML = '取消'
      },
      queren () {
        this.commentsInputShow = false
        this.$refs.quxiao.innerHTML = ''
        console.log(this.$store.state.artical)
        var data = {
          'content': this.addcomments,
          'passage_id': this.$store.state.artical.sctions[0].passage_id
        }
        fetch('http://api.gxy.ink/v1/reply',{
                mode:'cors',
                method:'POST',
                body: JSON.stringify(data),
                headers:
                new Headers({
                    'Content-Type':'application/json',
                    'Authorization':localStorage.token_id
                })
        }).then(res => res.json().then(body => {
            console.log(body)
            if(body.code===0) {
                console.log(body.message)
            }
        })).catch(error => console.log("error: ", error))
      },
      quxiao() {
        this.commentsInputShow = false
        this.$refs.quxiao.innerHTML = ''
        this.addcomments= ''
      }
    }
}
</script>

<style lang='stylus' scoped>
  .head 
    margin-top: .48rem
    background: #ffffff
    height: 1.06rem
    line-height: 1.06rem
    font-size: .36rem
    font-weight: 600
    padding: 0 .28rem
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16)
    img 
      width: .5rem
      margin-left: .48rem
    span 
      float: right
  .input-wrapper  
    height: 3.08rem
    background-color: #ffffff
    margin-bottom: .4rem
    padding: .2rem .4rem
    border-bottom-right-radius:.6rem
    border-bottom-left-radius:.6rem 
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16)
    textarea  
      height: 2.28rem
      width: 100%
      line-height: .4rem
      font-size: .32rem
    button 
      float: right
      background: #ffffff
      font-size: .32rem 
      color: #000000
  .wrapper 
    .item 
      height: 1.3rem 
      background: #fff
      margin-top: .3rem
      padding: 0 .28rem
      padding-top: .2rem
      .top 
        height: .54rem 
        display: flex 
        justify-content: space-between
        .flex-wrapper  
          height: .54rem
          display: flex
          align-items: center
          .img 
            border-radius: 100% 
            background: red 
            height: .4rem
            width: .4rem
            display: block
          .name 
            margin-left: .1rem
          .time 
            margin-left: .2rem
        img 
          height: .4rem
      .content 
        height: .7rem 
        line-height: .7rem 
        font-size: .34rem
           
</style>