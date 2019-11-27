<template>
    <div class="aboutUs">
        <div class="w1200 overflow">
            <div class="aboutUsHeader">
                <h2>准买准卖找准买！</h2>
                <div class="aboutUsHeaderInfo">
                    <p>准买网隶属于四川秦虎科技有限公司，是可靠的虚拟资产第三方担保交易平台。准买网以保障网站交易的顺利进行为目标，致力于打造中介交易更安全、更简单的交易平台，立志为互联网广大用户提供物美价廉的虚拟商品和专业优质的用户体验，并保障互联网网站买卖双方的利益</p>
                    <p>准买网（zhunmai.cn）作为互联网资产中介平台，力求让线上交易更加安全高效，为网站买卖双方提供全方位的交易保护！</p>
                </div>
            </div>
            <div class="about-us-top-img">
                <div v-for="item in img" v-if="img">
                    <img :src="item.src"/>
                    <span>{{item.title}}</span>
                </div>

            </div>
            <div class="aboutUsBody">
                <div class="aboutUsBodyTwo">
                    <div class="aboutUsBody-security">
                        <div class="">
                            <h2>找准买</h2>
                            <h2>代理你的网站</h2>
                            <h2>更快，更安全，收益更高!</h2>
                        </div>

                        <div v-for="item in security" v-if="security">
                            <img :src="item.src"/>
                            <p>{{item.title}}</p>
                        </div>

                    </div>

                </div>
            </div>
            <div class="about-us-customer">
                <h3>我们的客户说我们</h3>
                <el-carousel
                        :interval="4000"
                        type="card"
                        height="4rem"
                        :autoplay="false"
                        indicator-position="none"
                        :initial-index="0"
                        arrow="always"
                >
                    <el-carousel-item v-for="item in cardList">

                        <div>
                            <div>
                                <el-image :src="item.src"></el-image>
                            </div>
                            <div class="customer-info">
                                <h2>{{item.title}}</h2>
                                <p>{{item.desc}}</p>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <div class="about-us-culture">
            <h2 class="corporateCulture tac">企业文化</h2>
            <div class="customerFirst flex">
                <div>
                    <img src="../../../assets/image/icon/ikhweixian.png"/>
                    <p>客户为先</p>
                </div>
                <div>
                    <img src="../../../assets/image/icon/icxweiben.png"/>
                    <p>诚信为本</p>
                </div>
                <div>
                    <img src="../../../assets/image/icon/izychuangxin.png"/>
                    <p>专业创新</p>
                </div>
            </div>
            <p class="Purpose tac">一切以客户为先，不断完善自身，鼓励创新，立志打造全网专业性更强、更有效率的网站交易平台。</p>
        </div>
    </div>
</template>
<script>
    export default {
        name:'aboutUs',
        data(){
            return{
                src:require("@/assets/image/icon/itouxiang1.png"),
                cardList:[
                    {
                        src:require("@/assets/image/icon/itouxiang1.png"),
                        title:'1四川侯先生',
                        desc:'准买网是一个优质的平台，通过“用户体验至上”把大家聚和在一起。“为梦想家实现梦想”为使命，为每个艾艺的小伙伴、每个艾艺的客户、每个产业服务。艾艺希望建立平台把人和事链接在一起，将力量汇聚，把服务做'
                    },
                    {
                        src:require("@/assets/image/icon/itouxiang1.png"),
                        title:'2四川侯先生',
                        desc:'准买网是一个优质的平台，通过“用户体验至上”把大家聚和在一起。“为梦想家实现梦想”为使命，为每个艾艺的小伙伴、每个艾艺的客户、每个产业服务。艾艺希望建立平台把人和事链接在一起，将力量汇聚，把服务做'
                    },
                    {
                        src:require("@/assets/image/icon/itouxiang1.png"),
                        title:'3四川侯先生',
                        desc:'准买网是一个优质的平台，通过“用户体验至上”把大家聚和在一起。“为梦想家实现梦想”为使命，为每个艾艺的小伙伴、每个艾艺的客户、每个产业服务。艾艺希望建立平台把人和事链接在一起，将力量汇聚，把服务做'
                    },
                    {
                        src:require("@/assets/image/icon/itouxiang1.png"),
                        title:'4四川侯先生',
                        desc:'准买网是一个优质的平台，通过“用户体验至上”把大家聚和在一起。“为梦想家实现梦想”为使命，为每个艾艺的小伙伴、每个艾艺的客户、每个产业服务。艾艺希望建立平台把人和事链接在一起，将力量汇聚，把服务做'
                    },
                    {
                        src:require("@/assets/image/icon/itouxiang1.png"),
                        title:'4四川侯先生',
                        desc:'准买网是一个优质的平台，通过“用户体验至上”把大家聚和在一起。“为梦想家实现梦想”为使命，为每个艾艺的小伙伴、每个艾艺的客户、每个产业服务。艾艺希望建立平台把人和事链接在一起，将力量汇聚，把服务做'
                    },
                    {
                        src:require("@/assets/image/icon/itouxiang1.png"),
                        title:'4四川侯先生',
                        desc:'准买网是一个优质的平台，通过“用户体验至上”把大家聚和在一起。“为梦想家实现梦想”为使命，为每个艾艺的小伙伴、每个艾艺的客户、每个产业服务。艾艺希望建立平台把人和事链接在一起，将力量汇聚，把服务做'
                    }
                ],
                security:[
                    {
                        src:require("@/assets/image/icon/icon1.png"),
                        title:'仅收取2%手续费，卖站找准买更划算'
                    },
                    {
                        src:require("@/assets/image/icon/icon2.png"),
                        title:'准买网拥有一支专业的网站交易服务团队，贴心服务一切以客户利益为先。'
                    },
                    {
                        src:require("@/assets/image/icon/icon3.png"),
                        title:'准买网专注于网站交易其专业性强，具有针对性，为广大客户提供专业的个性化服务。'
                    },
                    {
                        src:require("@/assets/image/icon/icon4.png"),
                        title:'签署正规合同，免除双方的后顾之忧，节省用户的时间和金钱'
                    },
                    {
                        src:require("@/assets/image/icon/icon5.png"),
                        title:'完善交易细节，让您体验安全，快捷，方便的一站式网站交易平台。'
                    },
                    {
                        src:require("@/assets/image/icon/icon6.png"),
                        title:'集合了全网丰富的站长资源，建设一个资源同服务为一体的网站营销平台。'
                    },

                ],
                img:[
                    {
                        src:require("@/assets/image/icon/ibulebg.png"),
                        title:'体验+咨询'
                    },
                    {
                        src:require("@/assets/image/icon/ibulebg.png"),
                        title:'平台+团队'
                    },
                    {
                        src:require("@/assets/image/icon/ibulebg.png"),
                        title:'服务+保障'
                    },
                ]

            }
        }
    }
