<!-- 报名表组件 -->
<template>
  <div>
    <div v-for="(item, index) in regform" :key="index">
      <div v-if="item.type === 'input'" class="regs-each-item">
        <div>{{index+1}}. {{item.title}}</div>
        <el-input class="regs-input" v-model="item.value"></el-input>
      </div>
      <div v-else-if="item.type === 'select'" class="regs-each-item">
        <div>{{index+1}}. {{item.title}}</div>
        <el-select v-model="item.value" placeholder="请选择">
          <el-option
            v-for="(op, op_idx) in getOptions(item.options)"
            :key="op_idx"
            :label="op"
            :value="op"
          ></el-option>
        </el-select>
      </div>
      <div v-if="item.type === 'text'" class="regs-each-item">
        <div>{{index+1}}. {{item.title}}</div>
        <el-input type="textarea" resize="None" rows="4" class="regs-input" v-model="item.value"></el-input>
      </div>
      <div v-else-if="item.type === 'datepicker'" class="regs-each-item">
        <div>{{index+1}}. {{item.title}}</div>
        <el-date-picker v-model="item.value" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div v-else-if="item.type === 'button'" class="regs-each-item">
        <el-button class="regs-button">{{item.title}}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['regform'], // 这里要求是一个数组
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
<style lang="stylus" scoped src="../../assets/css/module/register.styl"></style>
<style lang="stylus" scoped>
</style>
