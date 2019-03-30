<template>
  <div>
    <el-form :model="applyForm" ref="applyForm" label-width="80px">
      <el-form-item label="活动背景">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.actback"
          resize="none"
          class="apy-text-normal"
        ></el-input>
      </el-form-item>
      <el-form-item label="活动目的">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.actaim"
          resize="none"
          class="apy-text-normal"
        ></el-input>
      </el-form-item>
      <el-form-item label="主办单位">
        <el-input v-model="applyForm.hostunit" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="承办单位">
        <el-input v-model="applyForm.organizer" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-input v-model="applyForm.actname" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动地点">
        <el-input v-model="applyForm.actaddr" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="面向对象">
        <el-input v-model="applyForm.target" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-row>
          <el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
          <span>&emsp;时间段&emsp;</span>
          <el-input v-model="applyForm.acttime_more" class="apy-input-mini"></el-input>
        </el-row>
      </el-form-item>
      <el-form-item label="活动简介">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.actintro"
          resize="none"
          class="apy-text-normal"
        ></el-input>
      </el-form-item>
      <el-form-item label="启用服务">
        <el-switch v-model="applyForm.isServer" active-color="#13ce66"></el-switch>&emsp;&emsp;
        <el-tooltip placement="right" effect="light">
          <div slot="content">这是提示</div>
          <span>
            <i class="el-icon-info apy-tip"></i>
          </span>
        </el-tooltip>
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
        acttime_more: '',
        actback: '',
        actaim: '',
        actintro: '',
        hostunit: '华南理工大学软件学院',
        organizer: '',
        target: '',
        isServer: false,
        entertime: '',
        enterddl: ''
      }
    }
  },
  methods: {
    getApplyForm () {
      return this.applyForm
    },
    getPreviewForm () {
      var previewObj = { title: '活动申请', content: {} }
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

      return previewObj
    }
  }
}
</script>

<style scoped lang="stylus" src="./form.styl"></style>
