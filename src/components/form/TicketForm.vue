<template>
  <div>
    <el-form v-model="applyForm" ref="applyForm" label-width="95px">
      <el-form-item label="活动名称">
        <el-input v-model="applyForm.actname" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动地点">
        <el-input v-model="applyForm.actaddr" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="分数类型">
        <el-input v-model="applyForm.tiktype" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="分值">
        <el-input v-model="applyForm.tikscore" class="apy-input-normal"></el-input>
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
        tiktype: '',
        tikscore: '',
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
      return getValid ? this.applyForm : null
    },
    getPreviewForm () {
      var previewObj = {
        title: '讲座票申请',
        content: {
          postname: this.$store.state.user.name,
          postdapart: this.$store.state.user.depart,
          posttime: new Date().toLocaleString(),
          actname: this.applyForm.actname,
          actaddr: this.applyForm.actaddr,
          acttime: this.applyForm.acttime,
          tiktype: this.applyForm.tiktype,
          tikscore: this.applyForm.tikscore,
          others: this.applyForm.others
        }
      }
      return previewObj
    }
  }
}
</script>
<style scoped lang="stylus" src="./form.styl"></style>
<style lang="stylus" scoped></style>
