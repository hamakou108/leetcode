/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  if (nums.length === 0 || k <= 0) {
    return;
  }

  const rotateTimes = k % nums.length;
  if (rotateTimes === 0) {
    return;
  }

  const tmp = nums.splice(nums.length - rotateTimes, rotateTimes);
  nums.unshift(...tmp);
};
