<template>
    <div>
        <user-details-header :datas="user_info"></user-details-header>
        <user-details-search @getInfo="Display"></user-details-search>
        <user-details-list v-show="display" :datas="user_work" :data="user_info"></user-details-list>
        <content-list v-show="displaySearch" :datas="Lists"></content-list>
        <div v-show="displayContent" class="tip">没有搜索到呢，换个搜索词试试吧</div>
    </div>
</template>

<script>
import UserDetailsHeader from './user-details-components/UserDetailsHeader'
import UserDetailsSearch from './user-details-components/UserDetailsSearch'
import UserDetailsList from './user-details-components/UserDetailsList'
import ContentList from '.././commonList/contentList'
export default {
    name: 'UserDetails',
    components: {
        UserDetailsHeader,
        UserDetailsSearch,
        UserDetailsList,
        ContentList
    },
    data: function() {
        return {
            display:true,
            displaySearch:false,
            datas:[],
            Lists:[],
            time:null,
            displayContent:false,
            user_info:{},
            user_work:{},
        }
    },
    methods: {
        Display(info) {
            if(info) {
                this.display = false
                if(this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    const result = [];
                    this.datas.forEach(value => {
                        //value的键等待确定
                        console.log(value.passsage.title)
                        if(value.passsage.title.indexOf(info) > -1) {
                            result.push(value);
                        }
                    })
                    this.Lists = result;
                    if(!this.Lists.length) {
                        this.displayContent = true
                    }
                },100)
            }
            if(!info) {
                this.display = true,
                this.displaySearch = false,
                this.displayContent = false
            }
        }
    },
    mounted() {
        fetch('http://api.gxy.ink/v1/user/:'+this.$store.state.item.id, {
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
              this.user_info = body.data.user_info
              this.user_work = body.data.user_work
          }
        })).catch(error => console.log("error: ", error))
    }
}
</script>

<style lang='stylus' scoped>
    .tip
        padding-left 0.4rem
        color #ffffff
</style>