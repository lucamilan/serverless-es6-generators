# serverless-es6-generators

## Code

```javascript
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
```

## How to test

git clone https://github.com/lucamilan/serverless-es6-generators

npm install

### Happy path

sls invoke local -f getPage --data '{"url":"https://google.com"}'

### Worst case

sls invoke local -f getPage --data '{"url":"https://junk-google.com"}'


