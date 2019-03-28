<template>
  <div>
    <simple-header title="礼仪队"></simple-header>
    <div class="apy-container">
      <div class="apy-form-container">
        <el-form v-model="applyForm" ref="applyForm" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="applyForm.actname" class="apy-input-normal"></el-input>
          </el-form-item>
          <el-form-item label="活动地点">
            <el-input v-model="applyForm.actaddr" class="apy-input-normal"></el-input>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>
          <el-form-item label="申请人数">
            <el-input v-model="applyForm.number" class="apy-input-normal"></el-input>
          </el-form-item>
          <el-form-item label="礼仪工作">
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
        </el-form>

        <div class="apy-btn-box">
          <el-button class="apy-btn-submit" @click="applyPreview">提交</el-button>
        </div>
      </div>
      <div class="apy-matter-container">
        <matter-view></matter-view>
      </div>
    </div>
  </div>
</template>
<script>
import MatterView from '../../components/matters/EtiquetteMatter'
export default {
  components: {
    'matter-view': MatterView
  },
  data () {
    return {
      applyForm: {
        actname: '',
        actaddr: '',
        acttime: '',
        number: '',
        etiwork: [],
        others: ''
      }
    }
  },
  methods: {
    applyPreview () {

    },
    applySubmit () {

    }
  }
}
</script>
<style scoped lang="stylus" src="./apply.styl"></style>
<style lang="stylus" scoped>
</style>
