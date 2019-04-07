<!-- 上传附件控件 -->
<template>
  <div>
    <el-upload action>
      <div class="apy-upload-box">
        <i class="el-icon-circle-plus-outline"></i>
      </div>
    </el-upload>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
// @import '../../../assets/css/default';
.apy-upload-box {
  width: 180px;
  border: 1px dashed #ccc;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  color: #ccc;

  &:hover {
    // color: $color_theme;
    color: #909399;
    border-color: #909399;
  }
}
</style>
