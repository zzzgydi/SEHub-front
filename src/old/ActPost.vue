<template>
  <div class="actp-each-box" @click="clickAct">
    <div class="actp--each-box">
      <div class="actp-img-box">
        <img class="actp-img" src="../../../public/timg_2.jpg" alt="海报">
      </div>
      <div class="actp-desc-box">
        <div class="actp-desc-title">{{activity.title}}</div>
        <div class="actp-desc-detail">
          <div class="actp-desc--each">
            活动时间:
            <span>{{activity.acttime}}</span>
          </div>
          <div class="actp-desc--each">
            活动地点:
            <span>{{activity.actaddr}}</span>
          </div>
          <div class="actp-desc--each">
            主办单位:
            <span>{{activity.hostunit}}</span>
          </div>
        </div>
        <!-- <div class="actp-desc-more">{{activity.actaim}}</div> -->
      </div>
    </div>
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

<style lang="stylus" scoped src="./ActPost.styl"></style>
<style lang="stylus" scoped>
</style>
