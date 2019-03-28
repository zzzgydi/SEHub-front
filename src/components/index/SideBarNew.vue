<template>
  <div class="side-bar">
    <div class="head-box">
      <div class="head-img-box">
        <img src="../../../public/scutse.png" alt width="30px">
      </div>
      <div class="head-title-box">SEHub</div>
    </div>
    <div class="side-box">
      <div v-for="item in paths" :key="item.path" @click="handleClick(item)">
        <div :class="optionClass(item)">
          <div class="img-box">
            <i :class="item.iclass"></i>
          </div>
          <div class="title-box">{{item.name}}</div>
        </div>
      </div>
      <div class="line"></div>
      <div :class="optionClass({path:'/person'})" @click="handleClick({path:'/person'})">
        <div class="img-box-person">张</div>
        <div class="title-box">个人信息</div>
      </div>
      <div :class="optionClass({path:'/depart'})" @click="handleClick({path:'/depart'})">
        <div class="img-box-person">文</div>
        <div class="title-box">部门信息</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: '/home/u',
      paths: [{
        name: '首页',
        path: '/home',
        iclass: 'el-icon-date'
      }, {
        name: '部门安排',
        path: '/work',
        iclass: 'el-icon-star-off'
      }, {
        name: '工作申请',
        path: '/apply',
        iclass: 'el-icon-document'
      }, {
        name: '其他',
        path: '/others',
        iclass: 'el-icon-news'
      } ]
    }
  },
  computed: {

  },
  methods: {
    optionClass (item) {
      if (item.path === this.active) {
        return 'option-box option-active'
      } else if (this.active.length > item.path.length) {
        var substr = this.active.substring(0, item.path.length)
        if (item.path === substr) {
          return 'option-box option-active'
        }
      }
      return 'option-box option-normal'
    },
    handleClick (item) {
      this.active = item.path
      this.$router.push(item.path)
    }
  },
  beforeMount () {
    this.active = this.$route.path
    console.log('Mount了', this.$route.path)
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/default';

$bar_width = 280px;

.side-bar {
  not-select();
  width: $bar_width;

  .head-box {
    height: 30px;
    padding: 20px;

    // background: red;
    .head-img-box {
      width: 40px;
      height: 30px;
      float: left;
      // margin-left: 15px;
    }

    .head-title-box {
      float: left;
      font-size: 1.4em;
      line-height: 30px;
      margin-left: 8px;
      color: #606266;
    }
  }
}

.side-box {
  padding-top: 20px;

  // border-box();
  .line {
    width: 100%;
    height: 11px;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
  }
}

.option-box {
  height: 48px;
  padding-left: 24px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  color: #303133;

  .img-box {
    float: left;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 1.5em;
    margin-top: 12px;
    margin-right: 16px;
    // background: green;
  }

  .title-box {
    float: left;
    width: 200px;
    height: 20px;
    line-height: 20px;
    margin-top: 14px;
    // background: red;
  }

  .img-box-person {
    $width = 26px;
    float: left;
    width: $width;
    height: $width;
    margin-top: 11px;
    margin-right: 14px;
    border-radius(50%);
    background: #909399;
    line-height: $width;
    text-align: center;
    color: #fff;
    font-size: 1em;
    overflow: hidden;
  }
}

.option-normal {
  // test();
  &:hover {
    background-color: rgba(0, 0, 0, 0.039);
    -webkit-transition: background 15ms;
    transition: background 15ms;
  }
}

.option-active {
  color: #1967d2;
  background: #e8f0fe;

  .img-box-person {
    background: #409EFF;
  }
}
</style>
