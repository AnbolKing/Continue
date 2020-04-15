<template>
  <div class="found" :style="createStyle">
    <div class="header">
        <div class="icon">
            <router-link to='/'>
                <img src='static/icons/middle/76 – 1.png' class='left'>
            </router-link>
            <img src='static/icons/middle/84 – 1.png' class='right'>
        </div>
        <div class="desc">
            <div class="desc-top">注册新账户</div>
            <div class="desc-bottom">快来打开续世界的大门吧</div>
        </div>
    </div>
    <div class="info">
        <div class="infoPhone">
            <img src='static/icons/middle/29 – 1.png'>
            <input type="text" class="infoPhone-text" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="infoCode">
            <img src='static/icons/middle/28 – 1.png'>
            <input type="text" class="infoCode-text" placeholder="请输入验证码" v-model="code">
            <span class="send-code" @click="handleGetCode">{{isRun?`${this.runTime}s后重获取`:`获取验证码`}}</span>
        </div>
        <div class="infoNewPass">
            <img src='static/icons/middle/23 – 1.png'>
            <input type="password" class="infoNewPass-text" placeholder="请设置密码" v-model="password">
        </div>
        <!-- <div class="infoPass">
            <span class="iconfont infoPass-icon">&#xe6e9;</span>
            <input type="password" class="infoPass-text" placeholder="请再次输入密码">
        </div> -->
    </div>
    <register-have></register-have>
    <div class="FoundItem" @click="handleRegister">注册</div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'blueimp-md5'
