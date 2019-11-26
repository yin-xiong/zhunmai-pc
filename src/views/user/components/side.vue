<template>
    <div class="side">
        <el-menu
                class="el-menu-vertical-demo"
                :default-active="defaultActive"
                :unique-opened="true"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
        >
            <el-menu-item :index="item.index+''" v-for="(item,index) in menus" v-if="!item.child">
                <router-link
                        :to="item.path"
                        slot="title"
                        @click.native="getActive($event,cindex)"
                >
                    <i :class="item.icon"></i>
                    {{item.title}}
                </router-link>
            </el-menu-item>

            <el-submenu :index="item.index+''" v-for="(item,index) in menus" v-if="item.child">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="(child,cindex) in item.child" :index="child.index+''">
                        <router-link
                                :to="child.path"
                                @click.native="getActive($event,cindex)"
                        >
                            {{child.title}}
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
        <div class="side-bottom">
            <h2><router-link to=""><i class="iconfont icon-QQ"></i>QQ在线咨询</router-link></h2>
            <p>咨询电话</p>
            <h4>028-86513145</h4>
        </div>
    </div>
</template>
<script>

    export default {
        name:'side',
        data(){
            return{
                isCollapse: false,
                defaultActive: "1",
                menus:[
                    {
                        title:'账户设置',path:'',icon:'el-icon-setting',index:'1',
                        child:[
                            {title:'个人资料',path:'/accountSet',icon:'',index:'1-1'},
                            {title:'修改密码',path:'/fixpwd',icon:'',index:'1-2'},
                            // {title:'实名认证',path:'/card',icon:'',index:'1-3'},
                            // {title:'修改手机号',path:'/fixphone',icon:'',index:'1-4'},
                        ]
                    },
                    {
                        title:'买家中心',path:'',icon:'el-icon-shopping-cart-full',index:'2',
                        child:[
                            {title:'网站订单',path:'/websiteOrder',icon:'',index:'2-1',
                                childs:[
                                    {title:'网站订单-订单详情',path:'/buyerOrderDetails',icon:'',index:'2-1',}
                                ]
                            },
                            {title:'我的收藏',
                            //   /collection
                                path:'',
                                icon:'',index:'2-2'}
                        ]
                    },
                    {
                        title:'卖家中心',path:'',icon:'el-icon-present',index:'3',
                        child:[
                            {title:'数据统计',
                                // /dataStatistical
                                path:'',
                                icon:'',index:'3-1'},
                            {title:'商品列表',path:'/goodsList',icon:'',index:'3-2'},
                            {title:'我要出售',path:'/toSell',icon:'',index:'3-3'},
                        ]
                    },
                    {
                        title:'银行卡管理',path:'',icon:'el-icon-bank-card',index:'4',
                        child:[
                            {title:'添加账户',path:'/addCard',icon:'',index:'4-1'}
                        ]
                    },
                    {
                        title:'服务中心',path:'',icon:'el-icon-collection-tag',index:'5',
                        child:[
                            {title:'投诉和建议',path:'/service',icon:'',index:'5-1'}
                        ]
                    },
                ]
            }
        },
        methods: {
            getActive(e,index){
                console.log(e);
                console.log(index);
            },

            setCurrentRoute(){
                this.defaultActive = this.$route.meta.index
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created () {
            this.setCurrentRoute()
        },
        watch: {
            $route () {
                this.setCurrentRoute()
            },
        },
    }
</script>
<style type="text/css" scoped>
    li.el-menu-item.is-active{
        background-color: #FF8D65;
    }
    li.el-menu-item.is-active a{
        color:#fff;
    }
    .el-submenu >>> .el-menu,
    .el-menu--inline,
    .el-menu{
        background: none;
    }

    .el-submenu >>> .el-submenu__title:hover,
    .el-submenu >>> .el-submenu__title:focus,
    .el-menu-item:focus,
    .el-menu-item:hover{
        background-color: #FF8D65;
    }
    .el-menu-item:hover a{
        color:#fff;
    }
    .el-menu-item .el-submenu__title,
    .el-menu-item a{
        display: block;
        transition: all .4s;
    }
    .side >>> .el-submenu__title:hover,
    .side >>> .el-submenu__title:hover i{
        color: #fff;
    }
    .side >>> .el-submenu__title i{
        transition: all .4s;
    }
    .side{
        position: relative;
        height: 100%;
    }
    .side-bottom{
        width: 100%;
        box-sizing: border-box;
        padding: 0 .3rem;
        text-align: center;
        margin-top: 1rem;
    }
    .side-bottom h2{
        background-color: #FD4249;
        border-radius: 4px;
        font-weight: normal;
    }
    .side-bottom h2 a{
        color:#fff;
        display: block;
        font-size: .16rem;
        line-height: .4rem;
    }
    .side-bottom h2 a i{
        font-size: .2rem;
        padding-right: .05rem;
    }
    .side-bottom p{
        font-size: .14rem;
        color:#A7B1C2;
        margin: .05rem 0;
    }
    .side-bottom h4{
        color:#323A46;
        font-size: .2rem;
        font-weight: normal;
    }
</style>