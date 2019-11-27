<template>
    <div class="index">
        <!--   顶部登录区域     -->
        <headerTop></headerTop>
        <!--   顶部搜索内容区域     -->
        <headCont></headCont>
        <!--   导航区域     -->
        <menuList></menuList>
        <!--   广告图区域     -->
        <banner></banner>
        <!--   内容区域     -->
        <div class="homeMain w1200">
            <!--   我要买站---委托交易     -->
            <buyWebsite></buyWebsite>
            <!--   交易快报     -->
<!--            <trading></trading>-->
            <!--   精选推荐----热门网站     -->
            <hotWebsite></hotWebsite>
            <!--   常见问题     -->
            <problem></problem>
            <!--   金牌经纪人     -->
            <broker></broker>
            <!--   网站信息简介     -->
            <websiteInfo></websiteInfo>
        </div>
        <!--   底部信息区域     -->
        <footContent></footContent>
        <!--   底部备案区域     -->
        <fixed></fixed>
    </div>
</template>
<script>
    import headerTop from '../../components/top'
    import headCont from '../../components/head'
    import menuList from '../../components/menu'
    import banner from './banner/banner'
    import buyWebsite from './buy-website/buyWebsite'
    import trading from './trading/trading'
    import hotWebsite from './hot-website/hotWebsite'
    import problem from './problem/problem'
    import broker from './broker/broker'
    import websiteInfo from './website-info/websiteInfo'
    import footContent from '../../components/footer'
    import fixed from '../../components/fix'

    export default {
        name: 'index',
        components:{
            headerTop,headCont,menuList,footContent,fixed,banner,buyWebsite,trading,hotWebsite,problem,broker,websiteInfo
        }
    }
</script>
<style lang="less" type="text/less" scoped>
    .homeMain{
        height: auto;
        overflow: hidden;
        >div{
            margin-top: .4rem;
            &:last-child{
                margin-bottom: 2rem;
            }
        }
    }
</style>
