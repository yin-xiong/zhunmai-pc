<template>
    <div class="order-head">
        <div>
            <div class="w1200 flex order-head-main">
                <div class="nav-logo">
                    <router-link to="/">
                        <el-image :src="src"></el-image>
                    </router-link>
                </div>
                <div class="order-head-steps">
                    <el-steps :active="isActive" align-center>
                        <el-step v-for="item in steps" :title="item"></el-step>
                    </el-steps>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'orderHead',
        data(){
            return{
                src:require('@/assets/image/icon/logo.png'), // logo图片
                isActive:2,
                steps:['拍下商品',"确认订单","支付金额","联系卖家交易","交易成功"]
            }
        }
    }
</script>
<style scoped>
    .order-head-steps >>> .el-step .el-step__title{
        font-weight: normal;
        color: #999;
        font-size: .14rem;
    }
    .order-head-steps >>> .el-step__head.is-finish{
        color: #fff;
        border-color: #FF5D24;
    }
    .order-head-steps >>> .el-step__head.is-finish .el-step__icon{
        background-color: #FF5D24;
    }
    .order-head-steps >>> .el-step__head .el-step__icon,
    .order-head-steps >>> .el-step__head.is-process .el-step__icon{
        border: none;
        background-color: #e0e0e0;
        color: #fff;
    }
</style>
<style type="text/less" lang="less" scoped>
    .order-head{
        height: 1.2rem;
        background-color: #fff;
        >div{
            height: 100%;
            .order-head-main{
                height: 100%;
                justify-content: space-between;
                align-items: center;
                flex-wrap: nowrap;
                .order-head-steps{
                    width: 60%;
                }
            }
        }

    }
</style>