const store = require('./../store')

const onNewGameSuccess = function (response) {
  store.game = response.game
$('game-message').text('Player 1, You are up')



}
const onNewGameError = function ()
 {
   $('game-message').text('Error starting game')
 }

module.exports ={
  onNewGameSuccess,
  onNewGameError
}
