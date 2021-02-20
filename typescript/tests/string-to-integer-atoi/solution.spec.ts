import { myAtoi } from '~/string-to-integer-atoi/solution';

test('example 1', () => {
  const s = '42';
  expect(myAtoi(s)).toBe(42);
});

test('example 2', () => {
  const s = '-196';
  expect(myAtoi(s)).toBe(-196);
});

test('example 3', () => {
  const s = '91283472332';
  expect(myAtoi(s)).toBe(2147483647);
});

test('example 4', () => {
  const s = '-91283472332';
  expect(myAtoi(s)).toBe(-2147483648);
});

test('example 5', () => {
  const s = '   -42';
  expect(myAtoi(s)).toBe(-42);
});

test('example 6', () => {
  const s = '123   ';
  expect(myAtoi(s)).toBe(123);
});

test('example 7', () => {
  const s = '123 456';
  expect(myAtoi(s)).toBe(123);
});

test('example 8', () => {
  const s = '   ';
  expect(myAtoi(s)).toBe(0);
});

test('example 9', () => {
  const s = '4193 with words';
  expect(myAtoi(s)).toBe(4193);
});

test('example 10', () => {
  const s = 'words and 987';
  expect(myAtoi(s)).toBe(0);
});

test('example 11', () => {
  const s = '+';
  expect(myAtoi(s)).toBe(0);
});

test('example 12', () => {
  const s = '-';
  expect(myAtoi(s)).toBe(0);
});

test('example 13', () => {
  const s = '1+1';
  expect(myAtoi(s)).toBe(1);
});

test('example 14', () => {
  const s = '-1+3';
  expect(myAtoi(s)).toBe(-1);
});

test('example 15', () => {
  const s = '-2-1';
  expect(myAtoi(s)).toBe(-2);
});

test('example 16', () => {
  const s = '00000-42a1234';
  expect(myAtoi(s)).toBe(0);
});

