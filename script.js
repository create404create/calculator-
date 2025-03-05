const chessboard = document.getElementById('chessboard');

const pieces = [
    '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
    '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
    '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'
];

function createChessboard() {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add((i + Math.floor(i / 8)) % 2 === 0 ? 'light' : 'dark');
        square.textContent = pieces[i];
        chessboard.appendChild(square);
    }
}

createChessboard();
