<template>
  <div class="container">
    <el-row>
      <el-col :span="4">
        <side-bar></side-bar>
      </el-col>
      <el-col :span="20">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import SideBar from '../components/index/SideBar'
export default {
  components: {
    'side-bar': SideBar
  },

  data () {
    return {
    }
  },
  beforeCreate () {
    if (this.$route.path === '/') {
      this.$router.push('home')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  min-width: 1150px;
}

.sbar {
  min-width: 200px;
}
</style>
