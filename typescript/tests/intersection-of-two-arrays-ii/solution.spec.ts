import { intersect } from '~/intersection-of-two-arrays-ii/solution';

test('example 1', () => {
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  expect(intersect(nums1, nums2)).toEqual([2, 2]);
});

test('example 2', () => {
  const nums1 = [4, 9, 5];
  const nums2 = [9, 4, 9, 8, 4];
  expect(intersect(nums1, nums2)).toEqual([9, 4]);
});

test('example 3', () => {
  const nums1 = [1, 2, 2];
  const nums2 = [2];
  expect(intersect(nums1, nums2)).toEqual([2]);
});

test('example 4', () => {
  const nums1 = [1, 2, 2];
  const nums2 = [2, 2];
  expect(intersect(nums1, nums2)).toEqual([2, 2]);
});

test('example 5', () => {
  const nums1 = [1, 2, 2];
  const nums2 = [2, 2, 2];
  expect(intersect(nums1, nums2)).toEqual([2, 2]);
});

test('example 6', () => {
  const nums1 = [1, 2, 3, 4, 5];
  const nums2 = [3, 5, 2, 1, 4];
  expect(intersect(nums1, nums2)).toEqual([3, 5, 2, 1, 4]);
});

