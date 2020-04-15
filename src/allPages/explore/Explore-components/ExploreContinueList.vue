<template>
    <div class="list">
        <div class="title">
            <div class="title-left">热门续作 ||</div>
                <div class="title-right" @click="getHotContinue">更多</div>
        </div>
        <ul class="list-item">
            <li class="item-content" v-for="(item,index) in hotContinue" :key="index">
                <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class="content-img">
                <div class="content-desc">{{item.passage.title}}</div>
                <div class="content-hot">{{item.passage.collection}} 热度</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ExploreContinueList',
    props: {
        hotContinue:Array
    },
    methods: {
        getHotContinue() {
            this.$router.push('/hotContinue')
            this.$store.commit('getLink','hotcontinue')
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '../../../assets/styles/dayChange.styl';
    .list {
        margin-top:0.2erm
        margin-left: 0.4rem
        margin-right:0.4rem
        margin-bottom:0.5rem
        .title {
           color #ffffff
           height 0.48rem
           .title-left {
               float left
               line-height:0.48rem
               font-size 0.36rem
               colocr:#000000
               font-weight:600
               font-family: PingFang SC
           }
           .title-right {
               line-height 0.48rem
               font-size 0.3rem
               color:#ffffff
               float right
               font-family: PingFang SC
           }
        }
        .list-item {
            margin-top:0.14rem  
            .item-content {
                background-color $bgColor
                margin-bottom:0.2rem
                height 1rem
                border-radius 0.22rem
                //border: solid .01rem
                display flex
                align-items: center; //flex子盒子垂直居中
                //justify-content: center;  //flex子盒子水平居中
                line-height:1rem
                .content-img {
                    margin-left:0.16rem 
                    width 0.68rem
                    height 0.68rem
                    border-radius 50%
                    background-color red
                } 
                .content-desc {
                    margin-left:0.16rem
                    flex 1
                    font-size 0.28rem
                    color:$fontColor
                    font-family: PingFang SC
                }
                .content-hot {
                    margin-right:0.34rem
                    color:$fontColor
                    font-size 0.24rem
                    font-family: PingFang SC
                }
            }
        }
    }
</style>