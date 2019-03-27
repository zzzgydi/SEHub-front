<template>
  <div>
    <simple-header title="工作申请"></simple-header>

    <div class="apply-box">
      <div v-for="(item,idx) in applys" :key="idx" class="each-box" @click="handleClick(item)">
        <div class="each-img">{{item.name}}</div>
        <div class="each-title">{{item.name}}</div>
      </div>
      <div class="each-box-ph">
        <div class="each-img">
          <i class="el-icon-more"></i>
        </div>
        <div class="each-title">
          <i class="el-icon-more"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      applys: [{
        name: '活动申请',
        path: '/apply/activity'
      }, {
        name: '礼仪申请',
        path: '/apply/etiquette'
      }, {
        name: '主持人申请',
        path: '/apply/presenter'
      }, {
        name: '新媒体申请',
        path: '/apply/newmedia'
      }, {
        name: '记者团申请',
        path: '/apply/reporter'
      }, {
        name: '宣传物资申请',
        path: '/apply/publicity'
      }, {
        name: '秘书物资申请',
        path: '/apply/material'
      }, {
        name: '讲座票申请',
        path: '/apply/ticket'
      }]
    }
  },
  methods: {
    handleClick (item) {
      this.$router.push(item.path)
    }
  }

}
</script>
<style lang="stylus" scoped src="./apply.styl">
</style>
