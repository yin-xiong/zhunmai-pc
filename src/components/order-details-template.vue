<template>
<!--  订单详情模板文件  -->
    <div class="order-details">
        <div class="order-details-info">
            <h2><img :src="orderSrc" alt="">订单详情</h2>
            <div class="order-details-info-head">
                <div class="order-details-info-head-state">
                    订单状态：<i>交易中</i>支付完成，您可以在此页面联系卖家交接，也可以自助联系客服
                    <button>联系专属客服</button>
                </div>
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
                    <div class="order-details-info-foot">
                        <el-steps :active="isActive" align-center>
                            <el-step v-for="item in steps" :title="item"></el-step>
                        </el-steps>
                    </div>
                </div>
            </div>
            <div class="order-details-process">
                <h3>订单进程</h3>
                <div class="order-details-process-info">
                    <div class="order-details-process-item flex">
                        <i></i>
                        <div class="order-details-process-item-icon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-liuchengyuanquan"></use>
                            </svg>
                            <span>购买</span>
                        </div>
                        <div class="order-details-process-item-cont">
                            <h4>您的网站订单已经成功支付</h4>
                            <div class="border">
                                支付金额：
                                <span>￥5000.00</span>
                            </div>
                            <p>2019-2-21 11:49:34</p>
                        </div>
                    </div>
                    <div class="order-details-process-item flex">
                        <i></i>
                        <div class="order-details-process-item-icon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-liuchengyuanquan"></use>
                            </svg>
                            <span>合同</span>
                        </div>
                        <div class="order-details-process-item-cont">
                            <h4>准买网将为您拟定交易合同，交易合同可以有效保障双方权益，减少争议纠纷。 若对协议内容有疑问，请您及时与客服沟通。</h4>
                            <div class="order-details-process-item-cont-btn"><button>查看合同请联系客服</button></div>
                            <p>2019-2-21 11:49:34</p>
                        </div>
                    </div>
                    <div class="order-details-process-item flex">
                        <i v-if="!flagComplete"></i>
                        <div class="order-details-process-item-icon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-liuchengyuanquan"></use>
                            </svg>
                            <span>交接</span>
                        </div>
                        <div class="order-details-process-item-cont" style="border-bottom: 0;">
                            <h4>卖家将与您进行交接工作，为保障服务效果，请您保持良好的沟通，跟进交接进度</h4>
                            <div class="order-details-process-item-msg">
                                <div class="order-details-process-item-msg-cont">
                                    我已付款，请准备与我交接
                                </div>
                                <div class="order-details-process-item-msg-put" v-if="flagComplete">
                                    <el-input type="textarea" placeholder="提醒卖家，跟进交接进度"></el-input>
                                    <button>发送</button>
                                </div>
                            </div>
                            <div class="complete" @click="complete" v-if="flagComplete">
                                <button class="complete-btn">交易已完成</button>
                                <span>若已交接完成，点击此按钮结束交易</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="!flagComplete" class="order-details-process-item flex">
                        <div class="order-details-process-item-icon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-liuchengyuanquan"></use>
                            </svg>
                            <span>完成</span>
                        </div>
                        <div class="order-details-process-item-cont">
                            <h4>网站交接工作已完成，谢谢您对准买网的支持</h4>
                            <p>2019-2-21 11:49:34</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'orderDetailsTemplate',
        data(){
            return{
                isActive:4,
                orderSrc:require('@/assets/image/icon/icon-order.png'),
                websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                steps:['拍下商品',"确认订单","支付金额","联系卖家交易","交易成功"],
                flagComplete:true,
            }
        },
        methods:{
            complete(){
                this.flagComplete = false
            }
        }
    }
</script>
<style scoped>
    .order-details-info-foot >>> .el-step .el-step__title{
        font-weight: normal;
        color: #999;
        font-size: .14rem;
    }
    .order-details-info-foot >>> .el-step__head.is-finish{
        color: #fff;
        border-color: #FF5D24;
    }
    .order-details-info-foot >>> .el-step__head.is-finish .el-step__icon{
        background-color: #FF5D24;
    }
    .order-details-info-foot >>> .el-step__head .el-step__icon,
    .order-details-info-foot >>> .el-step__head.is-process .el-step__icon{
        border: none;
        background-color: #e0e0e0;
        color: #fff;
        width: 0.36rem;
        height: 0.36rem;
        font-size: .2rem;
    }
    .order-details-info-foot >>> .el-step__icon-inner{
        font-weight: normal;
    }
    .order-details-info-foot >>> .el-step.is-horizontal .el-step__line{
        top: 18px;
    }
    .order-details-process-item-msg-put >>> .el-textarea__inner{
        border: 0;
    }
