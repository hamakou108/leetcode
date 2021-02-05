export function maxProfit(prices: number[]): number {
  let profit = 0;
  let previous = 10001; // max price is 10000

  for (const current of prices) {
    if (current > previous) {
      profit += current - previous;
    }

    previous = current;
  }

  return profit;
};
