<template>
    <div class="newest-create">
        <newest-create-header class="header"></newest-create-header>
        <new-and-hot></new-and-hot>
    </div>
</template>

<script>
import NewestCreateHeader from './newest-create-components/Header'
import NewAndHot from '../../../commonList/NewAndHot'
export default {
  name: 'HotCreate',
  data () {
      return {
          contents: []
      }
  },
  components: {
      NewestCreateHeader:NewestCreateHeader,
      NewAndHot
  },
  mounted () {
    // fetch('http://api.gxy.ink/v1/latest/creations?page=1',{
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
    .newest-create {
        margin-top:0.4rem
        .header {
            margin-bottom:1.62rem
        }
    }
    
</style>
