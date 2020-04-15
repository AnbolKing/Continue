<template>
    <div>
        <ul>
            <li class='item'>
                <div class='item-title'>{{this.$store.state.datas.number}} || {{this.$store.state.datas.sonTitle}}</div>
                <div class='content'>{{this.$store.state.datas.content}}</div>
                <div class='foot'>
                    <div class='left'>
                        <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='img'>
                        <span class='desc'>{{this.$store.state.nickname}}</span>
                        <span class='time'>{{new Date().toLocaleString()}}</span>
                    </div>
                    <div class='right'>
                        <img src='static/icons/small/57 – 1.png'>
                        <img src='static/icons/small/60 – 1.png'>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ArticalDetailsChapter'
}
</script>

<style lang='stylus' scoped>
  @import '../../../../../assets/styles/dayChange.styl';
  .item 
    background-color $bgColor
    box-sizing:border-box
    -moz-box-sizing:border-box
    -webkit-box-sizing:border-box
    width: 100%
    margin-top: .4rem
    padding-left: .28rem
    padding-right: .28rem
    padding-bottom: .2rem
    .item-title 
      line-height: .96rem
      font-size: .36rem
      color $fontColor
    .content 
      font-size: .32rem
      line-height: .42rem
      color $fontColor
    .foot 
      height: .6rem
      margin-top: .4rem
      overflow: hidden
      .left 
        float: left 
        height: .6rem
        line-height: .6rem
        display: flex
        .img 
          border-radius: 100%
          background: red 
          width: .6rem
          height: .6rem
        .desc 
          line-height: .6rem
          margin-left: .1rem
          color $fontColor
        .time
          line-height: .6rem
          margin-left: .2rem
          color $fontColor
      .right 
        float: right
        height: .6rem
        line-height: .6rem
        img 
          height: .45rem
          margin-left: .36rem
          

</style>