<template>
  <div>
    <simple-header title="学院活动"></simple-header>
    <div class="home-container">
      <div class="home-box">
        <div class="home--title-box">█&ensp;正在进行</div>
        <div class="home--each-box" v-for="(act,idx) in activities.ongoing" :key="idx">
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
      that.activities.ongoing = res.ongoing
      that.activities.preparing = res.preparing
      that.activities.timelines = res.timelines
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/default';

.home-container {
  width: 900px;
  margin-left: 60px;
}

.home-box {
  width: 600px;
  border-box();
  padding-bottom: 30px;
  margin-bottom: 80px;
  float: left;

  .home--title-box {
    font-size: 1.4em;
    line-height: 70px;
    margin-left: 20px;
    padding-left: 10px;
    border-bottom: 1px solid #ccc;
    color: $color_default;
  }

  $img-width = 115px;
  $img-height = $img-width * 1.4135;

  .home--each-box {
    height: $img-height + 50px;
    padding-left: 20px;

    // border-bottom: 1px solid red;
    &:hover {
      hover-box();
    }

    .each-box {
      height: $img-height;
      padding-top: 25px;
      padding-bottom: 25px;
      border-bottom: 1px solid #ccc;

      .each-img-box {
        width: $img-width;
        float: left;
        margin-left: 10px;

        img {
          border-radius(6px);
        }
      }

      .each-text-box {
        float: left;
        margin-top: 5px;
        margin-left: 18px;

        .each-title {
          width: 260px;
          height: 56px;
          overflow: hidden;
          font-size: 1.2em;
          line-height: 28px;
        }

        .desc-detail {
          margin-top: 15px;
          font-size: 14px;

          .desc--each {
            line-height: 20px;
            overflow: hidden;
            color: #a0a3a9;

            span {
              font-size: 14px;
              color: #606266;
            }
          }
        }
      }
    }

    .each-more-box {
      float: left;
      margin-left: 55px;
      margin-top: 50px;

      .each-more--1 {
        $h = 24px;
        height: $h;
        margin-bottom: 20px;

        #more-img {
          float: left;
          padding-top: 1px;
        }

        #more-num, #more-num-check {
          float: left;
          line-height: $h;
          font-size: 1.2em;
          color: #909399;
          margin-left: 8px;
        }

        #more-num-check {
          color: $color_check;
        }
      }
    }
  }
}

.timeline-box {
  width: 220px;
  margin-left: 60px;
  float: left;
  border-box();

  .tl-box {
    padding-top: 30px;
    padding-left: 30px;
  }
}
</style>
