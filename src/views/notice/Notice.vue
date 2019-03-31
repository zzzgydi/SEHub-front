<template>
  <div class="default-container">
    <simple-header title="部门通知"></simple-header>
    <div class="notice-container">
      <div class="notice-box-wait">
        <div class="notice--wait-title">待处理</div>
        <div class="notice--wait-content">
          <div class="notice--wait-each" v-for="(item, idx) in waitArr" :key="idx">
            <div class="notice---from">{{item.fromDepart}}&ensp;{{item.fromName}}</div>
            <div class="notice---title">{{item.title}}</div>
            <div class="notice---state">{{item.state}}</div>
            <div class="notice---time">{{item.time}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      waitArr: [{
        state: 'submit',
        title: '活动申请',
        fromDepart: 'XXX部',
        fromName: '张XX',
        time: '2019-3-30'
      }, {
        state: 'submit',
        title: '活动申请',
        fromDepart: 'XXX部',
        fromName: '张XX',
        time: '2019-3-30'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped src='./notice.styl'>
</style>
