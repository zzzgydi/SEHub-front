<!-- 新媒体申请 -->
<template>
  <div>
    <simple-header title="新媒体申请"></simple-header>
    <el-container class="apy-container">
      <el-main>
        <div class="apy-form-container">
          <el-form :model="applyForm" ref="applyForm" label-width="100px">
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
        </div>
      </el-main>
      <el-main>
        <el-button
          @click="toReporter"
          type="primary"
          style="width:200px;margin-left:55px;margin-bottom:20px;"
        >记者团预约</el-button>
        <div class="apy-matter-container">
          <div class="apy-matter-title">注意事项</div>
          <div class="apy-matter-each" style="color:red;">
            <span>1.&emsp;关于要求</span>
            <br>
            <span>&emsp;&emsp;若对申请的项目有特殊要求，请务必在“特殊要求”中注明。如：“推送排版时请不要更改文章格式”；“做视频时请掐掉某某部分”等</span>
          </div>
          <div class="apy-matter-each">
            <span>2.&emsp;关于申请</span>
            <br>
            <span>&emsp;&ensp;a).拍照、写稿：请填写记者团的申请表</span>
            <br>
            <span>&emsp;&ensp;b).公众号推送：请提前4-5个工作日提交申请</span>
            <br>
            <span>&emsp;&ensp;c).视频制作：请提前7-9个工作日提交申请（尽量提前）</span>
          </div>
          <div class="apy-matter-each">
            <span>3.&emsp;如果有任何疑惑，可联系新媒体中心部长梁兆璋，手机：13680375111，QQ：1315171497</span>
          </div>
          <div class="apy-matter-each">
            <span>4.&emsp;新媒体各工作负责人：</span>
            <br>
            <span>&emsp;• 视频负责人：赛炜城, 梁兆璋</span>
            <br>
            <span>&emsp;• 推送负责人：唐雨璐, 陈楷婷</span>
          </div>
          <div class="apy-matter-each">
            <span>5.&emsp;对于不同工作的申请，建议直接向各组的负责人提交，以减少不必要的通知延迟</span>
          </div>
        </div>
      </el-main>
    </el-container>
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
        ddl: '',
        newwork: []
      },
      matters: []
    }
  },
  methods: {
    toReporter () {
      this.$router.push('/apply/reporter')
    }
  }
}
</script>
<style scoped lang="stylus" src="../../assets/css/apply/apply.styl"></style>
