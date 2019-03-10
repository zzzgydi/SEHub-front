<template>
  <div class="side-bar" :style="'height:'+screenHeight+'px;'">
    <div class="sbar-avatar-container">
      <div class="sbar-avatar">
        <img :src="avatar" alt class="sbar-img">
      </div>
    </div>
    <el-menu default-active="1" class="sbar-menu" @select="handleSelect">
      <el-menu-item index="1">
        <i class="el-icon-date"></i>
        <span slot="title">学院活动</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-location-outline"></i>
        <span slot="title">部门首页</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>工作安排</span>
        </template>
        <el-menu-item
          v-for="item in submenuList"
          :index="item.index"
          :disabled="!item.permission"
          :key="item.title"
        >○&ensp;{{item.title}}</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-news"></i>
        <span slot="title">其&emsp;他</span>
      </el-menu-item>
      <el-menu-item disabled index="5">
        <i class="el-icon-info"></i>
        <span slot="title">V1.0.0</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import HeadAvatar from '../assets/img/tmp2.jpg'

// 模拟从后端传来的数据
const simulateData = [
  {
    title: '秘书部物资申请',
    index: '3-1',
    permission: true,
    route: '/apply/material'
  }, {
    title: '讲座票申请',
    index: '3-2',
    permission: true,
    route: '/apply/ticket'
  }, {
    title: '宣传物资申请',
    index: '3-3',
    permission: true,
    route: '/apply/publicity'
  }, {
    title: '记者团预约',
    index: '3-4',
    permission: true,
    route: '/apply/reporter'
  }, {
    title: '主持人申请',
    index: '3-5',
    permission: true,
    route: '/apply/presenter'
  }, {
    title: '礼仪队申请',
    index: '3-6',
    permission: true,
    route: '/apply/etiquette'
  }
]

export default {
  data () {
    return {
      avatar: HeadAvatar,
      submenuList: simulateData,
      screenHeight: window.innerHeight
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      switch (key) {
        case '1':
          this.$router.push('/home')
          break
        case '2':
          this.$router.push('/work')
          break
        case '4':
          break
        default:
          this.submenuList.forEach(item => {
            if (item.index === key) {
              this.$router.push(item.route)
            }
          })
      }
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        that.screenHeight = window.innerHeight
      })()
    }
  }
}
</script>

<style lang="stylus" scoped>
img-width = 100px;
img-border = 2px;
imgcon-width = img-width + 2 * img-border;

.side-bar {
  height: 100%;
  border-right: solid 1px #ddd;
}

.sbar-avatar-container {
  width: imgcon-width;
  padding-top: 100px;
  margin: 0 auto;
}

.sbar-img {
  border-radius: 50%;
  width: img-width;
  border: solid img-border #909399;
}

.sbar-menu {
  border-right: solid 0 #fff;
  width: 88%;
  margin-left: 6%;
  margin-top: 80px;
}

/* .sbar-footer {
//   position: absolute;
//   text-align: center;
 } */
</style>
