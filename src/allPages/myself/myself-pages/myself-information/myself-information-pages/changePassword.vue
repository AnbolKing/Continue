<template>
    <div>
       <div class='header'>
           <router-link to='/myselfInformation'>
                <img src='static/icons/middle/39 – 1.png'>
           </router-link>
           <span>密码</span>
           <img src='static/icons/middle/44 – 1.png' @click="handleChangePassword">
        </div>
        <div class='desc'>用户确认</div>
        <div class='wrapper'>
            <input type='text' placeholder='请输入您新的手机号' v-model="phone">
            <!-- <div>发送验证码</div> -->
        </div>
        <div class='wrapper'>
            <input type='password' placeholder='请输入原密码' v-model="password">
            <!-- <div>验证码错误</div> -->
        </div>
        <div class='desc'>更改资料</div>
        <div class='wrapper'>
            <input type='text' placeholder='请输入新的密码' v-model="password1">
        </div>
        <div class='wrapper'>
            <input type='text' placeholder='请再次确认密码' v-model="password2">
        </div>
    </div>
</template>

<script>
import md5 from 'blueimp-md5'
import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'changePassword',
    data: function() {
        return {
            phone:'',
            password:'',
            password1:'',
            password2:'',
        }
    },
    methods: {
        handleChangePassword() {
            console.log(md5(this.phone))
            if(md5(this.phone) !== localStorage.phone) {
                MessageBox.alert("手机号不正确哦！", '提示');
                return ;
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
            if(this.password1 !== this.password2) {
                MessageBox.alert("新密码两次要保持一致哦！", '提示');
                return ;
            }
            let data = {
                old_password:this.password,
                new_password:this.password1
            }
            fetch('http://api.gxy.ink/v1/password', {
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
                //其他code逻辑待确定
                if(body.code !== 3) {
                    MessageBox.alert("网络繁忙，请重试", '提示');
                    return 
                }
                if(body.code === 3) {
                    localStorage.password = md5(this.password)
                    var _this = this;
                    Indicator.open({
                        text: '修改成功.',
                        spinnerType: 'fading-circle'
                    });
                    this.timer = setTimeout(function(){
                        //console.log(this); // 这里的this指向window对象
                        _this.$router.push('/myself');
                        Indicator.close();
                    }, 500) 
                }
            })).catch(error => console.log("error: ", error))
        }
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
