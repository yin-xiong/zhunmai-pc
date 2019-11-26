<template>
    <div class="addCard">
        <div class="setTitle flex">
            <el-link
                    :underline="false"
                    :href="item.path"
                    v-for="(item,index) in list"
                    :class="isActive == item.index ? 'active': '' "
            >
                {{item.title}}
            </el-link>
        </div>
        <div class="addCard-main">
            <div class="addCard-main-info">
                <div class="payWay">
                    <div>
                        <div class="flex">
                            <button
                                    v-for="(item,index) in changePay"
                                    @click="changePays(item.index)"
                                    :class="changePayActive == item.index ? 'active' : '' "
                            >
                                <i :class="item.cardIcon"></i>
                                {{item.cardName}}
                                <span><i class="iconfont icon-gou"></i></span>
                            </button>
                        </div>
                    </div>
                    <div class="cardList" v-if="changePayActive == 0">
                        <div class="cardList-left">支付宝账号：</div>
                        <div class="cardList-info">
                            <div class="item-card-list"
                                 v-for="(item,index) in alipayList"
                                 v-if="index < 3"
                            >
                                <div class="flex">
                                    <el-image :src="alipaySrc"></el-image>
                                    <span>手机尾号：{{item.phone}}</span>
                                </div>
                                <p>
                                    <span @click="editAlipay(item.phone,item.userName)">编辑</span>
                                    <span @click="deleteAlipay(item.phone,item.userName)">删除</span>
                                </p>
                            </div>
                            <div v-if="alipayList.length < 3" class="addCard-this tac" @click="alipayClick">
                                <span class="iconfont icon-jia"></span>
                                <p>添加支付宝账号</p>
                            </div>


                            
                        </div>
                    </div>

                    <div class="cardList" v-if="changePayActive == 1">
                        <div class="cardList-left">银行卡账号：</div>
                        <div class="cardList-info">
                            <div class="item-card-list"
                                 v-for="(item,index) in blanksList"
                                 v-if="index < 3"
                            >
                                <div class="flex">
                                    <el-image :src="item.src"></el-image>
                                    <span>账户尾号：{{item.phone}}</span>
                                </div>
                                <p>
                                    <span @click="editBlank(item.src,item.phone)">编辑</span>
                                    <span @click="deleteBlank(item.src,item.phone)">删除</span>
                                </p>
                            </div>
                            <div v-if="blanksList.length < 3" class="addCard-this tac" @click="blankClick">
                                <span class="iconfont icon-jia"></span>
                                <p>添加银行卡账号</p>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>


        <el-dialog
                title="添加支付宝账号"
                :visible.sync="dialogVisibleAlipay"
                width="40%"
        >
            <div style="width: 80%;margin: 0 auto;">
                <el-form :model="AlipayRuleForm" :rules="AlipayRules" label-width="auto" class="AlipayRuleForm">
                    <el-form-item label="账号：" prop="AlipayNum">
                        <el-input v-model="AlipayRuleForm.AlipayNum" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="账号姓名：" prop="AlipayName">
                        <el-input v-model="AlipayRuleForm.AlipayName" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisibleAlipay = false">取 消</el-button>
                                    <el-button type="primary" @click="dialogVisibleAlipay = false">保 存</el-button>
                                </span>
        </el-dialog>

        <el-dialog
                title="添加银行卡账号"
                :visible.sync="dialogVisibleBlank"
                width="50%"
        >
            <div class="blanks">
                <div class="flex">
                    <button
                            v-for="(item,index) in blankList"
                            @click="getBlankActive(item.index)"
                            :class="blanksActive == item.index ? 'active' : '' "
                    >
                        <img :src="item.src" alt="">
                        <span><i class="iconfont icon-gou"></i></span>
                    </button>
                </div>
            </div>
            <div style="width: 60%;margin: 0 ;">
                <el-form :model="BlankRuleForm" :rules="BlankRules"  label-width="auto" class="BlankRuleForm">
                    <el-form-item label="银行卡号：" prop="blankNum">
                        <el-input v-model="BlankRuleForm.blankNum" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="开户行：" prop="blankName">
                        <el-input v-model="BlankRuleForm.blankName" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="账号姓名：" prop="blankUserName">
                        <el-input v-model="BlankRuleForm.blankUserName" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisibleBlank = false">取 消</el-button>
                                    <el-button type="primary" @click="dialogVisibleBlank = false">保 存</el-button>
                                </span>
        </el-dialog>

    </div>
