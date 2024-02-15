// game

let gameControl = function() {

  // gameBoard = [[2, 3, 3], [3, 4, 4], [4, 5, 5]]
  gameBoard = [[1, 1, 1], [2, 3, 4], [3, 5, 6]]

  let value1;
  let value2;
  let value3;

  function checkForWin() {

    value1 = gameBoard[0][0]
    value2 = gameBoard[1][1]
    value3 = gameBoard[2][2]

    if ((value1 === value2) && (value2 === value3)) {
      return true
    }

    if (checkInDirection("side", 0, 0) || checkInDirection("vertical", 0, 0) || checkInDirection("side", 1, 1) || checkInDirection("vertical", 1, 1) || checkInDirection("side", 2, 2) || checkInDirection("vertical", 2, 2)) {

      return true

    }
    return false

  }
  function checkInDirection(motion, i,j ) {

    coordinates = [0, 1, 2]
    if (motion == "side") {

      temp = coordinates
      index = temp.indexOf(j);
      temp.splice(index, 1);

      if ((value1 === gameBoard[i][temp[0]]) && (value1 === gameBoard[i][1])) {
        return true
      }
      return false

    }

    if (motion == "vertical") {
      temp = coordinates
      index = temp.indexOf(i);
      temp.splice(index, 1)

      if ((value1 === gameBoard[temp[0]][j]) && (value1 === gameBoard[temp[1]][j])) {
        return true
      }
      return false
    }

  }

  return { gameBoard, checkForWin  }

}



game1 = gameControl()

console.log(game1)

console.log(game1.checkForWin())