</style>
<style type="text/less" lang="less" scoped>
    .order-details{
        .order-details-info{
            padding-bottom: 2rem;
            h2{
                font-weight: normal;
                font-size: .24rem;
                margin: 0.4rem 0;
                img{
                    display: inline-block;
                    vertical-align: unset;
                    padding-right: 0.1rem;
                    position: relative;
                    top: 2px;
                }
            }
            .order-details-info-head{
                .order-details-info-head-state{
                    width: 100%;
                    height: .6rem;
                    line-height: .6rem;
                    background: #fff5f6;
                    white-space: nowrap;
                    font-size: .14rem;
                    color: #333;
                    box-sizing: border-box;
                    padding-left: .2rem;
                    i{
                        color: #FD4249;
                        padding:0 .3rem 0 .1rem;
                    }
                    button{
                        background-color: #FD4249;
                        color: #fff;
                        border-radius:4px;
                        padding: 6px 14px;
                        margin-left: 1rem;
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
                    .order-details-info-foot{
                        padding: 0.5rem 0;
                        background-color: #FFF7F4;
                    }
                }
            }
            .order-details-process{
                background-color: #fff;
                margin-top: 0.2rem;
                padding-bottom: 0.4rem;
                h3{
                    font-size: 0.16rem;
                    padding-left: 0.2rem;
                    line-height: 0.5rem;
                    border-bottom: 1px solid #e0e0e0;
                }
                .order-details-process-info{
                    box-sizing: border-box;
                    padding: 0 0.9rem;
                    overflow: hidden;
                    margin-top: 0.4rem;
                    .order-details-process-item{
                        position: relative;
                        justify-content: flex-start;
                        align-items: flex-start;
                        flex-wrap: nowrap;
                        padding-bottom: 0.2rem;
                        >i{
                            position: absolute;
                            left: 7px;
                            top: 4px;
                            width: 2px;
                            height: 100%;
                            z-index: 1;
                            background-color: #FFEAE3;
                        }
                        .order-details-process-item-icon{
                            svg{
                                font-size: 0.16rem;
                                position: relative;
                                z-index: 9;
                            }
                            span{
                                padding: 0 0.2rem;
                                font-size: 0.16rem;
                                color: #666;
                                font-weight: bold;
                            }
                        }
                        .order-details-process-item-cont{
                            width: 90%;
                            font-size: 0.12rem;
                            border-bottom: 1px solid #e0e0e0;
                            h4{
                                width: 50%;
                                line-height: 1.75;
                                font-weight: normal;
                                font-size: 0.14rem;
                                color: #999;
                            }
                            .border{
                                border: 1px solid #FFEAE3;
                                color: #999;
                                box-sizing: border-box;
                                line-height: .3rem;
                                padding-left: 0.1rem;
                                margin: 0.1rem 0;
                                span{
                                    color: #FF5D24;
                                    font-weight: bold;
                                }
                            }
                            p{
                                color: #ccc;
                                padding-bottom: 0.2rem;
                            }
                            .order-details-process-item-cont-btn{
                                button{
                                    background:#FF5D24;
                                    border-radius:4px;
                                    color: #fff;
                                    padding: 10px 20px;
                                    margin: .1rem 0;
                                }
                            }
                            .order-details-process-item-msg{
                                border: 1px solid #FFEAE3;
                                .order-details-process-item-msg-cont{
                                    min-height: 2rem;
                                    box-sizing: border-box;
                                    padding: 0.2rem;
                                }
                                .order-details-process-item-msg-put{
                                    position: relative;
                                    border-top: 1px solid #FFEAE3;
                                    button{
                                        cursor: pointer;
                                        position: absolute;
                                        bottom: 0.1rem;
                                        right: 0.1rem;
                                        z-index: 99;
                                        background-color: #FF5D24;
                                        color: #fff;
                                        border-radius: 4px;
                                        padding: 4px 10px;
                                    }
                                }
                            }
                            .complete{
                                margin-top: 0.2rem;
                                font-size: 0.12rem;
                                color: #999;
                                .complete-btn{
                                    cursor: pointer;
                                    background-color: #FD4249;
                                    border-radius:4px;
                                    color: #fff;
                                    padding: 10px 20px;
                                    margin-right: 0.2rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>