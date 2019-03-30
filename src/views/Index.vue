<template>
  <div class="container">
    <!-- <div class="head-box">
      <div class="head-img-box">
        <img src="../../public/scutse.png" alt width="40px">
      </div>
      <div class="head-title-box">SEHub</div>
    </div>-->
    <div class="main-box">
      <div class="left-box">
        <side-bar></side-bar>
      </div>
      <div class="right-box">
        <transition name="fade" mode="out-in">
          <keep-alive exclude="applyform">
            <router-view></router-view>
          </keep-alive>
          <!-- <router-view></router-view> -->
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '../components/index/SideBarNew'
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

  .main-box {
    .left-box {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 280px;
    }

    .right-box {
      position: fixed;
      top: 0;
      left: 280px;
      right: 0;
      bottom: 0;
      overflow-y: scroll;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s linear;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
