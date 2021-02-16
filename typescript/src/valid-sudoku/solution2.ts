export function isValidSudoku(board: string[][]): boolean {
  const rows: Array<Map<number, number>> = []
  const columns: Array<Map<number, number>> = []
  const boxes: Array<Map<number, number>> = []

  for (let i = 0; i < 9; i++) {
    rows.push(new Map());
    columns.push(new Map());
    boxes.push(new Map());
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        continue;
      }

      const n = Number(board[i][j]);
      const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);

      if (rows[i].has(n) || columns[j].has(n) || boxes[boxIndex].has(n)) {
        return false;
      }

      rows[i].set(n, n);
      columns[j].set(n, n);
      boxes[boxIndex].set(n, n);
    }
  }

  return true;
};

