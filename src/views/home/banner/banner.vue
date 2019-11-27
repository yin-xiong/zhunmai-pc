<template>
    <div class="banner">
        <el-carousel :interval="5000" arrow="hover" v-if="bannerList.length > 0" :initial-index="0">
            <el-carousel-item
                v-for="(item,index) in bannerList"
                :key="index"
            >
                <el-image :src="item.url" fit="cover"></el-image>
            </el-carousel-item>
        </el-carousel>

        <div class="w1200 trading">
            <div class="fr overflow">
                <el-image :src="tradImg" fit="cover"></el-image>
                <div class="tradingInfo">

                    <div class="tradingInfoButton flex" v-if="flag">
                        <el-button type="info" round @click="login">登录</el-button>
                        <el-button round @click="register">注册</el-button>
                    </div>
                    <div class="tradingInfoButton flex" style="justify-content: flex-start" v-if="!flag">
                        <el-image :src="userImg"></el-image>{{uname}}, 欢迎您
                    </div>
                    <div class="websiteInfo">
                        <h2><router-link to="/notice">网站公告</router-link></h2>
                        <roll></roll>
                    </div>
                </div>
                <div class="tradingOwn">
                    <h2><i>自行交易</i>交易费低至2%</h2>

                    <el-button v-if="flag" round>未登录，前往登录</el-button>
                    <el-button v-if="!flag" round>前往个人中心发布</el-button>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import roll from '../../../components/rolling'
    export default {
        name:"banner",
        components:{
            roll
        },
        data(){
            return{
                bannerList:[
                    {url:require('../../../assets/image/banner/banner1.jpg')},
                    {url:require('../../../assets/image/banner/banner2.jpg')},
                    {url:require('../../../assets/image/banner/banner1.jpg')},
                    {url:require('../../../assets/image/banner/banner2.jpg')}
                ],
                tradImg:require("@/assets/image/icon/trad.png"), //交易保证的顶部图片

                flag:true,
                uname:'xxxxx',
                userImg:require('@/assets/image/icon/user.png'),
            }
        },
        methods:{
            // 跳往登录
            login(){
                this.$router.push({path:'/login'})
            },
            // 跳往注册
            register(){
                this.$router.push({path:'/register'})
            },

        },
        mounted(){
            let phone = sessionStorage.getItem('phone')
            if(phone){
                this.flag = false
                this.uname = phone
            }

        },


    }
</script>
<style lang="less" type="text/less">
    .banner{
        position: relative;
        width: 100%;
        height: 4.5rem;
        overflow: hidden;
        box-sizing: border-box;
        .el-carousel{
            width: 100%;
            height: 100%;
            .el-carousel__container{
                width: 100%;
                height: 100%;
                .el-image{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .trading{
            position: absolute;
            height: 80%;
            overflow: hidden;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin:auto;
            box-sizing: border-box;
            z-index: 999;
            >div{
                width: 2.4rem;
                height: 100%;
                background-color: #fff;
                .tradingInfo{
                    box-sizing: border-box;
                    padding: 0 0.2rem .1rem .2rem;
                    border-bottom: 1px solid #E0E0E0;
                    .tradingInfoButton{
                        height: .4rem;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: nowrap;
                        font-size: 0.12rem;
                        img{
                            max-width: .4rem;
                            padding-right: .1rem;
                        }
                        .el-button{
                            height: 0.26rem;
                            line-height: 0.26rem;
                            width: 48%;
                            font-size: 0.12rem;
                            padding: 0;
                        }
                    }
                    .websiteInfo{
                        h2{
                            font-size: 0.16rem;
                            margin-top: .1rem;
                        }

                    }

                }
                .tradingOwn{
                    box-sizing: border-box;
                    margin: 0.1rem .2rem;
                    h2{
                        font-size: 0.12rem;
                        color: #999;
                        i{
                            font-size: 0.16rem;
                            margin-right: 0.05rem;
                            color: #ED3048;
                        }

                    }
                    .el-button{
                        width: 100%;
                        height: .26rem;
                        background-color: #ED3048;
                        color: #fff;
                        padding: 0;
                        font-size: 0.12rem;
                        margin-top: .02rem;
                    }
                }
            }
        }
    }

</style>
