<template>
  <div class="actp-each-box" @click="clickAct">
    <el-row>
      <el-col :span="10" class="actp-img-box">
        <img class="actp-img" src="../../../public/timg_1.jpg" alt="海报">
      </el-col>
      <el-col :span="14" class="actp-desc-box">
        <div class="actp-desc-title">{{activity.title}}</div>
        <div class="actp-desc-detail">
          <div class="actp-desc-detail-each">主办单位：{{activity.hostunit}}</div>
          <div class="actp-desc-detail-each">活动时间：{{activity.acttime}}</div>
          <div class="actp-desc-detail-each">活动地点：{{activity.actaddr}}</div>
        </div>
        <div class="actp-desc-more">{{activity.actaim}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['activity'],
  data () {
    return {

    }
  },
  methods: {
    clickAct () {
      if (this.activity.id) {
        this.$router.push('/home/eachact/' + this.activity.id)
      }
      console.log('click')
      console.log(this.activity)
    }
  }
}
</script>

<style lang="stylus" scoped src="../../assets/css/home/ActPost.styl"></style>
<style lang="stylus" scoped>
</style>
