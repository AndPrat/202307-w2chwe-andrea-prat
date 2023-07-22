import createBoard from "./board";

describe("Given a createBoard function", () => {
  describe("When it recives the value 3 for numberRows and numberColums ", () => {
    test("Then it should return a grid of the 3 rows and 3 columns with a length of 3", () => {
      const numberRows = 3;
      const numberColums = 3;
      const expectedValuesLength = [[{}], [{}], [{}]];

      const grid = createBoard(numberRows, numberColums);

      expect(grid[0].length).toBe(expectedValuesLength);
      expect(grid[1].length).toBe(expectedValuesLength);
      expect(grid[2].length).toBe(expectedValuesLength);
    });
  });
});
