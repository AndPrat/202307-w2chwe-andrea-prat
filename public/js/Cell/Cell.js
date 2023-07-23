class Cell {
  isAlive;

  constructor() {
    this.isAlive = Math.random() < 0.25;
  }

  toLive() {
    this.isAlive = true;
  }

  toDie() {
    this.isAlive = false;
  }
}

export default Cell;
