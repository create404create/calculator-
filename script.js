const boardElement = document.getElementById("chessboard");
const game = new Chess();

const board = Chessboard(boardElement, {
    draggable: true,
    position: "start",
    onDragStart: (source, piece) => {
        if (game.game_over()) return false; // Game over hone par move na ho
        if ((game.turn() === "w" && piece.search(/^b/) !== -1) || 
            (game.turn() === "b" && piece.search(/^w/) !== -1)) {
            return false; // Sirf current player move kar sake
        }
    },
    onDrop: (source, target) => {
        const move = game.move({
            from: source,
            to: target,
            promotion: "q" // Pawn ke promotion ke liye
        });

        if (move === null) return "snapback"; // Agar move invalid ho to wapas le jao

        updateBoard();
    },
    onSnapEnd: () => {
        board.position(game.fen()); // Move hone ke baad board update kare
    }
});

function updateBoard() {
    board.position(game.fen()); // Board ko current position pr update kare
}

updateBoard();
