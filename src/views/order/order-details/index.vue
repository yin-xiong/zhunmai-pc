<template>
    <div class="">
        <headerTop></headerTop>
        <headCont></headCont>
        <menuList></menuList>
        <div class="order-details">
            <div class="w1200">
                <pageTitle></pageTitle>
                <orderDetailsTemplate></orderDetailsTemplate>
            </div>
        </div>
        <footContent></footContent>
        <fixed></fixed>
    </div>
</template>
<script>
    import headerTop from '@/components/top'
    import headCont from '@/components/head'
    import menuList from '@/components/menu'
    import pageTitle from '@/components/pageTitle'
    import orderDetailsTemplate from '@/components/order-details-template'
    import footContent from '@/components/footer'
    import fixed from '@/components/fix'

    export default {
        name:'orderDetails',
        data(){
            return{
                isActive:4,
                websiteStyle:['女性时尚','游戏影音','生活娱乐'],
                steps:['拍下商品',"确认订单","支付金额","联系卖家交易","交易成功"],
                flagComplete:true,
            }
        },
        components:{
            headerTop,headCont,menuList,footContent,fixed,pageTitle,orderDetailsTemplate
        },
        methods:{
            complete(){
                this.flagComplete = false
            }
        }
    }


</script>
