<template>
<!--  商品列表  -->
    <div class="goods-list">
        <div class="pageTitle">
            <div class="w1200">
                <el-link href="/" :underline="false">当前位置：首页 ></el-link>
                &nbsp;&nbsp;
                <el-link v-if="websiteTitle" :underline="false">{{websiteTitle}}</el-link>

                <el-link :underline="false" class="userSell">我要出售</el-link>
            </div>
        </div>
        <div>
            <div class="tableTitle flex">
                <div>
                    <span class="active">全部订单[6]</span>
                    <span>待审核订单[2]</span>
                    <span>待付款订单[2]</span>
                    <span>待交接订单[2]</span>
                    <span>已完成订单[0]</span>
                </div>
                <div>
                    <el-input placeholder="订单号/订单名称" v-model="searchMain" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search">搜索</el-button>
                    </el-input>
                </div>
            </div>
            <div class="tableMain">
                <div class="tableMain-head flex">
                    <span>订单详情</span>
                    <span>订单类型</span>
                    <span>价格</span>
                    <span>订单状态</span>
                    <span>操作</span>
                </div>
                <ul class="tableMain-body">
                    <li v-for="(item,index) in tableData" class="tableMain-body-item">
                        <div class="flex tableMain-body-item-list">
                            <div>
                                <div class="flex" style="justify-content: flex-start;">
                                    <el-image :src="item.src"></el-image>
                                    <div class="order-details">
                                        <h2 class="one-txt-cut">{{item.title}}</h2>
                                        <div class="goods-list-ext-center">
                                            <span v-for="items in item.websiteStyle">{{items}}</span>
                                        </div>
                                        <div class="order-details-bottom">
                                            <span>爱站权重：{{item.lovestation}} </span>
                                            <span>站长权重：{{item.stationMaster}}</span>
                                            <span>日IP：{{item.dayIp}}</span>
                                            <span>百度收录：{{item.baiduInclude}}万</span>
                                            <span>网站收入：{{item.include}}</span>
                                            <span>商品编号：{{item.orderNumer}}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>网站交易</div>
                            <div>
                                <p>总金额：<span style="color: #FF5D24;font-size: .16rem;">￥{{item.allPrice}}</span></p>
                                <p>单价：<span style="color: #E94A49;">￥{{item.unitPrice}}</span></p>
                                <p>服务费：<span>￥{{item.servicePrice}}</span></p>
                                <p>优惠：<span>￥{{item.preferentialPrice}}</span></p>
                            </div>
                            <div>{{item.status}}</div>
                            <div>
                                <p>编辑</p>
                                <p @click="toDetails">查看详情</p>
                                <p @click="shelvesSuccess">上架成功</p>
                                <p @click="deleteGoods">删除商品</p>
                                <p class="active" @click="openTrading">跟进交易进度</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="page flex">
                    111
                </div>
            </div>

        </div>

        <el-dialog
                title="跟进交易进度"
                :visible.sync="transactionSchedule"
                width="30%"
        >
            <div class="userTrading">
                <div class="tradingContent"></div>
                <div class="inputTrading">
                    <textarea placeholder="回复卖家，跟进交接进度" v-model="tradingText"></textarea>
                    <button>发送</button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>

    export default {
        name:'goodsList',
        data(){
            return{
                websiteTitle:'',

                searchMain:'',
                src:require('@/assets/image/banner/g1.png'),
                tableData:[
                    {
                        src:require('@/assets/image/banner/g1.png'),
                        title:'爱站权1爱站权1爱站权1 站长权1 百度秒收 微信迷其…',
                        websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                        lovestation:'1',stationMaster:'2',dayIp:'3',baiduInclude:'4',include:'5',orderNumer:'AF03ACYY30271101172HY640',
                        allPrice:'5000.00',unitPrice:'4000.00',servicePrice:'3000.00',preferentialPrice:'2000.00',
                        status:'待付款'
                    },
                    {
                        src:require('@/assets/image/banner/g1.png'),
                        title:'爱站权1爱站权1爱站权1 站长权1 百度秒收 微信迷其…',
                        websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                        lovestation:'1',stationMaster:'2',dayIp:'3',baiduInclude:'4',include:'5',orderNumer:'AF03ACYY30271101172HY640',
                        allPrice:'5000.00',unitPrice:'4000.00',servicePrice:'3000.00',preferentialPrice:'2000.00',
                        status:'待付款'
                    },
                    {
                        src:require('@/assets/image/banner/g1.png'),
                        title:'爱站权1爱站权1爱站权1 站长权1 百度秒收 微信迷其…',
                        websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                        lovestation:'1',stationMaster:'2',dayIp:'3',baiduInclude:'4',include:'5',orderNumer:'AF03ACYY30271101172HY640',
                        allPrice:'5000.00',unitPrice:'4000.00',servicePrice:'3000.00',preferentialPrice:'2000.00',
                        status:'待付款'
                    },
                    {
                        src:require('@/assets/image/banner/g1.png'),
                        title:'爱站权1爱站权1爱站权1 站长权1 百度秒收 微信迷其…',
                        websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                        lovestation:'1',stationMaster:'2',dayIp:'3',baiduInclude:'4',include:'5',orderNumer:'AF03ACYY30271101172HY640',
                        allPrice:'5000.00',unitPrice:'4000.00',servicePrice:'3000.00',preferentialPrice:'2000.00',
                        status:'待付款'
                    },
                ],
                transactionSchedule:false,
                tradingText:'',
            }
        },
        components:{

        },
        methods:{
            // 打开交易进度弹框
            openTrading(){
                this.transactionSchedule = true
            },
            // 查看详情
            toDetails(){
                this.$router.push({path:'/goodsListDetails'})
            },
            //  上架成功
            shelvesSuccess(){
                this.$router.push({path:'/shelvesSuccess'})
            },
            //  删除商品
            deleteGoods(){
                this.$confirm('确定删除选中内容 ？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.showMsg('删除成功','success')
                }).catch(() => {
                    this.showMsg('已取消删除','info')
                });
            }

        },
        created(){
            this.websiteTitle = this.$route.meta.title
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .goods-list{
        .pageTitle{
            border-bottom: 20px solid #f4f7f9;
            box-sizing: border-box;
            padding: 0 .2rem;
            .w1200{
                width: 100%;
                height: .7rem;
                line-height: .7rem;
                a{
                    color: #666;
                    font-size: .14rem;
                    transition: all .4s;
                    &:hover{
                        color: #FF5D24;
                    }
                }
                .userSell{
                    float: right;
                    width:120px;
                    height:50px;
                    line-height: 50px;
                    margin-top: 10px;
                    background:rgba(253,66,73,1);
                    border-radius:6px;
                    color: #fff;
                    &:hover{
                        color: #fff;
                    }
                }
            }
        }
        .tableTitle{
            width: 100%;
            height: .7rem;
            line-height: .7rem;
            box-sizing: border-box;
            padding: 0 .5rem;
            color: #6E768E;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            border-bottom: 1px solid #e0e0e0;
            span{
                position: relative;
                display: inline-block;
                vertical-align: middle;
                margin-right: .5rem;
                cursor: pointer;
                &:hover{
                    color: #FF5D24;
                }
                &:last-child{
                    margin-right: 0;
                }
            }
            span.active{
                color: #FF5D24;
                &:after{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: -20%;
                    width: 140%;
                    height: 1px;
                    background-color: #FF5D24;
                }
            }
            button{
                background-color: #FF5D24;
                border:1px solid #FF5D24;
                border-radius: 0;
                color: #fff;
            }
        }
        .tableMain{
            margin-top: .3rem;
            box-sizing: border-box;
            padding:0 0.5rem 0.5rem 0.5rem;
            .flex{
                justify-content: space-between;
                align-items: flex-start;
                flex-wrap: nowrap;
                text-align: center;
            }
            .tableMain-head{
                color: #6E768E;
                font-size: .16rem;
                line-height: .4rem;
                background-color: #F0F0F0;
                box-sizing: border-box;
                padding: 0 .24rem;
                span:nth-child(1){
                    width: 40%;
                }
                span:nth-child(2){
                    width: 15%;
                }
                span:nth-child(3){
                    width: 15%;
                }
                span:nth-child(4){
                    width: 15%;
                }
                span:nth-child(5){
                    width: 15%;
                }
            }
            .tableMain-body{
                overflow: hidden;
                .tableMain-body-item{
                    margin-top: .2rem;
                    border: 1px solid #e0e0e0;
                    >p{
                        line-height: .4rem;
                        background-color: #EFEFEF;
                        font-weight: bold;
                        color: #999;
                        border-bottom: 1px solid #e0e0e0;
                        padding-left: .24rem;
                    }
                    .tableMain-body-item-list{
                        box-sizing: border-box;
                        padding: 0.2rem .24rem;
                        font-size: .14rem;
                        color: #333;
                        line-height: 2;
                        >div:nth-child(1){
                            width: 40%;
                            line-height: 1.75;
                            .el-image{
                                width: 40%;
                                margin-right: .1rem;
                            }
                            .order-details{
                                width: 60%;
                                text-align: left;
                            }
                            h2{
                                font-size: .14rem;
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
                                span{
                                    white-space: nowrap;
                                    font-size: .12rem;
                                    color: #999;
                                    margin-right: .4rem;
                                }
                            }
                        }
                        >div:nth-child(2){
                            width: 15%;
                            font-size: .16rem;
                            font-weight: bold;
                        }
                        >div:nth-child(3){
                            width: 15%;
                        }
                        >div:nth-child(4){
                            width: 15%;
                            color: #E94A49;
                        }
                        >div:nth-child(5){
                            width: 15%;
                            p{
                                margin: 0 auto;
                                width: 1.1rem;
                                height: .3rem;
                                line-height: .3rem;
                                cursor: pointer;
                                &:hover{
                                    color: #FD4249;
                                }
                            }
                            p.active{
                                border-radius: 4px;
                                color: #fff;
                                background-color: #FD4249;
                            }
                        }
                    }
                }
            }
            .page{
                height: 1.5rem;
                justify-content: center;
                align-items: center;
            }
        }
        .userTrading{
            .tradingContent{
                width: 100%;
                height: 3rem;
            }
            .inputTrading{
                position: relative;
                width: 100%;
                height: 1rem;
                border-top: 1px solid #E5E5E5;
                >textarea{
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    padding: .1rem;
                }
                >button{
                    position: absolute;
                    bottom: .1rem;
                    right: .1rem;
                    width:60px;
                    height:26px;
                    background:rgba(255,93,36,1);
                    border:1px solid rgba(255,93,36,1);
                    border-radius:4px;
                    font-size: .14rem;
                    color: #fff;
                    z-index: 9;
                    cursor: pointer;
                }
            }
        }

    }
</style>