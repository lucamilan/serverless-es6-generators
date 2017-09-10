'use strict'

const co = require('co')
const rp = require('request-promise')

let getWebPage = co.wrap(function* (url) {
  try {
    return yield rp({
      uri: url,
      method: 'GET'
    })
  } catch (error) {
    // console.error(error)
    return 'something went wrong!'
  }
})

module.exports.fetcher = co.wrap(function* (event, context, callback) {
  const url = event.url
  let content = yield getWebPage(url)
  callback(null, content)
})