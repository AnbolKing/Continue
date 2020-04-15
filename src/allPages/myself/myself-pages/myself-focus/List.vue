<template>
    <div>
        <div class="list" ref='wrapper'>
            <div>
                <div class="list-item border-bottom" v-for="item in datas" :key="item">
                    <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class="item-icon border" @click="handleGetPerson(item)">
                    <div class="item-user">
                        <div class="user-name">{{item.nickname}}</div>
                        <div class="user-desc">{{item.profile}}</div>
                    </div>
                    <div class="item-last">
                        <img src='static\icons\middle\63 – 1.png'>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'FocusList',
  data: function(){
      return {
          datas:[],
      }
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
      //获取我的关注
        fetch('http://api.gxy.ink/v1/followed', {
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
            this.datas = body.data
        }
        })).catch(error => console.log("error: ", error))
  },
  methods: {
      handleGetPerson(item) {
          this.$router.push('/userdetail')
          this.$store.commit('getPerson',item)
      }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    @import '../../../../assets/styles/dayChange.styl';
    .border {
        &:before {
            border:2px solid #ccc
            border-radius 50%;
        }
    }
    .border-bottom {
        &:after  {
            border:1px solid #ccc
        }
    }
    .list {
        margin: 0 .4rem
        .list-item {
            width: 100%
            height: 1rem
            line-height: 1rem
            display :flex
            margin-bottom:0.2rem
            background: #eee
            border-radius: .5rem
            background-color $bgColor
            .item-icon {
                height:1rem
                width:1rem
                border-radius 100%
                background: red
            }
            .item-user {
                padding-left 0.16rem
                .user-name {
                    font-size :0.32rem;
                    line-height:0.5rem
                    font-weight:600
                    color $fontColor
                }
                .user-desc {
                    font-size :0.24rem
                    line-height:0.5rem
                    color $fontColor
                }
            }
            .item-last {
                margin-left: 3rem
                img{
                    height: .46rem
                    
                }
            }
        }
    }
</style>
