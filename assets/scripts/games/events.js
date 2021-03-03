const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
// require to get game object from store
const store = require('./../store')
const logic = require('./logic')

const onNewGame = function () {
  store.cells = ['', '', '', '', '', '', '', '', '']
  store.player = 'X'
  store.gameOver = false
  $('.box').text('')
  $('.game-container').show()

  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}
const onIndexGame = function () {
  event.preventDefault()
  api.getGames()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}
const onBoxClick = function (event) {
  if (store.gameOver) {

    ui.win()
  } else if ($(event.target).text() !== '') {
    ui.onFilled()
  } else {
    $(event.target).text(store.player)

    const index = $(event.target).data('cell-index')
    api.updateGame(store.cells, store.player, false)
      .then(data => {
        $(event.target).text(store.player)
        store.cells[index] = store.player
        // $('#game-message').text('Next  move!')
        logic.checkCells()
        logic.togglePlayer()
    
        // logic.checkBoard()
        //
        ui.updateGameSuccess(data)
      })
      .catch(ui.updateGameFailure)
  }
}
// const win = function () {
//   console.log('win')
//   store.gameOver = true
//   $('.game-container').css('pointer-events', 'none')
//   $('#game-message').text(`${store.player} WINS BOOYAH! `).show()
//
//   setTimeout(function () {
//     $('#game-message').hide()
//   }, 5000)
// }
// const tie = function (msg) {
//   store.gameOver = true
//   $('#game-message').text('Tie Game Folks! New Game to try again').show()
//
//   setTimeout(function () {
//     $('#game-message').hide()
//   }, 5000)
// }
// const gameOver = function () {
//   $('#game-message').text('Game, Set-Match! New Game to try again').show()
//   store.gameOver = true
//   setTimeout(function () {
//     $('#game-message').hide()
//   }, 5000)
// }
// const onNewGameSuccess = function (response) {
//   store.game = response.game
//   console.log('new game started')
//   $('#game-message').text('Player 1, You are up')
//   logic.reset()
//   setTimeout(() => {
//     $('#game-message').text('')
//   }, 5000)
// }

// if ($(event.target).text('')){
//   $(event.target).text('X')
// } else if ($(event.target).text('X')) {
//   $(event.target).text('O')
// }
//
// }
module.exports = {
  onNewGame,
  onIndexGame,
  onBoxClick
  // win,
  // tie
  // gameOver,
  // onNewGameSuccess
}
