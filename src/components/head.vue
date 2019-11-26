<template>
    <div class="headCont">
        <div class="w1200 flex">
            <div class="nav-logo">
                <router-link to="/">
                    <el-image :src="src"></el-image>
                </router-link>
            </div>
            <div class="searchContent">
                <div class="searchToput">
                    <el-input placeholder="请输入搜索内容" v-model="searchCont" class="input-with-select" />
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </div>
                <div class="hot-search">
                    <span class="color448BCB">热门搜索：</span>
                    <i>电影</i>
                    <i>B2B</i>
                    <i>秒收</i>
                </div>
            </div>
            <div class="sellOut">
                <div class="">
                    <router-link class="sellOut-left" to="">
                        <i class="iconfont icon-chushou"></i>我要卖站
                    </router-link>
                    <router-link class="sellOut-right" to="">
                        <i class="iconfont icon-chushou"></i>我要出售
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'headCont',
        data(){
            return{
                src:require('@/assets/image/icon/logo.png'), // logo图片
                searchCont:'',// 搜索内容
            }
        }
    }
</script>
<style scoped>
    .searchToput >>>.el-input__inner,
    .searchToput >>>.el-button{
        border-radius: 0;
        border:2px solid #FF5D24;
    }
    .searchToput >>>.el-button{
        border:1px solid transparent;
        background-color: #FF5D24;
        color: #fff;
    }

</style>
<style lang="less" type="text/less" scoped>
    .headCont{
        height: 1.2rem;
        background-color: #fff;
        overflow: hidden;
        .flex{
            justify-content: space-between;
            margin-top: 0.3rem;
            .searchContent{
                width: 50%;
                .searchToput{
                    white-space: nowrap;
                    margin-bottom: 0.1rem;
                }
                .hot-search{
                    font-size: 0.12rem;
                    span{
                        color: #FF5D24;
                    }
                    i{
                        margin-left: 6px;
                    }
                }
            }
            .sellOut{
                width: 23%;
                height: 0.4rem;
                line-height: 0.4rem;
                overflow: hidden;
                div{
                    width: 100%;
                    height: 100%;
                    white-space: nowrap;
                    a{
                        display: inline-block;
                        width: 48%;
                        color: #fff;
                        text-align: center;
                        white-space: nowrap;
                        font-size: 0.14rem;
                        position: relative;
                        overflow: hidden;
                        i{
                            margin-right: 0.03rem;
                        }
                    }
                    .sellOut-left{
                        background-color: #414082;
                        border-right: 1px solid #fff;
                        border-top-right-radius: 5px;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                        &:after{
                            content: '';
                            position: absolute;
                            right: -26px;
                            top: 15px;
                            width: 0;
                            height: 0;
                            border-right: 30px solid #fff;
                            border-left: 30px solid #fff;
                            border-bottom: 30px solid #fff;
                            transform: rotate(135deg);
                        }
                    }
                    .sellOut-right{
                        background-color: #FD4249;
                        border-left: 1px solid #fff;
                        border-top-right-radius: 5px;
                        border-bottom-left-radius: 5px;
                        border-bottom-right-radius: 5px;
                        &:after{
                            content: '';
                            position: absolute;
                            left: -26px;
                            top: -5px;
                            width: 0;
                            height: 0;
                            border-right: 30px solid #fff;
                            border-left: 30px solid #fff;
                            border-top: 30px solid #fff;
                            transform: rotate(135deg);
                        }
                    }
                }
            }
        }
    }
</style>