import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui'
import RegisterHave from './Behavior'
export default {
  name: 'Login',
  components: {
      RegisterHave:RegisterHave
  },
  data: function() {
      return {
          phone:'',
          password:'',
          code:'',
          token:'',
          authenticate:'',
          isRun:false,
          runTime:30,
          url1:'http://api.gxy.ink/auth/sms/register',
          url2:'http://api.gxy.ink/auth/register',
          expires_at:0,
          createStyle: {
                backgroundImage:"url('static/imgs/创作页动态背景1.gif')",
                backgroundRepeat:"no-repeat",
                backgroundSize:"100% 100%",
                width:"100%",
                height:"100%",
                position:"fixed",     
          }
      } 
  },
  methods: {
        handleGetCode() {
            if(localStorage.token && localStorage.authenticate) {
                this.token = localStorage.token;
                this.authenticate = localStorage.authenticate;
            }
            if(!this.token && !this.authenticate) {
                MessageBox.alert("请先点击下方蓝色按钮进行行为验证", '提示');
                return
            }
            if(this.isRun) {
                return
            }
            if(!/^1\d{10}$/.test(this.phone)) {
                MessageBox.alert("请输入正确的手机号", '提示');
                return 
            }
            //获取验证码的跨域请求操作
            this.isRun = true
            var autoTime = setInterval(() => {
                this.runTime--;
                if(this.runTime === 0) {
                    this.runTime = 30;
                    this.isRun = false;
                    clearInterval(autoTime)
                    return
                }
            },1000)  
            //第一次向后端请求，用户获得验证码
            let data = {
                phone:this.phone,
                token:this.token,
                authenticate:this.authenticate
            }
            fetch(this.url1, {
                mode:'cors',
                method:'POST',
                body:JSON.stringify(data),
                headers:
                    new Headers({
                        'Content-Type':'application/json'
                })
            }).then(res => res.json().then(body => {
                console.log(body)
                this.expires_at = body.data.expires_at
                if(body.code !== 0) {
                    MessageBox.alert("验证码发送失败，请重试！", '提示');
                    return
                }
            })).catch(error => console.log("error: ", error))
        },
        handleRegister() {
            if(this.password.length <6 || this.password > 20 || this.password == null) {
                MessageBox.alert("密码应在6~20位哦！", '提示');
                return
            }
            var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
            if(!reg1.test(this.password)) {
                MessageBox.alert("密码只能有数字和字母哦！", '提示');
                return
            }
            var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
            if (!reg.test(this.password)) {
                MessageBox.alert("密码必须有数字和字母哦！", '提示');
                return
            }
            let data = {
                phone:this.phone,
                password:this.password,
                code:this.code,
                expires_at:this.expires_at
            }
            console.log(JSON.stringify(data))
            fetch(this.url2,{
                mode:'cors',
                method:'POST',
                body:JSON.stringify(data),
                headers:
                    new Headers({
                        'Content-Type':'application/json'
                })
            }).then(res => res.json().then(body => {
                console.log(body)
                if(body.code === 1) {
                    console.log(body.message)
                    MessageBox.alert("啊哦，网络出现了一点小故障，请重试！", '提示');
                    return ;
                }
                if(body.code === 2) {
                    console.log(body.message)
                    MessageBox.alert("请输入正确的验证码哦！", '提示');
                    return ;
                }
                if(body.code === 3) {
                    console.log(body.message)
                    MessageBox.alert("服务端出错啦，请重试！", '提示');
                    return ;
                }
                if(body.code === 4) {
                    console.log(body.message)
                    MessageBox.alert("服务端出了点问题呢，再试一次吧！", '提示');
                    return ;
                }
                if(body.code === 5) {
                    console.log(body.message)
                    MessageBox.alert("该手机号已被注册了，快去登录吧！", '提示');
                    return ;
                }
                if(body.code === 0) {
                    console.log(body.message)
                    localStorage.phone = md5(this.phone);
                    localStorage.password = md5(this.password)
                    //发送登录请求，获取token_id
                    let data_login = {
                        phone:this.phone,
                        password:this.password
                    }
                    fetch('http://api.gxy.ink/auth/login',{
                        mode:'cors',
                        method:'POST',
                        body: JSON.stringify(data_login),
                        headers:
                            new Headers({
                                'Content-Type':'application/json'
                            })
                    }).then(res => res.json.then(body => {
                        console.log(body)
                        if(body.code === 0) {
                            this.$store.commit('getId',body.data.id)
                            console.log('注册过程中发送登录请求获取toke_id成功')
                        }
                    }))
                    //页面跳转
                    var _this = this;
                    Indicator.open({
                        text: '注册成功.',
                        spinnerType: 'fading-circle'
                    });
                    this.timer = setTimeout(function(){
                        //console.log(this); // 这里的this指向window对象
                        _this.$router.push('/explore');
                        Indicator.close();
                    }, 500) 
                }
                localStorage.removeItem('token');
                localStorage.removeItem('authenticate');
            })
            ).catch(error => console.log("error: "+error))
        }
    },
    activated() {
        window.addEventListener("beforeunload", function (e) {
            localStorage.removeItem('token');
            localStorage.removeItem('authenticate');
        })
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .found {
        margin-top:0.4rem
        // margin-left 0.4rem
        // margin-right 0.4rem
        padding-top:0.22rem
        .border {
            border: solid 1px #707070
        }
        .header {
            .icon {
                height: .9rem
                line-height: .8rem
                .left {
                    float: left
                    height: .52rem
                }
                .right{
                    float: right
                    height: .52rem
                } 
            }
            .desc {
                margin-top 0.26rem
                margin-bottom 0.42rem
                text-align center
                color #ffffff
                .desc-top {
                    font-size 0.64rem
                    font-weight 600
                }
                .desc-bottom {
                    margin-top 0.25rem
                    font-size 0.24rem
                    font-weight 400
                }
            }
        }
        .infoPhone,.infoCode,.infoNewPass {
            width :5.78rem
            height :1.02rem
            line-height :1.02rem
            border-radius 0.52rem
            //background-color red
            margin:0 auto
            display:flex
            align-items: center
            background-color #ffffff
            img{
                height: .5rem
                margin-left: .4rem
            }
            .infoPhone-text,.infoNewPass-text,.infoCode-text {
                height :1.02rem
                line-height :1.02rem
                padding-left:0.2rem
                font-family :Microsoft YaHei;
                border :none
            }
        }
        .infoCode,.infoNewPass {
            margin-top :0.26rem
        }
        .infoCode {
            position relative
            .send-code {
                position absolute
                top:0
                right 0.4rem
                font-size: 0.3rem;
            }
        }
        .FoundItem {
            width :3.62rem
            height :1.04rem
            line-height :1.04rem
            border-radius 0.52rem
            text-align :center
            margin:0 auto
            font-family: Microsoft YaHei;
            font-size: 18px;
            color: #6c6a6a;
            letter-spacing: 0.05rem;
            margin-top :2.32rem;
            background-color #ffffff
        }
    }
</style>
