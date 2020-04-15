<template>
    <div class='header'>
      <router-link to='/articaldetails'>
        <img src='static/icons/middle/76 – 1.png'>
      </router-link>
        <img src='static/icons/middle/74 – 1.png'>
    </div>
</template>

<script>
export default {
    name: 'ArticalDetailsHeader'
}
</script>

<style lang='stylus' scoped>
  .header
    padding: 0 .3rem
    margin-top: .4rem
    height: .88rem
    line-height: .88rem
    text-align: center
    font-size: .5rem
    //border-top: solid .01rem
    display: flex 
    justify-content: space-between 
    align-items: center
    img 
      height: .46rem
</style>
