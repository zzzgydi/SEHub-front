<!-- 宣传物资申请 -->
<template>
  <div>
    <simple-header title="宣传物资申请"></simple-header>
    <el-container class="apy-container">
      <el-main>
        <div class="apy-form-container">
          <el-form :model="applyForm" ref="applyForm" label-width="100px">
            <el-form-item label="活动名称">
              <el-input v-model="applyForm.actname" class="apy-input-normal"></el-input>
            </el-form-item>
            <el-form-item label="活动地点">
              <el-input v-model="applyForm.actaddr" class="apy-input-normal"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
            <el-form-item label="交付时间">
              <el-date-picker v-model="applyForm.dlytime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
              <span style="color: #909399">&emsp;&emsp;// 预计完成时间</span>
            </el-form-item>
            <el-form-item label="活动简介">
              <el-input
                type="textarea"
                rows="5"
                v-model="applyForm.intro"
                resize="none"
                class="apy-text-normal"
              ></el-input>
            </el-form-item>
            <div class="apy-form-dashed"></div>
            <el-form-item
              v-for="(need,index) in applyForm.needs"
              :label="'物资'+(index+1)"
              :key="index"
            >
              <el-input v-model="need.name" class="apy-input-mini"></el-input>
              <span>&emsp;大小&ensp;</span>
              <el-input v-model="need.size" class="apy-pub-input-mini"></el-input>
              <span>&emsp;数量&ensp;</span>
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
            <el-form-item label="文字内容">
              <el-input
                type="textarea"
                rows="5"
                v-model="applyForm.content"
                resize="none"
                class="apy-text-normal"
              ></el-input>
            </el-form-item>
            <el-form-item label="其他要求">
              <el-input
                type="textarea"
                rows="5"
                v-model="applyForm.others"
                resize="none"
                class="apy-text-normal"
              ></el-input>
            </el-form-item>
            <el-form-item label="添加附件">
              <el-upload action>
                <div class="apy-upload-box">
                  <i class="el-icon-circle-plus-outline"></i>
                </div>
              </el-upload>
            </el-form-item>
            <el-button class="apy-pub-form-btn" @click="handleClick">提交</el-button>
          </el-form>
        </div>
      </el-main>
      <el-main>
        <div class="apy-matter-container">
          <div class="apy-matter-title">尺寸问题</div>
          <div class="apy-matter-each">
            <span>1.&ensp;海报尺寸</span>
            <br>
            <span>&emsp;•&ensp;A0: 841mm * 1189mm</span>
            <br>
            <span>&emsp;•&ensp;3A0: 2523mm * 1189mm</span>
            <br>
            <span>&emsp;•&ensp;A2: 420mm * 594mm</span>
            <br>
            <span>2.&ensp;横幅尺寸</span>
            <br>
            <span>&emsp;•&ensp;0.7m * 8m</span>
            <br>
            <span>&emsp;•&ensp;0.8m * 8m</span>
            <br>&emsp;P.S. 横幅的尺寸也可以根据情况定制，不过一般为以上两种
          </div>
          <div class="apy-matter-title" style="margin-top: 20px">海报张贴地点</div>
          <div class="apy-matter-each">
            <span>1.&ensp;C5排球场宣传栏</span>
            <br>
            <span>2.&ensp;C10水果店对面宣传栏</span>
            <br>
            <span>3.&ensp;宿舍内黑板（主要贴A2尺寸）</span>
          </div>
          <div class="apy-matter-title" style="margin-top: 20px">注意事项</div>
          <div v-for="(matter,idx) in matters" :key="idx" class="apy-matter-each">
            <span>{{idx+1}}.&emsp;{{matter}}</span>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { matterPublicity } from '../../assets/js/const/matters.js'
export default {
  data () {
    return {
      applyForm: {
        actname: '',
        actaddr: '',
        acttime: '',
        dlytime: '', // 预计交付时间
        intro: '',
        needs: [{
          name: '',
          size: '',
          num: ''
        }],
        content: '',
        others: ''
      },
      matters: matterPublicity
    }
  },
  methods: {
    addApyNeeds () {
      this.applyForm.needs.push({ name: '', size: '', num: '' })
    },
    delApyNeeds (index) {
      this.applyForm.needs.splice(index, 1)
    },
    handleClick () {

    }
  }
}
</script>
<style scoped lang="stylus" src="./apply.styl"></style>
<style lang="stylus" scoped>
</style>
