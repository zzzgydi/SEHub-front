<template>
  <div>
    <div class="ndetail-cnt">
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
    <div class="feedback-cnt">
      <div class="feedback-input">
        <div class="feedback-label">
          <span>*</span>审核反馈
        </div>
        <el-input v-model="feedback" rows="4" resize="none" type="textarea" placeholder="请输入审核反馈信息"></el-input>
      </div>
      <div class="feedback-btn">
        <div id="btn1">
          <el-button type="success" round plain @click="checkPass">通过</el-button>
        </div>
        <div id="btn2">
          <el-button type="danger" round plain @click="checkReject">拒绝</el-button>
        </div>
      </div>
    </div>
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
    },
    checkPass () {

    },
    checkReject () {

    }
  }
}
</script>
<style lang="stylus" scoped src="../../assets/css/notice/detail.styl"></style>
