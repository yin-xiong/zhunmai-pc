<template>
    <div class="list">
        <div class="goods-list">
            <ul v-if="lists.length > 0">
                <li v-for="(item,index) in lists.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                    <router-link class="flex" to="/details">
                        <div class="goods-list-img">
                            <img :src="item.goodsImg" :alt="item.title">
                        </div>
                        <div class="goods-list-ext">
                            <h2 class="goods-list-ext-top">
<!--                                <span>女性时尚</span>-->
                                {{item.title}}
                            </h2>
                            <div class="goods-list-ext-center">
                                <span v-for="webStyle in item.websiteStyle">{{webStyle}}</span>
                            </div>
                            <div class="flex goods-list-ext-bottom">
                                <div v-if="item.loveStation">
                                    <p>爱站权重：</p>
                                    <p class="border1px fz0">
                                        <img :src="item.loveImg" alt="爱站权重">
                                        <span>{{item.loveStation}}</span>
                                    </p>
                                </div>
                                <div v-if="item.stationMaster">
                                    <p>站长权重：</p>
                                    <p class="border1px fz0">
                                        <img :src="item.stationMasterImg" alt="站长权重">
                                        <span>{{item.stationMaster}}</span>
                                    </p>
                                </div>
                                <div v-if="item.dayIp">
                                    <p>日IP数：</p>
                                    <p><span>{{item.dayIp}}</span></p>
                                </div>
                                <div v-if="item.baiduInclude">
                                    <p>百度收录：</p>
                                    <p><span>{{item.baiduInclude}}</span></p>
                                </div>
                                <div v-if="item.income">
                                    <p>网站收入：</p>
                                    <p><span>{{item.income}}</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="goods-list-deal">
                            <div class="goods-list-deal-num">
                                <p>交易编号:</p>
                                <p>{{item.SerialNumber}}</p>
                            </div>
                            <div class="goods-list-deal-buy flex">
                                <span class="goods-list-deal-buy-left"><i class="iconfont icon-renminbi"></i>{{item.price}}</span>
                                <span class="goods-list-deal-buy-right">立即购买</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="page flex">
            <el-pagination
                    v-if="lists.length > 5"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[5, 10, 20, 40]"
                    :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="lists.length"
            >
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        name:'list',
        data(){
            return{
                totalCount:0,
                currentPage:1, //初始页
                pagesize:10,    //    每页的数据
                lists:[
                    {
                        goodsImg:require('../assets/image/icon/icon_web_default.jpg'),
                        title:'爱站权1 站长权1 百度秒收 微信迷 资讯网站出售',
                        websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                        loveImg:require('../assets/image/icon/icon_baidu.png'),
                        stationMasterImg:require('../assets/image/icon/icon_pr_zhi.png'),
                        loveStation: '3',stationMaster:'2',dayIp:'3',baiduInclude:'3',
                        income:'22000',price:'5000.01',SerialNumber:'AA01AXYY15390300BDCAY999',
                    },
                    {
                        goodsImg:require('../assets/image/icon/icon_web_default.jpg'),
                        title:'爱站权2 站长权1 百度秒收 微信迷 资讯网站出售',
                        websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                        loveImg:require('../assets/image/icon/icon_baidu.png'),
                        stationMasterImg:require('../assets/image/icon/icon_pr_zhi.png'),
                        loveStation: '3',stationMaster:'2',dayIp:'3',baiduInclude:'3',
                        income:'22000',price:'5000.01',SerialNumber:'AA01AXYY15390300BDCAY999',
                    },
                    {
                        goodsImg:require('../assets/image/icon/icon_web_entrust.jpg'),
                        title:'爱站权3 站长权1 百度秒收 微信迷 资讯网站出售',
                        websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                        loveImg:require('../assets/image/icon/icon_baidu.png'),
                        stationMasterImg:require('../assets/image/icon/icon_pr_zhi.png'),
                        loveStation: '3',stationMaster:'2',dayIp:'3',baiduInclude:'3',
                        income:'22000',price:'5000.01',SerialNumber:'AA01AXYY15390300BDCAY999',
                    },
                    {
                        goodsImg:require('../assets/image/icon/icon_web_entrust.jpg'),
                        title:'爱站权4 站长权1 百度秒收 微信迷 资讯网站出售',
                        websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                        loveImg:require('../assets/image/icon/icon_baidu.png'),
                        stationMasterImg:require('../assets/image/icon/icon_pr_zhi.png'),
                        loveStation: '3',stationMaster:'2',dayIp:'3',baiduInclude:'3',
                        income:'22000',price:'5000.01',SerialNumber:'AA01AXYY15390300BDCAY999',
                    },
                    {
                        goodsImg:require('../assets/image/icon/icon_web_default.jpg'),
                        title:'爱站权5 站长权1 百度秒收 微信迷 资讯网站出售',
                        websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                        loveImg:require('../assets/image/icon/icon_baidu.png'),
                        stationMasterImg:require('../assets/image/icon/icon_pr_zhi.png'),
                        loveStation: '3',stationMaster:'2',dayIp:'3',baiduInclude:'3',
                        income:'22000',price:'5000.01',SerialNumber:'AA01AXYY15390300BDCAY999',
                    },
                    {
                        goodsImg:require('../assets/image/icon/icon_web_entrust.jpg'),
                        title:'爱站权6 站长权1 百度秒收 微信迷 资讯网站出售',
                        websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                        loveImg:require('../assets/image/icon/icon_baidu.png'),
                        stationMasterImg:require('../assets/image/icon/icon_pr_zhi.png'),
                        loveStation: '3',stationMaster:'2',dayIp:'3',baiduInclude:'3',
                        income:'22000',price:'5000.01',SerialNumber:'AA01AXYY15390300BDCAY999',
                    }
                ]
            }
        },
        methods:{
            // 初始页currentPage、初始每页数据数pagesize和数据data
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            }
        },
    }
