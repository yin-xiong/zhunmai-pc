<template>
    <div class="">
        <headerTop></headerTop>
        <headCont></headCont>
        <menuList></menuList>
        <div class="details">
            <div class="w1200">
                <pageTitle></pageTitle>
                <detailsInfo></detailsInfo>
            </div>
        </div>
        <footContent></footContent>
        <fixed></fixed>
    </div>
</template>
<script>
    import headerTop from '../../components/top'
    import headCont from '../../components/head'
    import menuList from '../../components/menu'
    import pageTitle from '../../components/pageTitle'
    import detailsInfo from './detailsInfo/detailsInfo'
    import footContent from '../../components/footer'
    import fixed from '../../components/fix'


    export default {
        name:'detail',
        data(){
            return{
                detailsContent:[]
            }
        },
        components:{
            headerTop,headCont,menuList,footContent,fixed,pageTitle,detailsInfo
        },
        methods:{

        },
        mounted(){

        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .details{

    }
</style>