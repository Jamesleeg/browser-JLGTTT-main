'use strict'

const store = require('../store')
const ui = require('./ui')

store.cells = ['', '', '', '', '', '', '', '', '']
store.player = 'X'
store.gameOver = false

const togglePlayer = function () {
  if (store.player === 'X') {
    store.player = 'O'
  } else {
    store.player = 'X'
  }
}

// const reset = function () {
//   store.player = 'X'
//   store.cells.fill('')
//   store.gameOver = false
//   $('.box').text('')
// }


const checkCells = function () {
  const winner = (store.cells[0] === store.cells[1] && store.cells[1] === store.cells[2] && store.cells[0] !== '') ||
                  (store.cells[3] === store.cells[4] && store.cells[4] === store.cells[5] && store.cells[4] !== '') ||
                    (store.cells[6] === store.cells[7] && store.cells[7] === store.cells[8] && store.cells[7] !== '') ||
                      // all rows ^
                      (store.cells[0] === store.cells[4] && store.cells[4] === store.cells[8] && store.cells[0] !== '') ||
                        (store.cells[2] === storee.cells[4] && store.cells[4] === store.cells[6] && store.cells[2] !== '') ||
                          // diagonal ^
                          (store.cells[0] === store.cells[3] && store.cells[3] === store.cells[6] && store.cells[0] !== '') ||
                            (store.cells[1] === store.cells[4] && store.cells[4] === store.cells[7] && store.cells[1] !== '') ||
                              (store.cells[2] === store.cells[5] && store.cells[5] === store.cells[8] && store.cells[2] !== '')
                              // all columns ^

  const tie = store.cells.every(cell => {
    return cell !== ''
  })

  if (win) {
    ui.win()
  } else if (tie) {
    ui.tie()
  }
}

module.exports = {
  togglePlayer,
  checkCells,
  // reset
}