</template>
<script>
    export default {
        name:'addCard',
        data(){
            return{
                isActive:0,
                list:[
                    {title:'添加账户',path:'/addCard',index:1}
                ],
                alipaySrc:require('@/assets/image/icon/icon_alipay.png'),
                // 支付方式切换
                changePayActive:0,
                changePay:[
                    {cardName:'支付宝管理',index:0,cardIcon:'cardIcon iconfont icon-zhifubao'},
                    {cardName:'银行卡管理',index:1,cardIcon:'cardIcon iconfont icon-yinhangqia2'},
                ],

                // 银行卡账号
                blanksList:[
                    { src:require('@/assets/image/pay/i1.png'),phone:95273, },
                    { src:require('@/assets/image/pay/i2.png'),phone:95272, },
                ],
                dialogVisibleBlank: false,
                blanksActive:0,
                blankList:[
                    { src:require('@/assets/image/pay/i1.png'),index:1, },
                    { src:require('@/assets/image/pay/i2.png'),index:2, },
                    { src:require('@/assets/image/pay/i3.png'),index:3, },
                    { src:require('@/assets/image/pay/i4.png'),index:4, },
                    { src:require('@/assets/image/pay/i5.png'),index:5, },
                    { src:require('@/assets/image/pay/i6.png'),index:6, },
                    { src:require('@/assets/image/pay/i7.png'),index:7, },
                    { src:require('@/assets/image/pay/i8.png'),index:8, },
                    { src:require('@/assets/image/pay/i9.png'),index:9, },
                    { src:require('@/assets/image/pay/i10.png'),index:10, },
                    { src:require('@/assets/image/pay/i11.png'),index:11, },
                    { src:require('@/assets/image/pay/i12.png'),index:12, },
                    { src:require('@/assets/image/pay/i13.png'),index:13, },
                    { src:require('@/assets/image/pay/i14.png'),index:14, },
                    { src:require('@/assets/image/pay/i15.png'),index:15, },
                    { src:require('@/assets/image/pay/other.png'),index:16, },
                ],
                BlankRuleForm:{
                    blankNum:'',
                    blankName:'',
                    blankUserName:'',
                },
                BlankRules: {
                    blankNum: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    blankName: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                    blankUserName: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                },


                // 支付宝账号
                dialogVisibleAlipay: false,
                AlipayRuleForm:{
                    AlipayNum:'',
                    AlipayName:'',
                },
                AlipayRules: {
                    AlipayNum: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    AlipayName: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                },
                alipayList:[
                    {phone:'5701',userName:'张三1'},
                    {phone:'5702',userName:'张三2'},
                ]
            }
        },
        methods:{

            // 支付方式的切换
            changePays(index){
                console.log(this.changePayActive);
                this.changePayActive = index
            },
            // 添加支付宝账号
            alipayClick(){
                this.dialogVisibleAlipay = true
                console.log('支付宝账号')
            },
            // 支付宝账号编辑
            editAlipay(phone,name){
                console.log('支付宝账号编辑');
            },
            // 支付宝账号删除
            deleteAlipay(phone,name){
                console.log('支付宝账号删除');
            },

            // 银行卡账号编辑
            editBlank(src,phone){
                console.log('银行卡账号编辑');
            },
            // 银行卡账号删除
            deleteBlank(src,phone){
                console.log('银行卡账号删除');
            },
            // 添加银行卡账号
            blankClick(){
                this.dialogVisibleBlank = true
                console.log('银行卡账号')
            },
            // 设置弹框银行卡的logo
            getBlankActive(index){
                console.log('设置弹框银行卡的logo');
                this.blanksActive = index
            },

        },
        mounted(){
            let strIndex = this.$route.meta.index
            this.isActive = strIndex.substring(2,3)
        },
    }
</script>
<style scoped>
    .el-button--primary{
        background-color: #FF5D24;
        border-color: #FF5D24;
    }
    .el-button:focus, .el-button:hover{
        color:  #FF5D24;
        border-color: #FF5D24;
        background-color: #fff;
    }
