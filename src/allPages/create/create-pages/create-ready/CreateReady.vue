<template>
    <div class='ready'>
        <create-header></create-header>
        <create-body></create-body>
        <create-text></create-text>
    </div>
</template>

<script>
import CreateHeader from './create-ready-components/Header'
import CreateBody from './create-ready-components/Body'
import CreateText from './create-ready-components/Text'
//import CreateText from '../../../artical-details/artical-details-components/ArticalDetailsChapter'
export default {
    name: 'CreateReady',
    components: {
        CreateHeader:CreateHeader,
        CreateBody:CreateBody,
        CreateText:CreateText
    }
}
</script>

<style lang='stylus' scoped>
    
</style>
