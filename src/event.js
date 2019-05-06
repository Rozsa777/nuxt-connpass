const axios = require('axios')

exports.api = () => {
  const url = 'https://connpass.com/api/v1/event/'
  const params = {
    series_id: process.env.CONNPASS_SERIES_ID
  }
  return axios.get(url, {params}).then((result) => {
    return result.data.events
  })
}

exports.handler = (event, context, callback) => {
  exports.api().then((result) => {
    console.log(result)
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(result)
    })
  })
}
