<?php


namespace ContainsDuplicate;


use phpDocumentor\Reflection\Types\Integer;

class Solution
{

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function containsDuplicate($nums) {
        sort($nums);
        $tmp = NULL;
        foreach ($nums as $num) {
            if ($tmp !== NULL && (int) $num === $tmp) {
                return true;
            }
            $tmp = $num;
        }

        return false;
    }
}