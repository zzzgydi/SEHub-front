<template>
  <div>
    <el-form :model="applyForm" :rules="rules" ref="applyForm" label-width="95px">
      <el-form-item label="活动背景" prop="actback">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.actback"
          resize="none"
          class="apy-text-normal"
        ></el-input>
      </el-form-item>
      <el-form-item label="活动目的" prop="actaim">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.actaim"
          resize="none"
          class="apy-text-normal"
        ></el-input>
      </el-form-item>
      <el-form-item label="主办单位" prop="hostunit">
        <el-input v-model="applyForm.hostunit" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="承办单位" prop="organizer">
        <el-input v-model="applyForm.organizer" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" prop="actname">
        <el-input v-model="applyForm.actname" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动地点" prop="actaddr">
        <el-input v-model="applyForm.actaddr" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="面向对象" prop="target">
        <el-input v-model="applyForm.target" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动时间" prop="acttime">
        <el-row>
          <el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
          <span>&emsp;时间段&emsp;</span>
          <el-input v-model="applyForm.acttime_more" class="apy-input-mini"></el-input>
        </el-row>
      </el-form-item>
      <el-form-item label="活动简介" prop="actintro">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.actintro"
          resize="none"
          class="apy-text-normal"
        ></el-input>
      </el-form-item>
      <!-- <el-form-item label="启用服务" >
        <el-switch v-model="applyForm.isServer" active-color="#13ce66"></el-switch>&emsp;&emsp;
        <el-tooltip placement="right" effect="light">
          <div slot="content">这是提示</div>
          <span>
            <i class="el-icon-info apy-tip"></i>
          </span>
        </el-tooltip>
      </el-form-item>-->
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
        acttime_more: '',
        actback: '',
        actaim: '',
        actintro: '',
        hostunit: '华南理工大学软件学院',
        organizer: '',
        target: '',
        // isServer: false,
        entertime: '',
        enterddl: ''
      },
      rules: {
        actname: [{ required: true, message: '请输入活动名称' }],
        actaddr: [{ required: true, message: '请选择活动区域' }],
        // acttime: [{ type: 'date', required: true, message: '请选择活动日期' }],
        actback: [{ required: true, message: '请输入活动背景' }],
        actaim: [{ required: true, message: '请输入活动目的' }],
        hostunit: [{ required: true, message: '请输入活动主办单位' }],
        actintro: [{ required: true, message: '请输入活动简介' }],
        organizer: [{ required: true, message: '请输入活动承办单位' }]
      }
    }
  },
  // 每一个Form组件都要重载getSubmitForm和clear方法
  methods: {
    getSubmitForm () {
      var getValid = null
      this.$refs.applyForm.validate((valid) => {
        getValid = valid
      })
      return getValid ? this.applyForm : null
    },
    getPreviewForm () {
      var previewObj = null
      this.$refs['applyForm'].validate((valid) => {
        if (valid) {
          previewObj = { title: '活动申请', content: {} }
          previewObj.content.postname = this.$store.state.user.name
          previewObj.content.postdapart = this.$store.state.user.depart
          previewObj.content.posttime = new Date().toLocaleString()
          previewObj.content.actname = this.applyForm.actname
          previewObj.content.actaddr = this.applyForm.actaddr
          previewObj.content.acttime = this.applyForm.acttime + ' ' + this.applyForm.acttime_more
          previewObj.content.actback = this.applyForm.actback
          previewObj.content.actaim = this.applyForm.actaim
          previewObj.content.actintro = this.applyForm.actintro
          previewObj.content.hostunit = this.applyForm.hostunit
          previewObj.content.organizer = this.applyForm.organizer
          previewObj.content.target = this.applyForm.target
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
