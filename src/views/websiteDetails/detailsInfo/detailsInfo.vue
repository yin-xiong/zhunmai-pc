<template>
    <div class="detailsExt">
        <div class="flex detailsExtHead">
            <div class="detailsExtHead-left">
                <div class="flex">
                    <el-image class="detailsExtHead-left-Img" :src="details.picture"></el-image>
                    <div class="detailsExtHead-left-title">
                        <h2 class="txt-cut">{{details.title}}</h2>
                        <div class="websiteStyle">
                            <span v-for="(item,index) in details.websitestyle">{{item.title}}</span>
                        </div>
                        <div class="flex websiteLists">
                            <div>
                                <h4>爱站权重：</h4>
                                <el-image :src="src2"></el-image>{{details.lovestationpc  || '// '}}
                            </div>
                            <div>
                                <h4>站长权重：</h4>
                                <el-image :src="src3"></el-image>{{details.stationmasterpc  || '// '}}
                            </div>
                            <div>
                                <h4>日IP数：</h4>
                                <p>{{details.dayip  || '// '}}</p>
                            </div>
                            <div>
                                <h4>百度收录：</h4>
                                <p>{{details.baiduinclude  || '// '}}</p>
                            </div>
                            <div>
                                <h4>网站网址：</h4>
                                <p v-if="details.salestyle == 1">
                                    <el-link style="color: #FF5D24;" :underline="false">联系客服</el-link>
                                </p>
                                <p v-else>{{details.website || '// '}}</p>
                            </div>
                            <div>
                                <h4>网站收入：</h4>
                                <p>{{details.income || '// '}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="goodsPrice flex">
                    <div>
                        <h3>出售价格</h3>
                        <p><i>￥</i>{{details.price}}</p>
                    </div>
                    <div>
                        <h4>商品编号:{{details.ordernum}}</h4>
                        <h5><i class="iconfont icon-jinbi"></i>平台服务费{{details.commission}}%</h5>
                    </div>
                </div>
                <div class="subBuy">
                    <button class="active" @click="goBuy">立即购买</button>
                    <button>联系客服</button>
                    <!--
                    <span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shoucang"></use>
                        </svg>
                        收藏商品
                    </span>
                    -->
                </div>
                <div class="ensure">
                    <span>承诺服务</span>
                    <span><i class="iconfont icon-hetong"></i>签订合同</span>
                    <span><i class="iconfont icon-bao002"></i>平台担保</span>
                    <span><i class="iconfont icon-ren"></i>指定经纪人</span>
                    <span><i class="iconfont icon-tuikuan"></i>线上线下支付</span>
                    <span><i class="iconfont icon-yinhangqia"></i>实时退款</span>
                </div>
            </div>
            <div class="detailsExtHead-right">
                <div class="tac detailsExtHead-right-top">
                    <el-image :src="src4"></el-image>
                    <h2>{{details.brokerName}}</h2>
                    <p>{{details.brokerPosition}}</p>
                </div>
                <div class="detailsExtHead-center">
                    <p>QQ : {{details.brokerQQ}}</p>
                    <p>手机 : {{details.brokerPhone}}</p>
                    <p v-if="details.brokerTelPhone">电话 : {{details.brokerTelPhone}}</p>
                </div>
                <div class="detailsExtHead-right-bottom">
                    <p class="flex">
                        <i></i>
                        <span>更多经纪人</span>
                        <i></i>
                    </p>
                    <div class="flex">
                        <router-link
                                v-for="(item,index) in broker"
                                v-if="index < 4"
                                to=""
                        >
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-qq"></use>
                            </svg>
                            {{item.name}}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="detailsExtFoot-main">
            <div class="detailsExtFoot-main-active" id="counter">
                <button
                        :class="isActive == item.index ? 'active' : '' "
                        v-for="(item,index) in activeName"
                        @click="getActive(item.index)"
                >
                    {{item.title}}
                </button>
            </div>
            <div class="detailsExtFoot-main-info">
                <div class="flex detailsExtFoot-main-info-goods" id="productId0">
                    <div class="detailsExtFoot-main-info-goods-left">
                        <h3><img :src="srcAb1" alt=""></h3>
                        <div class="flex">
                            <div>
                                <h4>上架时间</h4>
                                <p>{{details.update_time}}</p>
                            </div>
                            <div>
                                <h4>价格</h4>
                                <p>{{details.price || '//'}}</p>
                            </div>
                            <div>
                                <h4>网址</h4>
                                <p>{{details.website  || '//'}}</p>
                            </div>
                            <div>
                                <h4>日IP</h4>
                                <p>{{details.dayip || '//'}}</p>
                            </div>
                            <div>
                                <h4>爱站权重</h4>
                                <p>{{details.lovestationpc || '//'}}</p>
                            </div>
                            <div>
                                <h4>站长权重</h4>
                                <p>{{details.stationmasterpc || '//'}}</p>
                            </div>
                            <div>
                                <h4>百度收录量</h4>
                                <p>{{details.baiduinclude || '//'}}</p>
                            </div>
                            <div>
                                <h4>类型</h4>
                                <p><span v-for="(item,index) in details.websitestyle">{{item.title+','}}</span></p>
                            </div>
                            <div>
                                <h4>广告联盟</h4>
                                <p v-if="details.adsunion==0">百度联盟</p>
                                <p v-else-if="details.adsunion==1">360联盟</p>
                                <p v-else-if="details.adsunion==2">搜狗联盟</p>
                                <p v-else-if="details.adsunion==3">其他</p>
                                <p v-else>无</p>
                            </div>
                            <div>
                                <h4>月收入</h4>
                                <p>{{details.income || '//'}}</p>
                            </div>
                            <div>
                                <h4>是否有手机网站</h4>
                                <p>{{details.whetherwap || '//'}}</p>
                            </div>
                            <div>
                                <h4>网站程序（CMS）</h4>
                                <p v-if="details.cms==0">PHPCMS V9</p>
                                <p v-else-if="details.cms==1">帝国</p>
                                <p v-else-if="details.cms==2">织梦</p>
                                <p v-else-if="details.cms==3">自研</p>
                                <p v-else-if="details.cms==4">其他</p>
                                <p v-else>//</p>
                            </div>
                        </div>
                    </div>
                    <div class="detailsExtFoot-main-info-goods-right">
                        <h3><img :src="srcAb2" alt=""></h3>
                        <div v-html="details.describe"></div>
                    </div>
                </div>
                <div class="buyingProcess" id="productId1">
                    <h2 class="flex">
                        <img :src="srcIcon_hetong" alt="">
                        <span>购买流程</span>
                    </h2>
                    <div class="flex">
                        <div class="itemProcess" v-for="(item,index) in process">
                            <div>
                                <img :src="item.src" alt="">
                            </div>
                            <p>{{item.title}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="recommended-problem">
            <div class="recommended flex" id="productId2">
                <div class="w22">
                    <h2>相关推荐</h2>
                    <p>RECOMMENDATION</p>
                    <router-link v-if="details.salestyle == 1" to="/officialBooking">更多></router-link>
                    <router-link v-else to="/websiteTrading">更多></router-link>
                </div>
                <div class="w88 swiperWarp">
                    <problemSwiperWarp :aboutwebsitelist="aboutwebsitelist"></problemSwiperWarp>
                </div>
            </div>
            <div class="problem flex" id="productId3">
                <div class="w22">
                    <h2>常见问题</h2>
                    <p>ASKED & QUESTIONS</p>
                    <router-link to="/problems?id=1">更多></router-link>
                </div>
                <div class="w88">
                    <recommendSwiperWarp></recommendSwiperWarp>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import problemSwiperWarp from '../problemSwiper/swiper'
    import recommendSwiperWarp from '../recommend/swiper'
    export default {
        name:'detailsExt',
        components:{
            problemSwiperWarp,recommendSwiperWarp
        },
        data(){
            return{
                src2:require('@/assets/image/icon/icon_baidu.png'),
                src3:require('@/assets/image/icon/icon_pr_zhi.png'),
                src4:require('@/assets/image/icon/icon_agent_head.png'),
                srcAb1:require('@/assets/image/icon/icon_commodity_parameter.png'),
                srcAb2:require('@/assets/image/icon/icon_commodity_describe.png'),
                srcIcon_hetong:require('@/assets/image/icon/icon_sales_process.png'),
                isActive:0,
                details:{
                    salestyle:1,// 1代表官方出售  2代表普通代售
                    picture:require('@/assets/image/icon/icon_web_entrust.jpg'),// 图片
                    title:'111', // 标题
                    websitestyle:[ // 网站类型
                        {id:0,title:'女性时尚'},
                        {id:1,title:'游戏影音'},
                        {id:2,title:'生活娱乐'},
                    ],
                    lovestationpc:'1', // 爱站权重
                    stationmasterpc:'2',// 站长权重
                    dayip:'',// 日IP数
                    baiduinclude:'',// 百度收录
                    website:'',// 网站网址
                    income:'',// 网站收入
                    price:'',// 出售价格
                    ordernum:'',// 商品编号
                    commission:'',// 平台服务费

                    brokerName:'', // 客服名称
                    brokerPosition:'', // 客服职位
                    brokerQQ:'', // 客服qq
                    brokerPhone:'', // 客服手机
                    brokerTelPhone:'', // 客服电话

                    update_time:'', // 上架时间
                    describe:'',
                },
                activeName:[
                    {title:"商品参数",index:0},
                    {title:"购买流程",index:1},
                    {title:"相关推荐",index:2},
                    {title:"常见问题",index:3},
                ],
                process:[
                    {
                        src:require('@/assets/image/icon/icon_sales_process1.png'),
                        title:'挑选中意网站'
                    },
                    {
                        src:require('@/assets/image/icon/icon_sales_process2.png'),
                        title:'联系客服核实网站'
                    },
                    {
                        src:require('@/assets/image/icon/icon_sales_process3.png'),
                        title:'支付相应款项'
                    },
                    {
                        src:require('@/assets/image/icon/icon_sales_process4.png'),
                        title:'双方协商过户细节'
                    },
                    {
                        src:require('@/assets/image/icon/icon_sales_process5.png'),
                        title:'拟定三方合同'
                    },
                    {
                        src:require('@/assets/image/icon/icon_sales_process6.png'),
                        title:'双方交接相关资料'
                    },
                    {
                        src:require('@/assets/image/icon/icon_sales_process7.png'),
                        title:'网站购买成功'
                    }
                ],
                broker:[ // 更多经纪人
                    {id:'0',title:"1111"},
                    {id:'0',title:"222"},
                    {id:'0',title:"333"},
                    {id:'0',title:"444"},
                    {id:'0',title:"555"},
                    {id:'0',title:"1111"},
                ],
                aboutwebsitelist:[], // 相关推荐
            }
        },
        methods:{
            getActive(index){
                this.isActive = index
                console.log(index);

                const returnEle = document.querySelector("#productId"+index);
                console.log(returnEle);
                if (!!returnEle) returnEle.scrollIntoView(true)
            },
            // 立即购买
            goBuy(){
                this.$router.push({path:'/orderConfirmation'})
            },
            // 获取详情
            async getWebsitedetails(){
                console.log(this.$route.query.id);
                let data = {
                    id:this.$route.query.id
                },
                    response = await this.$api.websitedetails(data);
                if(response.status == 200){
                    console.log(response);
                    this.details = response.list[0]
                    this.details.brokerName = response.list[0].broker[0].name
                    this.details.brokerPosition = response.list[0].broker[0].position
                    this.details.brokerQQ = response.list[0].broker[0].qq
                    this.details.brokerPhone = response.list[0].broker[0].phone
                    this.details.brokerTelPhone = response.list[0].broker[0].telphone
                    this.aboutwebsitelist = response.aboutwebsitelist
                    this.broker = response.broker
                    this.describe = response.describe
                }
            }
        },
        mounted(){
            this.getWebsitedetails()
        }
    }
</script>

<style type="text/less" lang="less" scoped>
    .detailsExt{
        padding-bottom: 2rem;
        .detailsExtHead{
            height: 5rem;
            overflow: hidden;
            justify-content: space-between;
            flex-wrap: nowrap;
            .detailsExtHead-left{
                width: 71.6%;
                height: 100%;
                background-color: #fff;
                box-sizing: border-box;
                padding: .3rem;
                .flex{
                    justify-content: flex-start;
                    flex-wrap: nowrap;
                  .detailsExtHead-left-Img{
                      width: 48%;
                      height: 2rem;
                      background-color: #FFEAE3;
                      margin-right: .2rem;
                  }
                    .detailsExtHead-left-title{
                        width: 50%;
                        h2{
                            font-size: .18rem;
                            -webkit-line-clamp: 2;
                            height: .54rem;
                        }
                        .websiteStyle{
                            margin: .09rem 0;
                            font-size: 16px;
                            color: #333;
                            font-weight: 400;
                            span{
                                font-size: 12px;
                                color: #F8931FFF;
                                border: 1px solid #F8931FFF;
                                padding: 4px 10px;
                                border-radius: 4px;
                                margin-right: 10px;
                                &:nth-child(1){
                                    background:#DFF4FF;
                                    border: 1px solid #91D2F4;
                                    color: #0099E8;
                                }
                                &:nth-child(2){
                                    margin: 0 10px;
                                    background:#E4FAFA;
                                    border: 1px solid #7CD4D9;
                                    color: #00B6B5;
                                }
                                &:nth-child(3){
                                    background:#FEF1ED;
                                    border: 1px solid #FCA689;
                                    color: #FF7A4E;
                                }
                            }
                        }
                        .websiteLists{
                            justify-content: space-between;
                            align-items: center;
                            flex-wrap: wrap;
                            background-color: #FCF7F1;
                            font-size: .14rem;
                            color: #999;
                            padding: .1rem 0;
                            div{
                                width: 33%;
                                text-align: center;
                                white-space: nowrap;
                                h4{
                                    font-weight: normal;
                                }
                                .el-image{
                                    width: 12px;
                                    height: 14px;
                                }
                            }
                        }
                    }
                }
                .goodsPrice{
                    background-color: #EDF0F2;
                    justify-content: space-between;
                    align-items: center;
                    height: .8rem;
                    box-sizing: border-box;
                    padding: 0 .3rem;
                    margin-top: .2rem;
                    color: #333;
                    font-size: .14rem;
                    h3{
                        font-weight: normal;
                        color: #999;
                        font-size: .14rem;
                    }
                    p{
                        color: #FF5D24;
                        font-size: .24rem;
                        font-weight: bold;
                        i{
                            font-size: .12rem;
                        }
                    }
                    h4{
                        font-weight: normal;
                    }
                    h5{
                        font-weight: normal;
                        color: #F8931F;
                        text-align: right;
                        i{
                            font-size: .12rem;
                        }
                    }
                }
                .subBuy{
                    margin: .3rem auto;
                    button{
                        cursor: pointer;
                        width:160px;
                        line-height:50px;
                        border:1px solid #bbb;
                        border-radius:6px;
                        font-size:.18rem;
                        font-weight:bold;
                        margin-right: .2rem;
                        transition: all .4s;
                        &.active{
                            background:#FD4249;
                            border:1px solid #FD4249;
                            color:#fff;
                        }
                        &:hover:nth-child(1){
                            background-color: #FF5D24;
                            letter-spacing: 1px;
                        }
                        &:hover:nth-child(2){
                            background-color: #bbb;
                            letter-spacing: 1px;
                        }

                    }
                    span{
                        font-size: .14rem;
                        color: #999;
                        cursor: pointer;
                        svg{
                            display: inline-block;
                            vertical-align: middle;
                            width:26px;
                            height: 26px;
                            line-height:26px;
                            font-size: .12rem;
                            background-color: #FEEBCB;
                            border-radius:50%;
                        }

                    }
                }
                .ensure{
                    border-top:1px dashed #bbb;
                    height: 0.6rem;
                    line-height: 0.6rem;
                    overflow: hidden;
                    span{
                        margin-right: .16rem;
                        font-size: .14rem;
                        color: #999;
                        i{
                            color:#333;
                            font-size: .16rem;
                            padding-right: 0.03rem;
                        }
                        &:last-child{
                            margin-right: 0;
                        }
                    }
                }
            }
            .detailsExtHead-right{
                width: 26.6%;
                height: 100%;
                background-color: #fff;
                box-sizing: border-box;
                padding: 0.2rem;
                .detailsExtHead-right-top{
                    font-size: .16rem;
                    color: #6D7AA0;
                    .el-image{
                        width: 1.3rem;
                        height: 1.3rem;
                        overflow: hidden;
                    }
                    h2{
                        font-size: 0.24rem;
                        font-weight: normal;
                    }
                }
                .detailsExtHead-center{
                    font-size: 0.14rem;
                    border-top: 1px solid #E0E0E0;
                    margin-top: 0.2rem;
                    padding: 0.2rem 0;
                    p{
                        line-height: 0.28rem;
                    }
                }
                .detailsExtHead-right-bottom{
                    p{
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: nowrap;
                        font-size: 0.14rem;
                        color: #666;
                        i{
                            width: 30%;
                            height: 1px;
                            background-color: #666;
                        }
                    }
                    div{
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        a{
                            width: 48%;
                            line-height: .3rem;
                            border: 1px solid #e0e0e0;
                            font-size: 0.14rem;
                            color: #666;
                            text-align: center;
                            margin-top: .16rem;
                        }
                    }
                }
            }
        }
        .detailsExtFoot-main{
            margin-top: .2rem;
            background-color: #fff;
            .detailsExtFoot-main-active{
                width: 100%;
                height: 0.51rem;
                line-height: .5rem;
                overflow: hidden;
                box-sizing: border-box;
                border-top: 1px solid #fff;
                border-bottom: 1px solid #FF5D24;
                color: #333;
                button{
                    cursor: pointer;
                    font-size: 0.18rem;
                    width: 1.3rem;
                    height: .5rem;
                    line-height: .5rem;
                    text-align: center;
                    transition: all .4s;
                    &.active{
                        background-color: #FF5D24;
                        color: #fff;
                    }
                    &:hover{
                        background-color: #FF5D24;
                        color: #fff;
                    }
                }
            }
            .detailsExtFoot-main-info{
                box-sizing: border-box;
                padding:0 0.3rem;
                overflow: hidden;
                >div{
                    min-height: 2rem;
                    margin: 0.6rem auto 0 auto;
                }
                .detailsExtFoot-main-info-goods{
                    justify-content: space-between;
                    flex-wrap: nowrap;
                    >div{
                        border: 1px solid #e0e0e0;
                        position: relative;
                        >h3{
                            position: absolute;
                            top: -24px;
                            left: 0;
                            background: #fff;
                            right: 0;
                            text-align: center;
                            margin: auto;
                        }
                    }
                    .detailsExtFoot-main-info-goods-left{
                        width: 61.6%;
                        >h3{
                            width: 40.5%;
                        }
                        div.flex{
                            justify-content: space-between;
                            align-items: center;
                            flex-wrap: wrap;
                            padding: 0.3rem 0;
                            >div{
                                width: 30%;
                                text-align: center;
                                font-size: 0.14rem;
                                margin: .16rem 0;
                                h4{
                                    color: #999;
                                    font-weight: normal;
                                }
                                p{
                                    color: #333;
                                }
                            }
                        }
                    }
                    .detailsExtFoot-main-info-goods-right{
                        width: 35.8%;
                        box-sizing: border-box;
                        padding: 0 0.3rem;
                        >h3{
                            width: 75.6%;
                        }
                        div{
                            margin-top: 0.6rem;
                        }
                    }
                }
                .buyingProcess{
                    h2{
                        justify-content: flex-start;
                        align-items: center;
                        flex-wrap: nowrap;
                        color: #333;
                        font-weight: normal;
                        font-size: .24rem;
                        border-bottom: 1px dashed #E0E0E0;
                        line-height: 1.75;
                        padding-bottom: 0.06rem;
                        img{
                            margin-right: 0.1rem;
                        }
                    }
                    >div{
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: nowrap;
                        text-align: center;
                        font-size: .15rem;
                        color: #666;
                        padding: 0.5rem 0;
                        .itemProcess{
                            width: 1.2rem;
                            div{
                                position: relative;
                                border: 1px solid #E0E0E0;
                                width: 1.2rem;
                                height: 1.2rem;
                                border-radius: 50%;
                                margin-bottom: 0.2rem;
                                img{
                                    position: absolute;
                                    left: 50%;
                                    top: 50%;
                                    transform: translate(-50%,-50%);
                                }
                                &:after{
                                    content: '';
                                    position: absolute;
                                    top: 0;
                                    bottom: 0;
                                    right: -0.3rem;
                                    margin: auto;
                                    width: .1rem;
                                    height: .1rem;
                                    transform: rotate(45deg);
                                    background-color: #E0E0E0;
                                }
                            }
                            p{
                                white-space: nowrap;
                            }
                            &:last-child div:after{
                                display: none;
                            }

                        }
                    }
                }
            }
        }
        .recommended-problem{
            >div{
                overflow: hidden;
                margin-top: .6rem;
                justify-content: flex-start;
                flex-wrap: nowrap;
                align-items: flex-end;
                .w22{
                    width: 22%;
                    background-color: #448BCB;
                    color: #fff;
                    text-align: center;
                    height: 2.8rem;
                    h2{
                        font-size: .3rem;
                        margin-top: .7rem;
                    }
                    p{
                        font-size: .16rem;
                    }
                    a{
                        display: block;
                        margin: .2rem auto 0 auto;
                        width: 1.1rem;
                        height: .3rem;
                        line-height: .3rem;
                        border-radius: .15rem;
                        background-color: rgba(255, 255, 255, 0.41);
                        font-size: .14rem;
                        color: #fff;
                    }
                }
                .w88{
                    position: relative;
                    width: 88%;
                    background-color: #fff;
                    height: 2.6rem;
                    overflow: hidden;
                    &:after{
                        content: '';
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 2px;
                        height: 100%;
                        background-color: #fff;
                        z-index: 999;
                    }
                }
            }
        }
    }
</style>