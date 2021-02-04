import { removeDuplicates } from '~/remove-duplicates-from-sorted-array/solution'

test('example 1', () => {
    let nums = [1, 1, 2];
    const length = removeDuplicates(nums);
    expect(length).toBe(2);
    expect(nums).toEqual([1, 2]);
});

test('example 2', () => {
    let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const length = removeDuplicates(nums);
    expect(length).toBe(5);
    expect(nums).toEqual([0, 1, 2, 3, 4]);
});

