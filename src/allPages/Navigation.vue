<template>
    <div class='navigation'>
        <div class='item' @click="handleClick('/create')">
            <img :src='this.imgUrl.createIcon' class="create-on" >
        </div>
        <div class='item' @click="handleClick('/explore')">
            <img :src="this.imgUrl.exploreIcon" class="explore-on">
            </div>
        <div class='item' @click="handleClick('/myself')">
            <img :src="this.imgUrl.myselfIcon" class="myself-on" >
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data: function() {
        return {
            imgUrl: {
                createIcon: 'static'+'/'+'icons'+'/'+'tab'+'/'+'createOff.png',
                exploreIcon: 'static'+'/'+'icons'+'/'+'tab'+'/'+'exploreOn.png',
                myselfIcon: 'static'+'/'+'icons'+'/'+'tab'+'/'+'myselfOff.png'
            }
        }
    },
    activated () {
            let val = this.$route.path
            switch (val) {
                case '/create': 
                    this.imgUrl = {
                        createIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'createOn.png',
                        exploreIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'exploreOff.png',
                        myselfIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'myselfOff.png'
                    }
                    break
                case '/explore':
                    this.imgUrl = {
                        createIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'createOff.png',
                        exploreIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'exploreOn.png',
                        myselfIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'myselfOff.png'
                    }
                    break
                case '/myself': 
                    this.imgUrl = {
                        createIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'createOff.png',
                        exploreIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'exploreOff.png',
                        myselfIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'myselfOn.png'
                    }
                    break

        }
    },
    methods: {
        handleClick(val) {
            switch (val) {
                case '/create': 
                    this.imgUrl = {
                        createIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'createOn.png',
                        exploreIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'exploreOff.png',
                        myselfIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'myselfOff.png'
                    }
                    this.$router.push({ path: '/create' })
                    break
                case '/explore':
                    this.imgUrl = {
                        createIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'createOff.png',
                        exploreIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'exploreOn.png',
                        myselfIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'myselfOff.png'
                    }
                    this.$router.push({ path: '/explore' })
                    break
                case '/myself': 
                    this.imgUrl = {
                        createIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'createOff.png',
                        exploreIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'exploreOff.png',
                        myselfIcon : 'static'+'/'+'icons'+'/'+'tab'+'/'+'myselfOn.png'
                    }
                    this.$router.push({ path: '/myself' })
                    break
            
        }
    }
        
}
}
</script>

<style lang='stylus' scoped>
  @import '../assets/styles/dayChange.styl';
  .navigation
    z-index: 9999
    touch-action: none
    height: 1.2rem
    line-height 1.2rem
    background: $navColor
    position: fixed
    right: 0
    left: 0
    bottom: 0   
    display flex
    .item
      text-align center
      width: 33.33%
      float: left
      img 
        width 1.0rem
        touch-action: none
      
</style>