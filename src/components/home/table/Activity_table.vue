<template>
  <div>
    <table border="0" cellspacing="0" cellpadding="0">
      <tr align="center">
        <td colspan="2">
          <div class="t-title">活动申请</div>
        </td>
      </tr>
      <tr v-for="(item, idx) in values" :key="idx">
        <td align="center">
          <div class="t-label">{{item.key}}</div>
        </td>
        <td>
          <div class="t-value">{{item.value}}</div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      values: [ {
        key: '申请人',
        value: 'XXX'
      }, {
        key: '申请部门',
        value: 'XXX'
      }, {
        key: '活动背景',
        value: '南校区有很大一部分的学生是大一新生，对各类新鲜的大学校园活动具有浓厚的兴趣，而烹饪比赛这一种时尚且简单的活动形式可以激发学生们的热情，能够吸引很多学生参加。'
      }, {
        key: '活动目的',
        value: '宿舍是我们的另一个家，宿舍生活是校园生活重要的组成部分。活动以宿舍为单位，通过舍友间的协力合作，把宿舍打造成整洁卫生、美观温馨的另一个“家”，从而促进舍友间的感情，加强同学间的交流，有利于同学们养成爱卫生、勤动手的好习惯，对宿舍的装扮更能激发同学们的创造力和想象力，有利于形成良好的宿舍文化氛围。'
      }, {
        key: '主办单位',
        value: '华南理工大学软件学院'
      }, {
        key: '承办单位',
        value: 'CCCC'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped src="./setable.styl">
</style>
