<template>
    <div class="pageTitle">
        <div class="w1200">
            <el-link href="/" :underline="false">当前位置：首页 ></el-link>
            &nbsp;&nbsp;
            <el-link v-if="websiteTitle" :underline="false">{{websiteTitle}}</el-link>
        </div>
    </div>
</template>
<script>
    export default {
        name:'pageTitle',
        data(){
            return{
                websiteTitle:''
            }
        },
        created(){
            this.websiteTitle = this.$route.meta.title
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .pageTitle{
        .w1200{
            height: .5rem;
            line-height: .5rem;
            a{
                color: #666;
                font-size: .14rem;
                transition: all .4s;
                &:hover{
                    color: #FF5D24;
                }
            }
        }
    }
</style>