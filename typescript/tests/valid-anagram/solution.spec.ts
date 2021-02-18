import { isAnagram } from '~/valid-anagram/solution';

test('example 1', () => {
  const s = 'anagram';
  const t = 'nagaram';
  expect(isAnagram(s, t)).toBe(true);
});

test('example 2', () => {
  const s = 'rat';
  const t = 'car';
  expect(isAnagram(s, t)).toBe(false);
});

test('example 3', () => {
  const s = 'aaa';
  const t = 'aaaaa';
  expect(isAnagram(s, t)).toBe(false);
});

