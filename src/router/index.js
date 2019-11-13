import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
    {
        path: "/index", // 首页
        name: "index",
        meta:{
          index:0
        },
        component: () => import("../views/home/index.vue")
    },
    {
        path: "/websiteTrading", // 网站交易
        name: "websiteTrading",
        meta:{
          index:1
        },
        component: () => import("../views/website-trading/index.vue")
    },
    {
        path: "/officialBooking", //官方代售
        name: "officialBooking",
        meta:{
          index:2
        },
        component: () => import("../views/official-booking/index.vue")
    },
    {
        path: "/news",// 新闻动态
        name: "news",
        meta:{
          index:3
        },
        component: () => import("../views/news/index.vue")
    },
    {
        path: "/aboutUs",// 关于我们
        name: "aboutUs",
        meta:{
          index:4
        },
        component: () => import("../views/aboutUs/index.vue")
    },
    {
        path: '*',
        redirect: '/index',
        meta:{
            index:0
        },
        component: () => import("../views/home/index.vue")
    }
];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
