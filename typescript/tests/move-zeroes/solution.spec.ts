import { moveZeroes } from '~/move-zeroes/solution';

test('example 1', () => {
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).toEqual([1, 3, 12, 0, 0]);
});

test('example 2', () => {
  const nums = [0, 0, 1];
  moveZeroes(nums);
  expect(nums).toEqual([1, 0, 0]);
});

test('example 3', () => {
  const nums = [0];
  moveZeroes(nums);
  expect(nums).toEqual([0]);
});

test('example 4', () => {
  const nums = [0, 0, 0];
  moveZeroes(nums);
  expect(nums).toEqual([0, 0, 0]);
});

test('example 5', () => {
  const nums = [1, 2, 3];
  moveZeroes(nums);
  expect(nums).toEqual([1, 2, 3]);
});

test('example 6', () => {
  const nums = [1, 0];
  moveZeroes(nums);
  expect(nums).toEqual([1, 0]);
});

