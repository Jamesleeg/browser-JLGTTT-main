'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// Import the book events file. `bookEvents` is the object
// exported by `module.exports`

// use require without a reference to ensure a file is bundled
// require('./example')
// Whatever we put inside this callback function will be run whenever
// the document has finished loading (document.onload)
const authEvents = require('./auth/events')
const gamesEvents = require('./games/events')

$(() => {
$("#sign-up").on('submit', authEvents.onSignUp)
$("#sign-in").on('submit', authEvents.onSignIn)
$("#change-password").on('submit', authEvents.onChangePassword)
$("#sign-out").on('click', authEvents.onSignOut)






$("#new-game").on('click', gamesEvents.onNewGame)
//   ('#sign-up').show()
//   ('#sign-in').show()
// })
})
