<template>
  <el-row class="container">
    <el-col :span="4">
      <side-bar></side-bar>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
import SideBar from '../components/SideBar'
export default {
  components: {
    'side-bar': SideBar
  },

  data () {
    return {
      hello: '你好'
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  min-width: 1000px;
}
</style>
