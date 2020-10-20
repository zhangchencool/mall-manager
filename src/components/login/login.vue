<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      label-position="top"
      label-width="80px"
      :model="formData"
    >
    <h2>用户登录</h2>
      <el-form-item label="名称">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button @click=handleLogin type="primary" class="login-btn">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      this.$axios.post('login', this.formData).then((res) => {
        console.log(res.data)
        const {data, meta} = res.data
        console.log(data, meta)
        if (meta.status === 200) {
          this.$message({
            message: meta.msg,
            type: 'success'
          })
          this.$router.push('/')
          localStorage.setItem('token', data.token)
        } else {
          this.$message.error(meta.msg)
        }
      })
    }
  },
  components: {}
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
