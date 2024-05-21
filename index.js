// game

const gameControl = function() {

  gameBoard = [[3, 3, 4], [3, 4, 4], [4, 5, 5]]

  let value1;
  let value2;
  let value3;

  function checkForWin() {

    //check for diagonal
    value1 = gameBoard[0][2]
    value2 = gameBoard[1][1]
    value3 = gameBoard[2][0]

    if ((value1 === value2) && (value2 === value3)) {
      return true
    }

    //check for diagonal
    value1 = gameBoard[0][0]
    value2 = gameBoard[1][1]
    value3 = gameBoard[2][2]

    if ((value1 === value2) && (value2 === value3)) {
      return true
    }
    if (checkInDirection("side", 0, 0, value1) || checkInDirection("vertical", 0, 0, value1) || checkInDirection("side", 1, 1, value2) || checkInDirection("vertical", 1, 1, value2) || checkInDirection("side", 2, 2, value3) || checkInDirection("vertical", 2, 2, value3)) {

      return true

    }
    return false

  }
  function checkInDirection(motion, i, j, value) {

    coordinates = [0, 1, 2]
    if (motion == "side") {
      temp = coordinates;
      temp.slice(i, 1);

      if ((value == gameBoard[i][temp[0]]) && (value == gameBoard[i][temp[1]])) {
        return true;
      }
      return false

    }

    if (motion == "vertical") {
      temp = coordinates;
      temp.slice(i, 1);

      if ((value === gameBoard[temp[0]][j]) && (value === gameBoard[temp[1]][j])) {
        return true;
      }
      return false
    }

  }

  return { gameBoard, checkForWin }

}



let players = {}




game1 = gameControl()

console.log(game1)

console.log(game1.checkForWin())
