<?php


namespace RotateArray;


class Solution
{
    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return NULL
     */
    function rotate(&$nums, $k) {
        if (count($nums) == 0 || $k == 0) {
            return $nums;
        }

        $element_no = count($nums) % $k;
        $tmp = array_splice($nums, count($nums) - $k);
        $nums = array_merge($tmp, $nums);

        return NULL;
    }
}