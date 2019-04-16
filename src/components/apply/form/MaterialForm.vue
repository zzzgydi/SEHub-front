<!--秘书部物资申请-->
<template>
  <div>
    <el-form :model="applyForm" :rules="rules" ref="applyForm" label-width="95px">
      <el-form-item label="活动名称" prop="actname">
        <el-input v-model="applyForm.actname" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="活动地点" prop="actaddr">
        <el-input v-model="applyForm.actaddr" class="apy-input-normal"></el-input>
      </el-form-item>
      <el-form-item label="借用时间" prop="lendtime">
        <el-date-picker v-model="applyForm.lendtime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="归还时间" prop="backtime">
        <el-date-picker v-model="applyForm.backtime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <div class="apy-form-dashed"></div>
      <el-form-item
        prop="needs"
        v-for="(need,index) in applyForm.needs"
        :label="'物资   '+(index+1)"
        :key="index"
      >
        <el-input v-model="need.name" class="apy-input-medium"></el-input>
        <span>&emsp;&emsp;数量&ensp;</span>
        <el-input v-model="need.num" class="apy-pub-input-mini"></el-input>
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
      <div class="apy-form-dashed" style="margin-top: 20px;"></div>

      <el-form-item label="备  注">
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
        lendtime: '',
        backtime: '',
        needs: [{
          name: '',
          num: ''
        }],
        others: ''
      },
      rules: {
        actname: [{ required: true, message: '请输入活动名称' }],
        actaddr: [{ required: true, message: '请输入活动区域' }],
        lendtime: [{ required: true, message: '请选择借用时间' }],
        backtime: [{ required: true, message: '请选择归还时间' }],
        needs: [{ required: true }]
      }
    }
  },
  methods: {
    addApyNeeds () {
      this.applyForm.needs.push({ name: '', num: '' })
    },
    delApyNeeds (index) {
      this.applyForm.needs.splice(index, 1)
    },
    getSubmitForm () {
      var getValid = null
      this.$refs.applyForm.validate((valid) => {
        getValid = valid
      })
      if (getValid) {
        var needs = null
        if (this.applyForm.needs.length === 0) {
          needs = '无'
        } else {
          needs = []
          for (let i of this.applyForm.needs) {
            needs.push(i.name + '  数量：' + i.num)
          }
        }
        return {
          type: 'material',
          actname: this.applyForm.actname,
          actaddr: this.applyForm.actaddr,
          lendtime: new Date(this.applyForm.lendtime),
          backtime: new Date(this.applyForm.backtime),
          needs: needs,
          others: this.applyForm.others
        }
      }
      return null
    },
    getPreviewForm () {
      var previewObj = { title: '秘书物资申请', content: {} }
      previewObj.content.postname = this.$store.state.user.name
      previewObj.content.postdapart = this.$store.state.user.depart
      previewObj.content.posttime = new Date().toLocaleString()
      previewObj.content.actname = this.applyForm.actname
      previewObj.content.actaddr = this.applyForm.actaddr
      previewObj.content.lendtime = this.applyForm.lendtime
      previewObj.content.backtime = this.applyForm.backtime
      if (this.applyForm.needs.length === 0) {
        previewObj.content.needs = '无'
      } else if (this.applyForm.needs.length === 1) {
        let val = this.applyForm.needs[0]
        previewObj.content.needs = val.name + '  数量：' + val.num
      } else {
        previewObj.content.needs = []
        for (let i of this.applyForm.needs) {
        // console.log(i)
          previewObj.content.needs.push(i.name + '  数量：' + i.num)
        }
      }
      previewObj.content.others = this.applyForm.others
      return previewObj
    },
    clear () {
      this.applyForm.needs = [{ name: '', num: '' }]
      this.$refs['applyForm'].resetFields()
    }
  }
}
</script>

<style scoped lang="stylus" src="../../../assets/css/apply/form.styl"></style>
