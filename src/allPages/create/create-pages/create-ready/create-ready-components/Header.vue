<template>
    <div>
        <div class='header'>
            <router-link to='/createEdit'>
                <img src='static/icons/middle/39 – 1.png'>
            </router-link>
            创作
            <img src='static/icons/middle/44 – 1.png' @click="handlePopTop">
        </div>
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" closeOnClickModal="true" position="bottom" class="popTop">
           <mt-picker :slots="items" showToolbar @change="onValuesChange">
             <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="close">取消</div>
               <div class="choose">若选择原创则他人不可续写</div>
               <div class="usi-btn-sure" @click="sure">确定</div>
             </div>
           </mt-picker>
        </mt-popup>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui'
import { MessageBox } from 'mint-ui'
export default {
    name: 'CreateHeader',
    data() {
        return {
            showToolbar: true,
            popupVisible:false,
            items:[
                {
                    values:['原创','续写'],
                    textAlign: 'center',
                    defaultIndex:0,
                }
            ],
            message:'',
        }
    },
    methods: {
        handlePopTop() {
            this.popupVisible = true
        },
        close() {
            this.popupVisible = false
        },
        sure() {
            var _this = this;
            Indicator.open({
                text: '发布中...',
                spinnerType: 'fading-circle'
            });
            this.popupVisible = false
            this.timer = setTimeout(function(){
                //console.log(this); // 这里的this指向window对象
                _this.$router.push('/create');
                Indicator.close();
            }, 500)         
            console.log('ok')
            //向后端传数据
            if(this.message == '续写') {
                let data = {
                    title:this.$store.state.datas.sonTitle,
                    content:this.$store.state.datas.content
                }
                //记得加上passage_id
                fetch('http://api.gxy.ink/v1/passage/'+this.$store.state.datas.passage_id+'/section',{
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
                    if(body.code === 0) {
                        console.log(body.message)
                    }
                })).catch(error => console.log("error: ", error))
            }
            if(this.message == '原创') {
                let data = {
                    title:this.$store.state.datas.title,
                    continue_flag:'0',
                    section_title:this.$store.state.datas.sonTitle,
                    section_content:this.$store.state.datas.content
                }
                console.log(data)
                //记得修改url
                fetch('http://api.gxy.ink/v1/passage',{
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
                    if(body.code !== 0) {
                        console.log(body.message)
                        MessageBox.alert("网络繁忙，请重试！", '提示');
                        return ;
                    }
                    if(body.code === 0) {
                        console.log(body.message)
                    }
                })).catch(error => console.log("error: ", error))
            }
        },
        onValuesChange(picker,values) {
            this.message = values[0]
            console.log(values[0])
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '../../../../../assets/styles/dayChange.styl';
    .header
        margin-top: .4rem
        margin-bottom: .4rem
        padding-left: .4rem
        padding-right: .4rem
        height: 0.88rem
        line-height: 0.88rem
        font-size: .5rem
        //border-bottom: solid .01rem
        //border-top: solid .01rem
        display: flex 
        justify-content: space-between
        align-items: center
        background-color #ffffff
        img 
            height: .6rem
    .popTop 
        background $bgColor
        color $fontColor
        width 100%
        .picker-toolbar-title 
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            .choose
                padding-top 10px
            .usi-btn-cancel,
            .usi-btn-sure
                padding-top 10px 
                color: $fontColor
</style>
