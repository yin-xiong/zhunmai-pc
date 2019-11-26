<template>
    <div class="orderInfo">
        <h2><i v-if="flag">订单已生成</i>订单号：{{orderNum}}</h2>
        <div class="flex order-info">
            <div class="order-info-left">
                <div class="flex">
                    <div class="order-details flex">
                        <div class="order-details-img"><img :src="srcOrder" alt=""></div>
                        <div class="order-details-info">
                            <h2>爱站权1 站长权1 百度秒收 微信迷其资讯网站出售 </h2>
                            <div class="goods-list-ext-center">
                                <span v-for="item in websiteStyle">{{item}}</span>
                            </div>
                            <div class="flex order-details-bottom">
                                <div class="flex websItemInfo">
                                    <div>
                                        <p>爱站权重：</p>
                                        <p><img src="../../../assets/image/icon/icon_baidu.png" alt="">5</p>
                                    </div>
                                    <div>
                                        <p>站长权重：</p>
                                        <p><img src="../../../assets/image/icon/icon_pr_zhi.png" alt="">7</p>
                                    </div>
                                    <div>
                                        <p>站长权重：</p>
                                        <p><img src="../../../assets/image/icon/icon_pr_zhi.png" alt=""></p>
                                    </div>
                                    <div>
                                        <p>日IP数：</p>
                                        <p>11</p>
                                    </div>
                                    <div>
                                        <p>百度收录：</p>
                                        <p>11</p>
                                    </div>
                                    <div>
                                        <p>网站收入：</p>
                                        <p>11</p>
                                    </div>
                                </div>
                                <div class="order-details-bottom-html">
                                    <p>数量：<i>1</i></p>
                                    <p>单价：<i>￥1</i></p>
                                    <p>服务费：<i>￥1</i></p>
                                    <p>优惠：<i>￥1</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order-price">
                        <h3><i>￥</i>5000.00</h3>
                        <p>已付:￥0.00</p>
                    </div>
                </div>
            </div>
            <div class="order-info-right">
                <h3><img :src="src" alt=""></h3>
                <h4>曾红玉</h4>
                <p><router-link to="">发起咨询</router-link></p>
                <p>客服时间：{{kefuTime}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'orderInfo',
        data(){
            return{
                flag:true,
                orderNum:"100342070131",
                srcOrder:require('@/assets/image/banner/hot1.jpg'),
                src:require('@/assets/image/icon/icon_agent_head.png'),
                websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                kefuTime:'09:00-19:00',
            }
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .orderInfo{
        h2{
            color: #333;
            font-weight: normal;
            line-height: .8rem;
            border-bottom: 1px solid #e0e0e0;
            box-sizing: border-box;
            padding: 0 .3rem;
            font-size: .2rem;
            i{
                color: #FF5D24;
                padding-right: .2rem;
            }
        }
        .order-info{
            height: 2rem;
            box-sizing: border-box;
            margin: 0.4rem .3rem;
            overflow: hidden;
            .order-info-left{
                width: 82.6%;
                height: 100%;
                box-sizing: border-box;
                padding: 0.2rem 0.14rem;
                background-color: #FFF7F4;
                .flex{
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: nowrap;
                    .order-details{
                        justify-content: flex-start;
                        align-items: flex-start;
                        .order-details-img{
                            max-width: 2rem;
                            margin-right: .1rem;
                            img{
                                width: 100%;
                            }
                        }
                        .order-details-info{
                            h2{
                                font-weight: bold;
                                font-size: .18rem;
                                line-height: 1.5;
                                padding: 0;
                                border-bottom: 0;
                            }
                            .goods-list-ext-center span{
                                padding: 4px 10px;
                                border-radius:4px;
                                font-size: 12px;
                            }
                            .goods-list-ext-center span:nth-child(1){
                                background:#DFF4FF;
                                border: 1px solid #91D2F4;
                                color: #0099E8;
                            }
                            .goods-list-ext-center span:nth-child(2){
                                margin: 0 10px;
                                background:#E4FAFA;
                                border: 1px solid #7CD4D9;
                                color: #00B6B5;
                            }
                            .goods-list-ext-center span:nth-child(3){
                                background:#FEF1ED;
                                border: 1px solid #FCA689;
                                color: #FF7A4E;
                            }
                            .order-details-bottom{
                                justify-content: space-between;
                                align-items: flex-start;
                                .websItemInfo{
                                    justify-content: flex-start;
                                    flex-wrap: wrap;
                                    width: 60%;
                                    >div{
                                        width: 30%;
                                        font-size: .14rem;
                                        color: #999;
                                        text-align: center;
                                        padding-top: 0.08rem;
                                        p{
                                            img{
                                                display: inline-block;
                                                vertical-align: top;
                                            }
                                        }
                                    }
                                }
                                .order-details-bottom-html{
                                    p{
                                        line-height: 1.75;
                                        font-size: .14rem;
                                        color: #999;
                                        i{
                                            color: #F23131;
                                        }
                                    }
                                }
                            }

                        }
                    }
                    .order-price{
                        text-align: right;
                        h3{
                            font-size: .18rem;
                            color: #FF6600;
                            i{
                                font-size: .14rem;
                            }
                        }
                        p{
                            font-size: .12rem;
                            color: #333;
                        }
                    }
                }
            }
            .order-info-right{
                width: 17.4%;
                height: 100%;
                background-color: #EDF0F2;
                text-align: center;
                overflow: hidden;
                h3{
                    height: .8rem;
                    margin: .16rem auto;
                    img{
                        height: 100%;
                    }
                }
                h4{
                    font-size: .2rem;
                    color: #333;
                    font-weight: normal;
                }
                p{
                    font-size: .12rem;
                    color: #999;
                    a{
                        display: block;
                        width:120px;
                        height:30px;
                        line-height: 30px;
                        background:rgba(233,74,73,1);
                        border-radius:15px;
                        margin: 0 auto;
                        font-size: .14rem;
                        color: #fff;
                        margin-bottom: 6px;
                    }
                }
            }
        }
    }
</style>