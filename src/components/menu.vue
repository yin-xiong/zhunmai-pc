<template>
    <div class="menu-list">
        <div class="w1200 flex">

            <router-link
                    v-for="(item,index) in list"
                    :to="item.path"
                    :class="active == index ? 'active': '' "
            >
                <i v-if="item.icon" :class="item.icon"></i>
                {{item.title}}
            </router-link>

        </div>
    </div>
</template>
<script>
    export default {
        name:'menuList',
        data(){
            return{
                active:0,
                list:[
                    {path:'/',title:'首页',icon:'iconfont icon-shouye1'},
                    {path:'/websiteTrading',title:'网站交易'},
                    {path:'/officialBooking',title:'官方代售'},
                    {path:'/news',title:'新闻动态'},
                    {path:'/aboutUs',title:'关于我们'},
                    {path:'/accountSet',title:'个人中心'},
                ],
            }
        },
        methods:{
            changeMenu(index){
                this.active = index
            }
        },
        mounted(){
            this.active = this.$route.meta.index
        },
    }
</script>
<style lang="less" type="text/less" scoped>
    .menu-list{
        background-color: #fff;
        .flex{
            justify-content: flex-start;
            align-items: center;
            height: 0.4rem;
            a{
                width: 12%;
                text-align: center;
                color: #4c4c4c;
                transition: all .4s;
                &:hover{color: #FF5D24;}
            }
            :nth-child(4){
                display: none;
            }
            a.active{
                color: #FF5D24;
            }
        }
    }
</style>