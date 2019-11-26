<template>
    <div class="header_top">
        <div class="flex w1200">
            <div class="header_top_left">
                <span>HI，欢迎来到准买网！</span>
                <span>
                    <el-link class="login" type="danger" :underline="false" href="/login">请登录</el-link>
                    <el-link :underline="false" href="/register">免费注册</el-link>
                </span>
            </div>
            <div class="header_top_right">
                <span>关注准买</span>
                <span><i>热线服务：</i>400-998-3356</span>
                <span><el-link :underline="false"><i class="iconfont icon-shoucang1"></i>收藏我们</el-link></span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'headerTop'
    }
</script>
<style lang="less" type="text/less" scoped>
    .header_top{
        width: 100%;
        height: 4vh;
        background-color: #f3f3f3;
        font-size: 0.14rem;
        color: #999;
        .w1200{
            height: 100%;
            overflow: hidden;
            justify-content: space-between;
            align-items: center;
            span{
                display: inline-block;
                vertical-align: middle;
                line-height: 0.36rem;
            }
            .header_top_left{
                span{
                    margin-right: 0.4rem;
                    .login{
                        margin-right: 0.2rem;
                    }
                }
            }
            .header_top_right{
                span{
                    margin-left: 0.4rem;
                }
            }
        }
    }
</style>