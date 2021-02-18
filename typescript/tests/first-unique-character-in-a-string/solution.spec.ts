import { firstUniqChar } from '~/first-unique-character-in-a-string/solution';

test('example 1', () => {
  const s = 'leetcode';
  expect(firstUniqChar(s)).toBe(0);
});

test('example 2', () => {
  const s = 'loveleetcode';
  expect(firstUniqChar(s)).toBe(2);
});

test('example 3', () => {
  const s = 'jojo';
  expect(firstUniqChar(s)).toBe(-1);
});

