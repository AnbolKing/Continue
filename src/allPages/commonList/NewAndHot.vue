<template>
  <div class='wrapper'>
    <swiper ref="mySwiper">
      <swiper-slide v-for='(item,index) of contents' :key='index'>
        <!-- <router-link to='/articaldetails'> -->
            <div class='body' @click="handleGetArtical(item)">
            <div class='top'>
                <div class='title'>
                {{item.passage.title}}
                <span class='number'>{{item.passage.collection}}</span>
                <img src ='static/icons/middle/69 – 2@3x.png'>
                </div>
                <div class='user'>
                <div class='left'>
                    <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='img'>
                    <span class='name'>{{item.passage.user_nickname}}</span>
                </div>
                <span class='time'>{{new Date().toLocaleDateString(item.passage.create_at)}}</span>
                </div>
            </div>
            <div class='bottom'>
                <div class='smallTitle'>{{(item.sections)[0].title}}</div>
                <div class='text'>{{(item.sections)[0].content}}</div>
            </div>
            </div>
        <!-- </router-link> -->
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>
  </div>
</template>


<script >
export default({
    name: 'NewAndHot',
    data:function(){
      return {
          contents:[],
      }
    },
    methods: {
        //监听路由
        handleGetArtical(item) {
            this.$store.commit('getArtical',item)
            this.$router.push('/articaldetails')
        }
    },
    mounted() {
        var link = this.$store.state.link
        if(link == 'newcontinue') {
            console.log('ok')
            console.log('这是：',link)
            //获取最新续作
            fetch('http://api.gxy.ink/v1/latest/sequels?page=1',{
              mode:'cors',
              method:'GET',
              headers:
                new Headers({
                    'Content-Type':'application/json',
                    'Authorization':localStorage.token_id
                })
            }).then(res => res.json().then(body => {
                console.log(body)
                if(body.code===0) {
                    var result = []
                    let originContent = body.data
                    console.log(originContent)
                    originContent.forEach(value => {
                        if(value.sections) {
                            result.push(value)
                        }
                    })
                    this.contents = result
                    console.log(this.contents)
                }
            })).catch(error => console.log("error: ", error))
        }
        if(link == 'newcreate') {
            console.log('ok')
            console.log('这是：',link)
            //获取最新原创
            fetch('http://api.gxy.ink/v1/latest/creations?page=1',{
              mode:'cors',
              method:'GET',
              headers:
                new Headers({
                    'Content-Type':'application/json',
                    'Authorization':localStorage.token_id
                })
            }).then(res => res.json().then(body => {
                console.log(body)
                if(body.code===0) {
                    var result = []
                    let originContent = body.data
                    console.log(originContent)
                    originContent.forEach(value => {
                        if(value.sections) {
                            result.push(value)
                        }
                    })
                    this.contents = result
                    console.log(this.contents)
                }
            })).catch(error => console.log("error: ", error))
        }
        if(link == 'hotcreate') {
            console.log('ok')
            console.log('这是：',link)
            //获热门原创
            fetch('http://api.gxy.ink/v1/hot/creations?page=1',{
              mode:'cors',
              method:'GET',
              headers:
                new Headers({
                    'Content-Type':'application/json',
                    'Authorization':localStorage.token_id
                })
            }).then(res => res.json().then(body => {
                console.log(body)
                if(body.code===0) {
                    var result = []
                    let originContent = body.data
                    console.log(originContent)
                    originContent.forEach(value => {
                        if(value.sections) {
                            result.push(value)
                        }
                    })
                    this.contents = result
                    console.log(this.contents)
                }
            })).catch(error => console.log("error: ", error))
        }
        if(link == 'hotcontinue') {
            console.log('ok')
            console.log('这是：',link)
            //获取热门续作
            fetch('http://api.gxy.ink/v1/hot/sequels?page=1',{
              mode:'cors',
              method:'GET',
              headers:
                new Headers({
                    'Content-Type':'application/json',
                    'Authorization':localStorage.token_id
                })
            }).then(res => res.json().then(body => {
                console.log(body)
                if(body.code===0) {
                    var result = []
                    let originContent = body.data
                    console.log(originContent)
                    originContent.forEach(value => {
                        if(value.sections) {
                            result.push(value)
                        }
                    })
                    this.contents = result
                    console.log(this.contents)
                }
            })).catch(error => console.log("error: ", error))
        }
    }
})
</script>>
<style lang="stylus" scoped>
   @import '../../assets/styles/dayChange.styl';
  .body 
    height: 10.68rem
    background: $bgColor
    margin: 0 .76rem
    padding: 0 .4rem
    border-radius: .6rem
    box-shadow: -5px -5px 16px 0px rgba(255, 255, 255, 0.5)
    .top 
      height: 1.28rem
      border-bottom: solid .02rem #f6f6f6
      padding-top: .2rem
      .title 
        height: .44rem
        line-height: .44rem 
        font-size: .32rem
        color $fontColor
        img 
          float: right
        .number 
          font-size: .26rem
          float: right
          color $fontColor
      .user 
        height: 0.64rem
        //line-height: 0.64rem 
        display: flex 
        align-items: center
        justify-content: space-between 
        .left
          display: flex
          align-items: center
          .img 
            height: .4rem 
            width: .4rem 
            border-radius: 100%
            background: red
          .name 
            font-size: .26rem
            margin-left: .1rem
            color $fontColor
        .time 
          font-size: .22rem
    .bottom 
      .smallTitle 
        height:.8rem
        line-height: .8rem
        font-size: .32rem
        color $fontColor
      .text 
        font-size: .3rem
        color $fontColor
        opacity: 0.54
        line-height: .4rem   
</style>