// require the api file so we can make HTTP requests
const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()

  // get data from html form
  const form = event.target
  const data = getFormFields(form)

  // send data to api for sign up
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
      console.log('hello we did it')

}
const onSignIn = function (event) {
  event.preventDefault()
  console.log('yeahboy')
  // get data from html form
  const form = event.target
  const data = getFormFields(form)
  // send data to api for sign up
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // get data from html form
  const form = event.target
  const data = getFormFields(form)
console.log(data)
  // send data to api for sign up
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}



//
// const api = require('./api')
// // require the ui file, so we can update the dom after an API request
// const ui = require('./ui')
//
// const getFormFields = require('../../../lib/get-form-fields')
//
// const onSignUp  = function (event) {
//   event.preventDefault()
//
//   // get data from html form
//   const form = event.target
//   const data = getFormFields(form)
//
//   // send data to api for sign up
//   api.signUp(data)
//   .then(ui.signUpSuccess)
//   .catch(ui.signUpFailure)
//   // handle successful sign up
//   // handle failed sign up
// }
//
//
//
//
//
// module.exports = {
//   onSignUp
// }
