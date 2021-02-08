export function singleNumber(nums: number[]): number {
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if ((i + 1) % 2 === 0) continue;
    if (nums[i] === nums[i+1]) continue;

    return nums[i];
  }

  throw new Error('Single number does not exist');
};
