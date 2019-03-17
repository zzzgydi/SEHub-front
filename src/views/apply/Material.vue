<!--秘书部物资申请-->
<template>
  <div>
    <simple-header title="物资申请"></simple-header>
    <el-container class="apy-container">
      <el-main>
        <div class="apy-form-container">
          <el-form v-model="applyForm" ref="applyForm" label-width="100px">
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
        </div>
      </el-main>
      <el-main>
        <div class="apy-matter-container">
          <div class="apy-matter-title">注意事项</div>
          <div v-for="(matter,idx) in matters" :key="idx" class="apy-matter-each">
            <span>{{idx+1}}.&emsp;{{matter}}</span>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { matterMaterials } from '../../assets/js/const/matters.js'
export default {
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
      },
      matters: matterMaterials
    }
  },
  methods: {
    addApyNeeds () {
      this.applyForm.needs.push({ name: '', num: '' })
    },
    delApyNeeds (index) {
      this.applyForm.needs.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="stylus" src="../../assets/css/apply/apply.styl"></style>
