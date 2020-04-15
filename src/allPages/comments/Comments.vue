<template>
    <div>
        <comments-header></comments-header>
        <comments-body></comments-body>
        <comments-list></comments-list>
    </div>
</template>

<script>
import CommentsHeader from './comments-components/Header'
import CommentsBody from './comments-components/Body'
import CommentsList from './comments-components/List'
export default {
    name: 'Comments',
    components: {
        CommentsBody,
        CommentsHeader,
        CommentsList
    }
}
</script>
<style lang='stylus' scoped>
</style>