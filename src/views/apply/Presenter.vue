<!--主持人申请-->
<template>
  <div>
    <simple-header title="主持人申请"></simple-header>
    <div class="apy-container">
      <div class="apy-form-container">
        <el-form :model="applyForm" ref="applyForm" label-width="80px">
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
        </el-form>
      </div>
      <div class="apy-matter-container">
        <div class="apy-matter-title">注意事项</div>
        <div v-for="(matter,idx) in matters" :key="idx" class="apy-matter-each">
          <span>{{idx+1}}.&emsp;{{matter}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { matterPresenter } from '../../assets/js/matters.js'
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
      },
      matters: matterPresenter
    }
  }
}
</script>

<style scoped lang="stylus" src="./apply.styl"></style>
