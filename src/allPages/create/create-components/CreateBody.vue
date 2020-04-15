<template>
    <div class='body'>
        <div class='header'>
            <div class='header-left'>创作</div>
            <router-link to='/createEdit'>
                <div class='header-right'>
                    <img src="static/icons/big/82 – 1.png" alt="">
                </div>
            </router-link>
        </div>
        <div class='small'>滴滴答答打开连接心灵的.....</div>
    </div>
</template>


<script>
export default {
    name: 'CreateBody'
}
</script>

<style lang='stylus' scoped>
  .body
    color #ffffff
    //border-top: solid .01rem
    height: 9.04rem
    margin-top: .4rem
    padding-top: 1rem
    .header
      margin-left: .4rem
      margin-right: .4rem
      height: .86rem
      .header-left 
        height: .86rem
        line-height: .86rem 
        font-size: .64rem
        float: left 
      .header-right
        color #ffffff
        float: right
        height: .86rem
        line-height: .86rem 
        font-size: 1rem
        img 
          height: .7rem
    .small 
      margin-left: .4rem
      font-size: .24rem
</style>