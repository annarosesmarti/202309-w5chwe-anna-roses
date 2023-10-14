import World from "./World/World.js";
import Cell from "./Cell/Cell.js";

const cell = new Cell(true);

const board = new World(cell);

board.initBoard(3, false);

console.log(board);
console.log(cell);
