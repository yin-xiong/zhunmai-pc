<template>
    <div class="payInfo">
        <div>
            <headerTop></headerTop>
            <orderHead></orderHead>
            <div class="pay-main">
                <div class="w1200">
                    <div class="pay-main-info">
                        <paySuccess v-if="flagSuccess"></paySuccess>
                        <payFail v-if="flagFail"></payFail>
                    </div>
                </div>
            </div>
            <!--   底部信息区域     -->
            <footContent></footContent>
            <!--   底部备案区域     -->
            <fixed></fixed>
        </div>
    </div>
</template>
<script>
    import headerTop from '@/components/top'
    import footContent from '@/components/footer'
    import orderHead from '../components/order-head'
    import orderInfo from '../components/order-info'
    import paySuccess from '../components/pay-success'
    import payFail from '../components/pay-fail'
    import fixed from '@/components/fix'

    export default {
        name:'pay',
        data(){
            return{
                src:require('@/assets/image/icon/data.png'),
                flagSuccess:true,
                flagFail:false,
            }
        },
        components:{
            headerTop,orderHead,footContent,fixed,orderInfo,paySuccess,payFail
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .payInfo{
        .pay-main{
            padding: 0.6rem 0 2rem 0;
            .pay-main-info{
                background-color: #fff;
                height: 3rem;
            }
        }
    }
</style>