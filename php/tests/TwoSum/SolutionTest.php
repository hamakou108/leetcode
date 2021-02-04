<?php

namespace TwoSum;

use PHPUnit\Framework\TestCase;

class SolutionTest extends TestCase
{

    public function testName1()
    {
        $s = new Solution();

        $input = array(1, 2);
        $actual = $s->twoSum($input, 3);
        $this->assertEquals(array(0, 1), $actual);
    }

    public function testName2()
    {
        $s = new Solution();

        $input = array(1,2,3);
        $actual = $s->twoSum($input, 3);
        $this->assertEquals(array(0,1), $actual);
    }

    public function testName3()
    {
        $s = new Solution();

        $input = array(1,2,3);
        $actual = $s->twoSum($input, 5);
        $this->assertEquals(array(1,2), $actual);
    }

    public function testName4()
    {
        $s = new Solution();

        $input = array(2,7,11,15);
        $actual = $s->twoSum($input, 9);
        $this->assertEquals(array(0,1), $actual);
    }
}