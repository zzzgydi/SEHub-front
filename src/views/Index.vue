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

  beforeMount () {
    if (this.$route.path === '/') {
      if (this.$store.state.isLogin) {
        this.$router.push('home')
      } else {
        this.$router.push('login')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  min-width: 1150px;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.sbar {
  min-width: 200px;
}
</style>
