export function isValidSudoku(board: string[][]): boolean {
  const rows: Array<Set<number>> = []
  const columns: Array<Set<number>> = []
  const boxes: Array<Set<number>> = []

  for (let i = 0; i < 9; i++) {
    rows.push(new Set());
    columns.push(new Set());
    boxes.push(new Set());
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

      rows[i].add(n);
      columns[j].add(n);
      boxes[boxIndex].add(n);
    }
  }

  return true;
};

