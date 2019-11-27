<template>
    <div class="header_top">
        <div class="w1200">
            <div class="header_top_left fl">
                <span>HI，欢迎来到准买网！</span>
                <span v-if="flag" class="login-warp">
                    <el-link class="login" type="danger" :underline="false" href="/login">请登录</el-link>
                    <el-link :underline="false" href="/register">免费注册</el-link>
                </span>
                <div v-if="!flag" class="userInfoMsg">
                    <el-link class="userInfo-name" type="danger" :underline="false" href="/accountSet">
                        {{username}}
                        <i class="el-icon-arrow-down"></i>

                    </el-link>
<!--                    <el-link class="userInfo-name" :underline="false" href="/accountSet">消息(0)</el-link>-->
                    <div class="user-msg">
                        <div class="flex">
                            <el-image :src="userImg"></el-image>
                            <div>
                                <p>
                                    <span>个人信息</span>
                                    <span @click="logout">退出</span>
                                </p>
                                <p>
                                    账户余额：
                                    <i>￥0.00</i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header_top_right fr">
                <span>关注准买</span>
                <span><i>热线服务：</i>400-998-3356</span>
                <span><el-link :underline="false"><i class="iconfont icon-shoucang1"></i>收藏我们</el-link></span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'headerTop',
        data(){
            return{
                flag:true,
                userImg:require('@/assets/image/icon/user.png'),
                username:'11111'
            }
        },
        methods:{
            logout(){
                this.$confirm('确认退出？')
                    .then(() => {
                        sessionStorage.clear()
                        this.flag = true
                        this.$router.go(0)
                    })
            }
        },
        mounted(){
            let phone = sessionStorage.getItem('phone')
            if(phone){
                this.flag = false
                this.username = phone
            }

        }
    }
</script>
<style lang="less" type="text/less" scoped>
    .header_top{
        width: 100%;
        height: .36rem;
        background-color: #f3f3f3;
        font-size: 0.14rem;
        color: #999;
        position: relative;
        z-index: 9;
        .w1200{
            height: 100%;
            span.login-warp{
                display: inline-block;
            }
            .header_top_left{
                height: .36rem;
                line-height: 0.36rem;
                span{
                    margin-right: 0.4rem;
                    .login{
                        margin-right: 0.2rem;
                    }
                }
                .userInfoMsg{
                    position: relative;
                    display: inline-block;
                    vertical-align: top;
                    i{
                        transition: all .4s;
                    }
                    a:hover i{
                        transform: rotate(180deg);
                    }
                    .user-msg{
                        opacity: 0;
                        display: none;
                        background-color: #fff;
                        width: 2.4rem;
                        height: 1.2rem;
                        left: 0;
                        top: 0.35rem;
                        box-shadow:0px 3px 13px 0px rgba(87,85,85,0.42);
                        border-radius:4px;
                        .flex{
                            height: 100%;
                            box-sizing: border-box;
                            align-items: center;
                            line-height: 1.75;
                            div{
                                margin: .1rem;
                                img{
                                    max-width: .6rem;
                                }
                                p{
                                    margin: .1rem 0;
                                    font-size: .12rem;
                                    span{
                                        cursor: pointer;
                                        color: #333;
                                        padding:0 0.1rem;
                                        margin: 0;
                                        border-left: 1px solid #333;
                                        transition: all .4s;
                                        &:first-child{
                                            padding-left: 0;
                                            border-left: 0;
                                        }
                                        &:hover{
                                            color: #FD4249;
                                        }
                                    }
                                    i{
                                        color: #FD4249;
                                    }
                                }

                            }

                        }
                    }
                    &:hover .user-msg{
                        display: block;
                        opacity: 1;
                    }
                }
            }
            .header_top_right{
                height: .36rem;
                line-height: 0.36rem;
                span{
                    margin-left: 0.4rem;
                }
            }
        }
    }
</style>