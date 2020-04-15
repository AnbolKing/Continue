<template>
  <div class="found">
    <div class="header">
        <div class="icon">
            <router-link to='/'>
                <img src='static/icons/middle/76 – 1.png' class='left'>
            </router-link>
            <img src='static/icons/middle/84 – 1.png' class='right'>
        </div>
        <div class="desc">
            <div class="desc-top">找回您的密码</div>
            <div class="desc-bottom">能忘了密码，却也忘不了续</div>
        </div>
    </div>
    <div class="info">
        <div class="infoPhone">
            <img src='static/icons/middle/29 – 1.png'>
            <input type="text" class="infoPhone-text" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="infoCode">
            <img src='static/icons/middle/28 – 1.png'>
            <input type="password" class="infoCode-text" placeholder="请输入验证码" v-model="code">
            <span class="send-code" @click="handleGetCode">{{isRun?`${this.runTime}s后重获取`:`获取验证码`}}</span>
        </div>
        <div class="infoNewPass">
            <img src='static/icons/middle/23 – 1.png'>
            <input type="password" class="infoNewPass-text" placeholder="请设置新密码" v-model="password1">
        </div>
        <div class="infoPass">
            <img src='static/icons/middle/23 – 1.png'>
            <input type="password" class="infoPass-text" placeholder="请再次输入密码" v-model="password2">
        </div>
    </div>
    <register-have></register-have>
    <div class="FoundItem" @click="handleChange">确认更改</div>
  </div>
</template>

<script>
import axios from 'axios'
import RegisterHave from './Behavior'
import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
  name: 'Login',
  components: {
      RegisterHave:RegisterHave
  },
  data: function() {
      return {
          phone:'',
          code:'',
          password1:'',
          password2:'',
          token:'',
          authenticate:'',
          isRun:false,
          runTime:30,
          expires_at:0,
          url1:'http://api.gxy.ink/auth/sms/forget_pwd',
          url2:'http://api.gxy.ink/auth/forget_pwd',
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
      handleChange() {
          if(this.password1 !== this.password2) {
              MessageBox.alert("两次密码要一致哦~", '提示');
              return
          }
          if(this.password1.length <6 || this.password1 > 20 || this.password1 == null) {
                MessageBox.alert("密码应在6~20位哦！", '提示');
                return
            }
            var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
            if(!reg1.test(this.password1)) {
                MessageBox.alert("密码只能有数字和字母哦！", '提示');
                return
            }
            var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
            if (!reg.test(this.password1)) {
                MessageBox.alert("密码必须有数字和字母哦！", '提示');
                return
            }
          let data = {
                phone:this.phone,
                password:this.password1,
                code:this.code,
                expires_at:this.expires_at
            }
            console.log(data)
            fetch(this.url2,{
                mode:'cors',
                method:'PUT',
                body:JSON.stringify(data),
                headers:
                    new Headers({
                        'Content-Type':'application/json'
                })
            }).then(res => res.json().then(body => {
                console.log(body)
                if(body.code === 1) {
                    MessageBox.alert("啊哦，网络出现了一点小故障，请重试！", '提示');
                    return ;
                }
                if(body.code === 2) {
                    MessageBox.alert("请输入正确的验证码哦！", '提示');
                    return ;
                }
                if(body.code === 0) {
                    var _this = this;
                    Indicator.open({
                        text: '请稍后...',
                        spinnerType: 'fading-circle'
                    });
                    this.timer = setTimeout(function(){
                        //console.log(this); // 这里的this指向window对象
                        _this.$router.push('/');
                        Indicator.close();
                    }, 500) 
                }
                localStorage.removeItem('token');
                localStorage.removeItem('authenticate');
            })
            ).catch(error => console.log("error: "+error))
      }
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
                margin-bottom 1.16rem
                text-align center
                .desc-top {
                    font-size 0.64rem
                    color #ffffff
                    font-weight 600
                }
                .desc-bottom {
                    margin-top 0.25rem
                    font-size 0.24rem
                    color #ffffff
                    font-weight 400
                }
            }
        }
        .infoPhone,.infoCode,.infoNewPass,.infoPass {
            width :5.78rem
            height :1.04rem
            line-height :1.04rem
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
            .infoPhone-text,.infoPass-text,.infoNewPass-text,.infoCode-text {
                height :1.04rem
                line-height :1.0rem
                padding-left:0.2rem
                font-family :Microsoft YaHei;
                border :none
            }
        }
        .infoCode,.infoNewPass,.infoPass {
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
            margin-top :0.82rem;
            background-color #ffffff
        }
    }
</style>
