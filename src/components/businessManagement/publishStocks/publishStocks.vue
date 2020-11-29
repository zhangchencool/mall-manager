<template>
  <div class="publishStocks-container">
    <el-row class="breadcrumb-content">
      <breadcrumb></breadcrumb>
    </el-row>
    <el-row>
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
            <span>添加方式：</span>
            <el-radio v-model="radio" label="1" border>备选项1</el-radio>
            <el-radio v-model="radio" label="2" border>备选项2</el-radio>
            <el-form ref="form" :model="form" label-width="100px">
              <el-form-item label="活动名称">
                <el-radio v-model="radio" label="1" border>备选项1</el-radio>
                <el-radio v-model="radio" label="2" border>备选项2</el-radio>
                <el-radio v-model="radio" label="1" border>备选项1</el-radio>
                <el-radio v-model="radio" label="2" border>备选项2</el-radio>
              </el-form-item>
              <el-form-item label="省份">
                <el-select></el-select>
                <span>城市</span>
                <el-select></el-select>
                <span>区县</span>
                <el-select></el-select>
              </el-form-item>
              <el-form-item label="具体来源">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="联系人">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="电话">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="排序">
                <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" class="stock-table"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      radio: "1",
      form: {}
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>
