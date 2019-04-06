<template>
  <div class="default-container">
    <simple-header title="部门中心"></simple-header>
    <div>
      <div class="box">
        <div class="each">进行中</div>
        <div class="each">筹备中</div>
        <div class="each">时间线</div>
        <div class="each">历史活动</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      test: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/default';
@import '../../assets/css/iconfont.css';

.box {
  $h = 35px;
  height: $h;
  width: 900px;
  display: flex;
  justify-content: space-between;
  border-box();

  .each {
    height: $h;
    width: (900 / 4)px;
    line-height: $h;
    text-align: center;
    border-right: 1px solid #ccc;
    cursor: pointer;
    not-select();

    &:hover {
      hover-box();
    }

    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &:last-child {
      border-right: none;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
}

span {
  font-size: 2rem;
}
</style>
