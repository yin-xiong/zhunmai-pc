<template>
    <div class="user">
        <el-container>
            <el-header>
                <div class="w1200 flex">
                    <div class="nav-logo">
                        <router-link to="/">
                            <el-image :src="src"></el-image>
                        </router-link>
                    </div>
                    <div>
<!--                        <el-badge :value="12" class="item">-->
<!--                            <i class="el-icon-chat-dot-round"></i>-->
<!--                        </el-badge>-->
                        <el-dropdown>
                            <span class="el-dropdown-link">admin<i class="el-icon-arrow-down el-icon--right"></i></span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </el-header>
            <el-main>
                <div class="main-left"><side></side></div>
                <div class="main-right">
                    <router-view></router-view>
                </div>
            </el-main>
            <el-footer class="flex">
                <div class="foot-left"></div>
                <div class="foot-right tac">
                    Copyright © 四川秦虎科技有限公司 | 咨询电话：
                    <i>028-86513145</i>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
    import side from './components/side'

    export default {
        name: "user",
        data(){
            return{
                src:require('@/assets/image/icon/logo.png'), // logo图片

            }
        },
        components: {
            side
        },

    };
</script>
<style type="text/css" scoped>
    .user,
    .user >>> .el-container {
        height: 100%;
        position: relative;
    }

    .user >>> .el-header {
        height: .8rem !important;
        background-color: #fff;
        margin-bottom: .2rem;
    }
    .user >>> .el-header .flex{
        height: 100%;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
    }
    .user >>> .el-header .flex .el-badge{
        margin-right: 0.8rem;
    }
    .user >>> .el-header .flex .el-badge i{
        font-size: .24rem;
    }
    .user >>> .el-header .flex .el-badge,
    .user >>> .el-header .flex .el-dropdown{
        cursor: pointer;
    }

    .user >>> .el-container .el-main {
        padding: 0;
    }

    .user >>> .el-container .el-main .main-left {
        float: left;
        height: 100%;
        width: 15%;
        min-width: 2.3rem;
        background-color: #fff;
    }

    .user >>> .el-container .el-main .main-right {
        float: left;
        height: 100%;
        width: 78%;
        margin-left: .2rem;
        background-color: #fff;
        box-sizing: border-box;
        border-bottom: .2rem solid #f4f7f9;
        overflow-y: scroll;
    }

    .user >>> .el-footer {
        padding: 0;
        height: .8rem !important;
        width: 100%;
        background-color: #C7CDD7;
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: center;
    }

    .user >>> .el-footer > div.foot-left {
        width: 15%;
        min-width: 2.3rem;
        height: 100%;
        background-color: #fff;
    }

    .user >>> .el-footer > div.foot-right {
        width: 78%;
        height: 100%;
        color: #6E768E;
        font-size: .18rem;
        line-height: .8rem;
    }
    .user >>> .el-footer > div.foot-right i{
        color: #E94A49;
    }

</style>