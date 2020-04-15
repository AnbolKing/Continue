<template>
    <transition>
        <div v-show='headerShow' class='head' >
            创作
        </div>
    </transition>
</template>


<script>
export default {
    name: 'CreateHeader',
    data () {
        return {
            headerShow: false
        }
    },
    methods: {
        handleScroll () {
            //console.log(document.documentElement.scrollTop)
            const top = document.documentElement.scrollTop
            if (top > 120) {
                this.headerShow = true
            } else {
                this.headerShow = false
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang='stylus' scoped>
    .head 
      //background: rgb(174,222,252)
      background #ffffff
      height: 1rem 
      line-height: 1rem 
      position: fixed 
      top: 0
      right: 0
      left: 0
      text-align: center 
      font-size: .64rem
    .v-enter,.v-leave-to{
        opacity: 0;
    }
    .v-enter-active,.v-leave-active{
        transition: all .5S 
      }
</style>