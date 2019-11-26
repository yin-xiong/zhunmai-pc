<template>
    <div class="account-set">
        <div>
            <setTitle></setTitle>
            <div class="userInfo">
                <div class="noEdit" v-if="flag1" style="margin: .4rem 0;">
                    <div class="flex">
                        <div class="accountSetName">头像：</div>
                        <div><el-image :src="userSrc"></el-image></div>
                    </div>
                    <div class="flex">
                        <div class="accountSetName">昵称：</div>
                        <div>歪猴桑</div>
                    </div>
                    <div class="flex">
                        <div class="accountSetName">性别：</div>
                        <div>男</div>
                    </div>
                    <div class="flex">
                        <div class="accountSetName">出生日期：</div>
                        <div>未设置</div>
                    </div>
                    <div class="flex">
                        <div class="accountSetName">手机号：</div>
                        <div>184****5704</div>
                    </div>
                </div>
                <div class="toEdit" v-if="!flag1">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="auto" class="ruleForm">
                        <el-form-item label="头像:" class="userImg">
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
                        <el-form-item label="昵称:" prop="userName" class="userName">
                            <el-input v-model="ruleForm.userName" placeholder="请输入昵称"></el-input>
                        </el-form-item>
                        <el-form-item label="性别:" class="sex"  prop="sex">
                            <el-select v-model="ruleForm.sex" placeholder="请选择性别">
                                <el-option label="男" value="1"></el-option>
                                <el-option label="女" value="2"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="出生日期：" required>
                            <el-col :span="11">
                                <el-form-item prop="date">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-form-item>

                        <el-form-item label="手机号码:" prop="phone" class="userName">
                            <el-input v-model="ruleForm.phone" placeholder="请输入昵称" :disabled="true"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
                            <el-button @click="resetForm('ruleForm')">取消</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="flex">
                    <div class="accountSetName"></div>
                    <div v-if="flag1" class="edit" @click="edit">编辑</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import setTitle from '../components/setTitle'

    export default {
        name:'accountSet',
        data(){
            return{
                userSrc:require('@/assets/image/icon/icon_agent_head.png'),
                flag1:true,
                action:this.domain+'/admin/website/backstageadd',
                ruleForm: {
                    picture: '',
                    userName:'',
                    sex:'',
                    date:'',
                    phone:'186xxxx2222',
                },
                rules:{
                    picture: '',
                    userName: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    sex: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    phone:'',
                },
            }
        },
        components:{
            setTitle
        },
        methods:{
            edit(){
                this.flag1 = false
            },


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
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            // 图片上传
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
        }
    }
</script>
<style scoped>
    .avatar-uploader >>> .el-upload{
        max-width: 100%;
        max-height: 100%;
        text-align: center;
        overflow: hidden;
    }
    .suonuetu >>> .hideUpload .el-upload--picture-card {
        display: none;
    }
    .el-button--primary{
        background-color: #FD4249;
        border-color: #FD4249;
    }
    .el-button:focus, .el-button:hover{
        color: #fff;
        border-color: #FD4249;
        background-color: #FD4249;
    }
    .toEdit >>> .el-select .el-input.is-focus .el-input__inner {
        border-color: #FD4249;
    }
</style>
<style type="text/less" lang="less" scoped>
    .account-set{
        .userInfo{
            overflow: hidden;
            .flex{
                justify-content: flex-start;
                align-items: center;
                flex-wrap: nowrap;
                margin: .2rem auto;
                color: #323A46;
                font-size: .14rem;
                .accountSetName{
                    width: 2rem;
                    text-align: right;
                    font-size: .16rem;
                    color: #6E768E;
                    margin-right: .6rem;
                }
                .el-image{
                    width: .9rem;
                }
                .edit{
                    cursor: pointer;
                    width: 1.6rem;
                    height: .5rem;
                    line-height: .5rem;
                    border-radius: 4px;
                    text-align: center;
                    background-color: #FD4249;
                    color: #fff;
                    font-size: .16rem;
                    font-weight: bold;
                    letter-spacing: 1px;
                }
            }
            .toEdit{
                max-width: 5rem;
                padding:0.4rem 0 0 1rem;
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
        }
    }
</style>