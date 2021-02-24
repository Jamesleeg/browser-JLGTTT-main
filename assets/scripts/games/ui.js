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
// let gamesHtml = ''
// // loop through each book from the API
//   games.forEach(game => {
//     // add (concatenate) the book html for each book, to the booksHtml string
//     //
//     // when adding the delete button add a data-id attribute, with the id of the
//     // button we want to delete
//     // add a data-id attribute for our dynamic edit form as well
//     // booksHtml += `
//     //   <h4>Title: ${book.title}</h4>
//     //   <p>Author: ${book.author}</p>
//     //   <p>ID: ${book._id}</p>
//     //   <form class="books-update-dynamic" data-id=${book._id}>
//     //     <input type="text" name="book[title]" placeholder="Book Title Here" required>
//     //     <input type="text" name="book[author]" placeholder="Book Author Here" required>
//     //     <button type="submit">Update Book</button>
//     //   </form>
//     //   <button class='books-destroy-dynamic' data-id=${book._id}>Delete Book</button>
//     //   <br>
//     // `
//   })


module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onIndexSuccess,
  onIndexFailure
}
