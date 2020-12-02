<template>
 <div class="menuManager-container">
    <el-row class="breadcrumb-content">
      <breadcrumb></breadcrumb>
    </el-row>
    <el-row>
      <el-card>
        <el-tree
          :props="prop"
          :data="data"
          :load="loadNode"
          node-key="id"
          show-checkbox
          @check-change="handleCheckChange">
           <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <el-button
                type="text"
                size="mini"
                @click="handleEdit(data)">
                编辑
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="handleDel(data)">
                删除
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="handleAdd(data)">
                增加
              </el-button>
            </span>
          </span>
        </el-tree>
        <el-dialog
          title="编辑"
          :visible.sync="isEditdialog"
          width="30%"
          :before-close="handleClose">
          <el-form :model="editForm" :rules="rules" ref="editForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="节点名称" prop="menuName">
              <el-input v-model="editForm.menuName"></el-input>
            </el-form-item>
            <el-form-item label="URL">
              <el-input v-model="editForm.url"></el-input>
            </el-form-item>
            <el-form-item label="权限编码" prop="parentId">
              <el-input v-model="editForm.parentId"></el-input>
            </el-form-item>
            <el-form-item label="图标">
              <el-input v-model="editForm.icon"></el-input>
            </el-form-item>
            <el-form-item label="是否可用">
              <el-radio v-model="editForm.disabled" :label= "false">可用</el-radio>
              <el-radio v-model="editForm.disabled" :label= "ture">不可用</el-radio>
            </el-form-item>
            <el-form-item label="是否展开">
              <el-radio v-model="editForm.open" :label= "0">展开</el-radio>
              <el-radio v-model="editForm.open" :label= "1">不展开</el-radio>
            </el-form-item>
            <el-form-item label="排序">
              <el-input-number v-model="editForm.orderNum" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item label="类型">
              <el-radio v-model="editForm.type" :label= "0">按钮</el-radio>
              <el-radio v-model="editForm.type" :label= "1">菜单</el-radio>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="isEditdialog = false">取 消</el-button>
            <el-button type="primary" @click="handleSubmitEditform">确 定</el-button>
          </span>
        </el-dialog>
           <el-dialog
          title="添加"
          :visible.sync="isAdddialog"
          width="30%"
          :before-close="handleClose">
          <el-form :model="editForm" :rules="rules" ref="editForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="节点名称" prop="menuName">
              <el-input v-model="editForm.menuName"></el-input>
            </el-form-item>
            <el-form-item label="URL">
              <el-input v-model="editForm.url"></el-input>
            </el-form-item>
            <el-form-item label="权限编码" prop="parentId">
              <el-input v-model="editForm.parentId"></el-input>
            </el-form-item>
            <el-form-item label="图标">
              <el-input v-model="editForm.icon"></el-input>
            </el-form-item>
            <el-form-item label="是否可用">
              <el-radio v-model="editForm.disabled" :label= "false">可用</el-radio>
              <el-radio v-model="editForm.disabled" :label= "ture">不可用</el-radio>
            </el-form-item>
            <el-form-item label="是否展开">
              <el-radio v-model="editForm.open" :label= "0">展开</el-radio>
              <el-radio v-model="editForm.open" :label= "1">不展开</el-radio>
            </el-form-item>
            <el-form-item label="排序">
              <el-input-number v-model="editForm.orderNum" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item label="类型">
              <el-radio v-model="editForm.type" :label= "0">按钮</el-radio>
              <el-radio v-model="editForm.type" :label= "1">菜单</el-radio>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="isAdddialog = false">取 消</el-button>
            <el-button type="primary" @click="handleSubmitEditform">确 定</el-button>
          </span>
        </el-dialog>

      </el-card>
    </el-row>
 </div>

</template>

<script>
export default {
  data () {
    return {
      data: [],
      prop: {
        children: 'children',
        label: 'menuName'
      },
      isEditdialog: false,
      isAdddialog: false,
      editForm: {
        parentId: '',
        menuName: '',
        url: '',
        type: '',
        orderNum: '',
        disabled: '',
        open: '',
        perms: ''
      },
      rules: {
        menuName: [
          { required: true, message: '节点名称不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  components: {

  },
  created () {
    this.getMenusData()
  },
  methods: {
    getMenusData () {
      this.$axios
        .get('menu/tree')
        .then((res) => {
          const {data, code} = res.data
          if (code === 200) {
            this.data = data.tree
          }
        })
    },
    handleEdit (data) {
      this.isEditdialog = true
      this.$axios
        .get('menu/edit/' + data.id)
        .then((res) => {
          const {data, code} = res.data
          if (code === 200) {
            this.editForm = data
          }
        })
    },
    handleSubmitEditform () {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$axios
            .put('menu/update/' + this.editForm.id,
              this.editForm)
            .then((res) => {
              const {data, code} = res.data
              if (code === 200) {
              }
            })
        }
      })
    },
    handleAdd (data) {
      this.editForm = {}
      this.isAdddialog = true
    },
    handleDel (data) {

    }
  }
}
</script>

<style lang="scss" scoped>
.menuManager-container{
  width: 100%;
  height: 100%;
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
}

</style>
