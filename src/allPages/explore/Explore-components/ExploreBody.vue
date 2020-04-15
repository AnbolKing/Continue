<template>
    <div class='body'>
        <div class='button'>
            <div class="button-left ">
                    <div class="left-desc text" @click="getNewContinue">最新续作 ||</div>
            </div>
            <div class="button-right ">
                    <div class="right-desc text" @click="getNewCreate">最新原创 |</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExploreBody',
    methods: {
        getNewContinue() {
            this.$router.push('/newContinue')
            this.$store.commit('getLink','newcontinue')
        },
        getNewCreate() {
            this.$router.push('/newCreate')
            this.$store.commit('getLink','newcreate')
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '../../../assets/styles/dayChange.styl'
    .border {
        border:1px solid #000000
    }
    .body {
        height :1.2rem
        margin-left:0.4rem
        margin-right:0.4rem
        margin-bottom:0.4rem
        .button-left {
            float left
        }
        .button-right {
            float right
        }
        .button-left,.button-right {
            background-color $bgColor
            width:3.14rem
            height:1.2rem;
            border-radius:0.2rem
            .text {
                padding-top:34px
                padding-left :16px
                color $fontColor
            }
        }
    }
</style>
