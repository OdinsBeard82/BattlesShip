document.addEventListener('DOMContentLoaded', function () {
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            // creates a new HTML div element that will represent a single chess square on the grid.
            const chessSquare = document.createElement('div');
            // This assigns the CSS class name "chess-square" to the created div element.
            chessSquare.className = 'chess-square';
            //even number equals coloured chess-square
            if ((x + y) % 2 === 0) {
                chessSquare.style.backgroundColor = '#855E42';
            }
            //  this line appends the newly created chess square div element to the chessboard element.
            chessboard.appendChild(chessSquare);
        }

    }

    const chessboard = document.getElementById('chessboard');