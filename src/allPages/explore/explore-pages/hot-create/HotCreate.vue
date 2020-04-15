<template>
    <div class="hot-create">
        <hot-create-header class="header"></hot-create-header>
        <new-and-hot></new-and-hot>
    </div>
</template>

<script>
import HotCreateHeader from './hot-create-components/Header'
import NewAndHot from '../../../commonList/NewAndHot'
export default {
  name: 'HotCreate',
  data () {
      return {
          contents: []
      }
  },
  components: {
      HotCreateHeader:HotCreateHeader,
      NewAndHot
  },
  mounted () {
    // fetch('http://api.gxy.ink/v1/hot/creations?page=1',{
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
    .hot-create {
        margin-top:0.4rem
        .header {
            margin-bottom:1.62rem
        }
    }
    
</style>
