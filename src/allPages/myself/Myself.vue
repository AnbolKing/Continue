<template>
    <div>
        <div>
            <myself-header :user="user"></myself-header>
            <myself-body @changeList="changeList" @changeSearch="searchContent"></myself-body>
            <!-- ================================================================================== -->
            <create-list v-show='MyselfListShow'></create-list>
            <collections-list v-show='CollectionsListShow'></collections-list>
            <focus-list v-show='FocusListShow'></focus-list>
            <!-- ================================================================================== -->
            <content-list :datas="contents" :user="user" v-show="disContent"></content-list>
            <person-list :datas="people" v-show="disPerson"></person-list> 
            <div class="tip" v-show="display">没有找到结果哦~换个词搜索看吧！</div>
        </div>
    </div>
</template>

<script>
//新加的：line-10 line-50 line-51 line-9 line-10(v-show)
import axios from 'axios'
import ContentList from '../../allPages/commonList/contentList'
import PersonList from '../../allPages/commonList/personsList'
import MyselfHeader from './Myself-components/MyselfHeader'
import MyselfBody from './Myself-components/MyselfBody'
import CreateList from './myself-pages/myself-create/List'
import AllNavigation from '../Navigation'
import CollectionsList from './myself-pages/myself-collections/List'
import FocusList from './myself-pages/myself-focus/List'
import BScroll from 'better-scroll'
export default {
    name: 'Myself',
    components: {
        MyselfHeader,
        MyselfBody,
        CreateList,
        AllNavigation,
        CollectionsList,
        FocusList,
        ContentList,
        PersonList,
    },
    mounted() {
        //获取我的收藏
        fetch('http://api.gxy.ink/v1/collections', {
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
            this.collections = body.data
        }
        })).catch(error => console.log("error: ", error))
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
            this.persons = body.data
        }
        })).catch(error => console.log("error: ", error))

        //获取用户主页
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
            this.creations = body.data.user_work
            this.user = body.data.user_info
            console.log(this.$store.state.id)
            console.log(this.creations)
        }
        })).catch(error => console.log("error: ", error))
    },
    data () {
        return {
            MyselfListShow: true,
            CollectionsListShow: false,
            FocusListShow: false,
            index:'a',
            createContent:false,
            CollectionsContent:false,
            FocusContent:false,
            contents:[],
            timer:null,
            display:false,
            disContent:false,
            disPerson:false,
            datas:[],
            persons:[],
            collections:[],
            creations:[],
            user:{},
            info:{},
            people:[]
        }
    },
    methods: {
        searchContent(searchIndex) {
            console.log('ok')
            if(searchIndex) {
                if(this.index === 'a') {
                    console.log(this.creations)
                    this.MyselfListShow = false,
                    this.createContent = true,
                    this.disContent = true,
                    this.disPerson = false
                    if(this.timer) {
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => {
                        let result = []
                        this.creations.forEach(value => {
                            if(value.passage_title.indexOf(searchIndex) > -1 || value.section_content.indexOf(searchIndex) > -1) {
                                result.push(value)
                            }
                            this.contents = result;
                            if(!this.contents.length) {
                                this.display = true
                            }
                        })
                    },100)
                }
                if(this.index === 'b') {
                    this.CollectionsListShow = false
                    this.CollectionsContent = true
                    this.disContent = true,
                    this.disPerson = false
                    if(this.timer) {
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => {
                        let result = []
                        this.collections.forEach(value => {
                            if(value.title.indexOf(searchIndex) > -1 || value.content.indexOf(searchIndex) > -1) {
                                result.push(value)
                            }
                            this.contents = result;
                            if(!this.contents.length) {
                                this.display = true
                            }
                        })
                    },100)
                }
                if(this.index === 'c') {
                    this.FocusListShow = false
                    this.FocusContent = true
                    this.disContent = false,
                    this.disPerson = true
                    if(this.timer) {
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => {
                        let result = []
                        this.persons.forEach(value => {
                            if(value.nickname.indexOf(searchIndex) > -1) {
                                result.push(value)
                            }
                            this.people = result;
                            if(!this.people.length) {
                                this.display = true
                            }
                        })
                    },100)
                }
            }
            if(!searchIndex) {
                this.disContent = false
                this.disPerson = false
                this.display = false
                if(this.index === 'a') {
                    this.MyselfListShow = true,
                    this.createContent = false
                }
                if(this.index === 'b') {
                    this.CollectionsListShow = true
                    this.CollectionsContent = false
                }
                if(this.index === 'c') {
                    this.FocusListShow = true
                    this.FocusContent = false
                }
            }
        },
        changeList (val) {
            this.index = val
            console.log("此时选择的是：" + this.index)
            switch (val) {
                //根据value的不同选择要显示的子组件
                case 'a': 
                    this.MyselfListShow =  true
                    this.CollectionsListShow = false
                    this.FocusListShow = false
                    break 
                case 'b':
                    this.MyselfListShow =  false
                    this.CollectionsListShow = true
                    this.FocusListShow = false
                    break 
                case 'c':
                    this.MyselfListShow =  false
                    this.CollectionsListShow = false
                    this.FocusListShow = true
                    break
            }
        }
    }
}
</script>
<style lang='stylus' scoped>
    .tip
        padding-left 0.4rem
        color #ffffff
</style>
