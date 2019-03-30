<template>
  <div>
    <simple-header title="学院活动"></simple-header>
    <el-container>
      <div class="act-container">
        <div class="act-label">█&emsp;正在进行</div>
        <el-row v-if="isOngoing">
          <el-col :span="8" v-for="(eachAct,index) in activities.ongoing" :key="index">
            <act-post :activity="eachAct"></act-post>
          </el-col>
        </el-row>
        <div v-else>无</div>
        <div class="act-label">█&emsp;正在筹备</div>
        <el-row>
          <el-col :span="8" v-for="(eachAct,index) in activities.preparing" :key="index">
            <act-post :activity="eachAct"></act-post>
          </el-col>
        </el-row>
      </div>
      <el-container class="act-timeline">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities.timelines"
            :key="index"
            :timestamp="activity.timestamp"
          >{{activity.content}}</el-timeline-item>
        </el-timeline>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import ActPost from '../../components/home/ActPost.vue'
import { apiGetActivities } from '../../api/home.js'
export default {
  components: {
    'act-post': ActPost
  },
  data () {
    return {
      activities: {
        ongoing: [],
        preparing: [],
        timelines: []
      }
    }
  },
  computed: {
    isOngoing: function () {
      return this.activities.ongoing.length !== 0
    }
  },
  beforeMount () {
    var that = this
    apiGetActivities(res => {
      this.activities.ongoing = res.ongoing
      that.activities.preparing = res.preparing
      that.activities.timelines = res.timelines
    })
  }
}
</script>
<style lang="stylus" scoped src="./Home.styl"></style>