</script>
<style type="text/css" scoped>

    .goods-list{
        background-color: #fff;
    }
    .goods-list ul{
        width: 100%;
        height: auto;
        box-sizing: border-box;
    }
    .goods-list ul li{
        padding: 20px 30px;
        transition: all .6s;
        border-bottom: 1px solid #E0E0E0FF;
        box-sizing: border-box;
    }
    .goods-list ul li:last-child{
        border-bottom: 1px solid transparent;
    }
    .goods-list ul li:hover{
        -moz-box-shadow:0px 0px 10px #999;
        -webkit-box-shadow:0px 0px 10px #999;
        box-shadow:0px 0px 10px #999;
    }
    .goods-list ul li:hover .goods-list-img img{
        transform: scale(1.1);
    }
    .goods-list ul li a.flex{
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
    }
    .goods-list ul li a .goods-list-img{
        width: 200px;
        height: 112px;
        overflow: hidden;
        text-align: center;
        margin-right: 10px;
    }
    .goods-list-img img{
        width: 100%;
        transition: all .6s;
    }
    .goods-list-ext{
        width: 60%;
    }
    .goods-list-ext-top{
        font-size: 16px;
        color: #333;
        font-weight: 400;
        margin-top: 6px;
        margin-bottom: 10px;
    }
    .goods-list-ext-top span{
        font-size: 12px;
        color: #F8931FFF;
        border: 1px solid #F8931FFF;
        padding: 4px 8px;
        border-radius: 4px;
        margin-right: 10px;
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
    .goods-list-ext-bottom{
        justify-content: flex-start;
        align-items: center;
        font-size: 14px;
        margin-top: 20px;
    }
    .goods-list-ext-bottom>div{
        margin-right: 40px;
    }
    .goods-list-ext-bottom>div:last-child{
        margin-right: 0;
    }
    .goods-list-ext-bottom p{
        margin-bottom: 10px;
    }
    .goods-list-ext-bottom p.border1px{
        border: 1px solid #E0E0E0FF;
        width: 40px;
        height: 20px;
        overflow: hidden;
    }
    .goods-list-ext-bottom p.border1px img{
        display: inline-block;
        vertical-align: middle;
        height: 20px;
        margin-right: 6px;
    }

    .goods-list-ext-bottom p.border1px span{
        display: inline-block;
        vertical-align: middle;
        line-height: 20px;
        font-size: 14px;
    }

    .goods-list-deal{
        text-align: right;
        font-size: 12px;
        color: #C8C8C8FF;
    }
    .goods-list-deal-buy{
        justify-content: flex-end;
        align-items: center;
        margin-top: 12px;
    }
    .goods-list-deal-buy .goods-list-deal-buy-left{
        color: #FF6600FF;
        font-size: 24px;
        font-weight: bold;
    }
    .goods-list-deal-buy .goods-list-deal-buy-left i{
        font-size: 16px;
    }
    .goods-list-deal-buy .goods-list-deal-buy-right{
        display: inline-block;
        vertical-align: middle;
        width: 120px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: #FD4249;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        border: 1px solid #FFCACC;
        font-size: 14px;
        margin-left: .3rem;
    }
    .page{
        height: 2.5rem;
        box-sizing: border-box;
        padding: 0 ;
        justify-content: flex-start;
        align-items: center;
    }
</style>