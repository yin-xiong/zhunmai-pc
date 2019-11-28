<template>
    <div class="holistic w1200">
        <div class="flex">
            <div class="holistic-main">
                <div class="holistic-main-title">

                    <div v-if="extFlag">
                        <h2>{{title}}</h2>
                        <p>{{time}} / 准买网</p>
                        <div class="mainBody" v-html="content"></div>
                    </div>
                    <div v-if="!extFlag">
                        <div class="nodata tac">
                            <el-image :src="nodata"></el-image>
                            <p>暂无数据</p>
                        </div>
                    </div>

                    <div class="footer">
                        <el-link v-if="prevFlag" :href=" '/notice?id=' + prevId" :underline="false"><i>上一条：</i>{{prev}}</el-link>
                        <br/>
                        <el-link v-if="nextFlag" :href=" '/notice?id=' + nextId" :underline="false"><i>下一条：</i>{{next}}</el-link>
                    </div>
                </div>
            </div>
            <div class="holistic-list">
                <h3>热门推荐</h3>
                <div class="holistic-lists">
                    <el-link v-for="(item,index) in list" :underline="false" :href=" '/notice?id='+ item.id">
                        {{item.title.substring(0,13)+'...'}}
                    </el-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"noticeMain",
        data(){
            return{
                title:'',
                time:'',
                content:'',
                extFlag:true,
                nodata:require('@/assets/image/icon/nodata.png'),
                prev:'',
                prevId:'',
                prevFlag:true,
                next:'',
                nextId:'',
                nextFlag:true,
                list:[]
            }

        },
        methods:{
            async getNoticeInfo(id){
                var data = {
                    id:id
                }
                let response = await this.$api.adsdetails(data)
                console.log(response);
                if(response.ads.length > 0){
                    this.title = response.ads[0].title
                    this.time = response.ads[0].create_time
                    this.content = response.ads[0].content
                }else{
                    this.extFlag = false
                }


                if(response.previous.length > 0){
                    this.prev = response.previous[0].title
                    this.prevId = response.previous[0].id
                }else{
                    this.prevFlag = false
                }

                if(response.next.length > 0 ){
                    this.next = response.next[0].title
                    this.nextId = response.next[0].id
                }else{
                    this.nextFlag = false
                }

            },

            //  获取公告
            async getInfo(){
                let response = await this.$api.ads()
                console.log(response);
                this.list = response.ads
            },
        },
        mounted(){
            console.log(this.$route.query.id);
            let nid = this.$route.query.id
            this.getNoticeInfo(nid)
            this.getInfo()
        }
    }
</script>
<style lang="less" type="text/less" scoped>
    .holistic{
        box-sizing: border-box;
        padding: 0.3rem;
        margin: 0 auto 2rem auto;
        background-color: #fff;
        .flex{
            height: 100%;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: nowrap;
            .holistic-main{
                position: relative;
                width: 65%;
                overflow: hidden;
                .holistic-main-title{
                    min-height: 6rem;
                    h2{
                        font-size: .3rem;
                        color: #333;
                        font-weight: normal;
                    }
                    >p{
                        margin: 0.14rem 0;
                        font-size: .16rem;
                        color: #999;
                    }
                    .mainBody{
                        margin: 0.2rem 0;
                    }
                    .nodata{
                        margin: 0.5rem auto;
                    }
                    .footer{
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 0.3rem;
                        :hover{color:#FF5D24;}
                    }
                }
            }
            .holistic-list{
                width: 18%;
                overflow: hidden;
                h3{
                    position: relative;
                    color: #666;
                    font-weight: normal;
                    font-size: .16rem;
                    padding:0 0 0.1rem 0;
                    margin-bottom: 0.1rem;
                    &:after{
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 40%;
                        height: 1px;
                        background-color: #FF5D24;
                    }
                }
                .holistic-lists{
                    a{
                        display: block;
                        margin: 6px 0;
                        white-space: nowrap;
                        font-size: .14rem;
                        color: #666;
                        transition:all .4s;
                        :hover{
                            color: #FF5D24;
                        }
                    }
                }
            }
        }


    }
</style>