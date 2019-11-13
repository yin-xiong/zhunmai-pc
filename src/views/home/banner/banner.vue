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
                    <div class="tradingInfoButton flex">
                        <el-button type="info" round>登录</el-button>
                        <el-button round>注册</el-button>
                    </div>
                    <div class="websiteInfo">
                        <h2>网站公告</h2>
                        <div class="overflow">
                            <el-carousel
                                    height="200px"
                                    :interval="3000"
                                    arrow="never"
                                    indicator-position="none"
                                    direction="vertical"
                                    :initial-index="0"
                            >
                                <el-carousel-item
                                        v-for="item in 3"
                                        :key="item"
                                >
                                    <div>
                                        <el-link href="/">致准买网所有的买家11111111</el-link>
                                        <el-link href="/">致准买网所有的买家222222222</el-link>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"banner",
        data(){
            return{
                bannerList:[
                    {url:require('../../../assets/image/banner/banner1.jpg')},
                    {url:require('../../../assets/image/banner/banner2.jpg')},
                    {url:require('../../../assets/image/banner/banner1.jpg')},
                    {url:require('../../../assets/image/banner/banner2.jpg')}
                ],
                tradImg:require("@/assets/image/icon/trad.png"), //交易保证的顶部图片
            }
        }
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
                    padding: .1rem 0.2rem;
                    border-bottom: 1px solid #E0E0E0;
                    .tradingInfoButton{
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: nowrap;
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
                        div{
                            width: 100%;
                            height: 200px;
                        }
                    }
                }
            }
        }
    }
</style>
