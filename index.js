var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.status(200).send('Hi I am a chatbot - slack')
})

app.post('/user', function(req, res, next) {
  var userName = req.body.user_name
  var botPayLoad = {
    text: 'Hello, ' + userName
  }
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayLoad)
  } else {
    return res.status(200).end()
  }
})

app.listen(port, function() {
  console.log('running: ' + port)
})
