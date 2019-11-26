<template>
    <div class="trading">
        <div class="flex">
            <el-image :src="src"></el-image>
            <div class="tradingInfo flex">
                <div>昨日交易金额数：<span><nums></nums></span>元 <i class="slash"></i></div>
                <div>昨日交易订单：<span><nums></nums></span>个 <i class="slash"></i></div>
                <div class="">交易动态：<roll></roll></div>
            </div>
        </div>
    </div>
</template>
<script>
    import roll from '../../../components/rolling'
    import nums from '../../../components/number'
    export default {
        name:"trading",
        components:{ nums,roll },
        data(){
            return{
                src:require('@/assets/image/icon/trading.png')
            }
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .trading{
        .flex{
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            .tradingInfo{
                justify-content: space-between;
                align-items: center;
                flex-wrap: nowrap;
                font-size: .14rem;
                font-weight: bold;
                color: #333;
                letter-spacing: 2px;
                div{
                    span{
                        font-size: .16rem;
                        margin: 0 4px;
                    }
                    .slash{
                        display: inline-block;
                        vertical-align: initial;
                        width: 1px;
                        height: .14rem;
                        background-color: #333;
                        margin: 0 .2rem;
                        transform: rotate(30deg);
                    }
                    &:last-child{
                        >div{
                            width: auto;
                            height: .2rem;
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }
</style>