<template>
    <div class="body">
        <div class="body-header">{{this.$store.state.datas.title}}</div>
        <div class="body-foot">
            <div class="foot-left">
                <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class="icon">
                <div class="desc">由{{this.$store.state.nickname}}用户发起</div>
            </div>
            <div class="foot-right">
                <img src='static/icons/middle/74 – 1.png'>
                <img src='static/icons/middle/73 – 1.png'>
                <img src='static/icons/middle/49 – 1.png'>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateBody'
}
</script>

<style lang='stylus' scoped>
    .body {
        margin-top 0.58rem
        margin-left 0.4rem
        margin-right 0.4rem
        .body-header {
            font-size 0.64rem
            color #ffffff
            font-family PingFang 
        }
        .body-foot {
            margin-top 0.38rem
            line-height 0.6rem
            height: .6rem
            display: flex
            justify-content: space-between
            .foot-left {
                display: flex
                .icon {
                    border-radius: 100%
                    background: red 
                    width: .6rem 
                    height: .6rem
                }
                .desc {
                    font-size 0.24rem
                    color #000000
                    margin-left: .1rem
                }
            }
            .foot-right {
                img {
                    height: .48rem
                    margin-left: .36rem
                }
            }
        }
    }
</style>
