<template>
<!--  代付款  -->
    <div class="payment">
        <pageTitle></pageTitle>
        <div>
            <orderDetailsTemplate></orderDetailsTemplate>
        </div>
    </div>
</template>
<script>
    import pageTitle from '@/components/pageTitle'
    import orderDetailsTemplate from '@/components/order-details-template'

    export default {
        name:'payment',
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
    .payment >>> .pageTitle>div{
        width: 100%;
    }
    .payment >>> .order-details-info h2{
        display: none;
    }
</style>
<style type="text/less" lang="less" scoped>
    .payment{
        .pageTitle{
            border-bottom: 20px solid #f4f7f9;
            box-sizing: border-box;
            padding: 0 .2rem;
        }

    }
</style>