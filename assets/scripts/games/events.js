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
  $('.game-container').show()
  logic.reset()
  console.log('newGame')
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
    ui.gameOver()
  } else if ($(event.target).text() !== '') {
    ui.onFilled()
  } else {
    $(event.target).text(store.player)
    console.log(event)
    const index = $(event.target).data('data-cell-index')
      logic.togglePlayer()
      logic.checkCells()
    console.log('winner')
    console.log(store.cells, store.player)
    api.updateGame(store.cells, store.player, false)
      .then(data => {
        $(event.target).text(store.player)
        store.cells[index] = store.player
        // logic.checkBoard()
        //
        ui.updateGameSuccess(data)
      })
      .catch(ui.updateGameFailure)
  }
}

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
}
