<template>
    <div class="news">
        <headerTop></headerTop>
        <headCont></headCont>
        <menuList></menuList>
        <pageTitle></pageTitle>
        <div>
            <mains></mains>
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

    import mains from './components/main'

    import footContent from '../../components/footer'
    import fixed from '../../components/fix'

    export default {
        name: 'news',
        components:{
            headerTop,headCont,menuList,pageTitle,mains,footContent,fixed
        },

    }
</script>