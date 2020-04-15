<template>
    <div>
        <div>
            <create-body></create-body>
            <create-message :datas="datas"></create-message>
            <!-- <navigation></navigation> -->
        </div>
    </div>
</template>


<script>
import CreateBody from './create-components/CreateBody'
import CreateMessage from './create-components/CreateMessage'
import Navigation from '../Navigation'
import BScroll from 'better-scroll'
export default {
    name: 'Create',
    components: {
        CreateBody,
        CreateMessage,
        Navigation
    },
    data: function() {
        return {
            datas:[],
        }
    },
    mounted() {
        //记得加一个setInterval 时间是5min
        setInterval(() => {
            fetch('http://api.gxy.ink/v1/notifications',{
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
                    var result = body.data.slice(0,5)
                    this.datas = result;
                }
            })).catch(error => console.log("error: ", error))
        }, 60000);
    },
}
</script>

<style lang='stylus' scoped>
</style>