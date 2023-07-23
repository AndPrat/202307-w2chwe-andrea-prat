import Cell from "../Cell/Cell";
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
  },
  calculateNeighbors(grid, rows, columns) {
    let neighbors = 0;
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
    ];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      const column = columns + dir[i];
      const row = rows + dir[i];

      if (
        column >= 0 &&
        column < this.colums &&
        row >= 0 &&
        row < this.rows &&
        grid[row][column]
      ) {
        neighbors++;
      }
    }

    return neighbors;
  }
}

export default Grid;
