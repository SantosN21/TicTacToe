const Gameboard = {
    gameboard: [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ], 
    displayBoard: function() {
        console.log(` ${this.gameboard[0][0]} | ${this.gameboard[0][1]} | ${this.gameboard[0][2]} `);
        console.log("---|---|---");
        console.log(` ${this.gameboard[1][0]} | ${this.gameboard[1][1]} | ${this.gameboard[1][2]} `);
        console.log("---|---|---");
        console.log(` ${this.gameboard[2][0]} | ${this.gameboard[2][1]} | ${this.gameboard[2][2]} `);
    },
    placeMarker: function(row, col, marker) {
        if (this.gameboard[row][col] === "-") {
            this.gameboard[row][col] = marker;
            return true;
        }
        return false;
    }
};

Gameboard.displayBoard();

Gameboard.placeMarker(0, 0, "X");
Gameboard.displayBoard();

Gameboard.placeMarker(1, 1, "O");
Gameboard.displayBoard();

let success = Gameboard.placeMarker(0, 0, "X");
console.log(`Placement successful: ${success}`);

Gameboard.displayBoard();