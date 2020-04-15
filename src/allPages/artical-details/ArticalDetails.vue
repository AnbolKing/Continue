<template>
    <div>
        <artical-details-header></artical-details-header>
        <artical-details-title></artical-details-title>
        <artical-details-chapter></artical-details-chapter>
    </div>
</template>

<script>
import ArticalDetailsHeader from './artical-details-components/ArticalDetailsHeader'
import ArticalDetailsTitle from './artical-details-components/ArticalDetailsTitle'
import ArticalDetailsChapter from './artical-details-components/ArticalDetailsChapter'
export default {
    name: 'ArticalDetails',
    components: {
        ArticalDetailsHeader,
        ArticalDetailsTitle,
        ArticalDetailsChapter
    },
}
</script>

<style lang='stylus' scoped>
</style>