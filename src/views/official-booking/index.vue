<template>
    <div class="officialBooking">
        <headerTop></headerTop>
        <headCont></headCont>
        <menuList></menuList>
        <div class="officialMain">
            <div class="w1200">
                <div class="officialMainTop">
                    <el-image class="daishou" :src="src1"></el-image>
                    <div class="tac officialMainTopIinfo">
                        <h4>服务费仅需2.5%</h4>
                        <el-image class="webLogo" :src="src2"></el-image>
                        <h3>专人谈价 服务保障</h3>
                        <p class="booking ">
                            <router-link to=""><el-image :src="src3"></el-image></router-link>
                        </p>
                    </div>
                </div>
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
    import list from '../../components/list'
    import sorting from '../../components/sorting'
    import footContent from '../../components/footer'
    import fixed from '../../components/fix'

    export default {
        name: 'officialBooking',
        components:{
            headerTop,headCont,menuList,list,sorting,footContent,fixed
        },
        data(){
            return{
                src1:require('@/assets/image/icon/daishou.png'),
                src2:require('@/assets/image/icon/webtitle.png'),
                src3:require('@/assets/image/icon/qudaishou.png'),
            }
        }

    }
</script>
<style type="text/css" scoped>
    .officialMain >>> .page .el-pagination__total,
    .officialMain >>> .page .el-pagination__jump{
        color: #fff;
    }
</style>
<style lang="less" type="text/less" scoped>
    .officialMain{
        box-sizing: border-box;
        overflow: hidden;
        background: url("../../assets/image/icon/pic_com_mission.jpg") no-repeat;
        background-attachment: fixed;
        background-size: cover;
        .officialMainTop{
            position: relative;
            .daishou{
                text-align: left;
            }
            .officialMainTopIinfo{
                color: #fff;
                h4{
                    font-size: 0.16rem;
                    font-weight: normal;
                    width:1.5rem;
                    line-height:.36rem;
                    background:rgba(64,75,166,1);
                    border:2px solid;
                    border-image:radial-gradient(circle, rgba(24,73,187,1), rgba(75,184,241,1)) 2 2;
                    border-radius:5px;
                    margin: 0 auto;
                }
                .webLogo{
                    margin: .1rem 0;
                }
                h3{
                    font-size:30px;
                    font-weight:400;
                    text-shadow:0px 6px 6px rgba(2, 50, 7, 0.35);
                    margin-bottom: .2rem;
                }
                .booking{
                    overflow: hidden;
                    margin:0 auto .7rem auto;
                    a{

                    }
                }
            }

        }

    }
</style>