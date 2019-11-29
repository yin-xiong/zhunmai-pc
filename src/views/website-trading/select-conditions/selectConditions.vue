<template>
    <div class="selectConditions">
        <div class="selectConditions-list w1200">
            <div class="flex">
                <span
                        v-if="
                        getDatasArr.websitestyleArr.length > 0 ||
                        getDatasArr.lovestationArr.length > 0  ||
                        getDatasArr.stationmastersArr.length > 0 ||
                        getDatasArr.priceArr.length > 0 ||
                        getDatasArr.dayipArr.length > 0 ||
                        getDatasArr.baiduincludeArr.length > 0 ||
                        getDatasArr.incomeArr.length > 0
                        "
                        class="choseTitle">
                    您已选择：</span>
                <span v-else class="choseTitle">您未选择</span>
                <div class="selectConditionsAll">
                    <button
                            v-if="getDatasArr.websitestyleArr.length > 0"
                            v-for="item in getDatasArr.websitestyleArr"
                    >
                        {{item.title}}
                        <i class="iconfont icon-guanbi" @click="deletewebsitestyleArr(item.id,item.title)"></i>
                    </button>

                    <button
                            v-if="getDatasArr.lovestationArr.length > 0 "
                            v-for="(item,index) in getDatasArr.lovestationArr"

                    >
                        {{item.title}}--{{item.id}}
                        <i class="iconfont icon-guanbi" @click="deletelovestationArr(item.id,item.title)"></i>
                    </button>

                    <button
                            v-if="getDatasArr.stationmastersArr.length > 0"
                            v-for="item in getDatasArr.stationmastersArr"
                    >
                        {{item.title}}--{{item.id}}
                        <i class="iconfont icon-guanbi" @click="deletestationmastersArr(item.id,item.title)"></i>
                    </button>

                    <button
                            v-if="getDatasArr.priceArr.length > 0"
                            v-for="item in getDatasArr.priceArr"
                    >
                        {{item.title}}--{{item.id}}
                        <i class="iconfont icon-guanbi" @click="deletepriceArr(item.id,item.title)"></i>
                    </button>

                    <button
                            v-if="getDatasArr.dayipArr.length > 0"
                            v-for="item in getDatasArr.dayipArr"
                    >
                        {{item.title}}--{{item.id}}
                        <i class="iconfont icon-guanbi" @click="deletedayipArr(item.id,item.title)"></i>
                    </button>

                    <button
                            v-if="getDatasArr.baiduincludeArr.length > 0"
                            v-for="item in getDatasArr.baiduincludeArr"
                    >
                        {{item.title}}--{{item.id}}
                        <i class="iconfont icon-guanbi" @click="deletebaiduincludeArr(item.id,item.title)"></i>
                    </button>

                    <button
                            v-if="getDatasArr.incomeArr.length > 0"
                            v-for="item in getDatasArr.incomeArr"
                    >
                        {{item.title}}--{{item.id}}
                        <i class="iconfont icon-guanbi" @click="deleteincomeArr(item.id,item.title)"></i>
                    </button>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">选择分类：</span>
                <div class="choseClassification flex">
                    <el-button style="margin: 0 0 0 12px;border-color: #fff;"
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
                            v-if="websitestyle.length > 8"
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
                    <el-radio-group
                            v-model="seletChecked.selecStationmasters"
                            v-for="(item,index) in fromData.stationmasters"
                            @change="stationSelect(item.index,item.title)"
                    >
                        <el-radio-button :label="item.title"></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">价  格：</span>
                <div class="choseList choseClassification flex">
<!--                    <el-button class="overflow notLimit">不限</el-button>-->
                    <el-radio-group
                            v-for="(item,index) in fromData.price"
                            v-model="seletChecked.selecPrice"
                            @change="priceSelect(item.index,item.title,item.min,item.max)"
                    >
                        <el-radio-button  :label="item.title"></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">日IP数：</span>
                <div class="choseList choseClassification flex">
<!--                    <el-button class="overflow notLimit">不限</el-button>-->
                    <el-radio-group
                            v-for="(item,index) in fromData.dayip"
                            v-model="seletChecked.selecDayip"
                            @change="dayipSelect(item.index,item.title)"
                    >
                        <el-radio-button  :label="item.title"></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">百度收录：</span>
                <div class="choseList choseClassification flex">
