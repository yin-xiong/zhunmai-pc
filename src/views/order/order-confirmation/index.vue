<template>
    <!--  订单确认  -->
    <div class="order-confirmation">
        <div>
            <headerTop></headerTop>
            <orderHead></orderHead>
            <div class="order-confirmation-main">
                <div class="w1200">
                    <orderInfo></orderInfo>
                    <div class="payWay">
                        <div>
                            <h3>支付方式</h3>
                            <div>
                                <button class="active">支付宝支付<span><i class="iconfont icon-gou"></i></span></button>
                            </div>
                        </div>
                        <div>
                            <h3>服务费支付方式</h3>
                            <div>
                                <button
                                        v-for="(item,index) in serviceFee"
                                        @click="getServiceFee(item.index)"
                                        :class="serviceFeeActive == item.index ? 'active' : '' "
                                >{{item.name}}<span><i class="iconfont icon-gou"></i></span></button>
                            </div>
                            <p>收取<i>3%</i>服务费，买家承担服务费<i>xxx</i>元，卖家应得<i>xxx</i>元</p>
                        </div>

                    </div>
                    <div class="payMoney">
                        <div>
                            <span>1件商品，总商品金额：</span>
                            <span class="w100"><i>￥</i>5000.00</span>
                        </div>
                        <div>
                            <span>服务费：</span>
                            <span class="w100">￥100.00</span>
                        </div>
                        <div>
                            <span>优惠：</span>
                            <span class="w100">￥0.00</span>
                        </div>
                        <div>
                            <span>应付总额：</span>
                            <span class="w100 money"><i>￥</i>5000.00</span>
                        </div>
                        <div>
                            <el-button type="info" @click="subOrder">提交订单</el-button>
                        </div>
                        <div>
                            <el-checkbox v-model="checked">点击提交订单表示您已同意</el-checkbox>
                            <router-link to="">《准买网交易规则》</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!--   底部信息区域     -->
            <footContent></footContent>
            <!--   底部备案区域     -->
            <fixed></fixed>
        </div>
    </div>
</template>
<script>
    import headerTop from '@/components/top'
    import footContent from '@/components/footer'
    import orderHead from '../components/order-head'
    import orderInfo from '../components/order-info'
    import fixed from '@/components/fix'

    export default {
        name:'orderConfirmation',
        data(){
            return{

                // 服务费支付方式
                serviceFeeActive:0,
                serviceFee:[
                    {name:'买家付',index:1},
                    {name:'卖家付',index:2},
                    {name:'买卖双方分摊',index:3}
                ],
                checked:false,
            }
        },
        components:{
            headerTop,orderHead,footContent,fixed,orderInfo
        },
        methods:{
            // 服务费支付方式的切换
            getServiceFee(index){
                this.serviceFeeActive = index
            },
            // 提交订单
            subOrder(){
                // 跳转订单已生成的页面
                this.$router.push({path:'/orderGenerate'})
                // 跳转支付成功或失败后的页面
                // this.$router.push({path:'/pay'})
            }
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .order-confirmation{
        .order-confirmation-main{
            box-sizing: border-box;
            padding: 0.6rem 0 2rem 0;
            .w1200{
                background-color: #fff;

                .payWay{
                    >div{
                        box-sizing: border-box;
                        padding: 0 .3rem;
                        h3{
                            line-height: .6rem;
                            font-weight: normal;
                            font-size: .2rem;
                            margin-bottom: .1rem;
                        }
                        div{
                            button{
                                position: relative;
                                background:#fff;
                                border:1px solid #bbb;
                                border-radius:6px;
                                margin-right: .3rem;
                                font-size: .14rem;
                                padding: .14rem .38rem;
                                overflow: hidden;
                                transition: all .4s;
                                cursor: pointer;
                                &:hover{
                                    border: 1px solid #FF5D24;
                                    color: #FF5D24;
                                }
                                span{
                                    position: absolute;
                                    right: 0;
                                    bottom: 0;
                                    opacity: 0;
                                    z-index: 9;
                                    transition: all .4s;
                                    width: 0;
                                    height: 0;
                                    border-width: 0.12rem;
                                    border-style: solid;
                                    border-color:transparent #FF5D24 #FF5D24 transparent;
                                }
                            }
                            button.active{
                                border: 1px solid #FF5D24;
                                color: #FF5D24;
                                span{
                                    opacity: 1;
                                    i{
                                        color: #fff;
                                        position: absolute;
                                        right: -12px;
                                        bottom: -12px;
                                        font-size: 10px;
                                        transform: scale(.8);
                                        z-index: 19;
                                    }
                                }
                            }
                        }
                        p{
                            padding: .1rem 0;
                            line-height: .2rem;
                            color: #999;
                            font-size: .14rem;
                            i{
                                color: #FD4249;
                            }
                        }

                    }
                }
                .payMoney{
                    border-top: 8px solid #f4f7f9;
                    box-sizing: border-box;
                    padding: .5rem;
                    text-align: right;
                    div{
                        font-size: .14rem;
                        color: #666;
                        margin-bottom: .1rem;
                        .w100{
                            display: inline-block;
                            width: 1.3rem;
                        }
                        button{
                            outline: none;
                            background-color: #FD4249;
                            color: #fff;
                            font-size: .16rem;
                        }
                        .money{
                            color: #FD4249;
                        }
                        a{
                            color: #999;
                        }
                    }
                }
            }
        }
    }
</style>