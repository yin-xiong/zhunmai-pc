<template>
    <div class="service">
        <div>
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
            <div class="service-main">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                    <el-form-item label="建议标题：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="建议内容：" prop="desc">
                        <el-input :rows="10" resize="none" type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交建议</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'service',
        data(){
            return{
                isActive:0,
                list:[
                    {title:'投诉和建议',path:'/service',index:1}
                ],
                ruleForm: {
                    name: '',
                    desc: ''
                },
                rules:{
                    name: [
                        { required: true, message: '请输入内容', trigger: 'blur' },
                        { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '请输入内容', trigger: 'blur' }
                    ]
                }
            }
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
            }
        },
        mounted(){
            var strIndex = this.$route.meta.index
            this.isActive = strIndex.substring(2,3)
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .service{
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
        .service-main{
            overflow: hidden;
            box-sizing: border-box;
            margin: 1rem;
            max-width: 6rem;
            .el-button--primary {
                color: #FFF;
                background-color: #FF5D24;
                border-color: #FF5D24;
            }
        }
    }
</style>