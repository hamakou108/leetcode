export function intersect(nums1: number[], nums2: number[]): number[] {
  const resultNums: number[] = [];

  nums2.forEach((num2) => {
    for (let i = 0; i < nums1.length; i++) {
      if (num2 === nums1[i]) {
        resultNums.push(nums1.splice(i, 1)[0]);
        break;
      }
    }
  });

  return resultNums;
};

