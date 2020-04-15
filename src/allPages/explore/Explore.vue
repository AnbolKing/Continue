<template>
    <div class="explore">
        <div>
            <explore-header></explore-header>
            <explore-swiper></explore-swiper>
            <explore-body></explore-body>
            <explore-continue-list :hotContinue="hotContinue"></explore-continue-list>
            <explore-create-list :hotCreate="hotCreate"></explore-create-list>
            <!-- <navigation></navigation> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ExploreHeader from './Explore-components/ExploreHeader'
import ExploreBody from './Explore-components/ExploreBody'
import ExploreContinueList from './Explore-components/ExploreContinueList'
import ExploreCreateList from './Explore-components/ExploreCreateList'
import ExploreSwiper from './Explore-components/ExploreSwiper'
import Navigation from '../Navigation'
import BScroll from 'better-scroll'
export default {
    name: 'Explore',
    components: {
        ExploreHeader:ExploreHeader,
        ExploreBody:ExploreBody,
        ExploreContinueList:ExploreContinueList,
        ExploreCreateList:ExploreCreateList,
        ExploreSwiper:ExploreSwiper,
        Navigation:Navigation
    },
    data: function() {
        return {
            hotContinue:[],
            hotCreate:[],
        }
    },
    mounted() {
    //   this.scroll = new BScroll(this.$refs.wrapper)
      //获取热门续作
      fetch('http://api.gxy.ink/v1/hot/sequels?page=1', {
        mode:'cors',
        method:'GET',
        headers:
            new Headers({
                'Content-Type':'application/json',
                'Authorization':localStorage.token_id
        })
      }).then(res => res.json().then(body => {
          console.log(body)
          if(body.code === 0) {
              console.log(body.message)
              var data = body.data
              this.hotContinue = data.slice(1,4)
          }
      })).catch(error => console.log("error: ", error))
      //获取热门原创
      fetch('http://api.gxy.ink/v1/hot/creations?page=1', {
        mode:'cors',
        method:'GET',
        headers:
            new Headers({
                'Content-Type':'application/json',
                'Authorization':localStorage.token_id
        })
      }).then(res => res.json().then(body => {
          console.log(body)
          if(body.code === 0){
              console.log(body.message)
              var data = body.data
              this.hotCreate = data.slice(1,4)
          }
      })).catch(error => console.log("error: ", error))
    },
    // data: function() {
    //     return {
    //         createStyle: {
    //             backgroundImage:"url('static/imgs/创作页动态背景1.gif')",
    //             backgroundRepeat:"no-repeat",
    //             backgroundSize:"100% 100%",
    //             width:"100%",
    //             height:"100%",
    //             position:"fixed"
    //         }
    //     }
    // },
}
</script>

<style>
    .explore {
        margin-top:0.4rem
    }
</style>