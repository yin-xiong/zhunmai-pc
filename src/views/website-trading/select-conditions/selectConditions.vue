<template>
    <div class="selectConditions">
        <div class="selectConditions-list w1200">
            <div class="flex">
                <span v-if="selectConditionsAll.length > 0" class="choseTitle">您已选择：</span>
                <span v-else class="choseTitle">您未选择</span>
                <div class="selectConditionsAll">
                    <button
                            v-if="selectConditionsAll.length > 0"
                            v-for="item in selectConditionsAll"
                    >
                        {{item.title}}
                        <i class="iconfont icon-guanbi"></i>
                    </button>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">选择分类：</span>
                <div class="choseClassification flex">
                    <el-button style="margin: 0 0 0 12px;"
                               :class=" isChecked == checkFlag1 ? 'overflow notLimit bgcFF5D24': 'overflow notLimit'"
                               @click="checkedOrder"
                    >
                        不限
                    </el-button>
                    <el-checkbox-group
                            class="dib"
                            v-model="seletChecked.selecIndustryClassification"
                            :min="0"
                            :max="3"
                            :style="setHeight"
                    >
                        <el-checkbox-button
                                v-for="(item,index) in websitestyle"
                                @change="getSelectClassification(item.id,item.title)"
                                :label="item.id"
                                :key="item.id"
                        >
                            {{item.title}}
                        </el-checkbox-button>
                    </el-checkbox-group>
                    <el-button
                            v-if="fromData.IndustryClassification.length > 8"
                            style="vertical-align: top;" class="more dib overflow notLimit"
                            @click="choseMore"
                    >
                        更多 <i :class="falg? Icondown : Iconup"></i>
                    </el-button>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">爱站权重：</span>
                <div class="choseList choseClassification flex">
<!--                    <el-button class="overflow notLimit">不限</el-button>-->
                    <el-radio-group
                            v-for="(item,index) in fromData.lovestation"
                            v-model="seletChecked.selecLovestation"
                            @change="loveSelect(item.index,item.title)"
                    >
                        <el-radio-button :label="item.title"></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">站长权重：</span>
                <div class="choseList choseClassification flex">
<!--                    <el-button class="overflow notLimit">不限</el-button>-->
                    <el-radio-group v-model="seletChecked.selecStationmasters" v-for="(item,index) in fromData.stationmasters">
                        <el-radio-button :label="item.title"></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">价  格：</span>
                <div class="choseList choseClassification flex">
<!--                    <el-button class="overflow notLimit">不限</el-button>-->
                    <el-radio-group v-model="seletChecked.selecPrice">
                        <el-radio-button v-for="(item,index) in fromData.price" :label="item.title"></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">日IP数：</span>
                <div class="choseList choseClassification flex">
<!--                    <el-button class="overflow notLimit">不限</el-button>-->
                    <el-radio-group v-model="seletChecked.selecDayip">
                        <el-radio-button v-for="(item,index) in fromData.dayip" :label="item.title"></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">百度收录：</span>
                <div class="choseList choseClassification flex">
<!--                    <el-button class="overflow notLimit">不限</el-button>-->
                    <el-radio-group v-model="seletChecked.selecBaiduinclude">
                        <el-radio-button v-for="(item,index) in fromData.baiduinclude" :label="item.title"></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">网站收入：</span>
                <div class="choseList choseClassification flex">
