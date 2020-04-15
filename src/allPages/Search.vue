<template>
        <div class="search" ref="info">
            <div class="infoName">         
                <input type="text" class="infoName-text border" placeholder="搜：晴天娃娃" v-model="keyword">
                <span class="iconfont infoName-icon">&#xe60a;</span>
            </div>
            <div class="lastest">
                <div class="content" v-show="!hasKeyword" @click="handleCloseSearch">最近搜索（点击气泡下方空白处返回哦~）</div>
            </div>
            <div class="shawdo" @click="handleCloseSearch"></div>
            <search-list v-show="!hasKeyword"></search-list>
            <content-list v-show="hasKeyword" :datas="Lists"></content-list>
            <div class="tip" v-show="hasDisplay">没有找到哦~再搜搜试试吧！</div>
        </div>
</template>

<script>
import axios from 'axios'
import SearchList from './commonList/searchList'
import ContentList from './commonList/contentList'
export default {
  name: 'Search',
  data: function() {
      return {
          datas:[],
          keyword:'',
          Lists:[],
          timer:null,
          url:'',
      }
  },
  props: {
      param:String,
      point:Boolean
  },
  computed: {
      hasKeyword() {
          if(!this.keyword) {
              return false
          }
          else {
              return true
          }
      },
      hasDisplay() {
          if(this.keyword && !this.Lists.length) {
              return true
          }
          else {
              return false
          }
      }
  },
  components: {
      SearchList,
      ContentList
  },
  watch: {
      keyword() {
          if(this.timer) {
              clearTimeout(this.timer);
          }
          if(!this.keyword) {
              this.Lists = [];
              return
          }
          this.timer = setTimeout(() => {
              var url_old = 'http://api.gxy.ink/v1/passage?key='+this.keyword
              this.url = encodeURI(url_old)
              fetch(this.url, {
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
                    this.datas = data
                    this.Lists = data
                }
            })).catch(error => console.log("error: ", error))
          },100)
      }
  },
  methods: {
      handleCloseSearch() {
          this.$emit('close')
      },
    //   getAllInfo(url) {
    //       fetch(url, {
    //         mode:'cors',
    //         method:'GET',
    //         headers:
    //             new Headers({
    //                 'Content-Type':'application/json',
    //                 'Authorization':localStorage.token_id
    //             })
    //         }).then(res => res.json().then(body => {
    //         console.log(body)
    //         if(body.code === 0) {
    //             console.log(body.message)
    //             var data = body.data
    //             this.datas = data
    //             this.Lists = data
    //          }
    //        })).catch(error => console.log("error: ", error))
    //   },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    @import '.././assets/styles/dayChange.styl'
    .border {
        border: solid 1px #707070
    }
    .search {
        padding-top:0.4rem
        position :fixed
        left:0
        right :0
        top:0
        bottom:0
        background-color $bgApColoe
        z-index:99
        display :flex
        flex-direction :column
        //justify-content :center
        .infoName {
            background-color #fff
            width :6.7rem
            height :1.04rem
            line-height :1.04rem
            border-radius 0.52rem
            //background-color red
            margin:0 auto
            display:flex
            .iconfont{
                text-align :center
                margin-left :2.16rem
                font-size:0.51rem
                color :#000
            }
            .infoName-text {
                background-color opacity 
                margin-left:0.44rem
                height :1.04rem
                line-height :1.0rem
                font-family :Microsoft YaHei;
                border :none
            }
        }
        .lastest {
            margin-left:0.4rem;
            margin-top:0.42rem;
            font-size:0.22rem;
            font-family: Segoe UI;
            color: $fontColor;
        }
        .tip {
            margin-left 0.4rem
            color #000000
        }
        .shawdo {
            position absolute
            width 100%
            height 100%
            padding-bottom 70%
            background-color opacity 
            z-index 999
            margin-top 90%
        }
    }
</style>
