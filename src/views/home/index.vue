<template>
    <div class="index">
        <headerTop></headerTop>
        <headCont></headCont>
        <menuList></menuList>
        <banner></banner>
        <div style="height: 7rem;">
            我是首页，暂时没有内容
        </div>
        <footContent></footContent>
        <fixed></fixed>
    </div>
</template>
<script>
    import headerTop from '../../components/top'
    import headCont from '../../components/head'
    import menuList from '../../components/menu'
    import banner from './banner/banner'
    import footContent from '../../components/footer'
    import fixed from '../../components/fix'

    export default {
        name: 'index',
        components:{
            headerTop,headCont,menuList,footContent,fixed,banner
        }
    }
</script>
