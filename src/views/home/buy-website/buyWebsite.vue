<template>
    <div class="buyWebsite">
        <div class="flex">
            <div class="website-left">
                <div class="overflow websiteTitle">
                    <h2 class="fl">
                        <i><img src="../../../assets/image/icon/h1.png" alt=""></i>
                        PURCHASE WEBSITE
                    </h2>
                    <router-link class="fr" to="">
                        更多<i class="iconfont icon-you"></i>
                    </router-link>
                </div>
                <div class="lists">
                    <ul>

                        <li>
                            <div v-for="(item,index) in websitecategory" v-if="index < 7">
                                <el-link :underline="false">{{item.title}}</el-link>
                            </div>
                        </li>
                        <li>
                            <div v-for="(item,index) in websitecategory" v-if="index >= 7">
                                <el-link :underline="false">{{item.title}}</el-link>
                            </div>
                        </li>

                        <li>
                            <div><el-link :underline="false">3万以下</el-link></div>
                            <div><el-link :underline="false">3-5万</el-link></div>
                            <div><el-link :underline="false">5-7万</el-link></div>
                            <div><el-link :underline="false">7-9万</el-link></div>
                            <div><el-link :underline="false">9-12万</el-link></div>
                            <div><el-link :underline="false">12-16万</el-link></div>
                            <div><el-link :underline="false">16万以上</el-link></div>
                        </li>
                        <li>
                            <div><el-link :underline="false">BDR0</el-link></div>
                            <div><el-link :underline="false">BDR0</el-link></div>
                            <div><el-link :underline="false">BDR0</el-link></div>
                            <div><el-link :underline="false">BDR0</el-link></div>
                            <div><el-link :underline="false">BDR0</el-link></div>
                            <div><el-link :underline="false">BDR0</el-link></div>
                            <div><el-link :underline="false">BDR0</el-link></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="website-right">
                <div class="overflow websiteTitle">
                    <h2 class="fl">
                        <i><img src="../../../assets/image/icon/h2.png" alt=""></i>OFFICIAL SALE
                    </h2>
                </div>
                <div class="website-right-info">
                    <h3>服务热线：028-8156 3149</h3>
                    <p>客服时间：周一至周五 9:00-19:00</p>
                    <div class="website-right-info-broker flex">
                        <div class="website-right-info-broker-left">
                            <h3>王静</h3>
                            <p>商务总监</p>
                        </div>
                        <div class="website-right-info-broker-right">
                            <el-link :underline="false">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-zu"></use>
                                </svg>
                                <span>立即联系</span>
                            </el-link>

                            <el-link :underline="false">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-shouji-copy"></use>
                                </svg>
                                <i>18482269869</i>
                            </el-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'buyWebsite',
        props:{
            websitecategory:Array
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .buyWebsite{
        background-color: #fff;
        box-sizing: border-box;
        padding:.2rem .4rem;
        >div.flex{
            justify-content: space-between;
            align-items: flex-start;
            .website-left{
                width: 65%;
                overflow: hidden;
                .lists{
                    width: 100%;
                    margin-top: .3rem;
                    ul{
                        width: 100%;
                        li{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin: .2rem 0;
                            div{
                                display: inline-block;
                                width: 10%;
                                a{
                                    font-size: .16rem;
                                    white-space: nowrap;
                                }
                            }
                        }
                    }
                }
            }
            .website-right{
                width: 33%;
                box-sizing: border-box;
                padding-left: .4rem;
                .website-right-info{
                    margin-top: .3rem;
                    >h3{
                        font-size: .16rem;
                        color: #333;
                    }
                    >p{
                        font-size: .12rem;
                        color: #aaa;
                        margin: .06rem 0 .1rem 0;
                    }
                    .website-right-info-broker{
                        justify-content: space-around;
                        align-items: center;
                        background-color: #F5F5F7;
                        color: #333;
                        height: 1.2rem;
                        font-size: .14rem;
                        box-sizing: border-box;
                        padding: .3rem;
                        .website-right-info-broker-left{
                            width: 40%;
                            font-size: .16rem;
                            color: #545779;
                            border-right: 1px solid #E0E0E0;
                            height: .7rem;
                            h3{
                                font-size: .24rem;
                                color: #333;
                            }
                        }
                        .website-right-info-broker-right{
                            a{
                                display: block;
                                line-height: .3rem;
                                svg.icon{
                                    width: .2rem;
                                    margin-right: 6px;
                                    font-size: .18rem;
                                }
                                span{
                                    display: inline-block;
                                    vertical-align: middle;
                                    width: .64rem;
                                    height: .2rem;
                                    line-height: .2rem;
                                    text-align: center;
                                    overflow: hidden;
                                    border: 1px solid #FF989C;
                                    color: #FD4249;
                                    font-size: .12rem;
                                }
                            }
                        }
                    }
                }
            }

        }
    }


</style>