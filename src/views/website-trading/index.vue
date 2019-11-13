<template>
    <div class="websiteTrading">
        <headerTop></headerTop>
        <headCont></headCont>
        <menuList></menuList>
        <div style="height: 7rem;">
            我是网站交易首页，暂时没有内容
        </div>
        <footContent></footContent>
        <fixed></fixed>
    </div>
</template>
<script>
    import headerTop from '../../components/top'
    import headCont from '../../components/head'
    import menuList from '../../components/menu'
    import footContent from '../../components/footer'
    import fixed from '../../components/fix'

    export default {
        name: 'websiteTrading',
        components:{
            headerTop,headCont,menuList,footContent,fixed
        },

    }
</script>