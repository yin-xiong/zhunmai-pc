<template>
    <div class="common-problem w1200">
<!--        资费说明-->
        <div class="flex">
            <div class="problem-left">
                <div class="problem-left-top">
                    <div class="flex">
                        <h3 :class="problemIcon"></h3>
                        <div>
                            <h4>{{problemTitle}}</h4>
                            <p>{{problemDesc}}</p>
                        </div>
                    </div>
                </div>
                <div class="problem-left-list">
                    <ul>
                        <li
                            :class="isActive == item.index ? 'active' : '' "
                            v-for="(item,index) in problemNameList"
                            @click="getDetails(item.index)"
                        >
                            <span class="one-txt-cut">
                                <i class="iconfont icon-changjianwenti-lingxing"></i>{{item.title}}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="problem-right">
                <ul v-if=" isActive ==item.index ? true : false " v-for="(item,index) in problemMainList">
                    <li v-if="item.main" v-for="lists in item.main">
                        <h3>{{lists.title}}</h3>
                        <div v-html="lists.content"></div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'charges',
        data() {
            return {
                isActive:0,
                problemIcon:'iconfont icon-fuwu',
                problemTitle:'资费说明',
                problemDesc:'为您解决烦忧，准买势在必行!',
                problemNameList:[
                    {
                        index:0,
                        title:'买家帮助买家帮助买家帮助买家帮助买家帮助买家帮助'
                    },
                    {
                        index:1,
                        title:'卖家帮助'
                    }
                ],
                problemMainList:[
                    {
                        index:0,
                        main:[
                            {id:0,title:'一、交易流程',content:'网站交易涉及内容比较多，比如域名转移，过户，数据交接及双方核实等，一般默认周期在1-15天，具体交易周期以买家确认网站接受完全，卖家收到网站款项为交易结束时间。'},
                            {id:1,title:'二、交易周期',content:'网站交易涉及内容比较多，比如域名转移，过户，数据交接及双方核实等，一般默认周期在1-15天，具体交易周期以买家确认网站接受完全，卖家收到网站款项为交易结束时间。'},
                            {id:2,title:'三、交易注意事项',content:'网站交易涉及内容比较多，比如域名转移，过户，数据交接及双方核实等，一般默认周期在1-15天，具体交易周期以买家确认网站接受完全，卖家收到网站款项为交易结束时间。'},
                            {id:3,title:'四、域名',content:'网站交易涉及内容比较多，比如域名转移，过户，数据交接及双方核实等，一般默认周期在1-15天，具体交易周期以买家确认网站接受完全，卖家收到网站款项为交易结束时间。'}
                        ]
                    },
                    {
                        index:1,
                        main:[
                            {
                                id:0,title:'卖家问题1',content:'卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1'
                            },
                            {
                                id:1,title:'卖家问题2',content:'卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1'
                            },
                            {
                                id:2,title:'卖家问题3',content:'卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1'
                            },
                            {
                                id:3,title:'卖家问题4',content:'卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1卖家问题1'
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            getDetails(index){
                this.isActive = index
            }
        }
    };
</script>
<style lang="less" type="text/less" scoped>
    .common-problem {
        height: auto;
        min-height: 6rem;
        padding-bottom: 1.2rem;
        >.flex{
            width: 100%;
            height: 100%;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: nowrap;
            .problem-left{
                width: 2.5rem;
                background-color: #fff;
                .problem-left-top{
                    background-color: #FF7240;
                    width: 100%;
                    height: 1rem;
                    .flex{
                        width: 100%;
                        height: 100%;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: nowrap;
                        color: #fff;
                        box-sizing: border-box;
                        padding:0 .2rem;
                        h3{
                            font-weight: normal;
                            font-size: .3rem;
                        }
                        h4{
                            font-size: .2rem;
                            font-weight: normal;
                        }
                        p{
                            font-size: .12rem;
                        }
                    }
                }
                .problem-left-list{
                    width: 100%;
                    ul{
                        li{
                            width: 100%;
                            height: .7rem;
                            background-color: #fff;
                            transition: all .4s;
                            span{
                                box-sizing: border-box;
                                padding: 0 0.2rem;
                                display: block;
                                width: 100%;
                                height: 100%;
                                line-height: .7rem;
                                font-size: .18rem;
                                color: #333;
                                i{
                                    transition: all .4s;
                                }
                            }
                            &:hover{
                                background-color: rgba(255, 114, 64, 0.1);
                                i{
                                    color: #FF5D24;
                                }
                            }
                        }
                        li.active{
                            background-color: rgba(255, 114, 64, 0.1);
                            i{
                                color: #FF5D24;
                            }
                        }
                    }
                }
            }
            .problem-right{
                width: 9.3rem;
                height: 100%;
                box-sizing: border-box;
                padding: 0 .4rem;
                background-color: #fff;
                ul{
                    overflow: hidden;
                    li{
                        margin-top: .3rem;
                        h3{
                            position: relative;
                            display: inline-block;
                            padding-right: 2rem;
                            font-weight: normal;
                            font-size: .18rem;
                            height: .4rem;
                            line-height: .4rem;
                            padding-left: 0.24rem;
                            background:linear-gradient(90deg,rgba(237,240,242,1),rgba(253,253,253,1));
                            &:before{
                                content: '';
                                position: absolute;
                                left: 0;
                                top: 0;
                                bottom: 0;
                                width: 2px;
                                background-color: #999;
                            }
                        }
                        >div{
                            padding: 0.2rem;
                        }
                    }
                }
            }
        }
    }

</style>