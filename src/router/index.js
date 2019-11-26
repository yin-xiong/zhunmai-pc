import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
    {
        path: "/index", // 首页
        name: "index",
        meta:{
            index:0,
            title:"网站首页",
        },
        component: () => import("../views/home/index.vue")
    },
    {
        path: "/websiteTrading", // 网站交易
        name: "websiteTrading",
        meta:{
            index:1,
            title:"网站交易",
        },
        component: () => import("../views/website-trading/index.vue")
    },
    {
        path: "/officialBooking", //官方代售
        name: "officialBooking",
        meta:{
          index:2,title:"官方代售",
        },
        component: () => import("../views/official-booking/index.vue")
    },
    {
        path: "/details", //官方代售--网站交易的列表需要跳转的页面
        name: "details",
        meta:{
            index:2,title:"网站详情",
        },
        component: () => import("../views/websiteDetails/index.vue")
    },
    {
        path: "/orderConfirmation", //订单确认
        name: "orderConfirmation",
        meta:{
            index:2,title:"订单确认",
        },
        component: () => import("../views/order/order-confirmation/index.vue")
    },
    {
        path: "/orderGenerate", //订单已生成
        name: "orderGenerate",
        meta:{
            index:2,title:"订单已生成",
        },
        component: () => import("../views/order/order-generate/index.vue")
    },
    {
        path: "/pay", // 订单支付
        name: "pay",
        meta:{
            index:2,title:"订单支付",
        },
        component: () => import("../views/order/pay/index.vue")
    },
    {
        path: "/orderDetails", // 查看订单支付成功后的详情
        name: "orderDetails",
        meta:{
            index:2,title:"订单详情",
        },
        component: () => import("../views/order/order-details/index.vue")
    },
    {
        path: "/news",// 新闻动态
        name: "news",
        meta:{
          index:3,title:"新闻动态",
        },
        component: () => import("../views/news/index.vue")
    },
    {
        path: "/aboutUs",// 关于我们
        name: "aboutUs",
        meta:{
          index:4,title:"关于我们",
        },
        component: () => import("../views/aboutUs/index.vue")
    },
    {
        path: "/login",// 登录
        name: "login",
        meta:{
            index:4,title:"准麦网--登录",
        },
        component: () => import("../views/login/login.vue")
    },
    {
        path: "/register",// 注册
        name: "register",
        meta:{
            index:4,title:"准麦网--注册",
        },
        component: () => import("../views/login/register.vue")
    },
    {
        path: "/findpwd",// 找回密码
        name: "findpwd",
        meta:{
            index:4,title:"准麦网--找回密码",
        },
        component: () => import("../views/login/findpwd.vue")
    },
    {
        path: "/user",// 找回密码
        name: "user",
        meta:{
            index:5,title:"个人中心",
        },
        component: () => import("../views/user/index.vue"),
        children: [
            {
                path: "/accountSet",
                name: "accountSet",
                meta:{
                    index:"1-1",title:"个人资料",
                },
                component: () => import("../views/user/account-set/personal-data.vue")
            },
            {
                path: "/fixpwd",
                name: "fixpwd",
                meta:{
                    index:"1-2",title:"修改密码",
                },
                component: () => import("../views/user/account-set/fixpwd.vue")
            },
            // {
            //     path: "/card",
            //     name: "card",
            //     meta:{
            //         index:"1-3",title:"实名认证",
            //     },
            //     component: () => import("../views/user/account-set/card.vue")
            // },
            // {
            //     path: "/fixphone",
            //     name: "fixphone",
            //     meta:{
            //         index:"1-4",title:"修改手机号码",
            //     },
            //     component: () => import("../views/user/account-set/fixphone.vue")
            // },
            {
                path: "/websiteOrder",
                meta:{
                    index:"2-1",title:"网站订单",
                },
                component: () => import("../views/user/buyers/website-order.vue"),
            },
            {
                path: "/buyerOrderDetails",
                name: "buyerOrderDetails",
                meta:{
                    index:"2-1",title:"网站订单-订单详情",
                },
                component: () => import("../views/user/buyers/orders-details/buyers-order-detal.vue")
            },
            {
                path: "/toAudit",
                name: "toAudit",
                meta:{
                    index:"2-1",title:"网站订单-待审核订单详情",
                },
                component: () => import("../views/user/buyers/orders-details/to-audit.vue")
            },
            {
                path: "/payment",
                name: "payment",
                meta:{
                    index:"2-1",title:"网站订单-待付款详情",
                },
                component: () => import("../views/user/buyers/orders-details/for-the-payment.vue")
            },
            {
                path: "/collection",
                meta:{
                    index:"2-2",title:"我的收藏",
                },
                component: () => import("../views/user/buyers/collection.vue")
            },
            {
                path: "/dataStatistical",
                meta:{
                    index:"3-1",title:"数据统计",
                },
                component: () => import("../views/user/seller/data-statistical.vue")
            },
            {
                path: "/goodsList",
                meta:{
                    index:"3-2",title:"商品列表",
                },
                component: () => import("../views/user/seller/goods-list.vue")
            },
            {
                path: "/goodsListDetails",
                name: "goodsListDetails",
                meta:{
                    index:"3-2",title:"查看商品详情",
                },
                component: () => import("../views/user/seller/goods-list/trading-in.vue")
            },
            {
                path: "/shelvesSuccess",
                name: "shelvesSuccess",
                meta:{
                    index:"3-2",title:"上架成功",
                },
                component: () => import("../views/user/seller/goods-list/shelves-success.vue")
            },
            {
                path: "/toSell",
                meta:{
                    index:"3-3",title:"我要出售",
                },
                component: () => import("../views/user/seller/to-sell.vue")
            },
            {
                path: "/addCard",
                meta:{
                    index:"4-1",title:"银行卡管理-添加账户",
                },
                component: () => import("../views/user/bank-card/add-card.vue")
            },
            {
                path: "/service",
                meta:{
                    index:"5-1",title:"服务中心-投诉和建议",
                },
                component: () => import("../views/user/service/service.vue")
            },
        ]
    },

    {
        path: "/problems",// 常见问题
        name: "problems",
        meta:{
            index:6,title:"常见问题",
        },
        component: () => import("../views/problem/index.vue")
    },
    {
        path: "/notice",// 公示公告
        name: "notice",
        meta:{
            index:7,title:"公示公告",
        },
        component: () => import("../views/notice/index.vue")
    },

    {
        path: '*',
        redirect: '/index',
        meta:{
            index:0,title:"网站首页",
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