<!--                    <el-button class="overflow notLimit">不限</el-button>-->
                    <el-radio-group
                            v-for="(item,index) in fromData.baiduinclude"
                            v-model="seletChecked.selecBaiduinclude"
                            @change="baiduincludeSelect(item.index,item.title,item.min,item.max)"
                    >
                        <el-radio-button :label="item.title"></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex">
                <span class="choseTitle">网站收入：</span>
                <div class="choseList choseClassification flex">
<!--                    <el-button class="overflow notLimit">不限</el-button>-->
                    <el-radio-group
                            v-for="(item,index) in fromData.income"
                            v-model="seletChecked.selecIncome"
                            @change="incomeSelect($event,item.index,item.title,item.min,item.max)"
                    >
                        <el-radio-button  :label="item.title"></el-radio-button>
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
                    <el-button @click="putIncome" size="mini" plain>确定</el-button>
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
                    selecIncome:'不限', // 已经选择过的--网站收入
                },
                getDatasArr:{
                    websitestyleArr:[],// 网站分类临时array
                    lovestationArr:[],// 爱站权重临时array
                    stationmastersArr:[],// 站长权重临时array
                    priceArr:[],// 价格临时array
                    dayipArr:[],// 日IP数临时array
                    baiduincludeArr:[],// 百度收录临时array
                    incomeArr:[],// 网站收入临时array
                },
                fromData:{
                    IndustryClassification:[],  //  选择分类
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
                        {index:0,title:'不限',min:'',max:''},
                        {index:1,title:'0-1000',min:'0',max:'1000'},
                        {index:2,title:'1000-5000元',min:'1000',max:'5000',},
                        {index:3,title:'5000-1万元',min:'5000',max:'10000',},
                        {index:4,title:'1万-3万',min:'10000',max:'30000',},
                        {index:5,title:'3万-5万',min:'30000',max:'50000',},
                        {index:6,title:'5万-10万',min:'50000',max:'100000',},
                        {index:7,title:'10万以上',min:'100000',max:'',},
                    ],
                    dayip:[ // 日IP数
                        {index:0,title:'不限',min:'',max:''},
                        {index:1,title:'0-100IP',min:'0',max:'100'},
                        {index:2,title:'100-500IP',min:'100',max:'500'},
                        {index:3,title:'500-1000IP',min:'500',max:'1000'},
                        {index:4,title:'1000-3000IP',min:'1000',max:'3000'},
                        {index:5,title:'3000-5000IP',min:'3000',max:'5000'},
                        {index:6,title:'5000-10000',min:'5000',max:'10000'},
                        {index:7,title:'>1万IP',min:'10000',max:''},
                    ],
                    baiduinclude:[ // 百度收录
                        {index:0,title:'不限',min:'',max:''},
                        {index:1,title:'0-1万',min:'0',max:'10000'},
                        {index:2,title:'1-5万',min:'10000',max:'50000'},
                        {index:3,title:'5-10万',min:'50000',max:'100000'},
                        {index:4,title:'10-50万',min:'100000',max:'500000'},
                        {index:5,title:'50-100万',min:'500000',max:'1000000'},
                        {index:6,title:'100-500万',min:'1000000',max:'5000000'},
                        {index:7,title:'>500万',min:'5000000',max:''},
                    ],
                    income:[ // 网站收入
                        {index:0,title:'不限',min:'',max:''},
                        {index:1,title:'0-1000',min:'0',max:'1000'},
                        {index:2,title:'1000-5000',min:'1000',max:'5000'},
                        {index:3,title:'5000-1万',min:'5000',max:'10000'},
                        {index:4,title:'1万以上',min:'10000',max:''}
                    ],
                    webPrice1:0,
                    webPrice2:0,
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
                this.seletChecked.selecIndustryClassification = this.getDatasArr.websitestyleArr = []
            },
            // 获取选择分类的类容
            getSelectClassification(id,title){
                this.isChecked = false
                var data= { id,title }
                var flag = 1,newArr = this.getDatasArr.websitestyleArr
                newArr.forEach((item)=>{
                    if(item.id == data.id){
                        flag = 0;
                        newArr.splice(newArr.indexOf(item),1)
                        return;
                    }
                })
                if(flag == 1 && newArr.length < 3){
                    newArr.push(data);
                }
                console.log(newArr);
                console.log(this.getDatasArr.websitestyleArr);
                console.log(this.getDatasArr);

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
            loveSelect(id,title){
                var data = { id,title }
                console.log(data);
                this.getDatasArr.lovestationArr.pop(data)
                this.getDatasArr.lovestationArr.push(data)
                console.log(this.getDatasArr);
                if(id == 0){
                    this.getDatasArr.lovestationArr = []
                }
            },
            // 站长权重
            stationSelect(id,title){
                var data = { id,title }
                this.getDatasArr.stationmastersArr.pop(data)
                this.getDatasArr.stationmastersArr.push(data)
                console.log(this.getDatasArr);
                if(id == 0){
                    this.getDatasArr.stationmastersArr = []
                }
            },
            // 价  格
            priceSelect(id,title,min,max){
                var data = { id,title,min,max }
                this.getDatasArr.priceArr.pop(data)
                this.getDatasArr.priceArr.push(data)
                console.log(this.getDatasArr);
                if(id == 0){
                    this.getDatasArr.priceArr = []
                }
            },
            // 日IP数
            dayipSelect(id,title){
                var data = { id, title }
                this.getDatasArr.dayipArr.pop(data)
                this.getDatasArr.dayipArr.push(data)
                console.log(this.getDatasArr);
                if(id == 0){
                    this.getDatasArr.dayipArr = []
                }
            },
            // 百度收录
            baiduincludeSelect(id,title,min,max) {
                var data = { id,title,min,max }
                this.getDatasArr.baiduincludeArr.pop(data)
                this.getDatasArr.baiduincludeArr.push(data)
                console.log(this.getDatasArr);
                if(id == 0){
                    this.getDatasArr.baiduincludeArr = []
                }
            },
            // 网站收入
            incomeSelect(e,id,title,min,max) {
                this.fromData.webPrice1 = ''
                this.fromData.webPrice2 = ''
                var data = { id,title,min,max }
                this.getDatasArr.incomeArr.pop(data)
                this.getDatasArr.incomeArr.push(data)
                console.log(this.getDatasArr);
                if(id == 0){
                    this.getDatasArr.incomeArr = []
                }
            },
            // 用户输入网站收入查询
            putIncome(){
                var p1 = this.fromData.webPrice1,p2 = this.fromData.webPrice2;
                var rer = /^[0-9]*$/;
                if( (rer.test(p1)) && (p2 > p1 )){
                    this.seletChecked.selecIncome = ''
                    this.getDatasArr.incomeArr = []
                    this.getDatasArr.incomeArr.id = 5
                    var data = {
                        id:5,
                        title:this.fromData.webPrice1+"--"+this.fromData.webPrice2+"元"
                    }
                    this.getDatasArr.incomeArr.push(data)
                }else{
                    this.showMsg('请输入正确的数字','error')
                }
            },
            // 用户删除网站分类
            deletewebsitestyleArr(id,title){
                var arr = this.getDatasArr.websitestyleArr
                arr.forEach((item)=>{
                    if(item.id == id){
                        console.log(item);
                        arr.splice(arr.indexOf(item),1)
                    }
                })
                var arrnull = []
                for(var i = 0;i<arr.length;i++){
                    arrnull.push(arr[i].id)
                }
                this.seletChecked.selecIndustryClassification = arrnull
                console.log(this.seletChecked.selecIndustryClassification.length < 1);
                if(this.seletChecked.selecIndustryClassification.length < 1){
                    this.isChecked = true
                    this.checkFlag1 = true
                }
            },
            // 用户删除爱站选择
            deletelovestationArr(id,title){
                console.log(id);
                console.log(title);
                this.getDatasArr.lovestationArr = []
                this.seletChecked.selecLovestation = '不限'
            },
            // 用户删除站长权重
            deletestationmastersArr(id,title){
                this.getDatasArr.stationmastersArr = []
                this.seletChecked.selecStationmasters = '不限'
            },
            // 用户删除价格
            deletepriceArr(id,title){
                this.getDatasArr.priceArr = []
                this.seletChecked.selecPrice = '不限'
            },
            // 用户删除日ip
            deletedayipArr(id,title){
                this.getDatasArr.dayipArr = []
                this.seletChecked.selecDayip = '不限'
            },
            // 用户删除百度收录
            deletebaiduincludeArr(id,title){
                this.getDatasArr.baiduincludeArr = []
                this.seletChecked.selecBaiduinclude = '不限'
            },
            // 用户删除网站收入
            deleteincomeArr(id,title){
                this.getDatasArr.incomeArr = []
                this.seletChecked.selecIncome = '不限'
            },

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