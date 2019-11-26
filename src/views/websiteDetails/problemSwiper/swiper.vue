<template>
    <div class="swiper-warp">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in lists">
                <div class="itemSwipers">
                    <router-link to="">
                        <h2 class="one-txt-cut"><i>{{item.name}}</i>{{item.title}}</h2>
                        <p class="tac"><img :src="item.src" /></p>
                        <div class="flex">
                            <span class="goodsPrice"><i>￥</i>{{item.price}}</span>
                            <span class="checkDetails">查看详情></span>
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
                        src:require('@/assets/image/banner/g1.png'),
                        name:'音乐视频',
                        title:'嘉定人嘉定人嘉定人嘉定人嘉定人才网站长其',
                        price:'15000.00',
                    },
                    {
                        src:require('@/assets/image/banner/g1.png'),
                        name:'音乐视频',
                        title:'嘉定人嘉定人嘉定人嘉定人嘉定人才网站长其',
                        price:'25000.00',
                    },
                    {
                        src:require('@/assets/image/banner/g1.png'),
                        name:'音乐视频',
                        title:'嘉定人嘉定人嘉定人嘉定人嘉定人才网站长其',
                        price:'35000.00',
                    },
                    {
                        src:require('@/assets/image/banner/g1.png'),
                        name:'音乐视频',
                        title:'嘉定人嘉定人嘉定人嘉定人嘉定人才网站长其',
                        price:'45000.00',
                    },
                    {
                        src:require('@/assets/image/banner/g1.png'),
                        name:'音乐视频',
                        title:'嘉定人嘉定人嘉定人嘉定人嘉定人才网站长其',
                        price:'55000.00',
                    },
                    {
                        src:require('@/assets/image/banner/g1.png'),
                        name:'音乐视频',
                        title:'嘉定人嘉定人嘉定人嘉定人嘉定人才网站长其',
                        price:'65000.00',
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
        font-size: .18rem;
        margin: .1rem auto;
    }
    .itemSwipers a h2 i{
        position: relative;
        top: -2px;
        padding: 4px 10px;
        font-weight: normal;
        background:rgba(223,244,255,1);
        border:1px solid rgba(145,210,244,1);
        border-radius:4px;
        font-size: .12rem;
        color: #0099E8;
        margin-right: .06rem;
    }
    .itemSwipers a p img{
        max-width: 100%;
    }
    .itemSwipers a div{
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
    }
    .itemSwipers a div .goodsPrice{
        color: #FF5D24;
        font-size: .24rem;
        font-weight: bold;
    }
    .itemSwipers a div .goodsPrice i{
        font-size: .14rem;
        font-weight: normal;
    }
    .itemSwipers a div .checkDetails{
        font-weight: normal;
        font-size: .12rem;
        color: #bbb;
    }


    .swiper-pagination-custom {
        bottom: 10px;
        left: 0;
        width: 100%;
    }
    /*自定义分页器的样式，这个你自己想要什么样子自己写*/
    .swiper-pagination-customs {
        width: 30px;
        height: 4px;
        display: inline-block;
        background: #000;
        opacity: .3;
        margin: 0 5px;
    }
    /*自定义分页器激活时的样式表现*/
    .swiper-pagination-customs-active {
        opacity: 1;
        background-color: #F78E00;
    }
</style>