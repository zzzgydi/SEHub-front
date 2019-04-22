import axios from 'axios'

export function apiApplyForm (form, callback) {
  axios.post('/api/apply/submit', form)
    .then(res => {
      console.log(res.data.code)
    })
  console.log('api send')
  // console.log(form)
  callback()
}
