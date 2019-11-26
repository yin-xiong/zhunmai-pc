<template>
    <!--  订单生成  -->
    <div class="order-generate">
        <div>
            <headerTop></headerTop>
            <orderHead></orderHead>
            <div class="order-generate-main">
                <div class="w1200">
                    <orderInfo></orderInfo>
                    <div class="contact-customer-service">
                        <el-image :src="src"></el-image>
                        <h4>为确保正常交易，请先联系客服确认此网站有无异常</h4>
                        <el-button>联系专属客服</el-button>
                        <p>客服时间：9:00-19:00</p>
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
    import fixed from '@/components/fix'

    export default {
        name:'orderConfirmation',
        data(){
            return{
                src:require('@/assets/image/icon/data.png'),
            }
        },
        components:{
            headerTop,orderHead,footContent,fixed,orderInfo
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .order-generate{
        .order-generate-main{
            .w1200{
                box-sizing: border-box;
                margin: 0.6rem auto;
                background-color: #fff;
                .contact-customer-service{
                    text-align: center;
                    padding: .3rem 0 1rem 0;
                    font-size: .14rem;
                    color: #999;
                    h4{
                        font-size: .2rem;
                        color: #333;
                    }
                    .el-button{
                        margin: 0.1rem 0;
                    }
                    button{
                        background-color: #FD4249;
                        color: #fff;
                    }
                }
            }

        }
    }
</style>