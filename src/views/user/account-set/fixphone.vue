<template>
    <div class="fixphone">
        <div>
            <setTitle></setTitle>
            <div class="fixphone-main">
                <div class="fixphone-steps">
                    <el-steps :active="active" finish-status="success" align-center>
                        <el-step v-for="item in steps" :title="item"></el-step>
                    </el-steps>
                </div>
                <div>
                    <div class="fixphone-steps-cont">
                        <el-form label-position="right" label-width="160px" :model="ruleForm" :rules="rules">
                            <div v-if="step1 == active ? true:false" class="fixphone-steps-first">
                                <el-form-item label="原手机号:">
                                    <el-input v-model="ruleForm.oldPhone" :disabled="true"></el-input>
                                </el-form-item>
                                <el-form-item prop="putOldPhone" label="请输入原手机号码:">
                                    <el-input v-model="ruleForm.putOldPhone"></el-input>
                                </el-form-item>
                                <el-form-item prop="code" label="请输入验证码:" class="codePos">
                                    <el-input v-model="ruleForm.code"></el-input>

                                    <div class="verification-code" style="border-left: 1px solid #E0E0E0;">
                                        <el-link v-if="!flagCode" :underline="false" @click="getCode">{{codeNum}}</el-link>
                                        <el-link v-if="flagCode" :underline="false" disabled>{{count }}秒后再次获取</el-link>
                                    </div>
                                </el-form-item>
                            </div>
                            <div v-if="step2 == active ? true:false">steps2</div>
                            <div v-if="step3 == active ? true:false">steps3</div>

                            <el-form-item class="nextBtn">
                                <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
    import setTitle from '../components/setTitle'
    export default {
        name:'fixphone',
        data(){
            return{
                step1:1,
                step2:2,
                step3:3,

                active: 1,
                steps:['验证身份',"修改手机号","完成"],

                flagCode: false,
                codeNum:'获取验证码',
                timer: null,
                count: "",

                ruleForm: {
                    oldPhone: '186xxx2826',
                    putOldPhone: '',
                    code: ''
                },
                rules: {
                    putOldPhone:[
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                    ],
                    code:[
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                    ],

                }
            }
        },
        components:{
            setTitle
        },
        methods: {
            // 步骤条
            next() {
                if (this.active++ > 2) this.active = 1;
            },

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
        }
    }
</script>
<style scoped>
    .fixphone-steps >>> .el-step .el-step__title{
        font-weight: normal;
        color: #999;
        font-size: .14rem;
    }
    .fixphone-steps >>> .el-step .el-step__icon-inner{
        font-weight: normal;
    }
    .fixphone-steps >>> .el-step .is-success{
        color: #FF5D24;
        border-color: #FF5D24;
    }
    .fixphone-steps >>> .el-step .is-success .el-step__icon{
        background-color: #FF5D24;
    }
    .fixphone-steps >>> .el-step__head .el-step__icon,
    .fixphone-steps >>> .el-step__head.is-process .el-step__icon{
        border: none;
        background-color: #e0e0e0;
        color: #fff;
        width: .3rem;
        height: .3rem;
        font-size: .2rem;
        font-weight: normal;
    }
</style>
<style type="text/less" lang="less" scoped>
    .fixphone{
        .fixphone-main{
            width: 6rem;
            height: 4rem;
            margin: 1rem 0 0 2rem;
            border:1px solid rgba(224,224,224,1);
            border-radius:6px;
            box-sizing: border-box;
            padding: .4rem .6rem 0 0;
            .fixphone-steps-cont{
                margin-top: .2rem;
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
                            color: #FF5D24;
                            vertical-align: text-bottom;
                        }
                    }
                }
                .nextBtn{
                    button{
                        background-color: #FD4249;
                        border: #FD4249;
                        color: #fff;
                    }
                }
            }

        }
    }
</style>