<template>
    <div class="to-sell">
        <pageTitle></pageTitle>
        <div>
            <div class="goodsSteps">
                <el-steps :active="2" align-center>
                    <el-step v-for="(item,index) in steps" :title="item.title"></el-step>
                </el-steps>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="auto" class="ruleForm">

                <el-form-item label="选择商品类型:">
                    <span style="font-size: 0.18rem;font-weight: bold;"><i style="padding: 0 0.05rem 0 0;" class="iconfont icon-wangzhan1"></i>网站交易</span>
                </el-form-item>

                <el-form-item style="border-bottom: 1px solid #e0e0e0;padding: 0 0 0.1rem 0;" label="选择网站类型:" prop="checkedWebSet">
                    <el-checkbox-group v-model="ruleForm.checkedWebSet" :min="0" :max="3">
                        <el-checkbox-button v-for="(item,index) in webs" :label="item.id" :key="index">{{item.title}}</el-checkbox-button>
                    </el-checkbox-group>
                </el-form-item>

                <el-form-item label="发布网站标题:" prop="title">
                    <el-input style="width: 400px" v-model="ruleForm.title" placeholder="请输入网站标题"></el-input>
                </el-form-item>
                <el-form-item label="发布网站地址:" prop="website">
                    <el-input style="width: 400px" v-model="ruleForm.website" placeholder="请输入网站地址"></el-input>
                </el-form-item>

                <el-form-item label="广告联盟:">
                    <el-radio-group v-model="ruleForm.checkedAdsunion" size="medium">
                        <el-radio-button v-for="(item,index) in adsunion" :label="index" >{{item}}</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="爱站PC端权重:">
                    <el-radio-group v-model="ruleForm.checkedLovestationpc" size="medium">
                        <el-radio-button v-for="(item,index) in lovestationpc" :label="index" >{{item}}</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="爱站移动端权重:">
                    <el-radio-group v-model="ruleForm.checkedLovestationmove" size="medium">
                        <el-radio-button v-for="(item,index) in lovestationmove" :label="index" >{{item}}</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="站长PC端权重:">
                    <el-radio-group v-model="ruleForm.checkedStationmasterpc" size="medium">
                        <el-radio-button v-for="(item,index) in stationmasterpc" :label="index" >{{item}}</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="站长移动端权重:">
                    <el-radio-group v-model="ruleForm.checkedStationmastermove" size="medium">
                        <el-radio-button v-for="(item,index) in stationmastermove" :label="index" >{{item}}</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="百度收录量:" prop="baiduinclude">
                    <el-input style="width: 400px" v-model="ruleForm.baiduinclude" placeholder="请输入网站百度收录量"></el-input>
                </el-form-item>
                <el-form-item label="日IP:">
                    <el-radio-group v-model="ruleForm.checkedDayip" size="medium">
                        <el-radio-button v-for="(item,index) in dayip" :label="index" >{{item}}</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="是否有手机网站">
                    <el-radio-group v-model="ruleForm.whetherwap">
                        <el-radio-button label="是"></el-radio-button>
                        <el-radio-button label="否"></el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否转让服务器">
                    <el-radio-group v-model="ruleForm.whetherserver">
                        <el-radio-button label="是"></el-radio-button>
                        <el-radio-button label="否"></el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="服务器:" prop="server">
                    <el-input style="width: 400px" v-model="ruleForm.server" placeholder="输入服务器信息"></el-input>
                </el-form-item>
                <el-form-item label="网站程序（CMS）:">
                    <el-radio-group v-model="ruleForm.checkedCms" size="medium">
                        <el-radio-button v-for="(item,index) in cms" :label="index" >{{item}}</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="更新方式:" prop="updatestyle">
                    <el-input style="width: 400px" v-model="ruleForm.updatestyle" placeholder="输入网站更新方式"></el-input>
                </el-form-item>
                <el-form-item label="月收入:" prop="income">
                    <el-input style="width: 400px"   v-model="ruleForm.income" placeholder="输入网站月收入"></el-input>
                </el-form-item>
                <el-form-item label="商品描述:" prop="describe">
                    <el-input style="width: 400px" :rows="6" resize="none" type="textarea" v-model="ruleForm.describe" placeholder="输入网站详细描述"></el-input>
                </el-form-item>
                <el-form-item label="网站缩略图:" class="suonuetu">
                    <p>请选择图片上传方式，丰富真实的图片将加速商品出售，尺寸最佳280*195，大小5M，格式jpg/png/jpeg</p>
                    <el-upload
                            class="avatar-uploader"
                            :action="action"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :on-change="onchange"
                            :before-upload="beforeAvatarUpload"
                            accept="image/jpeg,image/jpg,image/png"
                            :auto-upload="false"
                    >
                        <img v-if="ruleForm.picture" :src="ruleForm.picture" class="avatar">
                        <i v-else class="el-icon-upload avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <div>
                    <el-form-item label="出售金额:" prop="price">
                        <el-input style="width: 400px" v-model="ruleForm.price" placeholder="输入出售金额"></el-input>
                    </el-form-item>

                    <el-form-item label="联系QQ:" prop="qq">
                        <el-input style="width: 400px" v-model="ruleForm.qq" placeholder="输入联系QQ"></el-input>
                    </el-form-item>
                </div>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import pageTitle from '@/components/pageTitle'

    export default {
        name:'toSell',
        data(){
            return {
                action:this.domain+'/admin/website/backstageadd',
                ruleForm: {
                    checkedWebSet:[], // 已经选择的网站类型
                    checkedAdsunion:'', //已经选择的广告联盟
                    checkedLovestationpc:'', //已经选择的爱站PC端权重
                    checkedLovestationmove:'', //已经选择的爱站移动端权重
                    checkedStationmasterpc:'', //已经选择的站长PC端权重
                    checkedStationmastermove:'', //已经选择的站长移动端权重
                    checkedDayip:'', //已经选择的日IP
                    checkedCms:'', //已经选择的网站程序
                    title:'', //网站标题
                    website:'', //网站地址
                    baiduinclude:'', // 百度收录量
                    server:'', // 服务器信息
                    updatestyle:'', // 更新方式
                    income:'', // 月收入
                    describe:'', // 商品描述
                    price:'', // 出售金额
                    commission:'0', // 中介费
                    qq:'', // 联系qq
                    whetherwap: '', //是否有手机网站
                    whetherserver: '', //是否转让服务器
                    picture: '',
                },
                rules: {
                    checkedWebSet:[ // 选择网站类型
                        { required: true, message: '请选择选择网站类型', trigger: 'change' }
                    ],
                    title: [ //网站标题
                        { required: true, message: '请输入网站标题', trigger: 'blur' },
                        { min:1,max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
                    ],
                    website: [ //网站地址
                        { required: true, message: '请输入内容', trigger: 'blur' },
                        { min:1,max: 20, message: '长度在 20 个字符', trigger: 'blur' }
                    ],
                    baiduinclude: [ //网站百度收录量
                        { required: true, message: '请输入内容', trigger: 'blur' },
                        { pattern: /^[0-9]\d*$/,
                            min:1,max: 20, message: '请输入正确的百度收录量', trigger: 'blur' }
                    ],
                    server: [ //服务器信息
                        { required: true, message: '请输入内容', trigger: 'blur' },
                        { min:1,max: 20, message: '长度在 20 个字符', trigger: 'blur' }
                    ],
                    updatestyle: [ //网站更新方式
                        { required: true, message: '请输入内容', trigger: 'blur' },
                        { min:1,max: 20, message: '长度在 20 个字符', trigger: 'blur' }
                    ],
                    income: [ //网站月收入
                        { required: true, message: '请输入内容', trigger: 'blur' },
                        { pattern: /^[0-9]\d*$/, min:1,max: 20, message: '请输入正确的网站月收入', trigger: 'blur' }
                    ],
                    describe: [ //商品描述
                        { required: true, message: '请输入内容', trigger: 'blur' }
                    ],
                    price: [ // 出售金额
                        { required: true, message: '请输入出售金额', trigger: 'blur' },
                        { pattern: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
                            message: '请填写正确的出售金额', trigger: 'blur' }
                    ],
                    qq: [ //联系QQ
                        { required: true, message: '请输入内容', trigger: 'blur' },
                        { pattern: /^[0-9]\d*$/,
                            min:1,max: 20, message: '请输入正确的联系QQ', trigger: 'blur' }
                    ],
                    commission:[
                        { required: true, message: '请输入内容', trigger: 'blur' },
                        { pattern: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
                            message: '请填写正确的中介费', trigger: 'blur' }
                    ]
                },
                cost:[],//中介费
                salestyle:[//官方代售，普通出售
                    {index:'1',title:'官方代售'},
                    {index:'2',title:'普通出售'},
                ],
                broker:[], //经济人
                steps:[
                    {index:1,title:'登记商品信息'},
                    {index:2,title:'等待客服审核'},
                    {index:3,title:'成功上架出售'},
                    {index:4,title:'买家出价购买'},
                    {index:5,title:'签署合同交易商品'},
                    {index:6,title:'出售成功提现'},
                ],
                webs:[
                    {id:1,title:'垂直行业'},{id:2,title:'地方门户'},{id:3,title:'影音游戏'},
                    {id:4,title:'商城购物'},{id:5,title:'时尚女性'},{id:6,title:'文学小说'},
                    {id:7,title:'生活服务'},{id:8,title:'旅游资讯'},{id:9,title:'投资金融'},
                    {id:10,title:'社交媒体'},{id:11,title:'电子商务'},{id:12,title:'论坛博客'},
                ],
                adsunion:['百度联盟','360联盟','搜狗联盟','其他','无'],
                lovestationpc:['BDRO','BDR1','BDR2','BDR3','BDR4','BDR5','BDR6','BDR7','BDR8','BDR9'],
                lovestationmove:['BDRO','BDR1','BDR2','BDR3','BDR4','BDR5','BDR6','BDR7','BDR8','BDR9'],
                stationmasterpc:['BDRO','BDR1','BDR2','BDR3','BDR4','BDR5','BDR6','BDR7','BDR8','BDR9'],
                stationmastermove:['BDRO','BDR1','BDR2','BDR3','BDR4','BDR5','BDR6','BDR7','BDR8','BDR9'],
                dayip:['0-100','100-500','500-1000','1000-3000','3000-5000','5000-10000','10000+'],
                cms:['PHPCMS V9','帝国','织梦','自研','其他'],
            }
        },
        components:{
            pageTitle
        },
        methods: {
            // 获取网站基本信息
            async  getWebsetInfo(){
                const resp =await this.$api.getWebInfo()
                if(resp.data.status == 200){
                    this.webs = resp.data.type
                    this.broker = resp.data.broker
                    this.cost = resp.data.cost[0]
                    this.ruleForm.commission = this.cost.officialcost
                }
            },
            // 出售方式
            changeSalestyle(index){
                if(index == 0 && this.cost){
                    this.ruleForm.commission = this.cost.officialcost
                }else{
                    this.ruleForm.commission = this.cost.commoncost
                }
            },
            // 提交信息
            async submitForm(formName) {
                var checkedWebSetStr = this.ruleForm.checkedWebSet.join()
                var uploadDataObj = {
                    salestyle: this.ruleForm.salestyle,//出售方式
                    broker:this.ruleForm.broker, //经纪人
                    sellName:this.ruleForm.sellName, //出售人姓名
                    sellPhone:this.ruleForm.sellPhone, //出售人电话
                    checkedWebSet:checkedWebSetStr, // 已经选择的网站类型
                    checkedAdsunion:this.ruleForm.checkedAdsunion, //已经选择的广告联盟
                    checkedLovestationpc:this.ruleForm.checkedLovestationpc, //已经选择的爱站PC端权重
                    checkedLovestationmove:this.ruleForm.checkedLovestationmove, //已经选择的爱站移动端权重
                    checkedStationmasterpc:this.ruleForm.checkedStationmasterpc, //已经选择的站长PC端权重
                    checkedStationmastermove:this.ruleForm.checkedStationmastermove, //已经选择的站长移动端权重
                    checkedDayip:this.ruleForm.checkedDayip, //已经选择的日IP
                    checkedCms:this.ruleForm.checkedCms, //已经选择的网站程序
                    title:this.ruleForm.title, //网站标题
                    website:this.ruleForm.website, //网站地址
                    baiduinclude:this.ruleForm.baiduinclude, // 百度收录量
                    server:this.ruleForm.server, // 服务器信息
                    updatestyle:this.ruleForm.updatestyle, // 更新方式
                    income:this.ruleForm.income, // 月收入
                    describe:this.ruleForm.describe, // 商品描述
                    price:this.ruleForm.price, // 出售金额
                    commission:this.ruleForm.commission, // 中介费
                    qq:this.ruleForm.qq, // 联系qq
                    whetherwap: this.ruleForm.whetherwap, //是否有手机网站
                    whetherserver: this.ruleForm.whetherserver, //是否转让服务器
                    picture: this.ruleForm.picture,
                }
                this.$refs[formName].validate(async(valid) => {
                    if (valid) {
                        var resp =await this.$api.postBackstageadd(uploadDataObj)
                        console.log(resp.data);
                        if(resp.data.status == 200){
                            this.showMsg(resp.data.message,'success')
                            this.ruleForm = {
                                salestyle: 0,//出售方式
                                broker:1, //经纪人
                                sellName:'', //出售人姓名
                                sellPhone:'', //出售人电话
                                checkedWebSet:[], // 已经选择的网站类型
                                checkedAdsunion:'', //已经选择的广告联盟
                                checkedLovestationpc:'', //已经选择的爱站PC端权重
                                checkedLovestationmove:'', //已经选择的爱站移动端权重
                                checkedStationmasterpc:'', //已经选择的站长PC端权重
                                checkedStationmastermove:'', //已经选择的站长移动端权重
                                checkedDayip:'', //已经选择的日IP
                                checkedCms:'', //已经选择的网站程序
                                title:'', //网站标题
                                website:'', //网站地址
                                baiduinclude:'', // 百度收录量
                                server:'', // 服务器信息
                                updatestyle:'', // 更新方式
                                income:'', // 月收入
                                describe:'', // 商品描述
                                price:'', // 出售金额
                                commission:'0', // 中介费
                                qq:'', // 联系qq
                                whetherwap: '', //是否有手机网站
                                whetherserver: '', //是否转让服务器
                                picture: '',
                            }
                        }
                    } else {
                        this.showMsg('请输入正确的内容','error')
                        return false;
                    }
                });
            },

            handleAvatarSuccess(res, file) {
                this.ruleForm.picture = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isLt5M) {
                    this.showMsg('上传图片大小不能超过 5MB','error')
                }
                return isLt5M;
            },
            //当上传图片后，调用onchange方法，获取图片本地路径
            onchange(file,fileList){
                var that = this;
                var event = event || window.event;
                var files = event.target.files[0];
                var reader = new FileReader();
                //转base64
                reader.onload = function(e) {
                    that.ruleForm.picture = e.target.result //将图片路径赋值给src
                }
                reader.readAsDataURL(files);
            }
        },
        mounted(){
            this.getWebsetInfo()
        }
    }
