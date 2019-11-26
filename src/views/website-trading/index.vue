<template>
    <div class="websiteTrading">
        <headerTop></headerTop>
        <headCont></headCont>
        <menuList></menuList>
        <div style="height: auto;">
            <pageTitle></pageTitle>
            <selectConditions></selectConditions>
            <div class="w1200">
                <sorting></sorting>
                <list></list>
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
    import sorting from '../../components/sorting'
    import list from '../../components/list'
    import selectConditions from './select-conditions/selectConditions'
    import footContent from '../../components/footer'
    import fixed from '../../components/fix'

    export default {
        name: 'websiteTrading',
        components:{
            headerTop,headCont,menuList,pageTitle,selectConditions,sorting,list,footContent,fixed
        },

    }
</script>