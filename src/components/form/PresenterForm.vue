<!--主持人申请-->
<template>
  <div>
    <el-form :model="applyForm" ref="applyForm" label-width="95px">
      <el-form-item label="活动名称">
        <el-input v-model="applyForm.actname" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动地点">
        <el-input v-model="applyForm.actaddr" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="彩排时间">
        <el-date-picker v-model="applyForm.rehtime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="申请人数">
        <el-input v-model="applyForm.number" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.others"
          resize="none"
          class="apy-text-normal"
        ></el-input>
      </el-form-item>
      <el-form-item label="上传附件">
        <se-upload></se-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

export default {

  data () {
    return {
      applyForm: {
        actname: '',
        actaddr: '',
        acttime: '',
        rehtime: '', // 彩排时间
        number: '',
        others: ''
      }
    }
  },
  methods: {
    getApplyForm () {
      return this.applyForm
    },
    getPreviewForm () {
      var previewObj = {
        title: '主持人申请',
        content: {
          postname: this.$store.state.user.name,
          postdapart: this.$store.state.user.depart,
          posttime: new Date().toLocaleString(),
          actname: this.applyForm.actname,
          actaddr: this.applyForm.actaddr,
          acttime: this.applyForm.acttime,
          rehtime: this.applyForm.rehtime,
          number: this.applyForm.number,
          others: this.applyForm.others
        }
      }
      return previewObj
    }
  }
}
</script>

<style scoped lang="stylus" src="./form.styl"></style>
