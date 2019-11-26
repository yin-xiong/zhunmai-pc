<template>
    <div class="websiteInfo">
        <div>
            <div class="company-intro">
                <div class="company-intro-img fl">
                    <img src="../../../assets/image/bg/web.png" alt="">
                </div>
                <div class="company-intro-msg fl">
                    <p><img src="../../../assets/image/icon/logo.png" alt=""></p>
                    <div>
                        <p>
                            准买网隶属于四川秦虎科技有限公司，是专业的网站交易、域名转让等虚拟资产服务平台,zhunmai.cn提供了许多的优势。不管是域名、网站、公众号、APP、自媒体、小程序、普通商品或者服务协议等，zhunmai.cn确保所有买卖双方都受到同样的保护，并且对于争端给予了最大的关切和处理。
                        </p>
                        <p>
                            zhunmai.cn验证买方的资金款项，并且将其保存在zhunmai.cn安全账户中。卖方在得到款项安全确认之后发货，并且zhunmai.cn会跟踪货款，保障在交易期限内发货成功。在买方鉴别并且接受货物之后，款项会从zhunmai.cn的账户中转移到卖方的账户。在zhunmai.cn诚实，勤奋和专业的经纪人监督下的交易不存在任何不确定性或担忧的隐患，您 可以放心资金的安全，免于欺诈。
                        </p>
                        <p>
                            选择zhunmai.cn正规的优秀的中介公司来代购或代售物品和服务是最方便的途径。
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="websiteInfo-list">
            <div class="flex">
                <div class="tac">
                    <h2>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-index-kehu"></use>
                        </svg>
                    </h2>
                    <h3>1W+客户选择</h3>
                    <p>为超过W+家企业提供针对性网站推广解决方案</p>
                </div>
                <div class="tac">
                    <h2>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-index-wangzhan"></use>
                        </svg>
                    </h2>
                    <h3>专业网站买卖平台</h3>
                    <p>为超过W+家企业提供针对性 网站推广解决方案</p>
                </div>
                <div class="tac">
                    <h2>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-index-fuwufei"></use>
                        </svg>
                    </h2>
                    <h3>服务费低至2%</h3>
                    <p>全网服务费比例最低</p>
                </div>
                <div class="tac">
                    <h2>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-index-jiaoyijingyan"></use>
                        </svg>
                    </h2>
                    <h3>5年网站交易经验</h3>
                    <p>贴心服务一切以客户利益为先</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'websiteInfo',
        data(){
            return{

            }
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .websiteInfo{
        .company-intro{
            box-sizing: border-box;
            font-size: 0;
            overflow: hidden;
            background-color: #fff;
        }
        .company-intro:hover .company-intro-img img{
            transform: scale(1.1);
        }
        .company-intro:hover .company-intro-msg{
            color: #E5763F;
        }
        .company-intro .company-intro-img{
            width: 36%;
            overflow: hidden;
        }
        .company-intro-img img{
            width: 100%;
            transition: all .5s;
        }
        .company-intro .company-intro-msg{
            width: 64%;
            font-size: 14px;
            box-sizing: border-box;
            padding: 42px;
            color: #666;
            line-height: 2;
            transition: all .5s;
        }
        .company-intro-msg>div{
            margin-top: 20px;
            text-align: justify;
        }
        .websiteInfo-list{
            border-top: 15px solid #F4F7F9;
            .flex{
                justify-content: space-between;
                align-items: center;
                flex-wrap: nowrap;
                background-color: #fff;
                >div{
                    width: 25%;
                    height: 1.5rem;
                    box-sizing: border-box;
                    overflow: hidden;
                    padding: 0.2rem .6rem;
                    border-right: 1px solid #E0E0E0;
                    svg{
                        font-size: .4rem;
                    }
                    h3{
                        font-size: .18rem;
                        color: #333;
                        margin-bottom: .1rem;
                    }
                    p{
                        font-size: .12rem;
                        color: #999;
                    }
                    &:last-child{
                        border-right: 0;
                    }
                }
            }
        }
    }
</style>