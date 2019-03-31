<!--记者团申请-->
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
      <el-form-item label="提交时间">
        <el-date-picker v-model="applyForm.repddl" type="date" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="申请项目">
        <el-checkbox-group v-model="applyForm.repwork">
          <el-checkbox label="新闻稿">新闻稿</el-checkbox>
          <el-checkbox label="拍照">拍照</el-checkbox>
          <el-checkbox label="录像">录像</el-checkbox>
          <el-checkbox label="其他">其他</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特定要求">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.newothers"
          resize="none"
          class="apy-text-normal"
          placeholder="请先阅读注意事项中标红的部分！！"
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
        repddl: '',
        repwork: [],
        repothers: ''
      }
    }
  },
  methods: {
    getApplyForm () {
      return this.applyForm
    },
    getPreviewForm () {
      var previewObj = {
        title: '记者团申请',
        content: {
          postname: this.$store.state.user.name,
          postdapart: this.$store.state.user.depart,
          posttime: new Date().toLocaleString(),
          actname: this.applyForm.actname,
          actaddr: this.applyForm.actaddr,
          acttime: this.applyForm.acttime,
          repddl: this.applyForm.repddl,
          repwork: this.applyForm.repwork.join('；'),
          repothers: this.applyForm.repothers
        }
      }
      return previewObj
    }
  }
}
</script>
<style scoped lang="stylus" src="./form.styl"></style>
