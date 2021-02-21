// require config to set url with the apiUrl
const config = require('../config')
// empty object to store user data
const store = require('./../store')
// start a new game
const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
  // make the api respond  to game

}




module.exports = {
newGame

}
