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
  $(".game-container").show()

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
    const index = $(event.target).data('id')
    logic.togglePlayer()
    logic.checkCells()
    api.updateGame(index, store.player, false)
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
  onIndexGame,
  onBoxClick
}
