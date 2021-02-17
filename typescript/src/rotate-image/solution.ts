/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  for (let i = 0; i < Math.floor((matrix.length + 1) / 2); i++) {
    rotateAlongSpecifiedEdge(matrix, i, matrix.length - 1 - i);
  }
};

function rotateAlongSpecifiedEdge(
  matrix: number[][],
  minIndex: number,
  maxIndex: number
): void {
  for (let i = 0; i < maxIndex - minIndex; i++) {
    const tmp = matrix[minIndex][minIndex + i];
    // top edge <- left edge
    matrix[minIndex][minIndex + i] = matrix[maxIndex - i][minIndex];
    // left edge <- bottom edge
    matrix[maxIndex - i][minIndex] = matrix[maxIndex][maxIndex - i];
    // bottom edge <- right edge
    matrix[maxIndex][maxIndex - i] = matrix[minIndex + i][maxIndex];
    // right edge <- top edge
    matrix[minIndex + i][maxIndex] = tmp;
  }
};
