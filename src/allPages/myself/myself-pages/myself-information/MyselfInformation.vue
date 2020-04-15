<template>
    <div class="information">
        <div class='header'>
            <router-link to='/myself'>
                <img src='static/icons/middle/39 – 1.png'>
            </router-link>
            <div class='desc'>个人资料</div>
        </div>
        <div class='basic-information'>
            <div class='head'>基本资料</div>
            <div class='img'>
                <div class='img-text'>头像</div>
                <div class='icon-wrapper'>
                  <label for="id_avatar"><img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='img-img'></label>
                  <input ref='avatar' @click='handleAvatarSuccess' type="file" id="id_avatar" name="file" style="display:none" accept="image/png, image/jpeg, image/png, image/webp">
                  
                </div>
            </div>
            <div class='item'>
              <div class='item-name'>昵称</div>
              <div class='name-wrapper'>
                <div class='name' ref='name' @click="quxiao('name')">{{datas.nickname}}</div>
                <img src='static/icons/middle/41 – 1.png' class='icon' @click="show('name')" v-show='nameImgShow'>
              </div>  
            </div>
            <transition enter-active-class='animated fadeIn'>
              <div class='modifyName' v-show='nameShow'>
                <input class='input' type='text' value='输入你的新昵称吧' v-model="username">
                <button class='button' @click="queren('name',' ')">确认</button>
              </div>
            </transition>
            <div class='item'>
              <div class='item-name'>性别</div>
              <div class='name-wrapper'>
                <div class='name' ref='sex' @click="quxiao('sex')">{{this.gender}}</div>
                <img src='static/icons/middle/41 – 1.png' class='icon' @click="show('sex')" v-show='sexImgShow'>
              </div>
            </div>
            <transition enter-active-class='animated fadeIn'>
              <div class='modifySex' v-show='sexShow'>
                <button class='button' @click="queren('sex','male')">男</button>
                <button class='button' @click="queren('sex','female')">女</button>
                <button class='button' @click="queren('sex','unknow')">保密</button>
              </div>
            </transition>
            <div class='item'>
              <div class='item-name'>简介</div>
              <div class='name-wrapper'>
                <div ref='introduce' @click="quxiao('introduce',' ')">&nbsp;</div>
                <img src='static/icons/middle/41 – 1.png' class='icon' @click="show('introduce')" v-show='introduceImgShow'>
              </div>
            </div>
            <transition enter-active-class='animated fadeIn'>
              <div class='modifyIntroduce' v-show='introduceShow'>
                <textarea class='input'></textarea>
                <div class='finishInput'>
                  <span claaa='fontNumber'>0/200字</span>
                  <span class='finish' @click="queren('introduce')">保存</span>
                </div>
              </div>
            </transition>
        </div>
        <div class='basic-information'>
            <div class='head'>账户资料</div>
            <div class='item'>
              <div class='item-name'>手机号</div>
              <div class='name-wrapper'>
                <div class='name'>{{datas.phone}}</div>
                <router-link to='/changePhone'>
                  <img src='static/icons/middle/41 – 1.png' class='icon'>
                </router-link>
              </div>
            </div>
            <div class='item'>
              <div class='item-name'>密码</div>
              <div class='name-wrapper'>
                <router-link to='/changePassword'>
                  <img src='static/icons/middle/41 – 1.png' class='icon'>
                </router-link>
              </div>
            </div>
        </div>
        <div class='foot'>
          <div class='item'>退出登录</div>
          <div class='img-wrapper'>
            <img src='static/icons/middle/41 – 1.png' class='icon' @click="handleExit">
          </div>
        </div>
        <div class='foot'>
          <div class='item'>关于</div>
          <router-link to='/about'>
            <div class='img-wrapper'>
              <img src='static/icons/middle/41 – 1.png' class='icon'>
            </div>
          </router-link>
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'MyselfInformation',
    data () {
      return {
        nameShow: false,
        nameImgShow: true,
        sexShow: false,
        sexImgShow:true,
        introduceShow: false,
        introduceImgShow: true,
        username:'',
        usersex:'',
        imageUrl: '',
        datas:[],
        gender:'',
      }
    },
    mounted() {
        fetch('http://api.gxy.ink/v1/profile/'+this.$store.state.id,{
            mode:'cors',
            method:'GET',
            headers:
                new Headers({
                    'Content-Type':'application/json',
                    'Authorization':localStorage.token_id
                })
            }).then(res => res.json().then(body => {
                console.log(body)
                if(body.code === 0) {
                    console.log(body.message)
                    this.datas = body.data
                    //判断性别
                    if(body.data.gender === 'male') {
                        this.gender = '男'
                    }
                    if(body.data.gender === 'female') {
                        this.gender = '女'
                    }
                    if(body.data.gender === 'private') {
                        this.gender = '保密'
                    }
                }
        })).catch(error => console.log("error: ", error))
    },
    methods: {
      handleExit() {
          MessageBox.confirm('确定要退出吗', '提示').then(action => {
              var _this = this;
              Indicator.open({
                    text: '退出中...',
                    spinnerType: 'fading-circle'
                });
                this.timer = setTimeout(function(){
                    //console.log(this); // 这里的this指向window对象
                    _this.$router.push('/');
                    Indicator.close();
                }, 500) 
          })
      },
      show (val) {
        switch (val) {
          case 'name':
            this.nameShow = true
            this.nameImgShow = false 
            this.$refs.name.innerHTML = '取消'
            break
          case 'sex':
            this.sexShow = true 
            this.sexImgShow = false
            this.$refs.sex.innerHTML = '取消'
            break 
          case 'introduce':
            this.introduceShow = true 
            this.introduceImgShow = false
            this.$refs.introduce.innerHTML = '取消'
            break
        }
      },
      quxiao (val) {
        switch (val) {
          case 'name':
            this.nameShow = false
            this.nameImgShow = true 
            this.$refs.name.innerHTML = '黑凤梨'
            break;
          case 'sex':
            this.sexShow = false 
            this.sexImgShow = true
            this.$refs.sex.innerHTML = '女'
            break ;
          case 'introduce':
            this.introduceShow = false 
            this.introduceImgShow = true
            this.$refs.introduce.innerHTML = '&nbsp;'
            break;
        }
      },
      queren (val,info) {
        switch (val) {
          case 'name':
            this.nameShow = false
            this.nameImgShow = true 
            this.$refs.name.innerHTML = this.username
            break;
          case 'sex':
            this.sexShow = false 
            this.sexImgShow = true
            if(info == 'male') {
                this.$refs.sex.innerHTML = '男'
                break ;
            }
            if(info == 'female') {
                this.$refs.sex.innerHTML = '女'
                break ;
            }
            if(info == 'unknow') {
                this.$refs.sex.innerHTML = '保密'
                break ;
            }
          case 'introduce':
            this.introduceShow = false 
            this.introduceImgShow = true
            this.$refs.introduce.innerHTML = '&nbsp;'
            break;
        }
      },
      handleAvatarSuccess() {
        console.log(this.$refs.avatar.value)
        var formdata = new FormData()
        if(this.$refs.avatar.value!==null) {
          formdata.append('file',this.$refs.avatar.value)
          console.log(formdata)
          fetch('http://api.gxy.ink/v1/avatar', {
                mode:'cors',
                method:'POST',
                body:JSON.stringify(formdata),
                headers:
                    new Headers({
                        'Content-Type':'application/json',
                        'Authorization':localStorage.token_id
                })
        }).then(res => res.json().then(body => {
                console.log(body)
        }))
        }
      }
    }
}

