import { longestCommonPrefix } from '~/longest-common-prefix/solution';

test('example 1', () => {
  const strs = ['flower', 'flow', 'flight'];
  expect(longestCommonPrefix(strs)).toBe('fl');
});

test('example 2', () => {
  const strs = ['dog', 'racecar', 'car'];
  expect(longestCommonPrefix(strs)).toBe('');
});

test('example 3', () => {
  const strs = ['flower', 'flower'];
  expect(longestCommonPrefix(strs)).toBe('flower');
});

test('example 4', () => {
  const strs = [''] as string[];
  expect(longestCommonPrefix(strs)).toBe('');
});

test('example 5', () => {
  const strs = [] as string[];
  expect(longestCommonPrefix(strs)).toBe('');
});

