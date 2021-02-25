const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
// require to get game object from store
const store = require('./../store')
const onNewGame = function () {
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
  if ($(event.target).text('')){
    $(event.target).text('X')
  } else if ($(event.target).text('X')) {
    $(event.target).text('O')
  }

}

module.exports = {
  onNewGame,
  onIndexGame,
  onIndexGame,
  onBoxClick
}
