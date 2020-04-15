<template>
    <div>
        <div id="app">
            <keep-alive :exclude="exclude">
                <router-view></router-view> 
            </keep-alive>
        </div>
        <navigation class="navBar" v-show="showTab"></navigation>
        <div class="photo"></div>
        <div class="dark" @click="handleChange"></div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import Navigation from './allPages/Navigation'
import router from './router'
import darkStyle from './assets/styles/dayChange.styl'

export default {
  name: 'App',
  components: {
      Navigation:Navigation
  },
  data: function() {
      return {
          exclude:['CreateEdit','Myself','NewAndHot']
      }
  },
  computed: {
      showTab: function() {
          if((this.$route.path === '/create') || (this.$route.path === '/myself') || (this.$route.path === '/explore')) {
              return true
          }
          else {
              return false
          }
      }
  },
  methods: {
      handleChange() {
          console.log(darkStyle)
          this.$store.commit('getFont','#ffffff')
          this.$store.commit('getbg','#000000')
          this.$store.commit('getbgAp','rgba(0,0,0,0.8)')
      }
  }
}
</script>

<style lang='stylus' scoped>
    .photo 
        background-image url('../static/imgs/img.gif')
        background-repeat no-repeat
        background-size 100% 100%
        height 100%
        width 100%
        position fixed
        top 0
        z-index -1
    .dark 
        position absolute
        width 33px
        height 33px
        border-radius 50%
        //background-color rgba(0,0,0,0.4)
        z-index 1000
        top:17%
        left 40%
</style>
