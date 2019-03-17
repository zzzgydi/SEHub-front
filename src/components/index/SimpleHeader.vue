<template>
  <div class="apy-header">{{title}}</div>
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
// .apy-header {
// width: 300px;
// margin: 20px auto;
// padding-bottom: 10px;
// border-bottom: solid 1px red;
// font-size: 24px;
// text-align: center;
// }
.apy-header {
  padding: 15px;
  background-color: #409EFF;
  margin-bottom: 20px;
  color: #fff;
  font-size: 24px;
  text-align: center;
}
</style>
