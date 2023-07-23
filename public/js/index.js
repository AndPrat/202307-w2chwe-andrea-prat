import Grid from "./Grid/Grid.js";

const rows = 3;
const columns = 3;
const grid = new Grid().createGrid(rows, columns);
console.table(grid);
