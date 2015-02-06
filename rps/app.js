var express = require('express')
var app = express()

var weapons = ['rock', 'paper', 'scissor']

app.get('/weapons/:playerWeapon', function (req, res) {
  var playerWeapon = req.param('playerWeapon')
  res.send(play(playerWeapon))
})

var play = function(playerWeapon) {
  var message, compWeapon = getRandomWeapon()
  switch (playerWeapon) {
    case 'rock':
      message = rock(compWeapon)
    break
    case 'paper':
      message = paper(compWeapon)
    break
    case 'scissor':
      message = scissor(compWeapon)
    break
    default:
      return "sorry that is not part of rock, paper, scissors ASSHOLE"
    break
  }
  return message + " you played " + playerWeapon + " computer played " + compWeapon
}

var getRandomWeapon = function() {
  return weapons[Math.floor(Math.random()*3)]
}

var rock = function(compWeapon) {
  switch (compWeapon) {
    case 'rock':
      return 'Draw'
    break
    case 'paper':
      return 'You Lose :('
    break
    case 'scissor':
      return 'You win :)'
    break
  }
}

var paper = function(compWeapon) {
  switch (compWeapon) {
    case 'rock':
      return 'You win :)'
    break
    case 'paper':
      return 'Draw'
    break
    case 'scissor':
      return 'You lose :('
    break
  }
}

var scissor = function(compWeapon) {
  switch (compWeapon) {
    case 'rock':
      return 'You lose :('
    break
    case 'paper':
      return 'You win :)'
    break
    case 'scissor':
      return 'Draw'
    break
  }
}

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
