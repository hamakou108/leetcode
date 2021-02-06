import { rotate } from '~/rotate-array/solution';

test('example 1', () => {
  let nums = [1, 2, 3, 4, 5, 6, 7];
  let k = 3;
  rotate(nums,  k);
  expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
});

test('example 2', () => {
  let nums = [-1, -100, 3, 99];
  let k = 2;
  rotate(nums,  k);
  expect(nums).toEqual([3, 99, -1, -100]);
});

test('example 3', () => {
  let nums: number[] = [];
  let k = 2;
  rotate(nums,  k);
  expect(nums).toEqual([]);
});

