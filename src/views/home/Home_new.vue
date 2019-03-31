<template>
  <div class="default-container">
    <simple-header title="学院活动"></simple-header>
    <div class="home-container">
      <div class="home-box">
        <div class="home--title-box">
          <div class="animation-clock">
            <div class="clock"></div>
          </div>
          <div class="title-active">
            <div>{{activeTitle}}</div>
          </div>
          <div class="title-change" @click="handleChange()">{{changeTitle}}</div>
        </div>

        <div v-if="isArrNull">
          <div class="home--null-box">
            <div class="mag-glass-box">
              <div class="mag-null">NULL</div>
              <div class="mag-glass"></div>
            </div>
            <div class="home--null-tip">暂无活动</div>
          </div>
        </div>
        <div v-else>
          <transition-group name="slide-fade" tag="div">
            <div v-for="act in activitiesArr" :key="act.id" class="test">
              <div class="home--each-box" @click="$router.push('/home/activity/'+act.id)">
                <div class="each-box">
                  <div class="each-img-box">
                    <img src="../../../public/timg_2.jpg" alt width="115px">
                  </div>
                  <div class="each-text-box">
                    <div class="each-title">{{act.title}}</div>
                    <div class="desc-detail">
                      <div class="desc--each">
                        • 活动时间：
                        <span>{{act.acttime}}</span>
                      </div>
                      <div class="desc--each">
                        • 活动地点：
                        <span>{{act.actaddr}}</span>
                      </div>
                      <div class="desc--each">
                        • 主办单位：
                        <span>{{act.hostunit}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="each-more-box">
                    <div class="each-more--1">
                      <div id="more-img">
                        <img src="../../../public/icon_person.png" alt width="22px">
                      </div>
                      <div id="more-num">0</div>
                    </div>
                    <div class="each-more--1">
                      <div id="more-img">
                        <img src="../../../public/icon_comment.png" alt width="23px">
                      </div>
                      <div id="more-num">0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
        </div>

        <div class="home--history-box">查看历史活动</div>
      </div>
      <div class="timeline-box">
        <div class="tl-box">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities.timelines"
              :key="index"
              :timestamp="activity.timestamp"
            >{{activity.content}}</el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { apiGetActivities } from '../../api/home.js'
export default {
  data () {
    return {
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
    isArrNull: function () {
      if (this.isShowGoing) {
        return this.activities.ongoing.length === 0
      } else {
        return this.activities.preparing.length === 0
      }
    },
    activitiesArr: function () {
      if (this.isShowGoing) {
        return this.activities.ongoing
      } else {
        return this.activities.preparing
      }
    },
    activeTitle: function () {
      return this.isShowGoing ? '正在进行' : '正在筹备'
    },
    changeTitle: function () {
      return this.isShowGoing ? '正在筹备的活动' : '正在进行的活动'
    }
  },
  methods: {
    handleChange () {
      this.isShowGoing = !this.isShowGoing
      this.TestArr = this.isShowGoing ? this.activities.ongoing : this.activities.preparing
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
<style lang="stylus" scoped src="./Home_new.styl">
</style>
