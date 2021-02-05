import { maxProfit } from '~/best-time-to-buy-and-sell-stock-ii/solution';

test('example 1', () => {
  let prices = [7, 1, 5, 3, 6, 4];
  expect(maxProfit(prices)).toBe(7);
});

test('example 2', () => {
  let prices = [1, 2, 3, 4, 5];
  expect(maxProfit(prices)).toBe(4);
});

test('example 3', () => {
  let prices = [7, 6, 4, 3, 1];
  expect(maxProfit(prices)).toBe(0);
});

