<template>
    <div ref="wrapper">
        <div class='list'>      
            <div>
                <ul class='wrapper'>
                    <li class='item' v-for="(item,index) in datas" :key="index" @click="handleGetArtical(item)">
                        <div class='item-title'>|| {{item.passage_title}}</div>
                        <div class='item-content'>{{section_content}}</div>
                        <div class='item-name'>
                            <div class='item-name-left'>
                                <div class='item-name-img'>
                                    <img src="static/imgs/touxiang/批注 2020-02-10 002238.jpg" alt="">
                                </div>
                                <div class='item-name-name'>{{user.nickname}}</div>
                            </div>
                            <div class='item-name-right'>{{new Date().toLocaleDateString(item.create_at)}}</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class='foot' v-show="display">没有了呢</div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'MyselfList',
    props: {
        datas:Array,
        user:Object
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    computed: {
        display() {
            if(this.datas.length) {
                return true
            }
            else {
                return false
            }
        }
    },
    methods: {
        handleGetArtical(item) {
            this.$store.commit('getArtical',item)
            this.$router.push('/articaldetails')
        }
    },
}
</script>

<style lang='stylus' scoped>
  .list 
    overflow hidden
    .foot 
      font-size: .22rem
      text-align: center
      color #ffffff
    .wrapper
      .item
        height: 3rem  
        margin-left: .4rem
        margin-right: .4rem
        border-radius: .22rem
        padding-left: .28rem
        padding-right: .28rem
        margin-bottom: .2rem
        //border: solid .01rem
        background-color #fff
        .item-title
          height: .72rem
          line-height: .8rem
          font-size: .4rem
        .item-content
          height: 1.5rem
          font-size: .37rem
          color: #707070
        .item-name
          display: flex
          justify-content: space-between
          height: .58rem
          padding-bottom: .2rem
          .item-name-right 
            height: .58rem
            line-height: .58rem
          .item-name-left
            height: .58rem
            .item-name-img
              border-radius: 100%
              width: .54rem
              height: .54rem
              background: red
              float: left 
              img 
                width 100%
                height 100%
                border-radius 50%
            .item-name-name
              float: right
              height: .58rem
              line-height: .58rem
              margin-left: .1rem
           
</style>

