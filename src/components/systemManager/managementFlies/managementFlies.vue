<template>
 <div class="managementFlies-container">
  <el-row class="breadcrumb-content">
    <breadcrumb></breadcrumb>
  </el-row>
    <el-card>
      <el-row class="search-box">
        <el-col>
          <span>图片路径:</span>
          <el-input class="search-ipt path" v-model="queryMap.path"></el-input>
          <span>图片后缀:</span>
          <el-select v-model="queryMap.suffix" placeholder="请选择" class="search-ipt suffix">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" @click="handleSearch">查 询</el-button>
          <el-button type="primary" @click="showHandleUpload()">上 传</el-button>
          <el-button type="primary" @click="handleReset">重 置</el-button>
        </el-col>
      </el-row>
      <el-row class="img-content" v-if="Msgdatalist.length > 0" >
        <el-col :span="6" v-for="(item, index) in Msgdatalist" :key="index">
          <el-image
            style="width:200px;height:170px"
            :src="'https://www.zykhome.club/'+item.path"
            fit="contain">
          </el-image>
          <div class="img-size-box">
            <el-tag
              type="success"
              effect="dark">
              {{item.width}} px X {{item.height}} px
            </el-tag>
            <span class="delete-btn" @click ="handleDelete(item.id)"><i class="el-icon-delete"></i>删除</span>
          </div>
        </el-col>
      </el-row>
      <el-row v-else>
        <el-col class="nothing">
          <span>暂未数据</span>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog
      title="上传"
      :visible.sync="isuploaddialog"
      width="30%"
      :before-close="handleClose">
      <el-upload
      class="upload-demo"
      drag
      ref="upload"
      :auto-upload="false"
      :file-list="filelist"
      limit="10"
      :action="uploadUrl"
      :headers='headers'
      :on-success="onsuccess"
      :on-error="onerror"
      multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isuploaddialog = false">取 消</el-button>
        <el-button type="primary" @click="handleUpload()">确 定</el-button>
  </span>
</el-dialog>
 </div>
</template>

<script>
import Table from '@/components/packag/table.vue'
export default {
  data () {
    return {
      Msgdatalist: [],
      isuploaddialog: false,
      filelist: [],
      uploadUrl: 'https://www.zykhome.club/api/upload/image',
      headers: {
        Authorization: window.localStorage.getItem('token')
      },
      options: [{
        value: '.jpg',
        label: 'jpg'
      }, {
        value: '.png',
        label: 'png'
      }, {
        value: '.gif',
        label: 'gif'
      }],
      imgpath: '',
      imgsuffix: '',
      queryMap: {
        pageSize: 8,
        pageNum: 1,
        path: '',
        suffix: ''
      }
    }
  },
  components: {
    Table
  },
  methods: {
    getMsgData () {
      let params = {}
      params = this.queryMap
      this.$axios
        .get('upload/findImageList', params)
        .then((res) => {
          const {data, code} = res.data
          if (code === 200) {
            this.Msgdatalist = data.list
          }
        })
    },
    showHandleUpload () {
      this.isuploaddialog = true
    },
    handleUpload () {
      this.$refs.upload.submit()
    },
    onsuccess (response, file, fileList) {
      if (response.code === 200) {
        this.$message({
          message: '成功上传',
          type: 'success'
        })
        this.isuploaddialog = false
        this.getMsgData()
      }
    },
    onerror (error, file, fileList) {
      return error
    },
    handleSearch () {
      this.queryMap.pageNum = 1
      this.getMsgData()
    },
    handleReset () {
      this.queryMap.path = ''
      this.queryMap.suffix = ''
      this.getMsgData()
    },
    handleDelete (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios
          .delete('upload/delete/' + id)
          .then((res) => {
            if (res.data.code === 200) {
              this.$message.success('删除图片成功')
              this.getMsgData()
            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  created () {
    this.getMsgData()
  }
}
</script>

<style lang="scss" scoped>
.managementFlies-container{
  width: 100%;
  height: 100%;
  .search-box{
    .search-ipt{
      width: 200px;
      margin: 0 20px;
    }
  }
  .img-content{
    margin-top: 30px;
    .img-size-box{
      margin: 10px 0;
      width: 200px;
      text-align: center;
      .el-tag {
      font-size: 8px;
      height: 32px;
    }
      .delete-btn{
        color: #409EFF;
        cursor: pointer;
      }
    }

  }
  .upload-demo{
    text-align:center
  }
  .nothing{
    padding: 20px;
    color: #696969;
  }
}
</style>
