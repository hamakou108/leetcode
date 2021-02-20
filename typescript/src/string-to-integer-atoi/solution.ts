export function myAtoi(s: string): number {
  const numberPartOfS = s.match(/^\s*[\+\-]?\d+/);
  if (numberPartOfS === null) {
    return 0;
  }

  const n = Number(numberPartOfS);

  if (n < -1 * 2 ** 31) {
    return -1 * 2 ** 31;
  } else if (n > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else {
    return n;
  }
};

