import Cell from "./Cell.js";

describe("Given a Cell class", () => {
  describe("When it recives a boolean value", () => {
    test("Then it should return isAlive true", () => {
      const cell = new Cell();
      const isAlive = cell.toLive();

      expect(isAlive).toEqual(true);
    });
  });
});

describe("Given a Cell class", () => {
  describe("When it recives a boolean value", () => {
    test("Then it should return isAlive false", () => {
      const cell = new Cell();
      const isAlive = cell.toDie();

      expect(isAlive).toEqual(false);
    });
  });
});
