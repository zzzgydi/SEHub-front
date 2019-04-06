<template>
  <div class="default-container">
    <simple-header title="报名表设计"></simple-header>
    <div class="regs-container">
      <div class="regs-editor-box">
        <div class="regs-editor-inner">
          <div class="editor-head">
            <div class="editor-head-label">报名表名称</div>
            <el-input v-model="regstitle" class="editor-head-input" placeholder="填写报名表名称"></el-input>
          </div>
          <div class="editor-form">
            <transition-group name="slide-fade" tag="div">
              <div v-for="(regs, idx) in regsArr" :key="idx + regs.type" class="each-box">
                <!-- input -->
                <div v-if="regs.type === 'input'">
                  <div class="each-box-head">
                    <div class="each--title">{{idx + 1}}.&ensp;输入框</div>
                    <el-button
                      size="mini"
                      @click="delDomain(idx)"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      plain
                    ></el-button>
                  </div>
                  <div class="each-box-value">
                    <div class="each-value-label">输入问题</div>
                    <el-input class="each-value-input" v-model="regs.title"></el-input>
                  </div>
                </div>
                <!-- select -->
                <div v-else-if="regs.type === 'select'">
                  <div class="each-box-head">
                    <div class="each--title">{{idx + 1}}.&ensp;选择框</div>
                    <el-button
                      size="mini"
                      @click="delDomain(idx)"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      plain
                    ></el-button>
                  </div>
                  <div class="each-box-value">
                    <div class="each-value-label">输入问题</div>
                    <el-input class="each-value-input" v-model="regs.title"></el-input>
                  </div>
                  <div class="each-box-value" style="margin-top: 10px">
                    <div class="each-value-label">输入选项</div>
                    <el-input
                      class="each-value-input"
                      v-model="regs.options"
                      placeholder="用逗号隔开多个选项"
                    ></el-input>
                  </div>
                </div>
                <!-- text -->
                <div v-if="regs.type === 'text'">
                  <div class="each-box-head">
                    <div class="each--title">{{idx + 1}}.&ensp;文本框</div>
                    <el-button
                      size="mini"
                      @click="delDomain(idx)"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      plain
                    ></el-button>
                  </div>
                  <div class="each-box-value">
                    <div class="each-value-label">输入问题</div>
                    <el-input class="each-value-input" v-model="regs.title"></el-input>
                  </div>
                </div>
                <!-- datepicker -->
                <div v-if="regs.type === 'datepicker'">
                  <div class="each-box-head">
                    <div class="each--title">{{idx + 1}}.&ensp;日期选择框</div>
                    <el-button
                      size="mini"
                      @click="delDomain(idx)"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      plain
                    ></el-button>
                  </div>
                  <div class="each-box-value">
                    <div class="each-value-label">输入问题</div>
                    <el-input class="each-value-input" v-model="regs.title"></el-input>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
        <div class="regs-btn-box">
          <el-button class="submit-btn" @click="handleSubmit">提交</el-button>
          <el-dropdown trigger="click" @command="addOption">
            <el-button class="new-btn" plain>
              新增选项&ensp;
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="input">输入框</el-dropdown-item>
              <el-dropdown-item command="select">选择器</el-dropdown-item>
              <el-dropdown-item command="datepicker">日期选择</el-dropdown-item>
              <el-dropdown-item command="text">文本框</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="simulate-moblie">
        <div class="simulate-moblie-screen">
          <reg-form :regtitle="regstitle" :regform="regsArr"></reg-form>
        </div>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="20%" center>
      <span>是否确认提交</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import RegForm from '../../components/module/RegForm.vue'

export default {
  components: {
    'reg-form': RegForm
  },
  data () {
    return {
      dialogVisible: false,
      regstitle: '',
      regsArr: [{ type: 'input', title: '请输入问题？', value: '' }]
    }
  },
  methods: {
    addOption (value) {
      switch (value) {
        case 'input':
          this.regsArr.push({ type: 'input', title: '', value: '' })
          break
        case 'select':
          this.regsArr.push({ type: 'select', title: '', value: '', options: '' })
          break
        case 'text':
          this.regsArr.push({ type: 'text', title: '', value: '' })
          break
        case 'datepicker':
          this.regsArr.push({ type: 'datepicker', title: '', value: '' })
          break
      }
    },
    delDomain (idx) {
      this.regsArr.splice(idx, 1)
    },
    handleSubmit () {
      console.log('submit')
      this.$confirm('确认是否提交', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '提交',
        cancelButtonText: '取消'
      })
        .then(() => {
          this.$message({
            type: 'info',
            message: '提交成功'
          })
        })
    }
  }
}
</script>
<style lang="stylus" scoped src="./RegSys.styl">
</style>
