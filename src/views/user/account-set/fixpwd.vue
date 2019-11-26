<template>
    <div class="fixpwd">
        <setTitle></setTitle>
        <div class="fixpwd-main">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px" class="pwd-ruleForm">
                <el-form-item label="原密码：" prop="oldPwd">
                    <el-input type="password" v-model.number="ruleForm.oldPwd"></el-input>
                </el-form-item>

                <el-form-item label="设置新密码：" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item class="subBtn">
                    <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import setTitle from '../components/setTitle'

    export default {
        name:'fixpwd',
        components:{
            setTitle
        },
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('密码不能为空'));
                }
                callback();
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    oldPwd: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    oldPwd: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },

    }
</script>
<style type="text/less" lang="less" scoped>
    .fixpwd{
        .fixpwd-main{
            width: 6rem;
            height: 4rem;
            border:1px solid #e0e0e0;
            margin: 0.6rem 0 0 1rem;
            box-sizing: border-box;
            padding: 0.6rem 0.6rem 0 0;
            .subBtn {
                button{
                    background-color: #FD4249;
                    border-color: #FD4249;
                }
            }
        }
    }
</style>