</script>
<style type="text/css" scoped>
    .about-us-customer >>> .el-carousel__item{
        transition: all 1s;
    }
    .about-us-customer >>> .el-carousel__item .el-image{
        width: 1.2rem;
    }
    .about-us-customer >>> .el-carousel__item.is-active .el-image{
        width: 1.8rem;
    }
</style>
<style lang="less" type="text/less" scoped>
    .aboutUs{
        margin:0 auto;
        text-align: center;
        .aboutUsHeader{
            overflow: hidden;
            margin: 0.5rem 0;
            color: #444;
            h2{
                font-size: .3rem;
            }
            p{
                margin-top: .3rem;
            }
        }

        .about-us-top-img{
            display: flex;
            justify-content: space-between;
            align-items: center;
            >div{
                position: relative;
                width: 30%;
                height: 2rem;
                max-width: 3.4rem;
                overflow: hidden;
                img{
                    position: absolute;
                }
                span{
                    position: absolute;
                    left: 0;
                    right: 0;
                    top:0;
                    bottom: 0;
                    margin: auto;
                    height: 0.2rem;
                    color:rgba(255,255,255,1);
                }
            }
        }
        .aboutUsBodyTwo{
            margin-top: 1.5rem;
            .aboutUsBody-security{
                justify-content: flex-end;
                flex-wrap: wrap;
                align-items: center;
                >div{
                    display: inline-block;
                    vertical-align: text-top;
                    width: 25%;
                    box-sizing: border-box;
                    padding:.3rem 0.5rem;
                    p{
                        font-size: .16rem;
                        text-align: center;
                        color: #333;
                    }
                    &:first-child{
                        width: 50%;
                        text-align: left;
                        font-size: .24rem;
                        white-space: nowrap;
                        padding: 0 0 0 0.1rem;
                    }
                }
            }
        }
        .about-us-customer{
            background-color: #fff;
            h3{
                color: #444;
                font-size: .3rem;
                margin: .8rem auto;
                text-align: center;
            }
            .el-carousel{
                text-align: center;
                background-color: #fff;
                overflow: hidden;
                .el-carousel__item{
                    background-color: #fff;
                    .customer-info{
                        margin: 0 auto;
                        opacity: 0;
                        transition: all .4s;
                    }
                }
                .el-carousel__item--card.is-active{
                    background-color: #fff;
                    .customer-info{
                        opacity: 1;
                        h2{
                            font-size: .25rem;
                            font-weight: normal;
                        }
                    }
                }
            }
        }
        .about-us-culture{
            width:100%;
            height:4rem;
            margin-top: 0.5rem;
            background:rgba(34,35,40,1);
            color:rgba(255,255,255,1);
            align-items: center;
            h2{
                padding-top: 50px;
            }
            .customerFirst{
                justify-content: space-between;
                align-items: center;
                >div{
                    width: 50%;
                    margin-top: 0.5rem;
                    height: 1.5rem;
                }
            }
        }
    }

</style>
