<template>
  <div>
    <simple-header title="部门安排"></simple-header>
    <el-container class="work-container">
      <el-main class="left-box">
        <div class="depart-apy-box">
          <div class="depart-apy-title">通知信息</div>
          <div v-for="(msg, idx) in msgs" :key="idx" :class="'msg-box ' + 'msg-box-'+msg.state">
            <div class="msg-box-content">
              <span id="msg-span">&emsp;█&ensp;</span>
              <span>{{msg.title}}</span>
              <span id="msg-from">
                &ensp;
                <i class="el-icon-message"></i>
                {{msg.from}}
              </span>
            </div>
            <div class="msg-box-more">
              <i class="el-icon-more-outline"></i>
            </div>
          </div>
        </div>
      </el-main>
      <el-main class="right-box">s</el-main>
    </el-container>
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
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.el-container, .el-main {
  margin: 0;
  padding: 0;
}

left_width = 350px;
right_width = 750px;

.work-container {
  width: left_width + right_width;
  margin: 0 auto;
}

.left-box {
  width: left_width;
  border: 1px solid red;
  padding: 10px;
}

.right-box {
  width: right_width;
  border: 1px solid red;
  padding: 10px;
}

apymsg_height = 60px;
apymsg_width = 320px;

.depart-apy-box {
  width: apymsg_width;
  border-radius: 10px;
  border: 0.5px solid #909399;
  min-height: 500px;
}

.depart-apy-title {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 22px;
  background: #909399;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #fff;
}

.msg-box {
  width: apymsg_width;
  height: apymsg_height;
  font-size: 19px;
  line-height: 60px;
  color: #303133;
  border-bottom: 1px solid #888;

  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .msg-box-content {
    width: apymsg_width - 45px;
    float: left;
  }

  #msg-from {
    font-size: 15px;
    color: #909399;
  }

  .msg-box-more {
    width: 40px;
    float: right;
  }
}

.msg-box-submit {
  .msg-box-more, #msg-span {
    color: #67C23A;
  }

  &:hover {
    background: #67C23A20;
  }
}

.msg-box-check {
  .msg-box-more, #msg-span {
    color: #E6A23C;
  }

  &:hover {
    background: #E6A23C20;
  }
}

.msg-box-finish {
  .msg-box-more, #msg-span {
    color: #909399;
  }

  &:hover {
    background: #90939920;
  }
}
</style>
