<template>
  <div class="index-container">
    <div class="head-box">
      <head-bar></head-bar>
    </div>
    <div class="main-box">
      <div class="left-box">
        <side-bar :paths="paths"></side-bar>
      </div>
      <div class="right-box">
        <transition name="fade" mode="out-in">
          <keep-alive exclude="applyform">
            <div class="index-right-box">
              <router-view></router-view>
            </div>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '../components/index/SideBar.vue'
import HeadBar from '../components/index/AdminHeadBar.vue'
export default {
  components: {
    'side-bar': SideBar,
    'head-bar': HeadBar
  },
  data () {
    return {
      paths: [ {
        name: '首页',
        path: '/admin/home',
        iclass: 'el-icon-date'
      }, {
        name: '用户管理',
        path: '/admin/manage',
        iclass: 'el-icon-date'
      }]
    }
  },
  beforeMount () {
    if (this.$route.path === '/admin/') {
      if (this.$store.state.isAdminLogin) {
        this.$router.push('/admin/home')
      } else {
        this.$router.push('/admin')
      }
    }
  }
}
</script>

<style lang="stylus" scoped src="../assets/css/index/index.styl"></style>
