<template>
  <div class="matter-container">
    <div class="matter-title">尺寸问题</div>
    <div class="matter-each">
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
    <div class="matter-title" style="margin-top: 20px">海报张贴地点</div>
    <div class="matter-each">
      <span>1.&ensp;C5排球场宣传栏</span>
      <br>
      <span>2.&ensp;C10水果店对面宣传栏</span>
      <br>
      <span>3.&ensp;宿舍内黑板（主要贴A2尺寸）</span>
    </div>
    <div class="matter-title" style="margin-top: 20px">注意事项</div>
    <div v-for="(matter,idx) in matters" :key="idx" class="matter-each">
      <span>{{idx+1}}.&emsp;{{matter}}</span>
    </div>
  </div>
</template>
<script>
import { matterPublicity } from './matters.js'
export default {
  data () {
    return {
      matters: matterPublicity
    }
  }
}
</script>
<style lang="stylus" scoped src="../../../assets/css/apply/matter.styl"></style>
