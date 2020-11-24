<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      label-position="top"
      label-width="80px"
      :model="formData"
      :rules="rules"
      ref="loginForm"
    >
    <h2>用户登录</h2>
      <el-form-item label="用户名" prop= "username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop= "password">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button @click="handleSumit()" type="primary" class="login-btn">登 录</el-button>
      <Vcode :show="isShow" @success="success" @close="close" />
    </el-form>
  </div>
</template>

<script>
import Vcode from 'vue-puzzle-vcode'
export default {
  data () {
    return {
      formData: {
        username: 'admin',
        password: '123456'
      },
      isShow: false,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur'},
          { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur'},
          { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSumit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.isShow = true
        } else {
          return
        }
      })
    },
    success () {
      this.$axios.post('user/login?username='+this.formData.username+'&'+"password="+this.formData.password
      
      ).then((res) => {
        const {data, code, msg} = res.data
        if (code === 200) {
          this.$message({
            message: msg,
            type: 'success'
          })
          debugger
          localStorage.setItem('token', data)
          this.$store.commit('setUserInfo', res.data)
          this.$router.push('/home')
        } else {
          this.$message.error(meta.msg)
        }
      })
    },
    close () {

    }
  },
  components: {
    Vcode
  }
}
</script>

<style lang="scss">
.login-wrap{
    width: 100%;
    height: 100%;
    background-color: #324152;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-form{
        width: 400px;
        background-color: #fff;
        border-radius: 5px;
        padding: 40px 40px;

        .login-btn{
          width: 100%;
        }
    }
}
</style>
