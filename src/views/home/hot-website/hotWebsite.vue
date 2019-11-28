<template>
    <div class="hotWebsite">
        <div class="flex hotWebsite-info">
            <div class="hotWebsite-left">
                <div class="overflow websiteTitle">
                    <h2 class="fl"><i><img src="../../../assets/image/icon/h3.png" alt=""></i>HOT SITES</h2>
                </div>
                <div class="shuffling h400">
                    <el-carousel v-if="recommendwebsite.length > 0" :interval="30000" arrow="never" indicator-position="outside">
                        <el-carousel-item v-for="(item,index) in recommendwebsite" :key="item.index">
                            <div>
                                <h2 class="one-txt-cut">
                                    <span>垂直行业</span>新闻的资讯站 新闻的资讯站新闻的资讯站爱站…
                                </h2>
                                <el-image :src="item.picture||src"></el-image>
                                <div class="flex checkoutDetails">
                                    <span><i>￥</i>5000.00</span>
                                    <el-link :underline="false">查看详情</el-link>
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                    <div v-else class="tac">
                        <el-image :src="nodata"></el-image>
                        <p>暂无数据</p>
                    </div>
                </div>
            </div>
            <div class="hotWebsite-right">
                <div class="overflow websiteTitle">
                    <h2 class="fl"><i><img src="../../../assets/image/icon/h4.png" alt=""></i>RECOMMENDATION</h2>
                </div>
                <div class="h400 hotWebsite-right-list">
                    <div class="flex">
                        <div class="hot-list" v-for="(item,index) in hotwebsite">
                            <div class="inside-div">
                                <h3 class="one-txt-cut">{{item.title}}</h3>
                                <el-image :src="item.picture||src"></el-image>
                                <p class="tac"><i>￥</i>{{item.price}}</p>
                            </div>
                            <div class="outside-div">
<!--                                <h4>[ 生活服务 ]</h4>-->
                                <p><i>￥</i>{{item.price}}</p>
                                <el-link :underline="false">查看详情</el-link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"hotWebsite",
        data(){
            return{
                src:require('../../../assets/image/icon/noupload.jpg'),
                nodata:require('../../../assets/image/icon/nodata.png'),
            }
        },
        props:{
            recommendwebsite:Array,
            hotwebsite:Array,
        }
    }
</script>
<style type="text/css" scoped>
    .shuffling >>> .el-carousel__indicators--horizontal .el-carousel__indicator .el-carousel__button{
        background-color: #999;
    }
</style>
<style type="text/less" lang="less" scoped>
    .hotWebsite{
        .hotWebsite-info{
            justify-content: space-between;
            flex-wrap: nowrap;
            .websiteTitle{
                box-sizing: border-box;
                height: .48rem;
                overflow: hidden;
                border-bottom: 2px solid #F4F7F9;
                padding:0 .2rem;
            }
            .hotWebsite-left{
                width: 41%;
                background-color: #fff;
                .shuffling{
                    box-sizing: border-box;
                    padding: .3rem .7rem 0 .7rem;
                    overflow: hidden;
                    h2{
                        font-size: .24rem;
                        color: #333;
                        font-weight: normal;
                        margin-bottom: .18rem;
                        span{
                            position: relative;
                            top: -2px;
                            display: inline-block;
                            vertical-align: middle;
                            width: .9rem;
                            line-height: .3rem;
                            text-align: center;
                            color: #0099E8;
                            margin-right: .1rem;
                            font-size: .18rem;
                            border: 1px solid #91D2F4;
                            background-color: #DFF4FF;
                        }
                    }
                    .el-image{max-width: 100%;}
                    .checkoutDetails{
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: nowrap;
                        >span{
                            color: #FF5D24;
                            font-size: .24rem;
                            i{
                                font-size: .14rem;
                                margin-right: 4px;
                            }
                        }
                        .el-link{
                            border: 1px solid #E0E0E0;
                            color: #999;
                            font-size: .14rem;
                            padding: .06rem .12rem;
                            transition: all .4s;
                            &:hover{
                                background-color: #91D2F4;
                                color: #fff;
                            }
                        }
                    }
                }
            }
            .hotWebsite-right{
                width: 58%;
                background-color: #fff;
                .websiteTitle{
                    margin-bottom: 0;
                }
                .hotWebsite-right-list{
                    width: 100%;
                    height: 100%;
                    .flex{
                        justify-content: flex-start;
                        flex-wrap: wrap;
                        .hot-list{
                            position: relative;
                            width: 33.3%;
                            height: 2rem;
                            overflow: hidden;
                            box-sizing: border-box;
                            .inside-div{
                                width: 100%;
                                height: 100%;
                                overflow: hidden;
                                box-sizing: border-box;
                                padding: .14rem;
                                color: #333;
                                font-size: .14rem;
                                transition: all 1s;
                                .el-image{max-width: 100%;}
                                h3{
                                    font-weight: normal;
                                    font-size: .14rem;
                                    margin-bottom: .1rem;
                                    i{
                                        position: relative;
                                        top: -1px;
                                        color: #0099E8;
                                        border: 1px solid #91D2F4;
                                        background-color: #DFF4FF;
                                        font-size: .12rem;
                                        border-radius:4px;
                                        margin-right: 4px;
                                        padding: 1px 2px;
                                    }
                                }
                                p{
                                    font-size: .2rem;
                                    color: #FF5D24;
                                    i{
                                        margin-right: 6px;
                                        font-size: .16rem;
                                    }
                                }
                            }
                            .outside-div{
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 100%;
                                opacity: 0;
                                box-sizing: border-box;
                                padding: .4rem .16rem;
                                text-align: center;
                                color: #fff;
                                font-size: .14rem;
                                background-color: #FF5D24;
                                transition: all 1s;
                                h4{
                                    font-weight: normal;
                                }
                                p{
                                    margin: .1rem 0;
                                    font-size: .2rem;
                                    i{
                                        font-size: .14rem;
                                    }
                                }
                                .el-link{
                                    border: 1px solid #fff;
                                    padding: 2px 4px;
                                    color: #fff;
                                    :hover{
                                        color: #fff;
                                        text-underline: none;
                                    }
                                }
                            }
                            &:hover .outside-div{
                                opacity: 1;
                                background-color: rgba(255, 93, 36, 0.61);
                            }
                            &:hover .inside-div{
                                filter: blur(2px);
                            }
                        }
                    }
                }
            }
            .h400{
                height: 4rem;
            }
        }
    }
</style>