</script>
<style type="text/css" scoped>
    .to-sell >>> .pageTitle>div{
        width: 100%;
    }
    .el-checkbox-button >>> .el-checkbox-button__inner{
        border-left: 1px solid #DCDFE6;
        border-radius:4px;
        -webkit-box-shadow: none!important;
        box-shadow: none!important;
    }
    .avatar-uploader >>> .el-upload{
        max-width: 100%;
        max-height: 100%;
        text-align: center;
        overflow: hidden;
    }
    .suonuetu >>> .hideUpload .el-upload--picture-card {
        display: none;
    }
    .ruleForm >>> .el-radio-button__orig-radio:checked+.el-radio-button__inner,
    .ruleForm >>> .el-checkbox-button.is-checked .el-checkbox-button__inner{
        background-color: #FF5D24;
        border-color: #FF5D24;
        box-shadow: none;
    }
    .ruleForm >>> .el-checkbox-button__inner:hover,
    .ruleForm >>> .el-radio-button__inner:hover{
        /*color: #FF5D24;*/
    }
    .ruleForm >>> .el-radio-button{
        margin-left: .2rem;
    }
    .ruleForm >>> .el-radio-button:first-child{
        margin-left: 0;
    }
    .ruleForm >>> .el-radio-button--medium .el-radio-button__inner,
    .ruleForm >>> .el-radio-button:last-child .el-radio-button__inner,
    .ruleForm >>> .el-radio-button:first-child .el-radio-button__inner{
        border-radius: 4px;
        border-left:1px solid #DCDFE6;
    }
    .goodsSteps{
        padding: .4rem 0 0 0;
    }
    .goodsSteps >>> .el-step .el-step__title{
        font-weight: normal;
        color: #999;
        font-size: .14rem;
    }
    .goodsSteps >>> .el-step__head.is-finish{
        border-color: #FF5D24;
    }
    .goodsSteps >>> .el-step__title.is-finish{
        color: #FF5D24;
    }
    .goodsSteps >>> .el-step__head.is-finish .el-step__icon{
        background-color: #FF5D24;
    }
    .goodsSteps >>> .el-step__head .el-step__icon,
    .goodsSteps >>> .el-step__head.is-process .el-step__icon{
        border: none;
        background-color: #e0e0e0;
        color: #fff;
        width: 0.36rem;
        height: 0.36rem;
        font-size: .2rem;
    }
    .goodsSteps >>> .el-step__icon-inner{
        font-weight: normal;
    }
    .goodsSteps >>> .el-step.is-horizontal .el-step__line{
        top: 18px;
    }
</style>
<style type="text/less" lang="less" scoped>
    .to-sell{
        .pageTitle{
            border-bottom: 20px solid #f4f7f9;
            box-sizing: border-box;
            padding: 0 .2rem;
        }
        .ruleForm{
            box-sizing: border-box;
            padding: 0.3rem .6rem;
        }
        .el-checkbox-group{
            position: relative;
            left: -10px;
            margin: -10px 0 0 0;
            box-sizing: border-box;
            .el-checkbox-button{
                margin: 10px;
            }
        }
        .avatar-uploader{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 290px;
            height: 205px;
            box-sizing: border-box;
            padding: 10px;
            overflow: hidden;
            background-color: #eee;
            .el-upload{
                .el-icon-upload{
                    line-height: 185px;
                    font-size: 100px;
                    color: #C6C6C6;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>