import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/allPages/Login'
import Register from '@/allPages/Register'
import Explore from '@/allPages/explore/Explore'
import Create from '@/allPages/create/Create'
import Myself from '@/allPages/myself/Myself'
import MyselfInformation from '@/allPages/myself/myself-pages/myself-information/MyselfInformation'
import UserDetails from '@/allPages/user-details/UserDetails'
import NewestCreate from '@/allPages/explore/explore-pages/newest-create/NewestCreate'
import NewestContinue from '@/allPages/explore/explore-pages/newest-continue/NewestContinue'
import Search from '@/allPages/Search'
import HotContinue from '@/allPages/explore/explore-pages/hot-continue/HotContinue'
import HotCreate from '@/allPages/explore/explore-pages/hot-create/HotCreate'
import CreateEdit from '@/allPages/create/create-pages/CreateEdit'
import CreateAllMessages from '@/allPages/create/create-pages/CreateAllMessages'
import CreateReady from '@/allPages/create/create-pages/create-ready/CreateReady'
import ArticalDetails from '@/allPages/artical-details/ArticalDetails'
import Comments from '@/allPages/comments/Comments'
import Found from '@/allPages/Found'
import About from '@/allPages/myself/myself-pages/myself-information/myself-information-pages/About'
import changePassword from '@/allPages/myself/myself-pages/myself-information/myself-information-pages/changePassword'
import changePhone from '@/allPages/myself/myself-pages/myself-information/myself-information-pages/changePhone'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        }, {
            path: '/create',
            name: 'Create',
            component: Create
        }, {
            path: '/forget',
            name: 'Found',
            component: Found
        }, {
            path: '/register',
            name: 'Register',
            component: Register
        }, {
            path: '/myself',
            name: 'Myself',
            component: Myself
        }, {
            path: '/myselfInformation',
            name: 'MyselfInformation',
            component: MyselfInformation
        }, {
            path: '/search',
            name: 'Search',
            component: Search
        }, {
            path: '/explore',
            name: 'Explore',
            component: Explore
        }, {
            path: '/newContinue',
            name: 'NewestContinue',
            component: NewestContinue
        }, {
            path: '/newCreate',
            name: 'NewestCreate',
            component: NewestCreate
        }, {
            path: '/hotCreate',
            name: 'HotCreate',
            component: HotCreate
        }, {
            path: '/hotContinue',
            name: 'HotContinue',
            component: HotContinue
        }, {
            path: '/createEdit',
            name: 'CreateEdit',
            component: CreateEdit
        }, {
            path: '/createAllMessages',
            name: 'CreateAllMessages',
            component: CreateAllMessages
        }, {
            path: '/readyEdit',
            name: 'CreateReady',
            component: CreateReady
        }, {
            path: '/comments',
            name: 'Comments',
            component: Comments
        }, {
            path: '/articaldetails',
            name: 'ArticalDetails',
            component: ArticalDetails
        }, {
            path: '/about',
            name: 'About',
            component: About
        }, {
            path: '/changePassword',
            name: 'changePasswordbout',
            component: changePassword
        }, {
            path: '/changePhone',
            name: 'changePhone',
            component: changePhone
        }, {
            path: '/userdetail',
            name: 'userdetail',
            component: UserDetails
        }

    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

})