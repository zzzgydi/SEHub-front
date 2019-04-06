<template>
  <div class="default-container">
    <div v-if="!isPreview">
      <simple-header :title="formTitle"></simple-header>
      <div class="apy-container">
        <div class="apy-form-container">
          <!-- el-form -->
          <component ref="apyForm" :is="formID"></component>
          <el-button class="apy-btn-submit" @click="applyPreview">提交</el-button>
        </div>
        <div class="apy-matter-container">
          <component :is="matterID"></component>
        </div>
      </div>
    </div>
    <transition name="preview-fade">
      <div v-if="isPreview" class="preview-container">
        <preivew
          :pvdata="previewObj"
          @preview_close="isPreview = false"
          @preview_submit="applySubmit"
        ></preivew>
      </div>
    </transition>
  </div>
</template>
<script>
import Preview from '../../components/home/Preview.vue'

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
  components: {
    'preivew': Preview
  },
  data () {
    return {
      isPreview: false,
      previewObj: {}
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
        return () => import('../../components/form/' + name + 'Form.vue') // 动态获取相应的表单组件
      } else { return '' }
    },
    matterID: function () {
      let pathid = this.$route.params.id
      if (pathid && this.formTitle) {
        let name = pathid.charAt(0).toUpperCase() + pathid.substring(1)
        return () => import('../../components/matters/' + name + 'Matter.vue')
      } else { return '' }
    }
  },
  methods: {
    applyPreview () {
      if (!this.formTitle) return

      this.previewObj = this.$refs['apyForm'].getPreviewForm()
      // console.log(this.$refs['apyForm'].getPreviewForm())
      if (this.previewObj) {
        this.isPreview = true
      } else {
        this.$message.error('请正确填写表单')
      }
    },
    applySubmit () {
      console.log(this.$refs['apyForm'])
      console.log(this)
    }
  }
  // beforeRouteLeave (to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   console.log('router leave')
  // }
}
</script>
<style scoped lang="stylus" src="./apply.styl"></style>
