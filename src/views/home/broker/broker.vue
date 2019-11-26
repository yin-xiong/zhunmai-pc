<template>
    <div class="broker">
        <div class="broker-info">
            <div class="broker-info-left">
                <h2>金牌经纪人</h2>
                <p>专人咨询，服务无忧</p>
            </div>

            <swiper class="broker-info-right" :options="swiperOption">
                <swiper-slide class="broker-list" v-for="(item,index) in list">
                    <div class="inside-div flex">
                        <el-image :src="item.src"></el-image>
                        <div>
                            <h3>{{item.title}}</h3>
                            <h4>{{item.identity}}</h4>
                            <p>QQ : {{item.qq}}</p>
                            <p>手机 : {{item.phone}}</p>
                        </div>
                    </div>
                    <div class="outside-div"><el-link :underline="false">QQ咨询</el-link></div>
                </swiper-slide>
            </swiper>
            <span class="swiper-button-prev swiper-button-black"></span>
            <span class="swiper-button-next swiper-button-black"></span>
        </div>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name:'broker',
        data(){
            return{
                list:[
                    {src:require('@/assets/image/icon/kefu.png'),title:'祖华1',identity:"商务总监",qq:"2720088495",phone:'18048535730'},
                    {src:require('@/assets/image/icon/kefu.png'),title:'祖华2',identity:"商务总监",qq:"2720088495",phone:'18048535730'},
                    {src:require('@/assets/image/icon/kefu.png'),title:'祖华3',identity:"商务总监",qq:"2720088495",phone:'18048535730'},
                    {src:require('@/assets/image/icon/kefu.png'),title:'祖华4',identity:"商务总监",qq:"2720088495",phone:'18048535730'},
                    {src:require('@/assets/image/icon/kefu.png'),title:'祖华5',identity:"商务总监",qq:"2720088495",phone:'18048535730'},
                    {src:require('@/assets/image/icon/kefu.png'),title:'祖华6',identity:"商务总监",qq:"2720088495",phone:'18048535730'},
                    {src:require('@/assets/image/icon/kefu.png'),title:'祖华7',identity:"商务总监",qq:"2720088495",phone:'18048535730'}
                ],
                swiperOption:{
                    paginationClickable: true,
                    notNextTick: true,
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    autoplay: 3000, //自动轮播
                    speed: 2000,
                    slidesPerView :3,
                    spaceBetween : 10,
                    observer:true,
                    observeParents:true,
                },
            }
        }
    }
</script>
<style type="text/css" scoped>

    .broker-info >>> .swiper-button-prev{
        margin-top: 1px;
        left: 0.5rem;
        right: auto;
        width: .3rem;
        height: .3rem;
        border-radius: 0.15rem;
        border: 1px solid #fff;
        background-color: #fff;
        background-size:50% 50%;
    }
    .broker-info >>> .swiper-button-next{
        margin-top: 1px;
        left: 1rem;
        right: auto;
        width: .3rem;
        height: .3rem;
        border-radius: 0.15rem;
        border: 1px solid #fff;
        background-color: #fff;
        background-size:50% 50%;
    }
</style>
<style type="text/less" lang="less" scoped>
    .broker{
        .broker-info{
            position: relative;
            width: 100%;
            height: 2.4rem;
            background-color: #00dedb;
            box-sizing: border-box;
            overflow: hidden;
            padding: .3rem .2rem;
            >div{
                display: inline-block;
                vertical-align: top;
            }
            .broker-info-left{
                width: 18%;
                color: #fff;
                h2{
                    font-size: .3rem;
                }

            }
            .broker-info-right{
                width: 80%;
                height: 100%;
                .broker-list{
                    /*height: 100%;*/
                    border-radius: 6px;
                    background-color: #fff;
                    overflow: hidden;
                    position: relative;
                    .inside-div{
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        box-sizing: border-box;
                        padding: .2rem;
                        transition: all 1s;
                        .el-image{
                            max-width: 1rem;
                            height: 1rem;
                            border: 1px solid #EDF0F2;
                            margin-right: .1rem;
                        }
                        div{
                            font-size: .14rem;
                            color: #333;
                            h3{
                                font-size: .24rem;
                            }
                            h4{
                                font-size: .16rem;
                                color: #545779;
                                font-weight: normal;
                            }
                            p{
                                margin-top: 6px;
                            }
                        }
                    }
                    .outside-div{
                        opacity: 0;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color:#FF5D24;
                        text-align: center;
                        transition: all 1s;
                        a{
                            display: inline-block;
                            color: #fff;
                            font-size: .14rem;
                            border:1px solid #fff;
                            border-radius:.18rem;
                            padding: .04rem .1rem;
                            margin: .74rem auto;
                        }
                    }
                    &:first-child{
                        margin-left: 0;
                    }
                    &:hover .inside-div{
                        filter: blur(1px);
                    }
                    &:hover .outside-div{
                        opacity: 1;
                        background-color: rgba(255, 93, 36, 0.61);
                    }
                }
            }
        }
    }
</style>