<!--                    <el-button class="overflow notLimit">不限</el-button>-->
                    <el-radio-group v-model="seletChecked.selecIncome">
                        <el-radio-button v-for="(item,index) in fromData.income" :label="item.title"></el-radio-button>
                    </el-radio-group>
                </div>
                <div class="flex subPrice">
                    <el-input
                            size="mini"
                            placeholder="请输入内容"
                            v-model="fromData.webPrice1">
                        <i slot="prefix" class="iconfont icon-jinbi"></i>
                    </el-input>
                    <i>至</i>
                    <el-input
                            size="mini"
                            placeholder="请输入内容"
                            v-model="fromData.webPrice2">
                        <i slot="prefix" class="iconfont icon-jinbi"></i>
                    </el-input>
                    <el-button size="mini" plain>确定</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'selectConditions',
        data(){
            return{
                falg:true, //点击更多，显示选择分类的全部内容
                Icondown:'el-icon-arrow-down', // 更多的icon--向下
                Iconup:'el-icon-arrow-up', // 更多的icon--向上
                setHeight:{ height:'50px', },// 选择分类的高度
                isChecked:true, // 判断选择分类的class 添加 bgcFF5D24
                checkFlag1:true,// 判断选择分类的class 添加 bgcFF5D24
                choseOrderArr:[],
                selectConditionsAll:[],
                seletChecked:{
                    uncheckedClassification:[],// 不需要选择的---选择分类
                    selecIndustryClassification:[], // 已经选择过的--选择分类
                    selecLovestation:'不限', // 已经选择过的--爱站权重
                    selecStationmasters:'不限', // 已经选择过的--站长权重
                    selecPrice:'不限', // 已经选择过的--价格
                    selecDayip:'不限', // 已经选择过的--日IP数
                    selecBaiduinclude:'不限', // 已经选择过的--百度收录
                    selecIncome:'不限', // 已经选择过的--百度收录
                },
                fromData:{
                    IndustryClassification:[  //  选择分类
                        {index:1,name:'门户网站'},
                        {index:2,name:'生活服务'},
                        {index:3,name:'音乐视频'},
                        {index:4,name:'游戏文章'},
                        {index:5,name:'女性时尚'},
                        {index:6,name:'教育培训'},
                        {index:7,name:'医疗健康'},
                        {index:8,name:'门户网站'},
                        {index:9,name:'生活服务'},
                        {index:10,name:'音乐视频'},
                        {index:11,name:'游戏文章'},
                        {index:12,name:'女性时尚'},
                        {index:13,name:'教育培训'},
                        {index:14,name:'医疗健康'},
                    ],
                    lovestation:[ // 爱站权重分类
                        {index:0,title:'不限'},
                        {index:1,title:'BDR0'},
                        {index:2,title:'BDR1'},
                        {index:3,title:'BDR2'},
                        {index:4,title:'BDR3'},
                        {index:5,title:'BDR4'},
                    ],
                    stationmasters:[ // 站长权重
                        {index:0,title:'不限'},
                        {index:1,title:'BDR0'},
                        {index:2,title:'BDR1'},
                        {index:3,title:'BDR2'},
                        {index:4,title:'BDR3'},
                        {index:5,title:'BDR4'},
                        {index:6,title:'BDR5'},
                        {index:7,title:'BDR6'},
                    ],
                    price:[ // 价格
                        {index:0,title:'不限'},
                        {index:1,title:'0-1000元'},
                        {index:2,title:'1000-5000元'},
                        {index:3,title:'5000-1万元'},
                        {index:4,title:'1万-3万'},
                        {index:5,title:'3万-5万'},
                        {index:6,title:'5万-10万'},
                        {index:7,title:'10万以上'},
                    ],
                    dayip:[ // 日IP数
                        {index:0,title:'不限'},
                        {index:1,title:'0-100IP'},
                        {index:2,title:'100-500IP'},
                        {index:3,title:'500-1000IP'},
                        {index:4,title:'1000-3000IP'},
                        {index:5,title:'3000-5000IP'},
                        {index:6,title:'5000-10000'},
                        {index:7,title:'>1万IP'},
                    ],
                    baiduinclude:[ // 百度收录
                        {index:0,title:'不限'},
                        {index:1,title:'0-1万'},
                        {index:2,title:'1-5万'},
                        {index:3,title:'5-10万'},
                        {index:4,title:'10-50万'},
                        {index:5,title:'50-100万'},
                        {index:6,title:'100-500万'},
                        {index:7,title:'>500万'},
                    ],
                    income:[ // 网站收入
                        {index:0,title:'不限'},
                        {index:1,title:'0-1000'},
                        {index:2,title:'1000-5000'},
                        {index:3,title:'5000-1万'},
                        {index:4,title:'1万以上'}
                    ],
                    webPrice1:'',
                    webPrice2:'',
                }
            }
        },
        props:{
            websitestyle:Array
        },
        methods:{
            // 不限选择分类
            checkedOrder(){
                this.isChecked = true
                this.seletChecked.selecIndustryClassification = []
            },
            // 获取选择分类的类容
            getSelectClassification(id,title){
                console.log(id +"----" + title);
                // console.log(this.seletChecked.selecIndustryClassification);
                this.isChecked = false
                var data= {
                    id:id,
                    title:title
                }
                this.choseOrderArr.push(data)
                console.log(this.choseOrderArr);
                this.selectConditionsAll.push(data)
            },
            // 点击更多展示全部
            choseMore(){
                if(this.falg){
                    this.setHeight.height = 'auto'
                    this.falg = false
                }else{
                    this.setHeight.height = '50px'
                    this.falg = true
                }

            },
            // 爱站权重
            loveSelect(index,title){
                console.log(index + '~~~~~~'+title);
            }
        },
        mounted(){

        }
    }
