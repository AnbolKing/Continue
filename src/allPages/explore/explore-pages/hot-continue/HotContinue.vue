<template>
    <div class="hot-continue">
        <hot-continue-header class="header"></hot-continue-header>
        <new-and-hot></new-and-hot>
    </div>
</template>

<script>
import HotContinueHeader from './hot-continue-components/Header'
import NewAndHot from '../../../commonList/NewAndHot'
export default {
  name: 'HotContinue',
  data () {
      return {
          contents: []
      }
  },
  components: {
      HotContinueHeader:HotContinueHeader,
      NewAndHot 
  },
  mounted () {
    // fetch('http://api.gxy.ink/v1/hot/sequels?page=1',{
    //           mode:'cors',
    //           method:'GET',
    //           headers:
    //             new Headers({
    //                 'Content-Type':'application/json',
    //                 'Authorization':localStorage.token_id
    //             })
    // }).then(res => res.json().then(body => {
    //     console.log(body)
    //     if(body.code===0) {
    //         this.contents = body.data
    //         console.log(this.contents)
    //     }
    // }))
  }
}
</script>
<style lang="stylus" scoped>
    .hot-continue {
        margin-top:0.4rem
        .header {
            margin-bottom:1.62rem
        }
    }
</style>
