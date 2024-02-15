// game

let gameControl = function() {

  // gameBoard = [[2, 3, 3], [3, 4, 4], [4, 5, 5]]
  gameBoard = [[2, 1, 2], [2, 9, 5], [2, 5, 2]]

  let value1;
  let value2;
  let value3;

  function checkForWin() {

    value1 = gameBoard[0][2]
    value2 = gameBoard[1][1]
    value3 = gameBoard[2][0]

    if ((value1 === value2) && (value2 === value3)) {
      return true
    }

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
      temp = coordinates.slice(); // Make a copy of coordinates array
      index = temp.indexOf(j);
      temp.splice(index, 1);

      if ((value === gameBoard[i][temp[0]]) && (value === gameBoard[i][temp[1]])) {
        console.log(i + "side");
        return true;
      }
      console.log(i + "side");
      console.log(2);
      return false;
    }

    if (motion == "vertical") {
      temp = coordinates
      index = temp.indexOf(j);
      temp.splice(index, 1)

      console.log(gameBoard[j][temp[0]])
      console.log(value === gameBoard[j][temp[0]])
      console.log(gameBoard[j][temp[1]])
      console.log(value === gameBoard[j][temp[1]])
      if ((value === gameBoard[temp[0]][j]) && (value === gameBoard[temp[1]][j])) {
        console.log(j + "vertical");
        return true;
      }
      console.log(j + "vertical")
      console.log(4)
      return false
    }

  }

  return { gameBoard, checkForWin }

}



game1 = gameControl()

console.log(game1)

console.log(game1.checkForWin())
