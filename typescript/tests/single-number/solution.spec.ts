import { singleNumber } from '~/single-number/solution'

test('example 1', () => {
  const nums = [2, 2, 1];
  expect(singleNumber(nums)).toBe(1);
});

test('example 2', () => {
  const nums = [4, 1, 2, 1, 2];
  expect(singleNumber(nums)).toBe(4);
});

test('example 3', () => {
  const nums = [1];
  expect(singleNumber(nums)).toBe(1);
});

