<!--记者团申请-->
<template>
  <div>
    <simple-header title="记者团申请"></simple-header>
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
                <el-checkbox label="新闻稿">新闻稿</el-checkbox>
                <el-checkbox label="拍照">拍照</el-checkbox>
                <el-checkbox label="录像">录像</el-checkbox>
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
                placeholder="请先阅读注意事项中标红的部分！！"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-main>
        <div class="apy-matter-container">
          <div class="apy-matter-title">注意事项</div>
          <div class="apy-matter-each" style="color:red;">
            <span>1.&emsp;关于要求</span>
            <br>
            <span>&emsp;&emsp;若对申请的项目有特殊要求，请务必在“特殊要求”中注明。如：“拍照一定要拍到某页PPT”；“拍照时要多拍某某领导”；“拍照时某某时候赞助商会来请多给镜头”；“推送排版时请不要更改文章格式”等</span>
          </div>
          <div class="apy-matter-each">
            <span>2.&emsp;关于申请</span>
            <br>
            <span>&emsp;&ensp;a).拍照、新闻稿：请提前3个工作日提交申请</span>
          </div>
          <div class="apy-matter-each">
            <span>3.&emsp;如果有任何疑惑，可联系新媒体中心部长梁兆璋，手机：13680375111，QQ：1315171497</span>
          </div>
          <div class="apy-matter-each">
            <span>4.&emsp;记者团工作负责人：</span>
            <br>
            <span>&emsp;• 拍照负责人：周瑶, 梁兆璋</span>
            <br>
            <span>&emsp;• 新闻稿负责人：陈楷婷, 唐雨璐</span>
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
<style scoped lang="stylus" src="./apply.styl"></style>
