<template>
  <div>
    <simple-header title="学院活动"></simple-header>
    <el-container>
      <div class="act-container">
        <el-row>
          <el-col :span="8" v-for="(eachAct,index) in publicActList" :key="index">
            <act-post :activity="eachAct"></act-post>
          </el-col>
        </el-row>
      </div>
      <el-container class="act-timeline">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities2"
            :key="index"
            :timestamp="activity.timestamp"
          >{{activity.content}}</el-timeline-item>
        </el-timeline>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import SimpleHeader from '../components/SimpleHeader.vue'
import ActPost from '../components/home/ActPost.vue'
export default {
  components: {
    'act-post': ActPost,
    'simple-header': SimpleHeader
  },
  data () {
    return {
      publicActList: [{
        poster: '',
        title: '这是一个题目旨在什么什么什么什么什么1',
        hostunit: 'XXX部',
        acttime: '2019-3-12',
        actaddr: 'C10',
        actaim: '该活动旨在什么什么什么什么什么什么什什么什么什么什什么什什么什么什么什么什么什什么什么什么什么什么什么什么什么什么什么什么什么是'
      }, {
        title: '这是一个题目2',
        hostunit: 'XXX部',
        acttime: '2019-3-12',
        actaddr: 'C10',
        actaim: '该活动旨在什么什么什么什么什么什么什什么什么什么什什么什什么什么什么什么什么什什么什么什么什么什么什么什么什么什么什么什么什么是'
      }, {
        title: '这是一个题目3',
        hostunit: 'XXX部',
        acttime: '2019-3-12',
        actaddr: 'C10',
        actaim: '该活动旨在什么什么什么什么什么什么什什么什么什么什什么什什么什么什么什么什么什什么什么什么什么什么什么什么什么什么什么什么什么是'
      }, {
        title: '这是一个题目4',
        hostunit: 'XXX部',
        acttime: '2019-3-12',
        actaddr: 'C10',
        actaim: '该活动旨在什么什么什么什么什么什么什什么什么什么什什么什什么什么什么什么什么什什么什么什么什么什么什么什么什么什么什么什么什么是'
      }, {
        title: '这是一个题目5',
        hostunit: 'XXX部',
        acttime: '2019-3-12',
        actaddr: 'C10',
        actaim: '该活动旨在什么什么什么什么什么什么什什么什么什么什什么什什么什么什么什么什么什什么什么什么什么什么什么什么什么什么什么什么什么是'
      }
      ],
      activities2: [{
        content: 'XXX活动',
        timestamp: '2018-04-12'
      }, {
        content: 'XXX讲座',
        timestamp: '2018-04-03'
      }, {
        content: 'XXX宣讲会',
        timestamp: '2018-04-03'
      }, {
        content: 'XXX活动',
        timestamp: '2018-04-03'
      }]
    }
  }

}
</script>
<style lang="stylus" scoped src="../assets/css/Home.styl"></style>
