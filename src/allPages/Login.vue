<template>
  <div class="login" :style="createStyle">
    <div class="loginImg">
        continue               
        <!-- <img src="" class="loginImg-content">  //wza改   -->
    </div>
    <div class="title">不同的灵魂邂逅在同一个故事</div>
    <div class="info">
        <div class="infoName">
            <img src='static/icons/middle/21 – 1.png'>
            <input type="text" class="infoName-text" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="infoPass">
            <img src='static/icons/middle/23 – 1.png'>
            <input type="password" class="infoPass-text" placeholder="请输入密码" v-model="password">
        </div>
        <router-link to='/forget'>
            <div class="forget">忘记密码？</div>
        </router-link>
    </div>
    <div class="loginItem" @click="handleLogin">登录</div>
    <router-link to='/register'>
        <div class="registerEnter">没有账户？现在注册</div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'blueimp-md5'
import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
  name: 'Login',
  data: function() {
      return {
          phone:'',
          password:'',
          url:'http://api.gxy.ink/auth/login',
          createStyle: {
                backgroundImage:"url('static/imgs/创作页动态背景1.gif')",
                backgroundRepeat:"no-repeat",
                backgroundSize:"100% 100%",
                width:"100%",
                height:"100%",
                position:"fixed"
          }
      }
  },
  methods: {
      handleLogin() {
          console.log(this.phone + ' '+ this.password)
          let data = {
              phone:this.phone,
              password:this.password
          }
          fetch(this.url,{
              mode:'cors',
              method:'POST',
              body: JSON.stringify(data),
              headers:
                  new Headers({
                      'Content-Type':'application/json'
                  })
          }).then(res => res.json().then(body => {
              console.log(body)
              if(body.code === 1) {
                  console.log(body.message)
                  MessageBox.alert("请输入用户名和密码哦~", '提示');
                  return ;
              }
              if(body.code === 2) {
                  console.log(body.message)
                  MessageBox.alert("用户名不存在，请输入正确的手机号", '提示');
                  return ;
              }
              if(body.code === 3) {
                  console.log(body.message)
                  MessageBox.alert("密码错误，请重试", '提示');
                  return ;
              }
              if(body.code === 0) {
                console.log(body.message)
                localStorage.phone = md5(this.phone);
                localStorage.password = md5(this.password)
                this.$store.commit('getToken',body.data.token)
                this.$store.commit('getId',body.data.id)
                var _this = this;
                Indicator.open({
                    text: '登陆成功...',
                    spinnerType: 'fading-circle'
                });
                this.phone = '',
                this.password = '',
                this.timer = setTimeout(function(){
                    //console.log(this); // 这里的this指向window对象
                    _this.$router.push('/explore');
                    Indicator.close();
                }, 500) 
                      
              }
          })).catch(error => console.log("error: ", error))
      }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .loginImg {
        //height :2.16rem    //wza改   
        //width 2.16rem      //wza改
        //border-radius 50%  //wza改
       // background-color red
        font-size 1.24rem   //wza改
        font-weight 600
        //margin :0 auto   //wza改
        margin-top:1.8rem
        margin-bottom none
        text-align center 
        color #ffffff
    }
    .title {
        font-family:PingFang SC
        font-size 0.24rem   //wza改
        // width :0.48rem   //wza改
        height :0.6rem
        line-height :0.64rem
        //margin:0 auto     //wza改
        text-align center   //wza改
        margin-bottom :0.46rem
        color #ffffff
    }
    .border {
        border: solid 1px #707070
    }
    .info {
        position relative
        margin-left: 1.2rem
        margin-right: 1.2rem
        margin-bottom 1.78rem
        .infoName,.infoPass {
            width :100%
            height :1.04rem
            line-height :1.04rem
            border-radius 0.52rem
            //background-color red
            margin:0 auto
            display:flex
            align-items: center
            background-color rgb(255,255,255)
            img {
                height: .46rem
                vertical-align: center
                margin-left: .4rem
            }
            .infoName-text,.infoPass-text {
                height :1.04rem
                line-height :1.0rem
                padding-left:0.2rem
                font-family :Microsoft YaHei;
                border :none
            }
        }
        .infoPass {
            margin-top :0.26rem
        }
        .forget {
            font-size: .24rem
            color: #6c6a6a
            height: .32rem
            line-height: .32rem
            text-align: right
            margin-top: .1rem
            color #ffffff
        }
    }
    .loginItem {
        height :1.04rem
        line-height :1.04rem
        border-radius 0.52rem
        text-align :center
        margin:0 2rem
	    font-size: .36rem
        color: #6c6a6a
        letter-spacing: 0.1rem
        margin-bottom :0.16rem
        background-color #ffffff
    }
    .registerEnter {
	    height: 0.32rem;
        text-align :center
        line-height :0.32rem
        font-size :0.24rem
        color #ffffff
    }
</style>
