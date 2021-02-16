export function isValidSudoku(board: string[][]): boolean {
  // 1. Each row must contain the digits 1-9 without repetition.
  const rowList = board;
  if (!rowList.every(row => isValidList(row))) {
    return false;
  }

  // 2. Each column must contain the digits 1-9 without repetition.
  const columnList: string[][] = [];
  for (let column = 0; column < 9; column++) {
    columnList.push(board.map(row => row[column]));
  }
  if (!columnList.every(row => isValidList(row))) {
    return false;
  }

  // 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
  const boxList: string[][] = [];
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxColumn = 0; boxColumn < 3; boxColumn++) {
      const elementList: string[] = [];
      for (let row = 3 * boxRow; row < 3 * boxRow + 3; row++) {
        for (let column = 3 * boxColumn; column < 3 * boxColumn + 3; column++) {
          elementList.push(board[row][column]);
        }
      }
      boxList.push(elementList);
    }
  }
  if (!boxList.every(row => isValidList(row))) {
    return false;
  }

  return true;
};

function isValidList(list: string[]): boolean {
  const numberMap = new Map([
    ['1', '1'],
    ['2', '2'],
    ['3', '3'],
    ['4', '4'],
    ['5', '5'],
    ['6', '6'],
    ['7', '7'],
    ['8', '8'],
    ['9', '9']
  ]);

  return list.every(e => {
    if (e === '.') {
      return true;
    }

    if (numberMap.has(e)) {
      return numberMap.delete(e);
    }

    return false;
  });
};


