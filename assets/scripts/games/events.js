const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')
// require to get game object from store
const store = require('./../store')


const onNewGame = function () {
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
    $(event.target).text('x')
  }

}

module.exports = {
  onNewGame,
  onIndexGame,
  onBoxClick
}
