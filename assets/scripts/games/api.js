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




const updateGame = function (data)  {
  return $.ajax({
    url: `${config.apiUrl}/games/${store.game._id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}

const getGames = function ()  {
  console.log('games')
  return $.ajax({
    url: `${config.apiUrl}/games/`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const getGame = function (id) {
  return $.ajax({
    url: `${config.apiUrl}/games/${id}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  newGame,
  updateGame,
  getGames,
  getGame
}
