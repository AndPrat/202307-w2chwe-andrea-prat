import Cell from "../Cell/Cell.js";
class Grid {
  createGrid(rows, columns) {
    const grid = [];
    for (let row = 0; row < rows; row++) {
      const newRow = [];
      for (let column = 0; column < columns; column++) {
        const cell = new Cell();
        newRow.push(cell);
      }

      grid.push(newRow);
    }

    return grid;
  }
}

export default Grid;
