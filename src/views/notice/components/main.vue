<template>
    <div class="holistic w1200">
        <div class="flex">
            <div class="holistic-main">
                <div class="holistic-main-title">
                    <h2>{{title}}</h2>
                    <p>{{time}} / 准买网</p>
                    <div class="mainBody" v-html="content"></div>
                    <div class="footer">
                        <el-link :underline="false"><i>上一条：</i>{{prev}}</el-link><br/>
                        <el-link :underline="false"><i>下一条：</i>{{next}}</el-link>
                    </div>
                </div>
            </div>
            <div class="holistic-list">
                <h3>热门推荐</h3>
                <div class="holistic-lists">
                    <el-link v-for="(item,index) in list" :underline="false">
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
                title:'致准买网所有的买家',
                time:'2018.11.13 15:36',
                content:'在设计环节中，对于视觉次序的营造是每个设计师所必须精通的，视觉次序也可以理解为视觉层次，它是设计中的必然，无论是海报设计还是页面设计，从整体来看总会有强弱、主次之分，因为有了视觉上的变化，才使得整体更富有层次感。从大体来说：当用户在浏览信息很多的网页时，作为设计师要做到，即使用户只是简单的浏览，也要有能在用户脑海中形成记忆的视觉元素而这些元素就是视觉中的主，而当用户仔细阅读时才能记忆到的元素才是视觉上的次。从局部来说，要能在视觉上形成先后顺序。这期的内容就是设计中体现视觉次序手法有哪些？这些也是打破版式的常用手法。',
                prev:'京东内部资料：超好用的用户体验提升模型',
                next:'语音交互是不是越快越好？这篇干货给你答案',
                list:[
                    { id:1,title:'1个小技巧，让你的视觉层次6个小技巧，让你的视觉层次' },
                    { id:1,title:'2个小技巧，让你的视觉层次6个小技巧，让你的视觉层次' },
                    { id:1,title:'3个小技巧，让你的视觉层次6个小技巧，让你的视觉层次' },
                    { id:1,title:'4个小技巧，让你的视觉层次6个小技巧，让你的视觉层次' },
                    { id:1,title:'5个小技巧，让你的视觉层次6个小技巧，让你的视觉层次' },
                    { id:1,title:'6个小技巧，让你的视觉层次6个小技巧，让你的视觉层次' },
                    { id:1,title:'7个小技巧，让你的视觉层次6个小技巧，让你的视觉层次' },
                    { id:1,title:'8个小技巧，让你的视觉层次6个小技巧，让你的视觉层次' },
                ]
            }

        }
    }
</script>
<style lang="less" type="text/less" scoped>
    .holistic{
        box-sizing: border-box;
        padding: 0.3rem;
        margin: 0.5rem auto 2rem auto;
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