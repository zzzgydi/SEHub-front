<!-- 宣传物资申请 -->
<template>
  <div>
    <el-form :model="applyForm" :rules="rules" ref="applyForm" label-width="80px">
      <el-form-item label="活动名称" prop="actname">
        <el-input v-model="applyForm.actname" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动地点" prop="actaddr">
        <el-input v-model="applyForm.actaddr" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动时间" prop="acttime">
        <el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="交付时间" prop="dlytime">
        <el-date-picker
          v-model="applyForm.dlytime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="预计完成时间"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="活动简介" prop="pubintro">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.pubintro"
          resize="none"
          class="apy-text-normal"
        ></el-input>
      </el-form-item>
      <div class="apy-form-dashed"></div>
      <el-form-item
        v-for="(need,index) in applyForm.pubneeds"
        :label="'物资   '+(index+1)"
        :key="index"
        prop="pubneeds"
      >
        <el-input v-model="need.name" class="apy-input-mini"></el-input>
        <span>&emsp;大小&ensp;</span>
        <el-input v-model="need.size" class="apy-pub-input-mini"></el-input>
        <span>&emsp;数量&ensp;</span>
        <el-input v-model.number="need.num" class="apy-pub-input-mini"></el-input>
        <span>&emsp;</span>
        <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          plain
          size="mini"
          @click="delApyNeeds(index)"
        ></el-button>
      </el-form-item>
      <el-button class="apy-pub-form-btn" type="primary" plain @click="addApyNeeds">
        添加物资需求
        <i class="el-icon-circle-plus-outline"></i>
      </el-button>
      <div class="apy-form-dashed" style="margin-top:25px;"></div>
      <el-form-item label="文字内容" prop="pubcontent">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.pubcontent"
          resize="none"
          class="apy-text-normal"
        ></el-input>
      </el-form-item>
      <el-form-item label="其他要求">
        <el-input
          type="textarea"
          rows="5"
          v-model="applyForm.pubothers"
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
        dlytime: '', // 预计交付时间
        pubintro: '',
        pubneeds: [{
          name: '',
          size: '',
          num: ''
        }],
        pubcontent: '',
        pubothers: ''
      },
      rules: {
        actname: [{ required: true, message: '请输入活动名称' }],
        actaddr: [{ required: true, message: '请输入活动区域' }],
        acttime: [{ required: true, message: '请选择活动日期' }],
        dlytime: [{ required: true, message: '请选择预计交付时间' }],
        pubintro: [{ required: true, message: '请输入活动简介' }],
        pubneeds: [{ required: true }],
        pubcontent: [{ required: true, message: '请输入文字内容' }]
      }
    }
  },
  methods: {
    addApyNeeds () {
      this.applyForm.pubneeds.push({ name: '', size: '', num: '' })
    },
    delApyNeeds (index) {
      this.applyForm.pubneeds.splice(index, 1)
    },
    getSubmitForm () {
      var getValid = null
      this.$refs.applyForm.validate((valid) => {
        getValid = valid
      })
      if (getValid) {
        var needs = null
        if (this.applyForm.pubneeds.length === 0) {
          needs = '无'
        } else {
          needs = []
          for (let i of this.applyForm.pubneeds) {
            needs.push(i.name + '  大小：' + i.size + '  数量：' + i.num)
          }
        }
        return {
          type: 'publicity',
          actname: this.applyForm.actname,
          actaddr: this.applyForm.actaddr,
          acttime: new Date(this.applyForm.acttime),
          dlytime: new Date(this.applyForm.dlytime),
          actintro: this.applyForm.pubintro,
          pubneeds: needs,
          pubcontent: this.applyForm.pubcontent,
          others: this.applyForm.pubothers
        }
      }
      return null
    },
    getPreviewForm () {
      var previewObj = null
      this.$refs['applyForm'].validate((valid) => {
        if (valid) {
          previewObj = { title: '宣传物资申请',
            content: {
              postname: this.$store.state.user.name,
              postdapart: this.$store.state.user.depart,
              posttime: new Date().toLocaleString(),
              actname: this.applyForm.actname,
              actaddr: this.applyForm.actaddr,
              acttime: this.applyForm.acttime,
              dlytime: this.applyForm.dlytime,
              pubintro: this.applyForm.pubintro,
              pubneeds: '',
              pubcontent: this.applyForm.pubcontent,
              pubothers: this.applyForm.pubothers
            }
          }
          if (this.applyForm.pubneeds.length === 0) {
            previewObj.content.pubneeds = '无'
          } else if (this.applyForm.pubneeds.length === 1) {
            let val = this.applyForm.pubneeds[0]
            previewObj.content.pubneeds = val.name + '  大小：' + val.size + '  数量：' + val.num
          } else {
            previewObj.content.pubneeds = []
            for (let i of this.applyForm.pubneeds) {
              previewObj.content.pubneeds.push(i.name + '  大小：' + i.size + '  数量：' + i.num)
            }
          }
        }
      })
      return previewObj
    },
    clear () {
      this.applyForm.pubneeds = [{ need: '', size: '', num: '' }]
      this.$refs['applyForm'].resetFields()
    }
  }
}
</script>
<style scoped lang="stylus" src="../../../assets/css/apply/form.styl"></style>
