<template>
    <div class="footContent">
        <div class="footContent-top">
            <div class="footer-webset-msg">
                <div class="w1200">
                    <div class="footer-top flex">
                        <div class="footer-company-msg">
                            <div class="nav-logo">
                                <router-link to="">
                                    <el-image :src="src" :lazy='true'></el-image>
                                </router-link>
                            </div>
                            <div>
                                <p>成都市高新区天府大道中段666号希顿国际广场C座517号</p>
                                <p>客服邮箱：2720088495@qq.com</p>
                                <p>电话：400-998-3356</p>
                            </div>
                        </div>
                        <div class="footer-menu">
                            <ul>
                                <li>
                                    <h2><router-link to="">帮助中心</router-link></h2>
                                    <ul>
                                        <li><h3><router-link to="">什么是准买网?</router-link></h3></li>
                                        <li><h3><router-link to="">域名中介</router-link></h3></li>
                                        <li><h3><router-link to="">网站中介</router-link></h3></li>
                                        <li><h3><router-link to="">公众号中介</router-link></h3></li>
                                        <li><h3><router-link to="">网站地图</router-link></h3></li>
                                    </ul>
                                </li>
                                <li>
                                    <h2><router-link to="">资费说明</router-link></h2>
                                    <ul>
                                        <li><h3><router-link to="">付款方式</router-link></h3></li>
                                        <li><h3><router-link to="">平台手续费</router-link></h3></li>
                                        <li><h3><router-link to="">财务相关</router-link></h3></li>
                                        <li><h3><router-link to="">服务协议</router-link></h3></li>
                                    </ul>
                                </li>
                                <li>
                                    <h2><router-link to="">新闻动态</router-link></h2>
                                    <ul>
                                        <li><h3><router-link to="">行业新闻</router-link></h3></li>
                                        <li><h3><router-link to="">公司动态</router-link></h3></li>
                                    </ul>
                                </li>
                                <li>
                                    <h2><router-link to="">关于我们</router-link></h2>
                                    <ul>
                                        <li><h3><router-link to="">公司简介</router-link></h3></li>

                                    </ul>
                                </li>
                                <li>
                                    <h2><router-link to="">服务中心</router-link></h2>
                                    <ul>
                                        <li><h3><router-link to="">买家帮助</router-link></h3></li>
                                        <li><h3><router-link to="">卖家帮助</router-link></h3></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-frlink">
                        <el-link type="primary" :underline="false" v-for="(item,index) in frImg">
                            <el-image :src="item.url" :lazy='true'></el-image>
                        </el-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="footContent-bottom">
            <p>准买网是专业的网站买卖、网站转让、网站交易平台</p>
            <p>四川秦虎科技有限公司 版权所有 蜀ICP备16020933号 http://www.zhunmai.cn</p>
        </div>
    </div>
</template>
<script>
    export default {
        name:'footContent',
        data(){
            return{
                src:require('../assets/image/icon/logo.png'), // logo图片
                frImg:[
                    {url:require('../assets/image/frlink/f1.png')},
                    {url:require('../assets/image/frlink/f2.png')},
                    {url:require('../assets/image/frlink/f3.png')},
                    {url:require('../assets/image/frlink/f4.png')},
                    {url:require('../assets/image/frlink/f5.png')},
                ], // 友情链接
            }
        }
    }
</script>
<style lang="less" type="text/less" scoped>
    .footContent{
        .footContent-top{
            background-color: #fff;
            height: 3.4rem;
            .footer-top{
                justify-content: space-between;
                align-items: center;
                padding-top: 70px;
                .footer-company-msg{
                    color: #333;
                    font-size: 0.14rem;
                    font-weight: 400;
                    line-height: 1.7;
                }
                .footer-company-msg h2{
                    margin-bottom: 20px;
                    font-size: 0;
                }
                .footer-menu{
                    >ul{
                        >li{
                            display: inline-block;
                            vertical-align: top;
                            margin-left: 0.4rem;
                            &:first-child{
                                margin-left: 0;
                            }
                            h2{
                                font-size: 18px;
                                margin-bottom: 10px;
                                a{
                                    color: #333;
                                }
                            }
                            h3{
                                font-size: 14px;
                                a{
                                    color: #878F9D;
                                    transition: all .4s;
                                }
                                &:hover a{
                                    color: #000;
                                }
                            }
                            h2,h3{
                                font-weight: 300;
                                line-height: 1.7;
                            }
                        }
                    }
                }
            }
            .footer-frlink{
                overflow: hidden;
                margin-top: 0.4rem;
                .el-link{
                    margin-left: 0.6rem;
                    &:first-child{
                        margin-left: 0;
                    }
                }
            }
        }
        .footContent-bottom{
            background-color: #EDF0F2;
            color: #999;
            font-size: 0.14rem;
            text-align: center;
            height: 0.88rem;
            overflow: hidden;
            p:first-child{
                margin: 0.24rem 0 0.05rem 0;
            }
        }
    }
</style>