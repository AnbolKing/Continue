<template>
    <div>
        <div class='header'>
            <router-link to='/create'>
                <img src='static/icons/middle/47 – 1.png'>
            </router-link>
            创作
            <img src='static/icons/middle/45 – 1.png' @click="handleReady">
        </div>
        <div class='wrapper'>
            <div class='body'>
                <div class='title-wrapper'>
                    <input class='title' type='text' placeholder="你的标题" v-model="title">
                </div>
                <div class='small-wrapper'>
                    <div>1&nbsp;</div>
                    <input class='small' type='text' placeholder='小标题' v-model="sonTitle">
                </div>
                <div class='content-wrapper'>
                    <textarea class='content' placeholder='开始创作……' v-model="content"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateEdit',
    data: function() {
        return {
            title:'',
            sonTitle:'',
            content:'',
            passage_id:0,
            datas:{
                title:'',
                sonTitle:'',
                content:'',
                number:0,
                passage_id:0,
            }
        }
    },
    mounted() {
        if(this.$route.query.title) {
            this.title = this.$route.query.title
            this.number = this.$route.query.number
            this.passage_id = this.$route.query.id
        }
        else {
            this.title = '你的标题'
        }
    },
    methods: {
        handleReady() {
            this.datas.title = this.title
            this.datas.sonTitle = this.sonTitle
            this.datas.content = this.content
            this.datas.number = this.number;
            this.datas.passage_id = parseInt(this.passage_id)
            this.$store.commit('getContinue',this.datas)
            this.$router.push('/readyEdit')
        }
    }
}
</script>

<style lang='stylus' scoped>
  @import '../../../assets/styles/dayChange.styl';
  .header
    margin-top: .4rem
    margin-bottom: .3rem
    padding-left: .4rem
    padding-right: .4rem
    height: .88rem
    line-height: .88rem
    font-size: .36rem
    //border-bottom: solid .01rem
    //border-top: solid .01rem
    display: flex 
    align-items: center
    justify-content: space-between
    background-color #ffffff
    img 
      height: .46rem
  .wrapper
    padding-left: .4rem
    padding-right: .4rem
    height: 11.7rem
    .body 
      background-color: $bgColor
      box-sizing:border-box
      -moz-box-sizing:border-box
      -webkit-box-sizing:border-box
      width: 100%
      height: 100%
      border-radius 0.2rem
      padding-left: .28rem
      padding-right: .28rem
      padding-top: .64rem
      opacity: 0.9
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.16)
      .title-wrapper 
        height: .86rem
        margin-right: 1.94rem
        margin-left: 1.94rem
        border-bottom: double #707070 
        border-bottom-width: .1rem
        .title 
          width: 100%   
          height: 100%
          text-align: center
          font-size: .4rem
          background-color $bgColor
          &::placeholder 
            color: $fontColor
      .small-wrapper 
        width: 100%
        height: .67rem
        margin-bottom: .2rem
        display: flex
        border-bottom: solid .01rem #707070
        div 
          height: 100%
          line-height: .67rem
          font-size: .32rem
        .small
          width: 90% 
          height: 100%
          font-size: .32rem
          background-color $bgColor
          &::placeholder 
            color: $fontColor
      .content-wrapper 
        width: 100% 
        height: 9rem
        .content 
          background-color $bgColor
          width: 100%
          height: 100%
          &::placeholder 
            color: $fontColor
          line-height: .42rem
          font-size: .32rem

            
     
</style>