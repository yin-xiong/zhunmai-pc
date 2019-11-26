<template>
<!--  交易中  -->
    <div class="trading-ing">
        <pageTitle></pageTitle>
        <div class="trading-ing-main">
            <orderDetailsTemplate></orderDetailsTemplate>
        </div>
    </div>
</template>
<script>
    import pageTitle from '@/components/pageTitle'
    import orderDetailsTemplate from '@/components/order-details-template'

    export default {
        name:'tradingIng',
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
    .trading-ing >>> .pageTitle>div{
        width: 100%;
    }
    .trading-ing >>> .order-details-info h2{
        display: none;
    }
</style>
<style type="text/less" lang="less" scoped>
    .trading-ing{
        box-sizing: border-box;
        .pageTitle{
            border-bottom: 20px solid #f4f7f9;
            box-sizing: border-box;
            padding: 0 .2rem;
        }
        .trading-ing-main{
            box-sizing: border-box;
            padding: .1rem 1.7rem;
        }
    }
</style>