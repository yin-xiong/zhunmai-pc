<template>
    <div class="login-warp">
        <headerTop></headerTop>
        <div class="login-warp-main">
            <div class="login-warp-main-head">
                <div class="w1200 flex">
                    <div class="nav-logo">
                        <router-link to="/">
                            <el-image :src="src"></el-image>
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shouye1"></use>
                            </svg>
                            返回准买首页
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="login-warp-main-cont">
                <findpwd></findpwd>
                <h2 class="tac">四川秦虎科技有限公司 版权所有 蜀ICP备16020933号 http://www.zhunmai.cn</h2>
            </div>

        </div>
    </div>
</template>
<script>
    import headerTop from '@/components/top'
    import findpwd from './components/findpwd'

    export default {
        name:'loginWarp',
        data(){
            return{
                src:require('@/assets/image/icon/logo.png'), // logo图片
            }
        },
        components:{
            headerTop,findpwd
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .login-warp{
        width: 100%;
        height: 100%;
        overflow: hidden;
        .login-warp-main{
            .login-warp-main-head{
                height: 11vh;
                background-color: #fff;
                .flex{
                    height: 100%;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: nowrap;
                }
            }
            .login-warp-main-cont{
                position: relative;
                height: 85vh;
                background-image: url("../../assets/image/icon/login_bg.jpg");
                background-repeat: no-repeat;
                -webkit-background-size: cover;
                background-size: cover;
                overflow: hidden;
                >h2{
                    width: 100%;
                    margin-top: 0.5rem;
                    font-size: 0.16rem;
                    color: #999;
                    font-weight: normal;
                }
            }
        }
    }
</style>