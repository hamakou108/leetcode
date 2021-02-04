<?php


namespace SingleNumber;


class Solution
{
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function singleNumber($nums) {
        $hash = array();
        foreach ($nums as $num) {
            if (in_array($num, $hash)) {
                unset($hash[$num]);
                continue;
            }
            $hash[$num] = $num;
        }

        $tmp = array_slice($hash, 0, 1)[0];

        return $tmp;
    }
}