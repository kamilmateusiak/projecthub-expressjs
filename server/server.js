/**
 * Created by vagabondi on 03.04.17.
 */
const express = require('express'),
      bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json());

app.get('/data', function (req, res) {
  res.send('Hello from server!')
})

app.listen(3030, function () {
  console.log('Example app listening on port 3030!')
})