</script>

<style lang='stylus' scoped>
  .header
    margin-top: .4rem
    padding-left: .4rem
    padding-right: .4rem
    height: .88rem
    line-height: .88rem
    text-align: center
    font-size: .36rem
    //border-bottom: solid .01rem
    //border-top: solid .01rem
    display: flex 
    align-items: center
    background-color: #ffffff
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3)
    img
      height: .4rem
    .desc 
      margin-left: 2.4rem
  .basic-information
    .modifyName
      height: 1rem 
      background: #4f92f5
      padding-left: .4rem 
      padding-right: .28rem
      display: flex 
      justify-content: space-between
      .input 
        height: 1rem 
        background: #4f92f5
        font-size: .32rem 
        color: #ffffff
      .button 
        height: 1rem 
        background: #4f92f5
        font-size: .32rem 
        color: #000000
    .modifySex
      height: 1rem 
      background: #4f92f5
      padding-left: 1.6rem 
      padding-right: 1.6rem
      display: flex 
      justify-content: space-between
      .button 
        height: 1rem 
        background: #4f92f5
        font-size: .32rem 
        color: #ffffff
    .modifyIntroduce 
      height: 5rem 
      background: #4f92f5
      padding: 0 .4rem 
      padding-top: .2rem
      border-bottom-left-radius:.6rem
      border-bottom-right-radius:.6rem
      .input 
        width: 100%
        height: 4rem
        line-height: .4rem 
        font-size: .32rem
      .finishInput 
        height: 1rem
        line-height: 1rem
        display: flex 
        justify-content: space-between
        .fontNumber 
          font-size: .24rem
          color: #6c6a6a
        .finish 
          font-size: .32rem 
          color: #000000
    .head
      height: .74rem
      line-height: .74rem
      font-size: .25rem
      padding-left: .4rem
      color #ffffff
    .img
      height: 1.6rem
      padding-left: .4rem
      padding-right: .28rem
      background-color: #ffffff
      display: flex 
      justify-content: space-between
      align-items: center
      .img-text
        height: 1.6rem
        line-height: 1.6rem
        font-size: .32rem
        float: left
      .icon-wrapper 
        height: 1.6rem
        float: right
        display: flex
        align-items: center
        .img-img
          height: 1.2rem
          width: 1.2rem
          border-radius: 100%
          background: purple
        .avatar-uploader >>> .el-upload__input 
          display: block
        .avatar-uploader .el-upload 
          height: 1.6rem
          width: 1.6rem
          overflow: hidden
        .avatar-uploader-icon 
          height: 1.6rem
          width: .5rem
          line-height: 1.6rem
          font-size: .56rem
          color: #000000
          text-align: center
          margin-left: .1rem
        .avatar 
          width: 1.2rem
          height: 1.2rem
          display: block
    .item
      height: 1rem
      line-height: 1rem
      font-size: .32rem
      background-color: #ffffff
      padding-left: .4rem
      padding-right: .28rem
      .item-name 
        float: left 
        height: 1rem
        line-height: 1rem
      .name-wrapper 
        height: 1rem
        float: right
        display: flex
        align-items: center
        .name 
          color: #6c6a6a
          font-size: .32rem
        .icon 
          height: .45rem
          margin-left: .2rem
  .foot
    margin-top: .3rem
    height: 1rem
    padding-left: .4rem
    padding-right: .28rem
    background-color: #ffffff
    .item 
      float: left 
      line-height: 1rem
      font-size: .32rem
    .img-wrapper 
      height: 1rem
      float: right 
      display: flex 
      align-items: center 
      img  
        height: .45rem
        margin-left: .2rem 
</style>
