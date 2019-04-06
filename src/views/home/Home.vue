<template>
  <div class="default-container">
    <simple-header title="学院活动"></simple-header>
    <div class="option-box">
      <div :class="activeClass(1)" @click="activeId=1;test()">进行中</div>
      <div :class="activeClass(2)" @click="activeId=2">筹备中</div>
      <div :class="activeClass(3)" @click="activeId=3">时间线</div>
      <div :class="activeClass(4)" @click="activeId=4">历史活动</div>
    </div>

    <div class="home-box"></div>
  </div>
</template>
<script>
import { apiGetActivities } from '../../api/home.js'
export default {
  data () {
    return {
      activeId: 1,
      isShowGoing: true,
      activities: {
        ongoing: [],
        preparing: [],
        timelines: []
      },
      TestArr: []
    }
  },
  computed: {

  },
  methods: {
    activeClass (id) {
      if (this.activeId === id) {
        return 'option-each option-active'
      }
      return 'option-each'
    },
    test () {
      console.log('test')
    }
  },
  beforeMount () {
    var that = this
    apiGetActivities(res => {
      that.activities.ongoing = res.ongoing
      // that.activities.preparing = res.preparing
      that.activities.timelines = res.timelines
    })
    this.TestArr = that.activities.ongoing
  }
}
</script>
<style lang="stylus" scoped src="./Home.styl">
</style>
