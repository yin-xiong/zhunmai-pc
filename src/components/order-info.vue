<template>
    <div class="orderInfo">
        <h2>订单状态：<i>{{orderNum}}</i></h2>
        <div class="order-details-info-cont">
            <div class="order-details-info-cont-desc">
                <h3>订单信息</h3>
                <p class="order-details-info-cont-money">支付金额：<i>￥5100.00</i></p>
                <p>
                    <span>订单号：1244715741</span>
                    <span>下单时间：2019-2-21 11:49</span>
                    <span>订单类型：网站交易</span>
                </p>
            </div>
            <div class="flex order-details-info-ext">
                <div class="order-details-info-ext-left">
                    <div class="order-details-info-ext-left-img">
                        <img src="@/assets/image/banner/g1.png" alt="">
                    </div>
                    <div class="order-details-info-ext-right">
                        <h3>爱站权1 站长权1 百度秒收 微信迷其…</h3>
                        <div class="goods-list-ext-center">
                            <span v-for="item in websiteStyle">{{item}}</span>
                        </div>
                        <div class="order-details-info-ext-right-p">
                            <p>
                                <span>爱站权重：BDR4</span>
                                <span>站长权重：1 </span>
                                <span>日IP数：500</span>
                            </p>
                            <p>百度收录：100万</p>
                            <p>网站收入：1000-5000</p>
                            <p>商品编号：AF03ACYY30271101172HY640</p>
                        </div>
                    </div>
                </div>
                <div>
                    <el-link>查看商品详情</el-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'orderInfo',
        data(){
            return{
                orderNum:"待审核",
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
        border: 1px solid #e0e0e0;
        h2{
            color: #333;
            font-weight: normal;
            line-height: .6rem;
            background: #FFF7F4;
            box-sizing: border-box;
            padding: 0 .2rem;
            font-size: .16rem;
            i{
                color: #FD4249;
                padding-right: .1rem;
            }
        }
        .order-details-info-cont{
            background-color: #fff;
            box-sizing: border-box;
            .order-details-info-cont-desc{
                padding: 0 .2rem;
                h3{
                    font-size: .16rem;
                    padding: 0.24rem 0;
                }
                p{
                    color: #999;
                    margin-bottom: .16rem;
                }
                .order-details-info-cont-money{
                    font-size: .14rem;
                    color: #333;
                    i{
                        font-size: .18rem;
                        color: #FF5D24;
                        font-weight: bold;
                    }
                }
            }

            .order-details-info-ext{
                justify-content: space-between;
                align-items: flex-start;
                border-top: 1px solid #e0e0e0;
                box-sizing: border-box;
                padding: .2rem;
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
                .order-details-info-ext-left{
                    >div{
                        display: inline-block;
                        vertical-align: top;
                    }
                    .order-details-info-ext-left-img{
                        margin-right: 0.2rem;
                        max-width: 2.2rem;
                    }
                    .order-details-info-ext-right{
                        h3{
                            font-size: 0.14rem;
                            margin-bottom: 0.06rem;
                        }
                        .order-details-info-ext-right-p{
                            font-size: 0.12rem;
                            color: #999;
                            p{
                                margin: 0.06rem 0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>