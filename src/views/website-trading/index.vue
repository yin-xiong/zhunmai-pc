<template>
    <div class="websiteTrading">
        <headerTop></headerTop>
        <headCont></headCont>
        <menuList></menuList>
        <div style="height: auto;">
            <pageTitle></pageTitle>
            <selectConditions :websitestyle="websitestyle"></selectConditions>
            <div class="w1200">
                <sorting :sortings="sortings"></sorting>
                <list v-if="lists.length > 0" :lists="lists"></list>
                <div v-else class="nodata tac overflow" style="background-color: #fff;padding: .2rem 0;margin: .2rem 0; ">
                    <el-image :src="nodata"></el-image>
                    <p>暂无数据</p>
                </div>
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
        data(){
            return{
                nodata:require('@/assets/image/icon/nodata.png'),
                sortings:[
                    {index:0,id:1,title:'综合排序',},
                    {index:1,id:1,title:'价格排序',},
                    {index:2,id:1,title:'权重排序',},
                ],
                websitestyle:[], // 网站分类
                lists:[],// 列表数据
            }
        },
        components:{
            headerTop,headCont,menuList,pageTitle,selectConditions,sorting,list,footContent,fixed
        },
        methods:{
            async getPersonalwebsiteInfo(){
                let response = await this.$api.personalwebsite()
                console.log(response);
                this.lists = response.list
                this.websitestyle = response.websitestyle
            },
            setData(data){
                this.lists = data
            }
        },
        mounted(){
            this.getPersonalwebsiteInfo()
        }

    }
</script>