</style>
<style type="text/less" lang="less" scoped>
    .addCard{
        .setTitle{
            justify-content: flex-start;
            align-items: center;
            flex-wrap: nowrap;
            height: .7rem;
            border-bottom: 1px solid #E0E0E0;
            a{
                position: relative;
                display: inline-block;
                line-height: .7rem;
                color: #6E768E;
                margin:0 .2rem;
                transition: all .4s;
                &:hover{
                    color: #FF5D24;
                }
            }
            a.active{
                color:#FF5D24;
                &:after{
                    content: '';
                    position: absolute;
                    left: -30%;
                    bottom: 0;
                    height: 2px;
                    width: 160%;
                    background-color: #FF5D24;
                }
            }
        }
        .addCard-main{
            box-sizing: border-box;
            padding: 0.6rem 0 0 2rem;
            .addCard-main-info{
                width: 3.5rem;
                min-height: 3rem;
                .payWay{
                    div.flex{
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: nowrap;
                        button{
                            width: 48%;
                            position: relative;
                            background:#fff;
                            border:1px solid #bbb;
                            border-radius:6px;
                            font-size: .14rem;
                            padding: .14rem .24rem;
                            overflow: hidden;
                            transition: all .4s;
                            cursor: pointer;
                            .cardIcon{
                                font-size: .18rem;
                                position: relative;
                                top: 2px;
                                left: -.1rem;
                            }
                            &:hover{
                                border: 1px solid #FF5D24;
                                color: #FF5D24;
                            }
                            span{
                                position: absolute;
                                right: 0;
                                bottom: 0;
                                opacity: 0;
                                z-index: 9;
                                transition: all .4s;
                                width: 0;
                                height: 0;
                                border-width: 0.12rem;
                                border-style: solid;
                                border-color:transparent #FF5D24 #FF5D24 transparent;
                            }
                        }
                        button.active{
                            border: 1px solid #FF5D24;
                            color: #FF5D24;
                            span{
                                opacity: 1;
                                i{
                                    color: #fff;
                                    position: absolute;
                                    right: -12px;
                                    bottom: -12px;
                                    font-size: 10px;
                                    transform: scale(.8);
                                    z-index: 19;
                                }
                            }
                        }
                }
                    div.cardList{
                        position: relative;
                        margin-top: .24rem;
                        .cardList-left{
                            position: absolute;
                            left: -1.4rem;
                            top: 0;
                            width: 1.2rem;
                            color: #6E768E;
                        }
                        .cardList-info{
                            width: 3.5rem;
                            .item-card-list{
                                width: 100%;
                                height: .86rem;
                                border:1px solid #D7D7D7;
                                border-radius:4px;
                                margin-bottom: .16rem;
                                box-sizing: border-box;
                                padding: 0.13rem 0.2rem;
                                font-size: .16rem;
                                color: #323A46;
                                &:hover{
                                    border:1px solid #FF5D24;
                                }
                                p{
                                    border-top: 1px dashed #D7D7D7;
                                    color: #999;
                                    font-size: .14rem;
                                    text-align: right;
                                    margin-top: .1rem;
                                    line-height: .3rem;
                                    span{
                                        cursor: pointer;
                                        padding: 0 0.15rem;
                                        border-right:1px solid #d7d7d7;
                                        &:last-child{
                                            border-right:0;
                                        }
                                        &:hover{
                                            color: #FF5D24;
                                        }
                                    }
                                }
                            }
                            .addCard-this{
                                cursor: pointer;
                                width: 100%;
                                height: .86rem;
                                border:1px solid #D7D7D7;
                                border-radius:4px;
                                font-size: .14rem;
                                color: #323A46;
                                &:hover{
                                    border:1px solid #FF5D24;
                                }
                                &:hover span,
                                &:hover p{
                                    color: #FF5D24;
                                }
                                span{
                                    display: inline-block;
                                    font-size: .3rem;
                                    margin-top: .1rem;
                                }
                            }
                        }
                    }
                }

            }
        }
        .blanks{
            >.flex{
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                button{
                    width: 1.6rem;
                    height: .46rem;
                    padding: .1rem;
                    margin-bottom: 0.1rem;
                    position: relative;
                    background:#fff;
                    border:1px solid #bbb;
                    border-radius:6px;
                    font-size: .14rem;
                    overflow: hidden;
                    transition: all .4s;
                    cursor: pointer;
                    .cardIcon{
                        font-size: .18rem;
                        position: relative;
                        top: 2px;
                        left: -.1rem;
                    }
                    &:hover{
                        border: 1px solid #FF5D24;
                        color: #FF5D24;
                    }
                    span{
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        opacity: 0;
                        z-index: 9;
                        transition: all .4s;
                        width: 0;
                        height: 0;
                        border-width: 0.12rem;
                        border-style: solid;
                        border-color:transparent #FF5D24 #FF5D24 transparent;
                    }

                }
                button.active{
                    border: 1px solid #FF5D24;
                    color: #FF5D24;
                    span{
                        opacity: 1;
                        i{
                            color: #fff;
                            position: absolute;
                            right: -12px;
                            bottom: -12px;
                            font-size: 10px;
                            transform: scale(.8);
                            z-index: 19;
                        }
                    }
                }
            }
        }
    }
</style>