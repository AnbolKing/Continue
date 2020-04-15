<template>
    <div class="header">
        <router-link to='/explore'>
            <div class="header-icon">
                <span class="iconfont arrow">&#xe65e;</span>
            </div>
        </router-link>
        <div class="header-content">
            <div class="content-desc">
                <span class="desc-f">||</span>
                <span class="desc-l">最新续作</span>
            </div>
            <!-- <router-link :to="'/search'+'?name='+'hotcontinue'"> -->
            <div class="content-icon">
                <span class="iconfont search" @click="handleShowSearch">&#xe60a;</span>
            </div>
            <fade-animation>
                <search v-show="showSearch" @close="handleCloseSearch" :param="link"></search>
            </fade-animation>
            <!-- </router-link> -->
        </div>
    </div>
</template>

<script>
import Search from '@/allPages/Search'
import FadeAnimation from '@/allPages/commonList/FadeAnimation'
export default {
  name: 'NewestContinueHeader',
  data: function() {
      return {
          showSearch: false,
          link:'newcontinue'
      }
  },
  components: {
        Search:Search,
        FadeAnimation:FadeAnimation
    },
  methods: {
        handleShowSearch() {
            this.showSearch = true
        },
        handleCloseSearch() {
            this.showSearch = false
        }
  }
}
</script>
<style lang="stylus" scoped>
    .header {
        position:relative
        .header-icon {
            position :absolute
            left:0.4rem
            top:0.22rem
            .arrow {
                color :#ffffff
                font-size:0.54rem
                font-weight:600
            }
        }
        .header-content {
            position:relative
            left :0.5rem
            top:1.22rem
            .content-desc {
                text-align:center
                display:flex
                .desc-f,.desc-l {
                    font-size:0.64rem
                    color: #ffffff
                    font-weight:500
                    text-align:center
                }
                .desc-l {
                    margin-left:0.2rem
                }
            }
            .content-icon {
                position:absolute
                top:0.07rem
                right:1.1rem
                .search {
                    font-size:0.56rem
                    color:#ffffff
                    font-weight:500
                }
            }
        }
    }
</style>
