export function containsDuplicate(nums: number[]): boolean {
  const map = new Map(nums.map((num) => [num, num]));
  return nums.length !== map.size
};

