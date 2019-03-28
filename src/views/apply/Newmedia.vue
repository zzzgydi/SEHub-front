<!-- 新媒体申请 -->
<template>
  <div>
    <simple-header title="新媒体申请"></simple-header>
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
          <el-form-item label="提交时间">
            <el-date-picker v-model="applyForm.ddl" type="date" value-format="yyyy-MM-dd"></el-date-picker>
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
import MatterView from '../../components/matters/NewmediaMatter'
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
        ddl: '',
        newwork: []
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
