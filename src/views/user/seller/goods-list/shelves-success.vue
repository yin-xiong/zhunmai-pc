<template>
<!--  上架成功  -->
    <div class="shelves-success">
        <pageTitle></pageTitle>
        <div>
            上架成功
        </div>
    </div>
</template>
<script>
    import pageTitle from '@/components/pageTitle'

    export default {
        name:'shelvesSuccess',
        data(){
            return{

            }
        },
        components:{
            pageTitle
        },
    }
</script>
<style type="text/css" scoped>
    .shelves-success >>> .pageTitle>div{
        width: 100%;
    }
    .shelves-success >>> .order-details-info h2{
        display: none;
    }
</style>
<style type="text/less" lang="less" scoped>
    .shelves-success{
        .pageTitle{
            border-bottom: 20px solid #f4f7f9;
            box-sizing: border-box;
            padding: 0 .2rem;
        }
    }
</style>