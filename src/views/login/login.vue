<template>
  <div class="login">
    <div class="loginbg">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="loginTitle">
          <h1>准买网</h1>
          <p>后台管理系统</p>
        </div>
        <el-form-item prop="username" label-width="0">
          <el-input v-model="ruleForm.username" placeholder="请输入您的用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" label-width="0">
          <el-input
            type="password"
            placeholder="请输入您的密码"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button type="primary"  @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>



export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [],
        password: []
      }
    };
  },
  methods: {
    submitForm(formName) {
      // this.$refs[formName].validate(async valid => {
      this.$refs[formName].validate( valid => {
        if (valid) {
          // const resp =await this.$api.login(data)
          console.log(this.domain);
          this.axios({
            url:this.domain+'/admin/login/login',
            method:'post',
            params:{
              username:this.ruleForm.username,
              password:this.ruleForm.password
            }
          }).then(resp=>{
            if(resp.data.status == 200){
              this.showMsg(resp.data.message, "success");
              console.log(resp.data)
              localStorage.setItem('username',JSON.stringify(this.ruleForm.username))
              localStorage.setItem('userid',JSON.stringify(resp.data.id))
              const token = resp.data.token;
              localStorage.setItem('token',token)
              this.$router.push({path: '/home'})
            }else{
              this.showMsg(resp.data.message, "warning");
            }
          })

        } else {
          this.showMsg(resp.data.message, "warning");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" type="text/less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/image/bg/loginbg.svg");
  background-size: contain;
  position: relative;
  .loginbg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 400px;
    height: 50vh;
    margin: auto;
    .loginTitle {
      text-align: center;
      margin-bottom: 5vh;
      p {
        font-size: 0.16rem;
      }
    }
    .el-button--primary {
      width: 100%;
    }
    .el-form-item {
      margin-bottom: 40px;
    }
  }
}
</style>
