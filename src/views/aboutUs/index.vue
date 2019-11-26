<template>
    <div class="news">
        <headerTop></headerTop>
        <headCont></headCont>
        <menuList></menuList>
        <pageBanner></pageBanner>
        <pageTitle></pageTitle>
        <div style="background-color: #fff;">
            <aboutMain></aboutMain>
        </div>
        <footContent></footContent>
        <fixed></fixed>
    </div>
</template>
<script>
    import headerTop from '../../components/top'
    import headCont from '../../components/head'
    import menuList from '../../components/menu'
    import pageBanner from '../../components/pageBanner'
    import pageTitle from '../../components/pageTitle'
    import aboutMain from './components/aboutMain'
    import footContent from '../../components/footer'
    import fixed from '../../components/fix'

    export default {
        name: 'news',
        components:{
            headerTop,headCont,menuList,pageBanner,pageTitle,aboutMain,footContent,fixed
        },

    }
</script>