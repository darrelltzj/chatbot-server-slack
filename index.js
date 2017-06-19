var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.status(200).send('Hi, I am a chatbot for slack')
})

app.post('/user', function(req, res, next) {
  var token = req.body.token
  var teamId = req.body.team_id
  var teamDomain = req.body.team_domain
  var channelId = req.body.channel_id
  var channelName = req.body.channel_name
  var timestamp = req.body.timestamp
  var userId = req.body.user_id
  var userName = req.body.user_name
  var text = req.body.text.slice(6)
  var triggerWord = req.body.trigger_word
  var botPayLoad = {
    text: userName + ': ' + text
  }

  if (token === 'WOh9J3NglTbLxPveP9aTc6VK' &&
    // token === process.env.token &&
  // teamId === process.env.teamId &&
  // channelId === process.env.channelId &&
  userName !== 'slackbot') {
    return res.status(200).json(botPayLoad)
  } else {
    return res.status(200).end()
  }
})

app.listen(port, function() {
  console.log('running: ' + port)
})
