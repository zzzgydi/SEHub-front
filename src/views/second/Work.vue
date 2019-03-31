<template>
  <div class="default-container">
    <simple-header title="部门安排"></simple-header>
    <div class="work-container">
      <div class="left-box">
        <div class="notice-box">
          <div class="notice-head">
            <div class="notice--head">
              <div class="nb-head-title">通知管理</div>
              <div class="nb-head-img">
                <img src="../../../public/notice2.png" alt width="36px">
              </div>
            </div>
          </div>
          <div class="notice-body">
            <div class="nb-body-each" v-for="(msg, idx) in msgs" :key="idx">
              <div class="nb-body--each">
                <div :class="'nb-body-i nb-type-' + msg.state">{{msg.title}}</div>
                <div class="nb-body-title">{{msg.title}}</div>
                <div class="nb-body-more">
                  <div class="nb-body--content">
                    <i class="el-icon-caret-right"></i>
                    {{msg.from}}
                  </div>
                  <div :class="'nb-type nb-type--' + msg.state">{{msg.state}}</div>
                </div>
                <div class="nb-body-next">
                  <i class="el-icon-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-box">s</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msgs: [{
        type: '',
        title: '活动申请',
        state: 'submit',
        from: 'XXX'
      }, {
        type: '',
        title: '宣传物资申请',
        state: 'check',
        from: '文艺部'
      }, {
        type: '',
        title: '活动申请',
        state: 'finish',
        from: 'XXX部'
      } ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/default';

* {
  not-select();
}

.el-container, .el-main {
  margin: 0;
  padding: 0;
}

left_width = 400px;
right_width = 500px;

.work-container {
  width: 900px + 20px;
  border-box();
}

.left-box {
  float: left;
  width: left_width;
}

.right-box {
  float: left;
  width: right_width;
  border-box();
}

.notice-box {
  $box_width = 360px;
  $box_height = 500px;
  width: $box_width;
  // min-height: $box_height;
  border-box();
  padding-top: 15px;
  // padding-left: 20px;
  padding-bottom: 25px;

  .notice-head {
    $h = 40px;
    padding-left: 20px;

    .notice--head {
      height: $h + 10px;
      border-bottom: 1px solid #ccc;

      .nb-head-title {
        float: left;
        font-size: 1.4em;
        line-height: $h;
      }

      .nb-head-img {
        float: right;
        margin-right: 40px;
      }
    }
  }

  .notice-body {
    $each_height = 70px;

    .nb-body-each {
      padding-left: 18px;

      &:hover {
        hover-box();
      }

      .nb-body--each {
        height: $each_height;
        border-bottom: 1px solid #ccc;

        .nb-body-i {
          float: left;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          color: #fff;
          text-align: center;
          overflow: hidden;
          font-size: 20px;
          line-height: 32px;
          margin-top: 19px;
          margin-right: 10px;
        }

        .nb-body-title {
          width: 150px;
          float: left;
          color: #606266;
          font-size: 20px;
          line-height: $each_height;
          overflow: hidden;
        }

        .nb-body-more {
          width: 90px;
          float: left;
          margin-top: 15px;
          overflow: hidden;

          .nb-body--content {
            font-size: 14px;
            line-height: 22px;
            color: #909399;
          }

          .nb-type {
            width: 50px;
            font-size: 10px;
            text-align: center;
            border-radius: 10px;
            // font-weight: bold;
            margin-left: 10px;
          }

          .nb-type--submit {
            color: $color_submit;
            border: 1px solid $color_submit;
          }

          .nb-type--check {
            color: $color_check;
            border: 1px solid $color_check;
          }

          .nb-type--finish {
            color: $color_finish;
            border: 1px solid $color_finish;
          }
        }

        .nb-body-next {
          font-size: 24px;
          line-height: $each_height;
          float: right;
          margin-right: 12px;
        }
      }

      .nb-type-submit {
        background: $color_submit;
      }

      .nb-type-check {
        background: $color_check;
      }

      .nb-type-finish {
        background: $color_finish;
      }
    }
  }
}
</style>
