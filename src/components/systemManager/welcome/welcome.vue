<template>
  <div class="welcome-container">
    <el-row class="breadcrumb-content">
      <breadcrumb></breadcrumb>
    </el-row>
    <el-row>
      <el-col class="userinfo-card" :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>用户信息</span>
          </div>
          <div>
            <el-col class="avatar-box" :span="6">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="70"></el-avatar>
            </el-col>
            <el-col class="userinfo-box" :span="18">
              <el-col :span="12">
              <div class="text-box">
                <span>姓名: </span><span>张琛</span>
              </div>
              <div class="text-box">
                <span>用户账号: </span><span>admin</span>
              </div>
              </el-col>
              <el-col :span="12">
                <div class="text-box">
                  <span>所属部门: </span><span>测试部门</span>
                </div>
                <div class="text-box">
                  <span>用户角色: </span><span>测试角色</span>
                </div>
              </el-col>
            </el-col>
          </div>
        </el-card>
      </el-col>
      <el-col class="swiper-card" :span="12">
        <el-card class="box-card">
          <el-carousel height="150px">
            <el-carousel-item>
            </el-carousel-item>
          </el-carousel>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="quickentry-card">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>快捷入口</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" class="music-card">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>音乐</span>
          </div>
          <aplayer autoplay :music="{
            title: 'Preparation',
            author: 'Hans Zimmer/Richard Harvey',
            url: 'http://music.163.com/song/media/outer/url?id=25640799.mp3',
            pic: 'http://devtest.qiniudn.com/Preparation.jpg',
            lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
          }"
          :list= "musicList"
          >
          </aplayer>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="echart-box">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>数据统计</span>
          </div>
          <delay></delay>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import delay from '@/components/packag/e-chart.vue'
export default {
  data () {
    return {
      musicList: []
    }
  },
  components: {
    Aplayer,
    delay
  }
}
</script>

<style lang="scss" scoped>
.welcome-container{
  .userinfo-card{
    padding-top: 30px;
    padding-right: 30px;
    .el-card{
      height: 230px;
    }
    .avatar-box{
      margin-top: 20px;
    }
    .userinfo-box{
      .text-box{
        margin: 30px 20px;
      }
    }
  }
  .swiper-card{
    padding-top: 30px;
  }
  .quickentry-card{
    padding-top: 30px;
    padding-right: 30px;
  }
  .echart-box{
    padding-top: 30px;
  }
}
</style>
