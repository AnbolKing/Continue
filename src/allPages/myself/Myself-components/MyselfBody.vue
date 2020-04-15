<template>
    <div class='body'>
        <div class='top'>
            <div class='top-item right' @click="changeSize('a')" ref='a'>我的创作</div>
            <div class='top-item center' @click="changeSize('b')" ref='b'>个人收藏</div>
            <div class='top-item' @click="changeSize('c')" ref='c'>关注用户</div>
        </div>
        <!-- <router-link :to="'/search'+'?name='+'mycreate'"> -->
            <div class='bottom'>
                <input class='input' type='text' placeholder='搜索我的创作' ref='search' v-model="searchIndex">
                <img src='static/icons/67 – 1.png'>
            </div>
        <!-- </router-link> -->
    </div>
</template>

<script>
export default {
    name: 'MyselfBody',
    data () {
        return {
            searchIndex:''
        }
    },
    watch: {
        searchIndex:function() {
            this.$emit('changeSearch',this.searchIndex);
            //console.log(this.searchIndex)
        }
    },
    methods: {
        changeSize (val) {
            switch (val) {
                case 'a': 
                    this.$refs.a.style.fontWeight = 600
                    this.$refs.a.style.opacity = 0.87
                    this.$refs.b.style.fontWeight = 400
                    this.$refs.c.style.fontWeight = 400
                    this.$refs.b.style.opacity = 0.54
                    this.$refs.c.style.opacity = 0.54
                    this.$refs.search.placeholder = '搜索我的创作'
                    //向父组件触发改变组件显示的方法，传达参数
                    this.$emit('changeList','a')
                    break
                case 'b':
                    this.$refs.b.style.fontWeight = 600
                    this.$refs.b.style.opacity = 0.87
                    this.$refs.a.style.fontWeight = 400
                    this.$refs.c.style.fontWeight = 400
                    this.$refs.a.style.opacity = 0.54
                    this.$refs.c.style.opacity = 0.54
                    this.$refs.search.placeholder = '搜索我收藏的创作'
                    this.$emit('changeList','b')
                    break
                case 'c': 
                    this.$refs.c.style.fontWeight = 600
                    this.$refs.c.style.opacity = 0.87
                    this.$refs.a.style.fontWeight = 400
                    this.$refs.b.style.fontWeight = 400
                    this.$refs.a.style.opacity = 0.54
                    this.$refs.b.style.opacity = 0.54
                    this.$refs.search.placeholder = '搜索我关注的用户'
                    this.$emit('changeList','c')
                    break
            }
        }
    }
}
</script>

<style lang='stylus' scoped>
  @import '../../../assets/styles/dayChange.styl';
  .body
    height: 2.8rem
    .top
      height 1.04rem
      margin: 0 .4rem
      background: $bgColor
      border-radius: .6rem
      padding: 0 .4rem
      .top-item 
        box-sizing:border-box
        -moz-box-sizing:border-box
        -webkit-box-sizing:border-box
        float: left 
        width: 33.33%
        line-height: 1.04rem
        text-align: center
        font-size: .32rem
        color: $fontColor
        opacity: 0.54
        font-weight: 400
      .right  
        opacity: 0.87
        font-weight: 600
      .center 
        border-right: solid .01rem #f6f6f6
        border-left: solid .01rem #f6f6f6
    .bottom
      height: 1rem
      margin-top: .4rem
      margin-left: .4rem 
      margin-right: .4rem
      position: relative
      .input
        box-sizing: border-box
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        height: 1rem
        width: 100%
        padding-left: .4rem
        padding-right: .4rem
        font-size: .4rem
        border-radius: .22rem
        background-color $bgColor
        &::placeholder 
            color: $fontColor
      img 
        position: absolute 
        top: .2rem
        right: .3rem
        height: .6rem
      
</style>
