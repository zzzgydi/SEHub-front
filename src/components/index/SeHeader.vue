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
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 1.75rem;
  color: #202124;
  margin-top: 30px;
  margin-bottom: 30px;
  // border-box();
}
</style>
