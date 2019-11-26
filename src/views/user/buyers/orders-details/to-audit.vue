<template>
<!--  待审核 ---订单详情  -->
    <div class="toAudit">
        <div>
            <pageTitle></pageTitle>
            <div class="toAudit-main">
                <orderInfo></orderInfo>
                <div class="contact-customer-service">
                    <el-image :src="src"></el-image>
                    <h4>为确保正常交易，请先联系客服确认此网站有无异常</h4>
                    <el-button>联系专属客服</el-button>
                    <p>客服时间：9:00-19:00</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import pageTitle from '@/components/pageTitle'
    import orderInfo from '@/components/order-info'
    export default {
        name:'toAudit',
        data(){
            return{
                src:require('@/assets/image/icon/data.png'),
            }
        },
        components:{
            pageTitle,orderInfo
        },
    }
</script>
<style type="text/css" scoped>
    .toAudit >>> .pageTitle>div{
        width: 100%;
    }
    .toAudit >>> .order-details-info h2{
        display: none;
    }
</style>
<style type="text/less" lang="less" scoped>
    .toAudit{
        .pageTitle{
            border-bottom: 20px solid #f4f7f9;
            box-sizing: border-box;
            padding: 0 .2rem;
        }
        .toAudit-main{
            box-sizing: border-box;
            padding: 0.4rem 1rem;
            .contact-customer-service{
                text-align: center;
                padding: .3rem 0 1rem 0;
                font-size: .14rem;
                color: #999;
                border: 1px solid #e0e0e0;
                margin-top: .2rem;
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
</style>