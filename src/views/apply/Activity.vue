<template>
  <div>
    <!--<div class="apy-header">活动申请</div>-->
    <simple-header title="活动申请"></simple-header>
    <div class="apy-form-container">
      <el-form :model="applyForm" ref="applyForm" label-width="100px">
        <!-- <div class="simple-label sl-others-1">基本信息</div> -->
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
        <el-form-item label="启用服务">
          <el-switch v-model="applyForm.isServer" active-color="#13ce66"></el-switch>&emsp;&emsp;
          <el-tooltip placement="right" effect="light">
            <div slot="content">这是提示</div>
            <span>
              <i class="el-icon-info apy-tip"></i>
            </span>
          </el-tooltip>
        </el-form-item>
        <el-form-item label="添加附件">
          <el-upload>
            <div class="apy-upload-box">
              <i class="el-icon-circle-plus-outline"></i>
            </div>
          </el-upload>
        </el-form-item>
        <div class="apy-btn-box">
          <el-button class="apy-btn">暂存</el-button>
          <el-button class="apy-btn-after" @click="handleClick">提交</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../../components/SimpleHeader.vue'
export default {
  components: {
    'simple-header': SimpleHeader
  },
  data () {
    return {
      applyForm: {
        actname: '',
        actaddr: '',
        acttime: '',
        acttime_more: '',
        actback: '',
        actaim: '',
        actddl: '',
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
    handleClick () {
      console.log(document.body.offsetHeight)
    }
  }
}
</script>

<style scoped lang="stylus" src="../../assets/css/apply.styl"></style>
<style lang="stylus" scoped>
.simple-label {
  padding: 5px 10px 5px 10px;
  background-color: #eee;
  width: 400px;
}

.sl-others-1 {
  margin: 0 0 20px 30px;
}
</style>
