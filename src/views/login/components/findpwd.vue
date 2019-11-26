<template>
    <div class="register">
        <div class="rigister-head-title">
            <div class="w1200">
                <el-link :underline="false">当前位置：首页 ></el-link>
                <el-link :underline="false">登录 ></el-link>
                <el-link :underline="false">找回密码</el-link>
            </div>

        </div>
        <div class="register-main w1200">
            <h2 class="tac">HI,欢迎进入准买！</h2>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="register-main-msg">

                <el-form-item prop="phone">
                    <el-input v-model="ruleForm.phone" placeholder="输入手机号">
                        <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
                    </el-input>
                </el-form-item>

                <el-form-item prop="imgCode" class="codePos">
                    <el-input v-model="ruleForm.imgCode" placeholder="输入图形验证码">
                        <i slot="prefix" class="el-input__icon el-icon-attract"></i>
                    </el-input>
                    <div class="verification-code" @click="refreshCode" title="点击更换验证码">
                        <SIdentify :identifyCode="identifyCode"></SIdentify>
                    </div>
                </el-form-item>

                <el-form-item prop="msgCode" class="codePos">
                    <el-input v-model="ruleForm.msgCode" placeholder="输入短信验证码">
                        <i slot="prefix" class="el-input__icon el-icon-attract"></i>
                    </el-input>
                    <div class="verification-code" style="border-left: 1px solid #E0E0E0;">
                        <el-link v-if="!flagCode" :underline="false" @click="getCode">{{codeNum}}</el-link>
                        <el-link v-if="flagCode" :underline="false" disabled>{{count }}秒后再次获取</el-link>
                    </div>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码">
                        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                    </el-input>
                </el-form-item>

                <el-form-item prop="passwordSecond">
                    <el-input v-model="ruleForm.passwordSecond" placeholder="确认密码">
                        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                    </el-input>
                </el-form-item>

<!--                <div class="website-location">-->
<!--                    <el-checkbox v-model="ruleForm.checkedLogin">-->
<!--                        我已阅读并同意-->
<!--                    </el-checkbox>-->
<!--                    <el-link :underline="false">准买网《服务协议》</el-link>-->
<!--                </div>-->

                <div class="tac submint-btn">
                    <el-button>确认修改</el-button>
                    <p>还没有账号？<el-link href="/register" :underline="false">去注册</el-link></p>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
    import SIdentify from './code'

    export default {
        name:'findpwd',
        data(){
            return{

                identifyCode:'',
                identifyCodes: '1234567890',

                flagCode: false,
                codeNum:'获取验证码',
                timer: null,
                count: "",

                ruleForm: {
                    phone:'',
                    imgCode:'',
                    msgCode:'',
                    password:'',
                    passwordSecond:'',
                    checkedLogin:false
                },
                rules: {
                    phone:[
                        { required: true, message: '请输入手机', trigger: 'blur' },
                    ],
                    imgCode:[
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                    ],
                    msgCode:[
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                    passwordSecond:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                }
            }
        },
        components: {
            SIdentify
        },
        methods:{
            // 获取短信验证码倒计时
            getCode(){
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.flagCode = true;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count --;
                        } else {
                            this.flagCode = false;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000);
                }
            },
            // 生成随机数
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min)
            },
            // 切换验证码
            refreshCode() {
                this.identifyCode = ''
                this.makeCode(this.identifyCodes, 4)
            },
            // 生成四位随机验证码
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                        this.randomNum(0, this.identifyCodes.length)
                        ]
                }
                console.log(this.identifyCode)
            }
        }
    }
</script>
<style scoped>
    .register-main .register-main-msg >>> .el-form-item__content{
        margin-left: 0 !important;
    }
</style>
<style type="text/less" lang="less" scoped>
    .register{
        overflow: hidden;
        .rigister-head-title{
            height: 0.5rem;
            line-height: 0.5rem;
            width: 100%;
            background-color: #EDF0F2;
            a{
                font-size: 0.14rem;
                color: #999;
            }
        }
        .register-main{
            margin-top: 0.5rem;
            min-height: 6rem;
            background-color: #fff;
            overflow: hidden;
            >h2{
                font-weight: normal;
                font-size: .2rem;
                margin: 0.3rem 0;
            }
            .register-main-msg{
                width: 35%;
                margin: 0 auto;
                .website-location{
                    margin: 0.1rem 0;
                }
                .codePos{
                    position: relative;
                    .verification-code{
                        position: absolute;
                        right: 5px;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                        width: 29%;
                        height: 80%;
                        z-index: 999;
                        cursor: pointer;
                        a{
                            width: 100%;
                            height: 100%;
                            color: #448BCB;
                            vertical-align: text-bottom;
                        }
                    }
                }
                .submint-btn {
                    overflow: hidden;
                    button{
                        width: 100%;
                        background-color: #FF5D24;
                        color: #fff;
                    }
                    p{
                        font-size: 0.14rem;
                        color: #333;
                        margin-top: 0.2rem;
                        a{
                            color: #FF5D24;
                        }
                    }
                }
            }

        }
    }
</style>