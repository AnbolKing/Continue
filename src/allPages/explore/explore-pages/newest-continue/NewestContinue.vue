<template>
    <div class="newest-continue">
        <newest-continue-header class="header"></newest-continue-header>
        <new-and-hot></new-and-hot>
    </div>
</template>

<script>
import NewestContinueHeader from './newest-continue-components/Header'
import NewAndHot from '../../../commonList/NewAndHot'
export default {
  name: 'HotContinue',
  data () {
      return {
          contents: []
      }
  },
  components: {
      NewestContinueHeader:NewestContinueHeader,
      NewAndHot
  },
  mounted () {
    // fetch('http://api.gxy.ink/v1/latest/sequels?page=1',{
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
    .newest-continue {
        margin-top:0.4rem
        .header {
            margin-bottom:1.62rem
        }
    }
    
</style>
