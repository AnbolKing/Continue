<template>
    <div class='header'>
      <router-link to='/explore'>
        <img src='static/icons/middle/76 – 1.png'>
      </router-link>
        <img src='static/icons/middle/75 – 1.png'>
    </div>
</template>

<script>
export default {
    name: 'ArticalDetailsHeader'
}
</script>

<style lang='stylus' scoped>
  .header
    padding-top: .4rem
    height: .88rem
    line-height: .88rem
    font-size: .5rem
    display: flex 
    justify-content: space-between
    align-items: center
    padding: 0 .4rem
    img 
      height: .46rem
</style>
