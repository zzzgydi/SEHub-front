<template>
  <div>
    <div class="loginImg"></div>
    <div>
      <el-container class="form-cantainer">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-position="left"
          label-width="0px"
          class="login-container"
        >
          <h3 class="title">软件学院团学管理系统</h3>
          <el-form-item prop="account">
            <el-input
              type="text"
              v-model="ruleForm.account"
              @keyup.enter.native="handleSubmit"
              auto-complete="off"
              placeholder="账号"
              style="min-width:300px;"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              @keyup.enter.native="handleSubmit"
              auto-complete="off"
              placeholder="密码"
              style="min-width:300px;"
            ></el-input>
          </el-form-item>
          <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
          <el-form-item style="width:100%;">
            <el-button
              type="primary"
              style="width:200px;margin-left:50px;"
              @click.native.prevent="handleSubmit"
              :loading="logining"
            >登录</el-button>
          </el-form-item>
        </el-form>
      </el-container>
      <!-- <el-footer>
      <span>2018&copy; 华南理工大学 软件学院团委学生会 版权所有</span>
      </el-footer>-->
    </div>
  </div>
</template>

<script>
import { apiLogin } from '../api/home.js'
export default {
  name: 'Login',
  data () {
    return {
      logining: false,
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      checked: true
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          apiLogin(res => {
            console.log(res)
            this.$store.commit('login')
            this.$router.push('/home')
            console.log(this.$store.state.isLogin)
          })
          // Test API
          // this.axios
          //   .post('/api/login', {
          //     stuid: this.ruleForm.account,
          //     pwd: this.ruleForm.checkPass
          //   })
          //   .then(res => {
          //     let state = res.data['state']
          //     if (state == 0) {
          //       this.$router.push('/stuunion')
          //     } else if (state == 101) {
          //       this.$message.error('账号不存在！')
          //     } else if (state == 102) {
          //       this.$message.error('密码错误！')
          //     } else {
          //       this.$message.error('调用出错！')
          //     }
          //   })
          //   .catch(res => {
          //     this.$message.error('登录出错！')
          //   })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.loginImg {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url('../../public/background.jpg') no-repeat;
  background-size: cover;
  z-index: -1;
}

.login-container {
  /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02); */
  -webkit-border-radius: 6px;
  border-radius: 6px;
  -moz-border-radius: 6px;
  margin: 11% auto;
  width: 300px;
  padding: 35px 35px 15px 35px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid #eaeaea;

  // box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .remember {
    margin: 0px 0px 20px 210px;
  }
}
</style>
