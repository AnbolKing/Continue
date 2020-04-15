<template>
    <div class="search-list">
        <!-- <div class="list" v-for="(item,index) in list.slice(0,5)" :key="index">
            <div class="list-item">{{item}}</div>
        </div> -->
        <div class="gulugulu">
            <div class="autoText" ref="autoText" v-for="(item,index) in list" :key="index">{{item}}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SearchList',
  data:function() {
      return {
         list:['雨打芭蕉但是我喜欢玻璃','晴天娃娃','罗密欧与朱丽叶','吴亦凡与与鹿晗新歌','想吃火锅的第100天','人人都是产品经理',
                '我不信','我发条从不空大','电磁场鲨我','精灵宝可梦之想要皮卡丘','大话西游之不好看','呜呜呜想看穹顶之下第四季','前端给我冲'
              ]
      }
  },
  created() {
      console.log(this.$refs.autoText)
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    @import '../../assets/styles/dayChange.styl'
    .search-list {
        margin-left:0.4rem;
        margin-top:0.45rem;
        // .list {
        //     margin-bottom:0.52rem
        //     .list-item {
        //         font-size:0.22rem;
        //         font-family: Segoe UI;
        //         color: gray;
        //     }
        // }
        .autoText {
            margin-bottom 0.12rem
            margin-right 0.22rem
            width auto
            height 0.45rem
            background-color $bgColor
            line-height 0.45rem
            text-align center
            border-radius 0.36rem
            -moz-border-radius 0.36rem
            font-size 0.3rem
            display inline-block
            padding-top 0.08rem
            padding-bottom 0.12rem
            padding-left 0.2rem
            padding-right 0.2rem
            color: $fontColor;
        }
    }
</style>
