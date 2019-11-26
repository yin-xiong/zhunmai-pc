<template>
    <div class="login flex">
        <div class="login-left">
            <img :src="src" alt="">
        </div>
        <div class="login-right">
            <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    class="ruleForm-msg"
            >
                <h2 class="tac">HI,欢迎进入准买！</h2>
                <div>
                    <div>
                        <h3>登录账号</h3>
                        <el-form-item prop="phone">
                            <el-input v-model="ruleForm.phone" placeholder="请输入手机号">
                                <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
                            </el-input>
                        </el-form-item>
                    </div>
                    <div>
                        <h3>密码</h3>
                        <el-form-item prop="password">
                            <el-input v-model="ruleForm.password" placeholder="请输入密码">
                                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="flex">
                        <div class="checkedAgreed"><el-checkbox v-model="ruleForm.checkedLogin">自动登录</el-checkbox></div>
                        <div><el-link :underline="false">免费注册》</el-link></div>
                    </div>
                    <div class="tac submint-btn">
                        <el-button @click="toLogin">登录</el-button>
                        <p><el-link href="/findpwd" :underline="false">忘记密码？</el-link></p>
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</template>
<style scoped>
   .login-right .ruleForm-msg >>> .el-form-item__content{
        margin-left: 0 !important;
    }
</style>
<script>


    export default {
        name:'login',
        data(){
            return{
                src:require('@/assets/image/icon/login_picture.jpg'),
                token:'',
                ruleForm: {
                    phone:'',
                    password:'',
                    checkedLogin:false
                },
                rules: {
                    phone:[
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { min: 11, max: 11, message: '长度11 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                }
            }
        },
        methods:{

            // 登录
            async toLogin(){
                var data = {
                    phone : this.ruleForm.phone,
                    password : this.ruleForm.password
                }
                let resp = await this.$api.login(data)
                console.log(resp);
                if(resp.status == 200){
                    this.showMsg(resp.msg,'success')
                    this.$router.push({path:'/index'})
                    this.token = resp.token
                    if(this.ruleForm.checkedLogin){
                        localStorage.setItem('phone',this.ruleForm.phone)
                        localStorage.setItem('token',resp.token)
                    }
                    sessionStorage.setItem('token',resp.token)
                    sessionStorage.setItem('phone',this.ruleForm.phone)
                }
            }
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .login{
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: nowrap;
        margin: 8vh auto 0 auto;
        width: 67%;
        height:6rem;
        .login-left{
            width: 61.5%;
            height: 100%;
            text-align: center;
            img{
                width: 100%;
                height: 100%;
                margin: 0 -100%;
            }
        }
        .login-right{
            width: 38.5%;
            height: 100%;
            background-color: #fff;
            box-sizing: border-box;
            padding: 0 0.5rem;
            .ruleForm-msg{
                >h2{
                    font-weight: normal;
                    font-size: .2rem;
                    margin: 0.4rem 0;
                }
                >div{
                    overflow: hidden;
                    >div{
                        margin-bottom: 0.5rem;
                        &:nth-child(2){
                            margin-bottom: 0.3rem;
                        }
                    }
                }
                h3{
                    font-size: 0.16rem;
                    color: #FF5D24;
                    margin-bottom: 0.1rem;
                }
                .flex{
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: nowrap;
                    a{color: #FD4249;}
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
                    }
                }
            }
        }
    }
</style>