import Grid from "./Grid.js";

describe("Given a Grid class", () => {
  describe("When it recives the value 3 for rows and colums ", () => {
    test("Then it should return a grid of the 3 rows and 3 columns with a length of 3", () => {
      const grid = new Grid();
      const rows = 3;
      const columns = 3;

      const newGrid = grid.createGrid(rows, columns);

      expect(newGrid).toHaveLength(3);
    });
  });
});
