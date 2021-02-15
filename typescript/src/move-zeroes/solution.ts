/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  let i = nums.length - 1;
  while (i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      continue;
    }
  }
};
