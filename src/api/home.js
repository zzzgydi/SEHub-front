import axios from 'axios'

var homeData = {
  ongoing: [{
    id: '122',
    poster: '',
    title: '这是一个题目旨在什么什么什么什么什么1',
    hostunit: 'XXX部',
    acttime: '2019-3-12',
    actaddr: 'C10',
    actaim: '该活动旨在什么什么什么什么什么什么什什么什么什么什什么什什么什么什么什么什么什什么什么什么什么什么什么什么什么什么什么什么什么是'
  }, {
    id: '123',
    poster: '',
    title: '这是一个题目旨在什么什么什么什么什么1',
    hostunit: 'XXX部',
    acttime: '2019-3-12',
    actaddr: 'C10',
    actaim: '该活动么什么什么什么什么什么是'
  }, {
    id: '142',
    poster: '',
    title: '这是一个题目旨在什么什么什么什么什么1',
    hostunit: 'XXX部',
    acttime: '2019-3-12',
    actaddr: 'C10',
    actaim: '该活动旨么什么是'
  }, {
    id: '125',
    poster: '',
    title: '这是一个题目旨在什么什么什么什么什么1',
    hostunit: 'XXX部',
    acttime: '2019-3-12',
    actaddr: 'C10',
    actaim: '该活动旨在什么什么什么什么什么什么什什么什么什么什什么什什么什么什么什么什么什什么什么什么什么什么什么什么什么什么什么什么什么是'
  }],
  preparing: [{
    id: '126',
    poster: '',
    title: '这是一个题目旨在什么什么什么什么什么1',
    hostunit: 'XXX部',
    acttime: '2019-3-12',
    actaddr: 'C10',
    actaim: '该活动旨在什么什么什么什么什么什么什什么什么什么什什么什什么什么什么什么什么什什么什么什么什么什么什么什么什么什么什么什么什么是'
  }, {
    id: '127',
    poster: '',
    title: '这是一个题目旨在什么什么什么什么什么1',
    hostunit: 'XXX部',
    acttime: '2019-3-12',
    actaddr: 'C10',
    actaim: '该活动旨在什么什么什么什么什么什么什什么什么什么什什么什什么什么什么什么什么什什么什么什么什么什么什么什么什么什么什么什么什么是'
  }, {
    id: '128',
    poster: '',
    title: '这是一个题目旨在什么什么什么什么什么1',
    hostunit: 'XXX部',
    acttime: '2019-3-12',
    actaddr: 'C10',
    actaim: '该活动旨在什么什么什么什么什么什么什什么什么什么什什么什什么什么什么什么什么什什么什么什么什么什么什么什么什么什么什么什么什么是'
  }],
  timelines: [{
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

// 登录
export function apiLogin (callback) {
  let username = '201630666387'
  let password = '123456'
  let q = 'username=' + username + '&password=' + password
  // let yes = 'yes'
  axios.post('/api/login', q).then(res => callback(res.data))
    .catch(error => {
      console.log(error)
    })
  // callback(yes)
}

// 首页获取所有活动
export function apiGetActivities (callback) {
  callback(homeData)
  // axios.get('http://127.0.0.1:8080')
  //   .then(res => {
  //     callback(res)
  //   }).catch(err => {
  //     console.log('Api Error:', err)
  //   })
}
