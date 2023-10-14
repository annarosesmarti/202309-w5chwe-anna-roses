import World from "./World";

describe("Given the method initBoard in the class World", () => {
  describe("When its called with 1 and false", () => {
    test("Then it should return an array with 1 array within and 1 object inside containing a new Cell class with the isAlive parameter false", () => {
      const isAlive = false;
      const length = 1;

      const board = new World();
      const testBoard = board.initBoard(length, isAlive);

      expect(testBoard.length).toBe(length);
      expect(testBoard[0][0].isAlive).toBe(isAlive);
    });
  });
});
