<template>
  <div class="header-box">
    <span id="main-text">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/default';

$widow_width = 900px;

.header-box {
  not-select();
  width: $widow_width;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 1.75rem;
  color: #202124;
  margin-top: 24px;
  // margin-left: 60px;
  margin-bottom: 30px;
  // border-box();
}
</style>
