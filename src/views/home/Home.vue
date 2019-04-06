<template>
  <div class="default-container">
    <simple-header title="学院活动"></simple-header>
    <div class="option-box">
      <div :class="activeClass(1)" @click="handleOptionClick(1)">进行中</div>
      <div :class="activeClass(2)" @click="handleOptionClick(2)">筹备中</div>
      <div :class="activeClass(3)" @click="handleOptionClick(3)">时间线</div>
      <div :class="activeClass(4)" @click="handleOptionClick(4)">历史活动</div>
    </div>

    <div class="home-box">
      <div class="home--null-box">
        <div class="mag-glass-box">
          <div class="mag-null">NULL</div>
          <div class="mag-glass"></div>
        </div>
        <div class="home--null-tip">暂无活动</div>
      </div>
    </div>
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
    handleOptionClick (id) {
      this.activeId = id
    }
  },
  beforeMount () {
    var that = this
    apiGetActivities(res => {
      that.activities.ongoing = res.ongoing
      that.activities.timelines = res.timelines
    })
    this.TestArr = that.activities.ongoing
  }
}
</script>
<style lang="stylus" scoped src="./Home.styl"></style>
