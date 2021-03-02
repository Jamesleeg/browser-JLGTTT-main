'use strict'

const store = require('../store')
const ui = require('./ui')

// store.cells = ['', '', '', '', '', '', '', '', '']
// store.player = 'X'
// store.gameOver = false

const togglePlayer = function () {
  if (store.player === 'X') {
    store.player = 'O'
  } else {
    store.player = 'X'
  }
}

const reset = function () {
  store.player = 'X'
  store.cells.fill('')
  store.gameOver = false
  $('.box').text('')
}


const checkCells = function () {
  // const win = (store.cells[0] === store.cells[1] && store.cells[1] === store.cells[2] && store.cells[0] !== '') ||
  //                 (store.cells[3] === store.cells[4] && store.cells[4] === store.cells[5] && store.cells[4] !== '') ||
  //                   (store.cells[6] === store.cells[7] && store.cells[7] === store.cells[8] && store.cells[7] !== '') ||
  //                     // all rows ^
  //                     (store.cells[0] === store.cells[4] && store.cells[4] === store.cells[8] && store.cells[0] !== '') ||
  //                       (store.cells[2] === storee.cells[4] && store.cells[4] === store.cells[6] && store.cells[2] !== '') ||
  //                         // diagonal ^
  //                         (store.cells[0] === store.cells[3] && store.cells[3] === store.cells[6] && store.cells[0] !== '') ||
  //                           (store.cells[1] === store.cells[4] && store.cells[4] === store.cells[7] && store.cells[1] !== '') ||
  //                             (store.cells[2] === store.cells[5] && store.cells[5] === store.cells[8] && store.cells[2] !== '')
  //                             // all columns ^
  if ((store.cells[0] === 'X' && store.cells[1] === 'X' && store.cells[2] === 'X') || (store.cells[0] === 'O' && store.cells[1] === 'O' && store.cells[2] === 'O') ||
    (store.cells[3] === 'X' && store.cells[4] === 'X' && store.cells[5] === 'X') || (store.cells[3] === 'O' && store.cells[4] === 'O' && store.cells[5] === 'O') ||
    (store.cells[6] === 'X' && store.cells[7] === 'X' && store.cells[8] === 'X') || (store.cells[6] === 'O' && store.cells[7] === 'O' && store.cells[8] === 'O') ||
    (store.cells[0] === 'X' && store.cells[3] === 'X' && store.cells[6] === 'X') || (store.cells[0] === 'O' && store.cells[3] === 'O' && store.cells[6] === 'O') ||
    (store.cells[0] === 'X' && store.cells[4] === 'X' && store.cells[8] === 'X') || (store.cells[0] === 'O' && store.cells[4] === 'O' && store.cells[8] === 'O') ||
    (store.cells[1] === 'X' && store.cells[4] === 'X' && store.cells[7] === 'X') || (store.cells[1] === 'O' && store.cells[4] === 'O' && store.cells[7] === 'O') ||
    (store.cells[2] === 'X' && store.cells[5] === 'X' && store.cells[8] === 'X') || (store.cells[2] === 'O' && store.cells[5] === 'O' && store.cells[8] === 'O') ||
  (store.cells[2] === 'X' && store.cells[4] === 'X' && store.cells[6] === 'X') || (store.cells[2] === 'O' && store.cells[4] === 'O' && store.cells[6] === 'O')) {
    console.log('this worked')
      ui.win() }
      else console.log(store.cells[0])


    // const tie = store.cells.every(cell => {
    //   return cell !== ''
    // })
     // else if ()

  // if (win === true) {
  //   ui.win()
  // } else if (tie) {
  //   ui.tie()
  //   }

}

module.exports = {
  togglePlayer,
  checkCells,
  reset
}
