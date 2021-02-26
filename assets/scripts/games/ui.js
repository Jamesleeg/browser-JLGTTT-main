const store = require('./../store')

const onNewGameSuccess = function (response) {
  store.game = response.game
  console.log('new game started')
  $('#game-message').text('Player 1, You are up')

    setTimeout(() => {
        $('#game-message').text('')

      }, 5000)
  }
const onNewGameFailure = function ()
 {
   console.error('error')
   $('#error-message').text('Error starting game')
 }

 const updateGameSuccess = function (data) {
   $('.box').show()
   $('#game-message').text('You made your move!')
   $('#game-message').removeClass()
   $('#game-message').addClass('success')
   console.log(' Data is :', data)
 }
 const updateGameFailure = function (error) {
  $('#game-message').text('Error making your move ')
  $('#game-message').removeClass()
  $('#game-message').addClass('failure')
  console.error(error)

}


 const onIndexSuccess = function (responseData) {
   // extract the books from the response's data into a variable
   const games = responseData.games
   // $('#game-message').text(games)
   // log the information we get back from the API so we know how we can
   // interact with it.
   console.log(games)
   let gamesHtml = ''
 // loop over heach book in the books array
 games.forEach(game => {
   // for each book, add the html for that individual book to booksHtml
   // when adding the delte button we add a data-id attribute,the the id
   // of the button we want to delete
  gamesHtml += `
  <p>ID: ${game._id}</p>
     <h4>Created: ${game.createdAt}</h4>
<button class='games-destroy-dynamic' data-id=${game._id}>Delete Game</button>
   `
   // <button  class='books-delete-dynamic' data-id=${book._id}>
   // Delete book
   // </button>
   // <form class='books-update-dynamic' data-id=${book._id}>
   // <input type='text' name='book[title]' placeholder='Enter Title Here' required>
   // <input type='text' name='book[author]' placeholder='Enter Author Here' required>
   // <button>Update Book</button>
   // </form>
 })
 // select the #books-display element and set its html to be all the books
 $('#games-display').html(gamesHtml)
 setTimeout(() => {
     $('#games-display').text('')

   }, 10000)
}

const onIndexFailure = function () {
  console.log('index has failed')
}
const onFilled = function () {
  $('#game-message').text('NO,NO,NO! TRY AGAIN').show()

  setTimeout(function () {
    $('#game-message').hide()
  }, 5000)
}
const gameOver = function () {
  $('#game-message').text('Game, Set-Match! New Game to try again').show()
  setTimeout(function () {
    $('#message').hide()
  }, 5000)
  }

  const win = function () {
    console.log('win')
  store.gameOver = true
$('.game-container').css('pointer-events', 'none')
  $('#game-message').text(`${store.player} BOOYAH! `).show()

  setTimeout(function () {
    $('#game-message').hide()
  }, 5000)
}
const tie = function (msg) {
  store.gameOver = true
  $('#game-message').text(`Tie Game Folks! 'New Game' to try again`).show()

  setTimeout(function () {
    $('#game-message').hide()
  }, 5000)
}


// const onFilled = function () {
//   $('#game-message').text('Spot IS Filled.')
//   setTimeout(() => {
//     $('#game-message').html('')
//   }, 5000)
// }




module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  updateGameSuccess,
  updateGameFailure,
  onIndexSuccess,
  onIndexFailure,
  onFilled,
  gameOver,
  win,
  tie
}
