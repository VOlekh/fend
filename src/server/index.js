var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
     res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081 in production!')
})

app.get('/test', function (req, res) {
    
  console.log("TEST")
  res.send(mockAPIResponse)
})

app.get('/api', function (req, res) {
    
  console.log("API")
  console.log(req.query)

  const uri =`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${req.query.text}`
  console.log(uri)

  fetch(uri)
  .then(mcloud_res => mcloud_res.json())
  .then(function(mcloud_res_json) {
      res.send(mcloud_res_json)
  })
})