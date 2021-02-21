const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs')
const api_endpoint = process.env.API_ENDPOINT || "http://localhost:8081/application-orchestration/v1"

fs.writeFileSync(
  __dirname + '/application-web/config/env.js',
  'var api_endpoint = "' + api_endpoint + '";'
);

app.use(express.static('./'))

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})