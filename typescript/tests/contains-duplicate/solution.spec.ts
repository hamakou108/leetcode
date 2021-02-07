import { containsDuplicate } from '~/contains-duplicate/solution'

test('example 1', () => {
  let nums = [1, 2, 3, 1];
  expect(containsDuplicate(nums)).toBe(true);
});

test('example 2', () => {
  let nums = [1, 2, 3, 4];
  expect(containsDuplicate(nums)).toBe(false);
});

test('example 3', () => {
  let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
  expect(containsDuplicate(nums)).toBe(true);
});
