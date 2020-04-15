<template>
    <div>
        <ul class='wrapper'>
            <li class='item' v-for='(item,index) of this.$store.state.artical.sections' :key='index'>
                <div class='item-title'>{{item.title}}</div>
                <div class='content'>{{item.content}}</div>
                <div class='foot'>
                    <div class='left'>
                        <div class='img'>
                            <img src="static/imgs/touxiang/批注 2020-02-10 002238.jpg" alt="" class="img-img">
                        </div>
                        <span class='desc'>{{item.user_nickname}}</span>
                        <span class='time'>3月10日16:30</span>
                    </div>
                    <div class='right'>
                        <img src='static/icons/small/57 – 1.png'>
                        <img src='static/icons/small/60 – 1.png'>
                    </div>
                </div>
            </li>
            <li class='item'>
                <div class='item-title' style="color $fontColor">5 || 期待你的续写....</div>
            </li>
        </ul>
        <button @click="handleGetComments">查看评论</button>
        <button @click="handleGetContinue" class="continue">我要续写</button>
    </div>
</template>

<script>
import ArticalDetailsTitle from './ArticalDetailsTitle'
export default {
  name: 'ArticalDetailsChapter',
  data () {
    return{
      comments: []
    }
  },
  methods: {
    handleGetComments() {
        this.$router.push('/comments')
        fetch("http://api.gxy.ink/v1/reply/"+this.$store.state.artical.passage.id,{
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
            this.comments = body.data
            console.log(this.contents)
        }
        }))
        this.$store.commit('getComments',this.comments)
    },
    handleGetContinue() {
        var passage_title = this.$store.state.artical.passage.title
        var sections_id = this.$store.state.artical.sections.length
        var passage_id = this.$store.state.artical.sections[0].passage_id
        console.log(passage_title)
        console.log(sections_id)
        this.$router.push('/createEdit?title='+passage_title+'&number='+sections_id+'&id='+passage_id)
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../../assets/styles/dayChange.styl'
  .wrapper
    .item 
      background-color: $bgColor
      box-sizing:border-box
      -moz-box-sizing:border-box
      -webkit-box-sizing:border-box
      width: 100%
      margin-bottom: .3rem
      padding-left: .28rem
      padding-right: .28rem
      padding-bottom: .2rem
      .item-title 
        height: .8rem
        line-height: .8rem
        font-size: .32rem
        color $fontColor
      .content 
        font-size: .3rem
        line-height: .4rem
        color $fontColor
      .foot 
        height: .36rem
        margin-top: .2rem
        overflow: hidden
        .left 
          float: left 
          height: .36rem
          line-height: .36rem
          display: flex
          .img 
            border-radius: 100%
            //background: red 
            width: .36rem
            height: .36rem
            .img-img
              width .36rem
              height .36rem
              border-radius 50%
          .desc 
            line-height: .36rem
            font-size: .26rem
            margin-left: .1rem
            color $fontColor
          .time 
            line-height: .36rem
            font-size: .22rem
            margin-left: .2rem
            color $fontColor
        .right 
          float: right
          img 
            height: .36rem
            margin-left: .2rem
  button 
    height: .84rem 
    line-height: .84rem 
    background-color: $bgColor
    color $fontColor
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3)
    border-radius: .42rem
    width: 2.9rem
    text-align: center
    font-size: .32rem
    display: block
    margin: 0 auto
  .continue {
    margin-top 20px
  }
</style>