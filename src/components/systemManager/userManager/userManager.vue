<template>
 <div class="userManager-container">
  <el-row class="breadcrumb-content">
    <breadcrumb></breadcrumb>
  </el-row>
  <el-row>
    <el-card>
      <el-row>
        <el-col>
          <span>部门：</span>
          <el-input class="search-ipt" v-model="searchform.department"></el-input>
          <span>用户名：</span>
          <el-input class="search-ipt" v-model="searchform.mail"></el-input>
          <span>邮箱：</span>
          <el-input class="search-ipt" v-model="searchform.sex"></el-input>
          <span>性别：</span>
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio>
          <el-radio v-model="radio" label="3">全部</el-radio>
          <el-button type="primary" @click="handleSearch">查 询</el-button>
          <el-button type="primary" @click="handleReset">重 置</el-button>
        </el-col>
      </el-row>
      <el-row>
        <my-table :tableDataConfig = 'tableLoadData' :tableHeadConfig = 'tableHeadConfig'>
          <template v-slot:operation = "slotData">
            <el-button type="primary" icon="el-icon-edit" circle @click= "handleuserEdit(slotData.data.row.id)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click= "handledel(slotData.data.row.id)"></el-button>
            <el-button type="warning" icon="el-icon-edit-outline" circle @click= "handleroleEdit(slotData.data.row.id)"></el-button>
          </template>
          <template v-slot:sex = "slotData">
            <el-tag>{{slotData.data.row.sex | sex}}</el-tag>
          </template>
          <template v-slot:status = "slotData">
            <el-switch
            v-model="slotData.data.row.status"
            active-color="#13ce66"
            inactive-color="#ff4949">
            </el-switch>
          </template>
        </my-table>
      </el-row>
    </el-card>
  </el-row>
  <el-dialog
  title="修改用户"
  :visible.sync="userDialogVisible"
  width="50%"
  :before-close="handleClose">
  <el-form :model="userAddForm" :rules="addRules" ref="userAddForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" required>
    <el-col :span="8">
      <el-form-item prop="username">
        <el-input v-model="userAddForm.username"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="16">
      <el-form-item label="部门" prop="departmentId" required>
        <el-select v-model="userAddForm.departmentId" placeholder="请选择活动区域">
          <el-option label="管理部" value="1"></el-option>
          <el-option label="维修部" value="2"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
  </el-form-item>

  <el-form-item label="昵称" required>
    <el-col :span="8">
      <el-form-item prop="nickname">
         <el-input v-model="userAddForm.nickname"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="16">
      <el-form-item label="性别" required prop="sex">
        <el-radio v-model="userAddForm.sex" label="帅哥"></el-radio>
        <el-radio v-model="userAddForm.sex" label="美女"></el-radio>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="userAddForm.email"></el-input>
  </el-form-item>
  <el-form-item label="联系方式" prop="phoneNumber">
     <el-input v-model="userAddForm.phoneNumber"></el-input>
  </el-form-item>
  <el-form-item label="生日" prop="birth">
    <el-input v-model="userAddForm.birth"></el-input>
  </el-form-item>
</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="userDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitUserInfo">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
title="分配角色"
:visible.sync="roleDialogVisible"
width="720px"
:before-close="handleClose"
class="transfer-dia"
>
<div class="transfer-box">
 <el-transfer v-model="value" :data="roledata"
 :titles="['未拥有','已拥有']"
 :button-texts="['到左边', '到右边']">
</el-transfer>
 </div>
 <span slot="footer" class="dialog-footer">
    <el-button @click="roleDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submiRoleInfo">确 定</el-button>
  </span>
</el-dialog>
 </div>
</template>

<script>
import myTable from '@/components/packag/table.vue'
export default {
  data () {
    return {
      radio: '3',
      searchform: {
        pageNum: 1,
        pageSize: 6,
        username: '',
        sex: '',
        nickname: ''
      },
      tableHeadConfig: [
        {
          label: 'ID',
          field: 'id'
        },
        {
          label: '用户名',
          field: 'username'
        },
        {
          label: '性别',
          columnType: 'slot',
          slotName: 'sex'
        },
        {
          label: '所属部门',
          field: 'departmentName'
        },
        {
          label: '生日',
          field: 'birth'

        },
        {
          label: '邮箱',
          field: 'email'
        },
        {
          label: '状态',
          columnType: 'slot',
          slotName: 'status'
        },
        {
          label: '操作',
          columnType: 'slot',
          slotName: 'operation'
        }
      ],
      tableLoadData: [],
      userDialogVisible: false,
      userAddForm: {
        username: '',
        nickname: '',
        password: '123',
        email: '',
        phoneNumber: '',
        sex: '帅哥',
        birth: ''
      },
      addRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        departmentId: [
          {required: true, message: '请选择部门', trigger: 'blur'}
        ],
        nickname: [
          {required: true, message: '请输入昵称', trigger: 'blur'}
        ],
        sex: [
          {required: true, message: '请输入性别', trigger: 'blur'}
        ]
      },
      roleDialogVisible: false,
      roledata: [],
      value: []
    }
  },
  components: {
    myTable
  },
  created () {
    this.getUserData()
  },
  filters: {
    sex (sex) {
      if (sex === 1) {
        return '帅哥'
      } else {
        return '美女'
      }
    }
  },
  methods: {
    handleSearch () {
      this.getUserData()
    },
    handleReset () {
      this.searchform = {}
    },
    getUserData () {
      this.$axios
        .get('user/findUserList', {params: this.searchform})
        .then((res) => {
          const {data, code} = res.data
          if (code === 200) {
            this.tableLoadData = data.rows
          }
        })
    },
    handleuserEdit (id) {
      this.$axios
        .get('user/edit/' + id)
        .then((res) => {
          const {data, code} = res.data
          if (code === 200) {
            this.userAddForm = data
            this.userDialogVisible = true
          }
        })
    },
    handleroleEdit (id) {
      this.$axios
        .get('user/' + id + '/roles')
        .then((res) => {
          const {data, code} = res.data
          if (code === 200) {
            this.roledata = data.roles
            this.value = data.values
            this.roleDialogVisible = true
          }
        })
    },
    submitUserInfo () {
      this.$refs.userAddForm.validate(valid => {
        if (!valid) {

        } else {
          debugger
          this.$axios
            .post('user/add', this.userAddForm)
            .then((res) => {
              const {code} = res.data
              if (code === 200) {
                this.$message({
                  message: '修改成功',
                  type: 'success'
                })
                this.userDialogVisible = false
              }
            })
        }
      })
    },
    submiRoleInfo () {

    },
    handledel (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios
          .delete('user/delete/' + id)
          .then((res) => {
            const {code} = res.data
            if (code === 200) {
              this.userDialogVisible = false
              this.getUserData()
            }
          })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.userManager-container{
  width: 100%;
  height: 100%;
  .search-ipt{
    width: 200px;
    margin: 20px;
  }
}
</style>
