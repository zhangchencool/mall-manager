<template>
  <div class="publishStocks-container">
    <el-row class="breadcrumb-content">
      <breadcrumb></breadcrumb>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="12" class="edit-form">
        <el-card>
          <div class="schedule-box">
            <el-steps :active="1" simple>
              <el-step title="填写" icon="el-icon-edit"></el-step>
              <el-step title="审核" icon="el-icon-upload"></el-step>
              <el-step title="入库" icon="el-icon-picture"></el-step>
            </el-steps>
          </div>
          <div class="form">
            <el-form ref="form" :model="addRuleForm" label-width="100px">
               <el-form-item label="添加方式">
                <el-radio v-model="addRuleForm.typeRadio" label="0" border>新增去向</el-radio>
                <el-radio v-model="addRuleForm.typeRadio" label="1" border>已知去向</el-radio>
               </el-form-item>
              <div v-if="addRuleForm.typeRadio == '0'">
                <el-form-item label="优先级">
                  <el-radio v-model="addRuleForm.radio" label="0" >不急</el-radio>
                  <el-radio v-model="addRuleForm.radio" label="1" >常规</el-radio>
                  <el-radio v-model="addRuleForm.radio" label="2" >紧急</el-radio>
                  <el-radio v-model="addRuleForm.radio" label="3" >特级</el-radio>
                  <el-radio v-model="addRuleForm.radio" label="4" >超急</el-radio>
                </el-form-item>
                <el-form-item label="领取类型">
                  <el-radio v-model="addRuleForm.radio" label="0" >政府</el-radio>
                  <el-radio v-model="addRuleForm.radio" label="1" >医院</el-radio>
                  <el-radio v-model="addRuleForm.radio" label="2" >小区</el-radio>
                  <el-radio v-model="addRuleForm.radio" label="3" >个人</el-radio>
                  <el-radio v-model="addRuleForm.radio" label="4" >其他</el-radio>
                </el-form-item>
                <el-row type="flex" class="row-bg">
                  <el-col :span="8">
                    <el-form-item label="省份">
                      <el-select v-model="addRuleForm.radio" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="城市">
                      <el-select v-model="addRuleForm.city" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="区县">
                      <el-select v-model="addRuleForm.county" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item label="具体去向">
                  <el-input v-model="addRuleForm.county"></el-input>
                </el-form-item>
                <el-form-item label="联系人">
                  <el-input v-model="addRuleForm.county"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                  <el-input v-model="addRuleForm.county"></el-input>
                </el-form-item>
                <el-form-item label="排序">
                  <el-input-number v-model="addRuleForm.county" :min="1" :max="10" label="描述文字"></el-input-number>
                </el-form-item>
                <el-row type="flex" justify="space-between">
                  <el-col :span="12">
                    <el-form-item label="物资明细">
                    <el-button @click="handleDrawer">发放明细</el-button>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="物资种类">
                    <el-input-number v-model="addRuleForm.county" :min="1" :max="10" label="描述文字"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item label="描述信息">
                  <el-input
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="addRuleForm.textarea"
                  maxlength="30"
                  show-word-limit
                ></el-input>
                </el-form-item>
              </div>
              <div v-else>
                <el-form-item label="物资去向">
                  <el-select>
                  </el-select>
                </el-form-item>
                <el-form-item label="优先级">
                  <el-radio v-model="addRuleForm.typeRadio" label="0" >新增去向</el-radio>
                  <el-radio v-model="addRuleForm.typeRadio" label="1" >已知去向</el-radio>
                  <el-radio v-model="addRuleForm.typeRadio" label="2" >新增去向</el-radio>
                  <el-radio v-model="addRuleForm.typeRadio" label="3" >已知去向</el-radio>
                  <el-radio v-model="addRuleForm.typeRadio" label="4" >已知去向</el-radio>
                </el-form-item>
                <el-form-item label="领取类型">
                  <el-radio v-model="addRuleForm.typeRadio" label="0" >新增去向</el-radio>
                  <el-radio v-model="addRuleForm.typeRadio" label="1" >已知去向</el-radio>
                  <el-radio v-model="addRuleForm.typeRadio" label="2" >新增去向</el-radio>
                  <el-radio v-model="addRuleForm.typeRadio" label="3" >已知去向</el-radio>
                  <el-radio v-model="addRuleForm.typeRadio" label="4" >已知去向</el-radio>
                </el-form-item>
                <el-form-item>
                  <el-card>
                    <el-row>
                      <span>物资名称: </span>
                    </el-row>
                    <el-row>
                      <span>物资地址: </span>
                    </el-row>
                    <el-row>
                      <span>联系方式: </span>
                    </el-row>
                    <el-row>
                      <span>联系人员: </span>
                    </el-row>
                  </el-card>
                </el-form-item>
                <el-row type="flex" justify="space-between">
                  <el-col :span="12">
                    <el-form-item label="物资明细">
                    <el-button></el-button>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="物资种类">
                    <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item label="描述信息">
                  <el-input
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="textarea"
                  maxlength="30"
                  show-word-limit
                  ></el-input>
                </el-form-item>
              </div>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col :span="10" class="stock-table">
        <el-card>
          <el-row>
            <span>名称：</span>
            <el-input class="search-ipt"></el-input>
            <span>分类：</span>
             <el-select v-model="addRuleForm.city" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            <el-button type="primary" @click="handleSearch">查 询</el-button>
          </el-row>
          <el-row>
            <Table
            :tableHeadConfig="tableHeadConfig"
            ></Table>
          </el-row>
        </el-card>
      </el-col>
      <el-drawer
        :visible.sync="drawer"
        size="50%"
        :direction="direction"
        :before-close="handleClose">
        <el-row>
          <span>名称：</span>
          <el-input class="search-ipt"></el-input>
          <span>分类：</span>
            <el-select v-model="addRuleForm.city" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          <el-button type="primary" @click="handleSearch">查 询</el-button>
        </el-row>
        <el-row>
          <Table
          :tableHeadConfig="tableHeadConfig"
          ></Table>
        </el-row>
      </el-drawer>
    </el-row>
  </div>
</template>

<script>
import Table from '@/components/packag/table.vue'
export default {
  components: {
    Table
  },
  props: {},
  data () {
    return {
      radio: '1',
      form: {},
      drawer: false,
      addRuleForm: {
        typeRadio: '0'
      },
      tableHeadConfig: [
        {
          label: 'ID',
          field: 'id'
        },
        {
          label: '办公电话',
          field: 'phone'
        },
        {
          label: '部门名',
          field: 'name'
        },
        {
          label: '人数',
          columnType: 'slot',
          slotName: 'total'
        },
        {
          label: '创建时间',
          field: 'createTime'

        },
        {
          label: '修改时间',
          field: 'modifiedTime'
        }
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    handleDrawer () {
      this.drawer = true
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
 .publishStocks-container{
   .form{
     padding-top: 30px;
     .el-select{
       width: 120px;
     }
   }
   .search-ipt{
     width: 140px;
   }
   .el-select{
     width: 140px;
   }
 }
</style>
