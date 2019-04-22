<template>
  <div>
    <el-form :model="applyForm" :rules="etirules" ref="applyForm" label-width="95px">
      <el-form-item label="活动名称" prop="actname">
        <el-input v-model="applyForm.actname" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动地点" prop="actaddr">
        <el-input v-model="applyForm.actaddr" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动时间" prop="acttime">
        <el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="申请人数" prop="etinum">
        <el-input v-model.number="applyForm.etinum" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="礼仪工作" prop="etiwork">
        <el-checkbox-group v-model="applyForm.etiwork">
          <el-checkbox label="颁奖">颁奖</el-checkbox>
          <el-checkbox label="引导">引导</el-checkbox>
          <el-checkbox label="迎宾签到">迎宾签到</el-checkbox>
          <el-checkbox label="其他">其他</el-checkbox>
        </el-checkbox-group>
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
        etinum: '',
        etiwork: [],
        others: ''
      },
      etirules: {
        actname: [{ required: true, message: '请输入活动名称' }],
        actaddr: [{ required: true, message: '请输入活动区域' }],
        acttime: [{ required: true, message: '请选择活动日期' }],
        etinum: [{ required: true, message: '请输入申请人数' }, { type: 'number', message: '请输入数字' }],
        etiwork: [{ required: true, message: '请选择礼仪工作' }]
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
          type: 'etiquette',
          actname: this.applyForm.actname,
          actaddr: this.applyForm.actaddr,
          acttime: new Date(this.applyForm.acttime),
          number: this.applyForm.etinum,
          work: this.applyForm.etiwork.join('；'),
          others: this.applyForm.others
        }
      }
      return null
    },
    getPreviewForm () {
      var previewObj = null
      this.$refs.applyForm.validate((valid) => {
        if (valid) {
          previewObj = { title: '礼仪队申请', content: {} }
          previewObj.content.postname = this.$store.state.user.name
          previewObj.content.postdapart = this.$store.state.user.depart
          previewObj.content.posttime = new Date().toLocaleString()
          previewObj.content.actname = this.applyForm.actname
          previewObj.content.actaddr = this.applyForm.actaddr
          previewObj.content.acttime = this.applyForm.acttime
          previewObj.content.etinum = this.applyForm.etinum + '人'
          previewObj.content.etiwork = this.applyForm.etiwork.join('；')
          previewObj.content.others = this.applyForm.others
        }
      })
      return previewObj
    },
    clear () {
      this.$refs['applyForm'].resetFields()
    }
  }
}
</script>
<style scoped lang="stylus" src="../../../assets/css/apply/form.styl"></style>
