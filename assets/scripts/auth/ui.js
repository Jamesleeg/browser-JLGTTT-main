const store = require('./../store')

const signUpSuccess = function(response) {
  $('#error-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')

}
const signUpFailure = function(response) {
  $('#error-message').text('Sign up failed, try again')
}

const signInSuccess = function(response) {

  store.user = response.user


  $('#error-message').text('Thank you for signing in')
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}
const signInFailure = function(response) {
  $('#error-message').text('Sign in failed, try again')
}
const signOutSuccess = function (response) {
  $('#error-message').text('Signed out successfully')

  $('form').trigger('reset')
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (response) {
  $('#error-message').text('Error on sign out')

  console.log('signOutFailure ran')
}


const changePasswordSuccess = function(response) {

  $('#error-message').text('Password changed')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function(response) {
  $('#error-message').text('Failed to change password')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure
}
