export function removeDuplicates(nums: number[]): number {
    let i = nums.length
    while (i--) {
        if (nums[i] === nums[i-1]) {
            nums.splice(i, 1);
        }
    }

    return nums.length;
};
