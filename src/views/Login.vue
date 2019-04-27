<template>
  <div>
    <div class="loginImg"></div>
    <div class="login-container">
      <div class="title">软件学院团学管理系统</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
        <el-form-item prop="account">
          <el-input
            type="text"
            v-model="ruleForm.account"
            @keyup.enter.native="handleSubmit"
            placeholder="账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            @keyup.enter.native="handleSubmit"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      </el-form>
      <el-button
        class="login-button"
        type="primary"
        @click.native.prevent="handleSubmit"
        :loading="logining"
      >登录</el-button>
    </div>
  </div>
</template>

<script>
import { apiLogin } from "../api/home.js";
export default {
  name: "Login",
  data() {
    return {
      logining: false,
      ruleForm: {
        account: "",
        password: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.logining = true;
          apiLogin(res => {
            this.logining = false;
            if (res.code === 0) {
              // console.log('jwt:', res.jwt)
              this.$store.commit("login", res.body.jwt);
              this.$router.push("/home");
            } else {
              console.log("login fail");
            }
            // console.log(res)
          });
        }
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/default.styl';

.loginImg {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url('http://oss.segydi.cn/background.jpg') no-repeat;
  background-size: cover;
  z-index: -1;
  top: 0;
}

.login-container {
  $box-width = 300px;
  margin: 12% auto;
  width: $box-width;
  padding: 32px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #eaeaea;
  border-radius(10px);

  .title {
    font-size: 1.25rem;
    color: $color_black;
    text-align: center;
    margin-bottom: 25px;
  }

  .remember {
    margin: 0px 0px 15px 210px;
  }

  .login-button {
    $btn-width = 200px;
    width: $btn-width;
    margin-left: (($box-width - $btn-width) / 2)px;
  }
}
</style>
