<template>
    <div class="pageBanner">
        <el-image :src="bannerSrc" fit="contain"></el-image>
    </div>
</template>
<script>
    export default {
        name:'pageBanner',
        data(){
            return{
                bannerSrc:require('@/assets/image/banner/banner2.jpg'),
            }
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .pageBanner{
        width: 100%;
        height: 0;
        padding-bottom: 4rem;
        overflow: hidden;
    }
</style>