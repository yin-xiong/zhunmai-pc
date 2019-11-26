<template>
    <div class="setTitle flex">
        <el-link
                :underline="false"
                :href="item.path"
                v-for="(item,index) in list"
                :class="isActive == item.index ? 'active': '' "
        >
            {{item.title}}
        </el-link>
    </div>
</template>
<script>

    export default {
        name:'setTitle',
        data(){
            return{
                isActive:0,
                list:[
                    {title:'个人资料',path:'/accountSet',index:1},
                    {title:'修改密码',path:'/fixpwd',index:2},
                    // {title:'实名认证',path:'/card',index:3},
                    // {title:'修改手机号',path:'/fixphone',index:4},
                ]
            }
        },
        mounted(){
            var strIndex = this.$route.meta.index
            this.isActive = strIndex.substring(2,3)
        },

    }
</script>
<style type="text/less" lang="less" scoped>
    .setTitle{
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        height: .7rem;
        border-bottom: 1px solid #E0E0E0;
        a{
            position: relative;
            display: inline-block;
            line-height: .7rem;
            color: #6E768E;
            margin:0 .2rem;
            transition: all .4s;
            &:hover{
                color: #FF5D24;
            }
        }
        a.active{
            color:#FF5D24;
            &:after{
                content: '';
                position: absolute;
                left: -30%;
                bottom: 0;
                height: 2px;
                width: 160%;
                background-color: #FF5D24;
            }
        }
    }
</style>