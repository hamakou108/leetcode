export function reverse(x: number): number {
  let xArray;
  let result;

  if (x === 0) {
    return x;
  } else if (x > 0) {
    xArray = Array.from(x.toString())
    result = Number(xArray.reverse().join(''));
  } else {
    xArray = Array.from((-1 * x).toString())
    result = -1 * Number(xArray.reverse().join(''));
  }

  if (result < -1 * 2 ** 31 || 2 ** 31 - 1 < result) {
    return 0;
  }

  return result;
};
