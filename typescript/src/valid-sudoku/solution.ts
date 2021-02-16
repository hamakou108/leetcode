import { isValidSudoku as isValidSudoku1 } from './solution1';
import { isValidSudoku as isValidSudoku2 } from './solution2';
import { isValidSudoku as isValidSudoku3 } from './solution3';

export function isValidSudoku(board: string[][]): boolean {
  return isValidSudoku3(board);
};

