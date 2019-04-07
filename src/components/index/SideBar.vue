<template>
  <div class="side-bar">
    <div class="side-box">
      <div v-for="item in paths" :key="item.path" @click="handleClick(item)">
        <div :class="optionClass(item)">
          <div class="img-box">
            <i :class="item.iclass"></i>
          </div>
          <div class="title-box">{{item.name}}</div>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: '/home',
      paths: [{
        name: '首页',
        path: '/home',
        iclass: 'el-icon-date'
      }, {
        name: '部门中心',
        path: '/center',
        iclass: 'el-icon-star-off'
      }, {
        name: '部门通知',
        path: '/notice',
        iclass: 'el-icon-bell'
      }, {
        name: '工作申请',
        path: '/apply',
        iclass: 'el-icon-document'
      }, {
        name: '其他',
        path: '/others',
        iclass: 'el-icon-news'
      }]
    }
  },
  computed: {

  },
  watch: {
    '$route.path': function (val, oldval) {
      // console.log('SideBar: from ' + oldval + ' to ' + val)
      this.active = this.$route.path
    }
  },
  methods: {
    optionClass (item) {
      if (item.path === this.active) {
        return 'option-box option-active'
      } else if (this.active.length > item.path.length) {
        var substr = this.active.substring(0, item.path.length)
        if (item.path === substr) {
          return 'option-box option-active'
        }
      }
      return 'option-box option-normal'
    },
    handleClick (item) {
      this.active = item.path
      this.$router.push(item.path)
    }
  },
  beforeMount () {
    this.active = this.$route.path
    // console.log('Mount了', this.$route.path)
  }
}
</script>
<style lang="stylus" scoped src="../../assets/css/index/sidebar.styl"></style>
