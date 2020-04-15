<template>
    <div class='list'>
        <ul class='wrapper'>
            <li class='item' v-for="(item,index) in datas" :key="index">
                <div class='item-title'>|| {{item.passage_title}}</div>
                <div class='item-content'>{{item.section_content}}</div>
                <div class='item-name'>
                    <div class='item-name-left'>
                        <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='item-name-img'>
                        <div class='item-name-name'>{{user.nickname}}</div>
                    </div>
                    <div class='item-name-right'>{{new Date().toLocaleDateString(item.create_at)}}</div>
                </div>
            </li>
        </ul>
        <div class='foot'>没有了呢</div>
    </div>
</template>

<script>
export default {
    name: 'MyselfList',
    // props: {
    //     datas:Array,
    //     user:Object
    // },
    data: function() {
        return {
            datas:[],
            user:{},
        }
    },
    mounted() {
        console.log('ok')
        //获取我的创作
        fetch('http://api.gxy.ink/v1/user/'+this.$store.state.id, {
        mode:'cors',
        method:'GET',
        headers:
            new Headers({
                'Content-Type':'application/json',
                'Authorization':localStorage.token_id
            })
        }).then(res => res.json().then(body => {
        console.log(body)
        if(body.code === 0){
            console.log(body.message)
            this.$store.commit('getNickname',body.data.user_info.nickname)
            // this.creations = body.data.user_work
            // this.user = body.data.user_info
            // console.log(this.$store.state.id)
            // console.log(this.creations)
            this.datas = body.data.user_work,
            this.user = body.data.user_info
            console.log('子组件',this.datas)
        }
        })).catch(error => console.log("error: ", error))
    }
}
</script>

<style lang='stylus' scoped>
  @import '../../../../assets/styles/dayChange.styl';
  .list 
    .foot 
      font-size: .22rem
      text-align: center
      margin-bottom: 2rem
      color #ffffff
    .wrapper
      .item
        height: 2.28rem  
        margin-left: .4rem
        margin-right: .4rem
        border-radius: .22rem
        padding-left: .28rem
        padding-right: .28rem
        margin-bottom: .3rem
        //border: solid .01rem
        background-color $bgColor
        .item-title
          height: .72rem
          line-height: .8rem
          font-size: .32rem
          color $fontColor
        .item-content
          height: 1rem
          font-size: .3rem
          color $fontColor
        .item-name
          display: flex
          justify-content: space-between
          height: .56rem
          .item-name-right 
            height: .56rem
            line-height: .56rem
            color $fontColor
          .item-name-left
            height: .56rem
            display: flex 
            align-items: center
            .item-name-img
              border-radius: 100%
              width: .4rem
              height: .4rem
              background: red
              float: left 
            .item-name-name
              float: right
              height: .56rem
              line-height: .56rem
              margin-left: .1rem
              color $fontColor
           
</style>

