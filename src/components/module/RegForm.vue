<!-- 报名表组件 -->
<template>
  <div>
    <div class="regs-title">{{cTitle}}</div>
    <div v-for="(item, index) in regform" :key="index" class="regs-each-item">
      <div v-if="item.type === 'input'">
        <div class="regs-label">{{index+1}}. {{item.title}}</div>
        <el-input class="regs-input" v-model="item.value"></el-input>
      </div>
      <div v-else-if="item.type === 'select'">
        <div class="regs-label">{{index+1}}. {{item.title}}</div>
        <el-select v-model="item.value" placeholder="请选择">
          <el-option
            v-for="(op, op_idx) in getOptions(item.options)"
            :key="op_idx"
            :label="op"
            :value="op"
          ></el-option>
        </el-select>
      </div>
      <div v-if="item.type === 'text'">
        <div class="regs-label">{{index+1}}. {{item.title}}</div>
        <el-input type="textarea" resize="None" rows="4" class="regs-input" v-model="item.value"></el-input>
      </div>
      <div v-else-if="item.type === 'datepicker'">
        <div class="regs-label">{{index+1}}. {{item.title}}</div>
        <el-date-picker v-model="item.value" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div v-else-if="item.type === 'button'">
        <el-button class="regs-button">{{item.title}}</el-button>
      </div>
    </div>
    <el-button class="regs-button-show" disabled>提交</el-button>
  </div>
</template>
<script>
export default {
  props: ['regtitle', 'regform'], // 这里要求是一个数组
  components: {
  },
  computed: {
    cTitle: function () {
      if (this.regtitle) {
        return this.regtitle
      } else {
        return '请填写标题'
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    getOptions (options) {
      var arr = options.split(',')
      return arr
    }
  }
}
</script>
<style lang="stylus" scoped src="./RegForm.styl"></style>
<style lang="stylus" scoped>
</style>
