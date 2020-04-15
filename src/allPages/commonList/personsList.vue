<template>
    <div>
        <div class="list" ref='wrapper'>
            <div>
                <div class="list-item border-bottom" v-for="(item,index) in datas" :key="index">
                    <div class="item-icon border"></div>
                    <div class="item-user">
                        <div class="user-name">{{item.name}}</div>
                        <div class="user-desc">{{item.desc}}</div>
                    </div>
                    <div class="item-last">
                        <img src='static/icons/middle/63 – 1.png'>
                    </div>
                </div>
            </div>
            <div class='foot' v-show="display">没有了呢</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'FocusList',
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
  },
  props: {
        datas:Array
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
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .border {
        &:before {
            border:2px solid #ccc
            border-radius 50%;
        }
    }
    .border-bottom {
        &:after  {
            border:1px solid #ccc
        }
    }
    .list {
        .foot {
            text-align center
            color #ffffff
        }
        margin: 0 .4rem
        .list-item {
            width: 100%
            height: 1rem
            line-height: 1rem
            display :flex
            margin-bottom:0.2rem
            background: #eee
            border-radius: .5rem
            .item-icon {
                height:1rem
                width:1rem
                border-radius 100%
                background: red
            }
            .item-user {
                padding-left 0.16rem
                .user-name {
                    font-size :0.32rem;
                    line-height:0.5rem
                    font-weight:600
                }
                .user-desc {
                    font-size :0.24rem
                    line-height:0.5rem
                }
            }
            .item-last {
                margin-left: 3rem
                img{
                    height: .46rem 
                }
            }
        }
    }
</style>
