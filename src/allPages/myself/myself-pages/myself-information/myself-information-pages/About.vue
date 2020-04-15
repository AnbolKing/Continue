<template>
    <div>
        <div>
            <div class='header'>
                <router-link to='/myselfInformation'>
                    <img src='static/icons/middle/39 – 1.png'>
                </router-link>
                <span>关于</span>
            </div>
            <div class='desc'>更新</div>
            <div class='wrapper'>
                <div>您已是最新版本</div>
                <div>1.0.0</div>
            </div>
            <div class='desc'>关于我们</div>
            <div class='about-wrapper'>
                <div class="product">
                    <div class="title">| 关于产品</div>
                    <div class="content">Continue是一款专注于故事续写和原创故事的APP。在这里，次元壁被打破，文字构造全新的宇宙。每一个脑洞都被小心翼翼地收藏，每一份喜欢都会毫无保留地表达，每一次续写都是不同灵魂的碰撞。在这里，最美妙的问候无非是一句：我可以参与你的故事吗？</div>
                </div>
                <div class="team">
                    <div class="title">| 关于我们</div>
                    <div class="content">我们是一支很普通的大学生团队，在Continue的想法出现之前，我们甚至是一群没有交集的个体。然而，我们拥有同样的对脑洞的忠诚和对创作的热情。于是，七个独特的灵魂在同一个故事邂逅，用同一份热爱让Continue诞生。Continue，译是“延续”。选择动词，是因为我们想要表达的是关于动态的创作，是有生机的文字，是源源不断的灵感。因为这个宇宙，不只有我，还有我们 :D</div>
                </div>
                <div class="people">
                    <div class="members job">团队成员</div>
                    <div class="PM job">产品：徐操兵</div>
                    <div class="OP job">运营：黄卉 李雅施</div>
                    <div class="DE job">设计：连海鸿</div>
                    <div class="FE job">前端：李欣苹 王子安</div>
                    <div class="PE job">后端：古新语</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'About',
    // mounted() {
    //   this.scroll = new BScroll(this.$refs.AB)
    // },
}
</script>

<style lang='stylus' scoped>
  .header 
    margin-top: .4rem
    height: .88rem 
    padding-left: .3rem
    background: #ffffff
    display: flex 
    align-items: center
    box-shadow: 0rem 0.02rem 0.1rem 0rem rgba(0, 0, 0, 0.3)
    img 
      height: .46rem
    span 
      line-height: .88rem 
      font-size: .36rem
      margin-left: 2.67rem
  .desc 
    height: .84rem 
    line-height: .84rem
    padding-left: .4rem
    color: #ffffff
    font-size: .32rem
  .wrapper 
    height: 1rem 
    background: #ffffff
    margin: 0 .4rem
    padding: 0 .4rem
    display: flex 
    align-items: center 
    justify-content: space-between
    border-radius: .22rem
    box-shadow: 0.02rem 0.04rem 0.06rem 0rem rgba(0, 0, 0, 0.16)
    div 
      font-size: .3rem 
      color: #000000
  .about-wrapper 
    height: 10.9rem
    margin: 0 .4rem
    border-radius: .22rem
    box-shadow: 0.02rem 0.04rem 0.06rem 0rem rgba(0, 0, 0, 0.16)
    background-color rgba(255,255,255,0.75)
    margin-bottom 0.6rem
    color #000000
    .product 
      padding-top 0.4rem
      padding-left 0.22rem
      .title
        font-size 0.44rem
        font-weight 600
        margin-bottom 0.2rem
      .content 
        font-size 0.3rem
        margin-left 0.16rem
        margin-right 0.16rem
        line-height 0.44rem
    .team 
      padding-top 0.2rem
      padding-left 0.22rem
      .title
        font-size 0.44rem
        font-weight 600
        margin-bottom 0.2rem
      .content 
        font-size 0.3rem
        margin-left 0.16rem
        margin-right 0.16rem
        line-height 0.44rem
    .people
      padding-top 0.12rem
      padding-left 0.36rem
      .members 
        font-weight 600
      .job 
        margin-top 0.06rem
</style>