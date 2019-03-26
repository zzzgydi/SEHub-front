<template>
  <div>
    <div class="regs-header">
      <span>&emsp;&ensp;表单设计</span>
    </div>
    <div class="regs">
      <el-container>
        <el-main>
          <div class="regs-editor-box">
            <el-form v-model="regsArr" label-width="70px">
              <div v-for="(regs, idx) in regsArr" :key="idx">
                <!-- input -->
                <div v-if="regs.type === 'input'">
                  <div class="regs-edit-item-label">
                    <span>-- 输入框 --</span>
                    <el-button
                      size="mini"
                      @click="delDomain(idx)"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                    ></el-button>
                  </div>
                  <el-form-item label="输入问题">
                    <el-input v-model="regs.title"></el-input>
                  </el-form-item>
                </div>
                <!-- select -->
                <div v-else-if="regs.type === 'select'">
                  <div class="regs-edit-item-label">
                    <span>-- 选择框 --</span>
                    <el-button
                      size="mini"
                      @click="delDomain(idx)"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                    ></el-button>
                  </div>
                  <el-form-item label="输入问题" style="margin-bottom:10px;">
                    <el-input v-model="regs.title"></el-input>
                  </el-form-item>
                  <el-form-item label="输入选项">
                    <el-input v-model="regs.options" placeholder="用逗号隔开多个选项"></el-input>
                  </el-form-item>
                </div>
                <!-- text -->
                <div v-else-if="regs.type === 'text'">
                  <div class="regs-edit-item-label">
                    <span>-- 文本框 --</span>
                    <el-button
                      size="mini"
                      @click="delDomain(idx)"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                    ></el-button>
                  </div>
                  <el-form-item label="输入问题">
                    <el-input v-model="regs.title"></el-input>
                  </el-form-item>
                </div>
                <!-- datepicker -->
                <div v-else-if="regs.type === 'datepicker'">
                  <div class="regs-edit-item-label regs-edit-item-label-fix1">
                    <span>-- 日期选择 --</span>
                    <el-button
                      size="mini"
                      @click="delDomain(idx)"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                    ></el-button>
                  </div>
                  <el-form-item label="输入问题">
                    <el-input v-model="regs.title"></el-input>
                  </el-form-item>
                </div>
              </div>
            </el-form>
            <div class="regs-edit-newbtn-box">
              <el-dropdown trigger="click" @command="addOption">
                <el-button type="primary">
                  新增选项
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
        </el-main>
        <el-main>
          <div class="simulate-moblie-box">
            <div class="simulate-moblie">
              <div class="simulate-moblie-screen">
                <reg-form :regform="regsArr"></reg-form>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
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
      regsArr: []
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
    }
  }
}
</script>
<style lang="stylus" scoped src="./RegSys.styl">
</style>
