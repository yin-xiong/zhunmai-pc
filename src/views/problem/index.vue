<template>
<!--  常见问题--资费说明--服务中心 页面  -->
    <div class="problems">
        <headerTop></headerTop>
        <headCont></headCont>
        <menuList></menuList>
        <pageBanner></pageBanner>
        <pageTitle></pageTitle>
        <div>
            <problemMain v-if="falg1"></problemMain>
            <charges v-if="falg2"></charges>
            <serviceCenter v-if="falg3"></serviceCenter>
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

    import problemMain from './components/problems'
    import charges from './components/charges'
    import serviceCenter from './components/serviceCenter'

    import footContent from '../../components/footer'
    import fixed from '../../components/fix'

    export default {
        name: 'problems',
        components:{
            headerTop,headCont,menuList,pageBanner,pageTitle,charges,serviceCenter,problemMain,footContent,fixed
        },
        data(){
            return{
                falg1:true,
                falg2:false,
                falg3:false,
            }
        },
        methods:{
            changeNowView(id){
                if(id){
                    if(id == 1){
                        this.falg1 = true
                        this.falg2 = false
                        this.falg3 = false
                    }
                    if(id == 2){
                        this.falg1 = false
                        this.falg2 = true
                        this.falg3 = false
                    }
                    if(id == 3){
                        this.falg1 = false
                        this.falg2 = false
                        this.falg3 = true
                    }
                }else{
                    this.falg1 = true
                }

            }
        },
        mounted(){
            var id = this.$route.query.id
            this.changeNowView(id)
        },
        watch: {
            '$route' (to, from) {
                this.changeNowView(this.$route.query.id)
            }
        }

    }
</script>