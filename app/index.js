import World from "./World/World.js";

const board = new World();

board.initBoard(3, false);

board.cell[1][1].live();
board.cell[2][0].live();
board.cell[2][1].live();

board.countNeighbours(0, 2);

console.log(board.cell[0][2].neighbours);
