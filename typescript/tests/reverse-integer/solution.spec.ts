import { reverse } from '~/reverse-integer/solution';

test('example 1', () => {
  const x = 123;
  expect(reverse(x)).toBe(321);
});

test('example 2', () => {
  const x = -123;
  expect(reverse(x)).toBe(-321);
});

test('example 3', () => {
  const x = 120;
  expect(reverse(x)).toBe(21);
});

test('example 4', () => {
  const x = 0;
  expect(reverse(x)).toBe(0);
});

test('example 5 (reversed number is larger than 2 ^ 31 - 1)', () => {
  const x = 1563847412; // reversed number is 2147483651 (= 2 ^ 31 + 3)
  expect(reverse(x)).toBe(0);
});

test('example 6 (reversed number is smaller than -2 ^ 31)', () => {
  const x = -1563847412; // reversed number is -2147483651 (= -2 ^ 31 + 3)
  expect(reverse(x)).toBe(0);
});

