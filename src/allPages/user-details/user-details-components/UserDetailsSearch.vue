<template>
    <div class='search'>
        <input class='input' type='text' placeholder='搜索ta的创作' v-model="searchIndex">
        <span class='iconfont icon'>&#xe60a;</span>
    </div>
</template>

<script>
export default {
    name: 'UserDetailsSearch',
    data: function() {
        return {
            searchIndex:'',
        }
    },
    watch: {
        searchIndex() {
            console.log('ok')
            this.$emit('getInfo',this.searchIndex)
        }
    }
}
</script>

<style lang='stylus' scoped>
  .search
    margin-top: .4rem
    height: 1rem
    margin-bottom:.4rem
    margin-left: .4rem
    margin-right: .4rem
    position: relative
    .input
      box-sizing: border-box
      -moz-box-sizing:border-box
      -webkit-box-sizing:border-box
      height: 1rem
      line-height: 1rem
      width: 100%
      background:#eee
      border-radius: .22rem
      font-size:.32rem
      padding-left: .28rem
      padding-right: .28rem
      box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.16)
    .icon
      position: absolute
      top: .17rem
      bottom: 0
      right: .28rem
      font-size: .6rem

</style>