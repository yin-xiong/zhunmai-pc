<template>
    <div class="cards">
        <div>
            <setTitle></setTitle>
        </div>
    </div>
</template>
<script>
    import setTitle from '../components/setTitle'
    export default {
        name:'card',
        data(){
            return{

            }
        },
        components:{
            setTitle
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .cards{

    }
</style>