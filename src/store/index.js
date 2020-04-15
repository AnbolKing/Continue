import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        id: 0,
        token: '', //操作令牌
        artical: [],
        comments: [],
        darkImg: true,
        fontColor: '#000000',
        bgColor: '#ffffff',
        bgApColor: 'rgba(255,255,255,0.8)',
        datas: {
            title: '',
            sonTitle: '',
            content: '',
            number: 0,
            passage_id: 0,
        },
        user: '',
        item: {},
        nickname: '',
        link: '',
    },
    mutations: {
        getLink(state, link) {
            state.link = link
        },
        getNickname(state, nickname) {
            state.nickname = nickname
        },
        getPerson(state, item) {
            state.item = item
        },
        getId(state, id) {
            state.id = id
        },
        getUser(state, info) {
            state.user = info
            console.log(state.user)
        },
        getContinue(state, datas) {
            state.datas.title = datas.title
            state.datas.sonTitle = datas.sonTitle
            state.datas.content = datas.content
            state.datas.number = datas.number
            state.datas.passage_id = datas.passage_id
            console.log(state.datas)
        },
        getToken(state, token) {
            state.token = token
            localStorage.token_id = token
            console.log(state.token)
        },
        getArtical(state, artical) {
            state.artical = artical
            console.log(artical)
            console.log('ok')
        },
        getFont(state, font) {
            state.fontColor = font
            console.log(state.fontColor)
        },
        getbg(state, bg) {
            state.bgColor = bg
            console.log(state.bgColor)
        },
        getbgAp(state, bgAp) {
            state.bgApColor = bgAp
            console.log(state.bgApColor)
        },
        getComments(state, comments) {
            state.comments = comments
            console.log(comments)
        }
    }
})