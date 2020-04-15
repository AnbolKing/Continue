<template>
  <div>
    <div class='header'>
        <div class='left'>
            <div class='left-top'>探索</div>
            <div class='left-bottom'>多少人的思维，一笔笔勾勒出来的华章...</div>
            <!-- <router-link to='/search'> -->
                <img src='static/icons/big/67 – 2.png' @click="handleShowSearch">
            <!-- </router-link> -->
            <fade-animation>
                <search v-show="showSearch" @close="handleCloseSearch" :point="param" :param="link"></search>
            </fade-animation>
        </div>
    </div>
  </div>
</template>

<script>
import Search from '../../Search'
import FadeAnimation from '@/allPages/commonList/FadeAnimation'
export default {
    name: 'ExplorefHeader',
    components: {
        Search:Search,
        FadeAnimation:FadeAnimation
    },
    data () {
        return {
            showSearch: false,
            param:false,
            link:'allThings'
        }
    },
    methods: {
        handleShowSearch() {
            this.showSearch = true
            this.param = true
        },
        handleCloseSearch() {
            this.showSearch = false
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang='stylus' scoped>
  .header
    color #000000
    position relative
    height: 1.24rem
    padding-left: 0.4rem
    padding-right: 0.4rem
    padding-top: 1.16rem
    padding-bottom: 0.46rem
    .left 
      float: left 
      height: 1.24rem
      .left-top
        font-weight:600
        font-size: 0.64rem
        height 0.86rem
        line-height:0.86rem
        color #ffffff
      .left-bottom
        height: 0.38rem
        line-height: 0.38rem
        color #ffffff
      img
        position:absolute
        top:1.3rem
        right:.4rem
        height: .7rem

</style>
