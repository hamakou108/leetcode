export function containsDuplicate(nums: number[]): boolean {
  //return solution1(nums);
  //return solution2(nums);
  return solution3(nums);
};

function solution1(nums: number[]): boolean {
  let notDupulicateNums: number[] = [];

  for (const num of nums) {
    if (notDupulicateNums.includes(num)) {
      return true;
    }
    notDupulicateNums.push(num);
  }

  return false;
}

function solution2(nums: number[]): boolean {
  const map = new Map(nums.map((num) => [num, num]));
  return nums.length !== map.size
}

function solution3(nums: number[]): boolean {
  const set = new Set(nums);
  return nums.length !== set.size
}