</script>
<style scoped>
    .choseClassification >>> .el-radio-group .el-radio-button{
        margin-left: .12rem;
    }
    .choseClassification >>> .el-radio-group .el-radio-button .el-radio-button__inner{
        padding: 5px 12px;
        border: none;
        border-radius: 4px;
    }
    .choseClassification >>> .el-checkbox-button .el-checkbox-button__inner {
        padding: 0 12px;
        border: 0;
        line-height: .26rem;
        border-radius: 4px;

    }
    .choseClassification >>> .el-radio-group .el-radio-button .el-radio-button__inner:hover,
    .choseClassification >>> .el-checkbox-button .el-checkbox-button__inner:hover {
        color: #FF5D24;
    }
    .choseClassification >>> .el-radio-button__orig-radio:checked+.el-radio-button__inner:hover{
        color: #fff;
    }
    .choseClassification >>> .el-radio-button__orig-radio:checked+.el-radio-button__inner,
    .choseClassification >>> .el-checkbox-button.is-checked .el-checkbox-button__inner {
        background-color: #FF5D24;
        color: #fff;
        border: 0;
        box-shadow: none;
    }
</style>
<style type="text/less" lang="less" scoped>
    .selectConditions{
        .selectConditions-list{
            background-color: #fff;
            box-sizing: border-box;
            padding: 0 .3rem;
            >.flex{
                justify-content: flex-start;
                flex-wrap: nowrap;
                min-height: .5rem;
                line-height: .5rem;
                .choseTitle{
                    display: inline-block;
                    white-space: nowrap;
                    width: 1rem;
                    min-width: 1rem;
                    height: .5rem;
                    text-align: left;
                    font-weight: bold;
                    font-size: .14rem;
                }
                /* 您已选择 */
                .selectConditionsAll{
                    button{
                        border: 1px solid #FF5D24;
                        color: #FF5D24;
                        border-radius:4px;
                        padding: 2px 4px;
                        margin-left: .12rem;
                        transition: all .4s;
                        i{font-size: .14rem;}
                        &:first-child{margin-left: 0;}
                        &:hover{
                            background-color: rgba(255, 96, 36, 0.8);
                            color: #fff;
                        }
                        &:hover i{cursor: pointer;}
                    }
                }
                /*  选择分类  */
                .choseClassification{
                    width: 90%;
                    justify-content: flex-start;
                    white-space: nowrap;
                    align-items: baseline;
                    .bgcFF5D24{
                        background-color: #FF5D24;
                        color: #fff;
                    }
                    .notLimit{
                        border-radius: 4px;
                        height: 0.27rem;
                        font-size: 0.14rem;
                        padding: 2px 12px;
                        position: relative;
                        top: 0.05rem;
                    }
                    .el-checkbox-group{
                        width: 80%;
                        white-space: normal;
                        overflow: hidden;
                        transition: height .8s;
                        .el-checkbox-button{
                            height: .26rem;
                            margin-left: .12rem;
                        }
                    }
                    .more{
                        background-color:transparent;
                        color: #FD4249;
                        border: none;
                        i{
                            font-size: .14rem;
                        }
                    }

                }
                .choseList{
                    align-items: center;
                    .notLimit{top: 0;}
                }
                .subPrice{
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: nowrap;
                    height: .26rem;
                    margin-top: .12rem;
                    .el-input{width: 1.2rem;}
                    >i{margin: 0 .1rem;}
                    .el-button{
                        margin-left: .1rem;
                    }
                }
            }
        }
    }
</style>