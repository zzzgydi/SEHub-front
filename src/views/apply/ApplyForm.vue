<template>
  <div>
    <div class="apy-header">{{formTitle}}</div>
    <div class="apy-container">
      <div class="apy-form-container">
        <!-- el-form -->
        <component ref="apyForm" :is="formID"></component>
        <el-button class="apy-btn-submit" @click="applySubmit">提交</el-button>
      </div>
      <div class="apy-matter-container">
        <component :is="matterID"></component>
      </div>
    </div>
  </div>
</template>
<script>
import { apiApplyForm } from '../../api/apply.js'
// 默认的申请表单参数
const DefaultFormConfig = {
  activity: '活动申请',
  etiquette: '礼仪队申请',
  material: '秘书物资申请',
  newmedia: '新媒体申请',
  presenter: '主持人申请',
  publicity: '宣传物资申请',
  reporter: '记者团申请',
  ticket: '讲座票申请'
}

export default {
  name: 'applyform',
  data () {
    return {
    }
  },
  computed: {
    formTitle: function () {
      return DefaultFormConfig[this.$route.params.id]
    },
    formID: function () {
      let pathid = this.$route.params.id
      if (pathid && this.formTitle) {
        let name = pathid.charAt(0).toUpperCase() + pathid.substring(1)
        return () => import('../../components/apply/form/' + name + 'Form.vue') // 动态获取相应的表单组件
      } else { return '' }
    },
    matterID: function () {
      let pathid = this.$route.params.id
      if (pathid && this.formTitle) {
        let name = pathid.charAt(0).toUpperCase() + pathid.substring(1)
        return () => import('../../components/apply/matters/' + name + 'Matter.vue')
      } else { return '' }
    }
  },
  methods: {
    applySubmit () {
      if (!this.formTitle) return
      var form = this.$refs['apyForm'].getSubmitForm()
      var that = this
      if (form) {
        apiApplyForm(form, () => {
          that.$refs['apyForm'].clear()
          that.$message.success('提交成功')
        })
      } else {
        this.$message.error('请正确填写表单')
      }
      // var t = new Date('2019-04-18 08:00:00')
      // console.log(t)
    }
  }
  // beforeRouteLeave (to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   console.log('router leave')
  // }
}
</script>
<style scoped lang="stylus" src="../../assets/css/apply/apply.styl"></style>
