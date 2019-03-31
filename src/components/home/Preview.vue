<template>
  <div class="default-container">
    <div class="preview-cnt">
      <div class="preview-box">
        <div class="preview-head">
          预览
          <div class="close-box" @click="previewClose()"></div>
        </div>
        <div class="preview-table-box">
          <div class="preview-table">
            <table border="0" cellspacing="0" cellpadding="0">
              <tr align="center">
                <td colspan="2">
                  <div class="preview-td-title">{{pvdata.title}}</div>
                </td>
              </tr>
              <div v-for="(value, key) in pvdata.content" :key="key">
                <tr v-if="!(value instanceof Array)">
                  <td align="center">
                    <div class="preview-td-label">{{keyToStr(key)}}</div>
                  </td>
                  <td class="preview-td-value">{{value}}</td>
                </tr>
                <div v-else>
                  <tr>
                    <td :rowspan="value.length" align="center" style="vertical-align: middle;">
                      <div class="preview-td-label">{{keyToStr(key)}}</div>
                    </td>
                    <td class="preview-td-value">{{value[0]}}</td>
                  </tr>
                  <tr v-for="subval in popValue(value)" :key="subval">
                    <td class="preview-td-value">{{subval}}</td>
                  </tr>
                </div>
              </div>
            </table>
          </div>
        </div>
        <div class="preview-btn-box">
          <el-button class="preview-btn">确认发送</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { PreKeyStr } from './preview.js'
export default {
  props: ['pvdata'],
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {
    keyToStr: function (key) {
      var str = PreKeyStr[key]
      if (!str) { return key } else { return str }
    },
    previewClose () {
      this.$emit('preview_close')
    },
    popValue (valArr) {
      // 去除头部第一个元素
      var arr = [...valArr]
      arr.splice(0, 1)
      return arr
    }
  }
}
</script>
<style lang="stylus" scoped src="./Preview.styl">
</style>
