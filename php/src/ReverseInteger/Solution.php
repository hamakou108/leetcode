<?php


namespace ReverseInteger;


class Solution
{
    /**
     * @param Integer $x
     * @return Integer
     */
    function reverse($x) {
        $x_str_rev = strrev(strval($x));

        if ($x >= 0) {
            $x_rev = intval($x_str_rev);

            if ($x >= pow(2, 31) || $x_rev >= pow(2, 31)) {
                // if either input value or reversed input value overflows
                return 0;
            }

            return $x_rev;
        } else {
            $x_rev = intval("-" . $x_str_rev);

            if ($x < -1 * pow(2, 31) || $x_rev < -1 * pow(2, 31)) {
                // if either input value or reversed input value overflows
                return 0;
            }

            return $x_rev;
        }
    }
}