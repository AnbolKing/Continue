<template>
    <div>
        <div id="cbox"></div>
    </div>
</template>

<script>
import '../assets/js/riddler.js'
export default {
  name: 'Behavior',
}
window.onload = function () {
    // 初始化
    new YpRiddler({
        expired: 60,
        mode: 'dialog',
        winWidth: window.outerWidth*0.768,
        lang: 'en', // 界面语言, 目前支持: 中文简体 zh-cn, 英语 en
        // langPack: LANG_OTHER, // 你可以通过该参数自定义语言包, 其优先级高于lang
        container: document.getElementById('cbox'),
        appId: '592c56c919b743a396a2dce36c0c18fe',
        version: 'v1',
        onError: function (param) {
                if (!param.code) {
                    console.error('错误请求');
                }
                else if (parseInt(param.code / 100) == 5) {
                    // 服务不可用时，开发者可采取替代方案
                    console.error('验证服务暂不可用');
                }
                else if (param.code == 429) {
                    console.warn('请求过于频繁，请稍后再试');
                }
                else if (param.code == 403) {
                    console.warn('请求受限，请稍后再试');
                }
                else if (param.code == 400) {
                    console.warn('非法请求，请检查参数');
                }
            // 异常回调
            console.error('验证服务异常')
        },
        onSuccess: function (validInfo, close, useDefaultSuccess) {
            // 成功回调
            //alert('验证通过! token=' + validInfo.token + ', authenticate=' + validInfo.authenticate)
            localStorage.token = validInfo.token
            localStorage.authenticate = validInfo.authenticate
            console.log('token: '+ validInfo.token)
            console.log('authenticate：'+ validInfo.authenticate)
            // 验证成功默认样式
            useDefaultSuccess(true)
            close()
        },
        onFail: function (code, msg, retry) {
            // 失败回调
            alert('出错啦：' + msg + ' code: ' + code)
            retry()
        },
        beforeStart: function (next) {
            console.log('验证马上开始')
            next()
        },
        onExit: function () {
            // 退出验证 （仅限dialog模式有效）
            console.log('退出验证')
        }
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    #cbox {
        margin-top 0.26rem
    }
</style>
