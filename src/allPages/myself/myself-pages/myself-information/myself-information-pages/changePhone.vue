<template>
    <div>
       <div class='header'>
           <router-link to='/myselfInformation'>
                <img src='static/icons/middle/39 – 1.png'>
           </router-link>
           <span>手机号</span>
           <img src='static/icons/middle/44 – 1.png' @click="handleChangePhone">
        </div>
        <div class='desc'>用户确认</div>
        <div class='wrapper'>
            <input type='password' placeholder='请输入您的密码' v-model="password">
            <div>填写准确哦</div>
        </div>
        <div class='desc'>更改资料</div>
        <div class='wrapper'>
            <input type='text' placeholder='请输入新的手机号' v-model="phone">
            <div @click="handleGetCode">{{isRun?`${this.runTime}s后重获取`:`获取验证码`}}</div>
        </div>
        <div class='wrapper'>
            <input type='text' placeholder='请输入验证码' v-model="code">
        </div>
        <register-have></register-have>
    </div>
</template>

<script>
import RegisterHave from '@/allPages/Behavior'
import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui'
import md5 from 'blueimp-md5'
export default {
    name: 'changePassword',
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
            expires_at:0,
            url1:'http://api.gxy.ink/v1/sms/phone',
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
            if(md5(this.password) !== localStorage.password) {
                MessageBox.alert("密码不正确哦！", '提示');
                return ;
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
                        'Content-Type':'application/json',
                        'Authorization':localStorage.token_id
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
        handleChangePhone() {
            let data = {
                phone:this.phone,
                code:this.code,
                expires_at:this.expires_at
            }
            console.log(JSON.stringify(data))
            fetch('http://api.gxy.ink/v1/phone',{
                mode:'cors',
                method:'PUT',
                body:JSON.stringify(data),
                headers:
                    new Headers({
                        'Content-Type':'application/json',
                        'Authorization':localStorage.token_id
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
                    var _this = this;
                    Indicator.open({
                        text: '修改成功.',
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
    },
    activated() {
        window.addEventListener("beforeunload", function (e) {
            localStorage.removeItem('token');
            localStorage.removeItem('authenticate');
        })
    }
}
</script>

<style lang='stylus' scoped>
  .header 
    margin-top: .4rem
    display: flex 
    justify-content: space-between 
    align-items: center 
    height: .88rem 
    background-color: #ffffff
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16)
    padding: 0 .4rem
    img 
      height: .46rem
    span 
      color: #000000
      font-size: .36rem
  .desc 
    height: .84rem
    padding-left: .4rem
    line-height: .84rem
    color: #ffffff
  .wrapper 
    margin: 0 .4rem 
    margin-bottom: .3rem
    padding: 0 .4rem
    background-color: #ffffff
    height: 1rem
    display: flex 
    justify-content: space-between
    border-radius:.22rem
    input 
      height: 100%
    div 
      line-height: 1rem

</style>