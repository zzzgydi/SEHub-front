<!-- 新媒体申请 -->
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
        <el-date-picker v-model="applyForm.newddl" type="date" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="申请项目">
        <el-checkbox-group v-model="applyForm.newwork">
          <el-checkbox label="推送">推送</el-checkbox>
          <el-checkbox label="推送排版">推送排版</el-checkbox>
          <el-checkbox label="视频制作">视频制作</el-checkbox>
          <el-checkbox label="其他">其他</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特定要求">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.others"
          resize="none"
          class="apy-text-normal"
          placeholder="请先阅读注意事项中标红的部分"
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
        newddl: '',
        newwork: [],
        others: ''
      }
    }
  },
  methods: {
    getSubmitForm () {
      var getValid = null
      this.$refs.applyForm.validate((valid) => {
        getValid = valid
      })
      if (getValid) {
        return {
          actname: this.applyForm.actname,
          actaddr: this.applyForm.actaddr,
          acttime: this.applyForm.acttime,
          newddl: this.applyForm.newddl,
          newwork: this.applyForm.newwork.join('；'),
          others: this.applyForm.newothers
        }
      }
      return null
    },
    getPreviewForm () {
      var previewObj = {
        title: '新媒体申请',
        content: {
          postname: this.$store.state.user.name,
          postdapart: this.$store.state.user.depart,
          posttime: new Date().toLocaleString(),
          actname: this.applyForm.actname,
          actaddr: this.applyForm.actaddr,
          acttime: this.applyForm.acttime,
          newddl: this.applyForm.newddl,
          newwork: this.applyForm.newwork.join('；'),
          newothers: this.applyForm.newothers
        }
      }
      return previewObj
    },
    clear () {
      this.$refs['applyForm'].resetFields()
    }
  }
}
</script>
<style scoped lang="stylus" src="../../../assets/css/apply/form.styl"></style>
