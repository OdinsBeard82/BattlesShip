import gameBoard from '../test/shipLocation.test';

generateRandomLocation (board, max, ship) {
    let didPlace = false;
    let directionString;
    let valid;

    while (!didPlace) {
        let x = this.generateRandomInt(max);
        let y = this.generateRandomInt(max);

        [valid, directionString] = this.generateRandomDirection(x, y, ship);

        if (valid) {
            this.placeShip(x, y, "S", board, directionString, ship);
            didPlace = true;
        }
    }
}

generateRandomDirection(column, row, ship) {
    let valid = false;
    let direction = Math.floor(Math.random() * 4) +1;
    let directionString = "";

    if (direction === 1) {
        for (let index = 0; index < ship.size; index++) {
            if(
                column + index >= this.gameBoard.length ||
                this.gameBoard[row][column + index] === "S" ||
                this.gameBoard[row][column + index] === undefined
        ) {
            return [valid, directionString];
        }
    }
    valid = true;
    directionString = "right";
    return [valid, directionString];
} else if (direction === 2) {
    for (let index = 0; index < ship.size; index++) {
        if (
            column - index < 0 ||
            this.gameBoard[row][column - index] === "S"||
            this.gameBoard[row][column - index] === undefined
        ) {
            return [valid, directionString];
        }
    }
}}

placeShip(x, y, c, board, direction, ship) {
    if (direction === "right") {
        for (let i = 0; i < ship.size; i++) {
            board[y][x + i] = c;

            ship.coordinates.push(`${x + i}-${y}`);
        }
    } else if (direction === "left") {
        for (let i = 0; i < ship.size; i++) {

            ship.coordinates.push(`${x - i}-${y}`);
        }
    }
}



    export default gameBoard;