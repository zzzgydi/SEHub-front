import axios from 'axios'

export function apiApplyForm (form, callback) {
  axios.post('/api/apply/' + form.type, form)
    .then(res => {
      console.log(res)
    })
  console.log('api send')
  // console.log(form)
  callback()
}
