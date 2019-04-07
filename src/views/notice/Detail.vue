<template>
  <div>
    <simple-header title="通知详情"></simple-header>
    <div class="ndetail-cnt">
      <div class="ndetail-table-box">
        <div class="ndetail-table">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr align="center">
              <td colspan="2">
                <div class="ndetail-td-title">{{detailData.title}}</div>
              </td>
            </tr>
            <div v-for="(value, key) in detailData.content" :key="key">
              <tr v-if="!(value instanceof Array)">
                <td align="center">
                  <div class="ndetail-td-label">{{keyToStr(key)}}</div>
                </td>
                <td class="ndetail-td-value">{{value}}</td>
              </tr>
              <div v-else>
                <tr>
                  <td :rowspan="value.length" align="center" style="vertical-align: middle;">
                    <div class="ndetail-td-label">{{keyToStr(key)}}</div>
                  </td>
                  <td class="ndetail-td-value">{{value[0]}}</td>
                </tr>
                <tr v-for="subval in popValue(value)" :key="subval">
                  <td class="ndetail-td-value">{{subval}}</td>
                </tr>
              </div>
            </div>
          </table>
        </div>
      </div>
    </div>
    <div class="feedback-cnt"></div>
  </div>
</template>
<script>
import { KeyToStr } from '../../assets/js/seconfig.js'
export default {
  data () {
    return {
      detailData: {
        title: 'XXX申请',
        content: {
          actname: 'XXX',
          actaddr: 'XXXXX'
        }
      },
      feedback: ''
    }
  },
  computed: {

  },
  methods: {
    keyToStr: function (key) {
      var str = KeyToStr[key]
      if (!str) { return key } else { return str }
    },
    popValue (valArr) {
      // 去除头部第一个元素
      var arr = [...valArr]
      arr.splice(0, 1)
      return arr
    },
    previewSubmit () {
      this.$emit('preview_submit')
    }
  }
}
</script>
<style lang="stylus" scoped src="../../assets/css/notice/detail.styl"></style>
