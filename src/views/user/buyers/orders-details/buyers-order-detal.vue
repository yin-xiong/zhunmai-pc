<template>
<!--  正在交易的订单详情  -->
    <div class="buyers-order-detal">
        <div>
            <pageTitle></pageTitle>
            <div class="buyers-order-detal-main">
                <orderDetailsTemplate></orderDetailsTemplate>
            </div>
        </div>
    </div>
</template>
<script>
    import pageTitle from '@/components/pageTitle'
    import orderDetailsTemplate from '@/components/order-details-template'
    export default {
        name:'buyersOrderDetal',
        data(){
            return{

            }
        },
        components:{
            pageTitle,orderDetailsTemplate
        },
    }
</script>
<style type="text/css" scoped>
    .buyers-order-detal >>> .pageTitle>div{
        width: 100%;
    }
    .buyers-order-detal >>> .order-details-info h2{
        display: none;
    }
</style>
<style type="text/less" lang="less" scoped>
    .buyers-order-detal{
        .pageTitle{
            border-bottom: 20px solid #f4f7f9;
            box-sizing: border-box;
            padding: 0 .2rem;
        }
        .buyers-order-detal-main{
            box-sizing: border-box;
            padding: .4rem 1rem;
        }
    }
</style>