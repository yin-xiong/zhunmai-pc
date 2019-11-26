<template>
    <div class="swiper-warp">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in lists">
                <div class="itemSwipers">
                    <router-link to="">
                        <h2 class="one-txt-cut"><i>问：</i>{{item.title}}</h2>
                        <div class="">
                            <i>答：</i>{{item.desc}}
                        </div>
                    </router-link>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name:'shuffling',
        data(){
            return{
                src:require('@/assets/image/banner/g1.png'),
                lists:[
                    {
                        title:'网站建设之前我们应该要了…',
                        desc:"为了提高域名交易的安全性，zhongjie.com需要每一位用户进行实名认证。请在注册后上传您的有效证件照片（驾照、身份证或者护照和手执证件照）…"
                    },
                    {
                        title:'网站建设之前我们应该要了…',
                        desc:"为了提高域名交易的安全性，zhongjie.com需要每一位用户进行实名认证。请在注册后上传您的有效证件照片（驾照、身份证或者护照和手执证件照）…"
                    },
                    {
                        title:'网站建设之前我们应该要了…',
                        desc:"为了提高域名交易的安全性，zhongjie.com需要每一位用户进行实名认证。请在注册后上传您的有效证件照片（驾照、身份证或者护照和手执证件照）…"
                    },
                    {
                        title:'网站建设之前我们应该要了…',
                        desc:"为了提高域名交易的安全性，zhongjie.com需要每一位用户进行实名认证。请在注册后上传您的有效证件照片（驾照、身份证或者护照和手执证件照）…"
                    },
                    {
                        title:'网站建设之前我们应该要了…',
                        desc:"为了提高域名交易的安全性，zhongjie.com需要每一位用户进行实名认证。请在注册后上传您的有效证件照片（驾照、身份证或者护照和手执证件照）…"
                    },
                    {
                        title:'网站建设之前我们应该要了…',
                        desc:"为了提高域名交易的安全性，zhongjie.com需要每一位用户进行实名认证。请在注册后上传您的有效证件照片（驾照、身份证或者护照和手执证件照）…"
                    },
                    {
                        title:'网站建设之前我们应该要了…',
                        desc:"为了提高域名交易的安全性，zhongjie.com需要每一位用户进行实名认证。请在注册后上传您的有效证件照片（驾照、身份证或者护照和手执证件照）…"
                    },
                ],
                swiperOption:{
                    pagination: { el: ".swiper-pagination" },
                    paginationClickable: true,
                    notNextTick: true,
                    autoplay: 3000, //自动轮播
                    speed: 5000,
                    slidesPerView :3,
                    spaceBetween : 0,
                    observer:true,
                    observeParents:true,
                },

            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>
<style scoped>
    .swiper-warp{width: 100%;}
    .itemSwipers a{
        display: block;
        margin: 0 auto;
        box-sizing: border-box;
        padding:0 .2rem;
        border-right:1px solid #e0e0e0;
    }
    .itemSwipers a h2{
        font-size: .16rem;
        margin: .1rem auto;
        color: #666;
        border-bottom: 1px dashed #e0e0e0;
        font-weight: normal;
        padding: .18rem 0;
    }
    .itemSwipers a i{
        color: #FF5D24;
    }





</style>