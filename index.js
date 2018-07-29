const axios = require('axios')
const queryString = require('querystring')
axios.defaults.headers.common['Authorization'] = 'Bearer YYdPvjTAIhyWn2DriITFURob9W8cjaujZdZChWIll4P'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

function noti(msg){
   return  axios.post('https://notify-api.line.me/api/notify',queryString.stringify({message:msg})).then(console.log).catch(console.log)
}

// make it schedule