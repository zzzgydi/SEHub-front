<template>
  <div class="index-container">
    <div class="head-box">
      <head-bar></head-bar>
    </div>
    <div class="main-box">
      <div class="left-box">
        <side-bar></side-bar>
      </div>
      <div class="right-box">
        <transition name="fade" mode="out-in">
          <keep-alive exclude="applyform">
            <div class="index-right-box">
              <router-view></router-view>
            </div>
          </keep-alive>
          <!-- <router-view></router-view> -->
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '../components/index/SideBar.vue'
import HeadBar from '../components/index/HeadBar.vue'
export default {
  components: {
    'side-bar': SideBar,
    'head-bar': HeadBar
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

<style lang="stylus" scoped src="../assets/css/index/index.styl"></style>
