<template>
    <div class="officialBooking">
        <headerTop></headerTop>
        <headCont></headCont>
        <menuList></menuList>
        <div style="height: 7rem;">
            我是官方代售首页，暂时没有内容
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
        name: 'officialBooking',
        components:{
            headerTop,headCont,menuList,footContent,fixed
        },

    }
</script>