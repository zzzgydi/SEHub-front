<template>
  <div>
    <simple-header title="部门安排"></simple-header>
    <el-container class="work-container">
      <el-main class="left-box">
        <div class="depart-apy-box">
          <div class="depart-apy-title">部门申请</div>
          <div v-for="(msg, idx) in msgs" :key="idx" class="msg-box">
            <div class="msg-box-content">
              <span id="msg-span-1" :class="'msg-span-'+msg.state">&emsp;█&emsp;</span>
              <span id="msg-span-title">{{msg.title}}</span>
              <span id="msg-from">&emsp;from:{{msg.from}}</span>
            </div>
            <div class="msg-box-more">
              <i class="el-icon-more-outline"></i>
            </div>
          </div>
        </div>
      </el-main>
      <el-main class="right-box">s</el-main>
    </el-container>
    <!--<activity-table></activity-table>-->
  </div>
</template>
<script>
// import ActTable from '../../components/home/table/Activity_table'
export default {
  components: {
    // 'activity-table': ActTable
  },
  data () {
    return {
      msgs: [{
        type: '',
        title: '活动申请',
        state: 'submit',
        from: 'XXX'
      }, {
        type: '',
        title: '活动申请',
        state: 'check'
      }, {
        type: '',
        title: '活动申请',
        state: 'finish'
      } ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-container, .el-main {
  margin: 0;
  padding: 0;
}

apymsg_height = 60px;
apymsg_width = 350px;

.depart-apy-box {
  width: 350px;
  border-radius: 10px;
  border: 1px solid #ddd;
  min-height: 500px;
  margin: 20px;
}

.depart-apy-title {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 22px;
  background: #50aEFF;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #eee;
}

.msg-box {
  width: apymsg_width;
  height: apymsg_height;
  font-size: 22px;
  line-height: 60px;
  color: #303133;
  border-bottom: 1px solid #888;

  .msg-box-content {
    width: 300px;
    float: left;
  }

  #msg-span-1 {
    font-size: 22px;
  }

  #msg-from {
    font-size: 14px;
    color: #909399;
  }

  .msg-box-more {
    width: 40px;
    float: right;
  }
}

.msg-span-submit {
  color: #67C23A;
}

.msg-span-check {
  color: #E6A23C;
}

.msg-span-finish {
  color: #909399;
}

.work-container {
  border: 1px solid red;
}
</style>
