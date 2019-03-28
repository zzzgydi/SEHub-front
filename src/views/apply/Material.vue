<!--秘书部物资申请-->
<template>
  <div>
    <simple-header title="秘书物资申请"></simple-header>
    <div class="apy-container">
      <div class="apy-form-container">
        <el-form v-model="applyForm" ref="applyForm" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="applyForm.actname" class="apy-input-normal"></el-input>
          </el-form-item>
          <el-form-item label="活动地点">
            <el-input v-model="applyForm.actaddr" class="apy-input-normal"></el-input>
          </el-form-item>
          <el-form-item label="借用时间">
            <el-date-picker v-model="applyForm.lendtime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>
          <el-form-item label="归还时间">
            <el-date-picker v-model="applyForm.backtime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>
          <div class="apy-form-dashed"></div>
          <el-form-item
            v-for="(need,index) in applyForm.needs"
            :label="'物资'+(index+1)"
            :key="index"
          >
            <el-input v-model="need.name" class="apy-input-medium"></el-input>
            <span>&emsp;&emsp;数量&ensp;</span>
            <el-input v-model="need.num" class="apy-pub-input-mini"></el-input>
            <span>&emsp;</span>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              size="mini"
              @click="delApyNeeds(index)"
            ></el-button>
          </el-form-item>
          <el-button class="apy-pub-form-btn" type="primary" plain @click="addApyNeeds">
            添加物资需求
            <i class="el-icon-circle-plus-outline"></i>
          </el-button>
          <div class="apy-form-dashed" style="margin-top: 20px;"></div>

          <el-form-item label="备注">
            <el-input
              type="textarea"
              rows="5"
              v-model="applyForm.others"
              resize="none"
              class="apy-text-normal"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="apy-btn-box">
          <el-button class="apy-btn-submit" @click="applyPreview">提交</el-button>
        </div>
      </div>
      <div class="apy-matter-container">
        <matter-view></matter-view>
      </div>
    </div>
  </div>
</template>
<script>
import MatterView from '../../components/matters/MaterialMatter'
export default {
  components: {
    'matter-view': MatterView
  },
  data () {
    return {
      applyForm: {
        actname: '',
        actaddr: '',
        lendtime: '',
        backtime: '',
        needs: [{
          name: '',
          num: ''
        }]
      }
    }
  },
  methods: {
    addApyNeeds () {
      this.applyForm.needs.push({ name: '', num: '' })
    },
    delApyNeeds (index) {
      this.applyForm.needs.splice(index, 1)
    },
    applyPreview () {

    },
    applySubmit () {

    }
  }
}
</script>

<style scoped lang="stylus" src="./apply.styl"></style>
