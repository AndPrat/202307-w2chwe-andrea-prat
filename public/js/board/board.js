const board = [];
const numberRows = 3;
const numberColums = 3;

const createBoard = () => {
  for (let row = 0; row < numberRows; row++) {
    const newRow = [];
    for (let colum = 0; colum < numberColums; colum++) {
      newRow.push({});
    }

    board.push(newRow);
  }

  return board;
};

createBoard();

export default createBoard;
