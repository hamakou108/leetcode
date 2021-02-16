export function containsDuplicate(nums: number[]): boolean {
  let notDupulicateNums: number[] = [];

  for (const num of nums) {
    if (notDupulicateNums.includes(num)) {
      return true;
    }
    notDupulicateNums.push(num);
  }

  return false;
};

