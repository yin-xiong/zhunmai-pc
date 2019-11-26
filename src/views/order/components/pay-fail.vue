<template>
    <div class="pay-fail">
        <div class="flex">
            <div class="pay-success-left flex">
                <div class="pay-success-left-img">
                    <el-image :src="srcPay"></el-image>
                </div>
                <div class="pay-success-right-info">
                    <h3>订单支付失败</h3>
                    <p>支付遇到问题，请尝试重新支付</p>
                    <p>服务时间：周日-周日 10:00-18:00</p>
                    <div>
                        <button class="active">联系专属客服</button>
                        <button>重新支付</button>
                    </div>
                </div>
            </div>
            <div class="order-info-right">
                <h3><img :src="kfSrc" alt=""></h3>
                <h4>曾红玉</h4>
                <p><router-link to="">发起咨询</router-link></p>
                <p>客服时间：{{kefuTime}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'payFail',
        data(){
            return{
                srcPay:require('@/assets/image/icon/icon_deal_fail.png'),
                kfSrc:require('@/assets/image/icon/icon_agent_head.png'),
                kefuTime:'09:00-19:00',
            }
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .pay-fail{
        box-sizing: border-box;
        padding: .2rem;
        .flex{
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            .pay-success-left{
                justify-content: flex-start;
                .pay-success-left-img{
                    margin: 0 .2rem;
                }
                .pay-success-right-info{
                    h3{
                        font-weight: normal;
                        font-size: .24rem;
                        margin-bottom: .1rem;
                    }
                    p{
                        font-size: .14rem;
                        color: #999;
                    }
                    div{
                        button{
                            background:rgba(255,255,255,1);
                            border:1px solid rgba(187,187,187,1);
                            border-radius:4px;
                            margin:.2rem .1rem 0 0;
                            padding: .12rem .2rem;
                            font-size: .14rem;
                            cursor: pointer;
                            &.active{
                                background-color: #FD4249;
                                color: #fff;
                            }
                        }
                    }
                }
            }
            .order-info-right{
                width: 2rem;
                height: 2rem;
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