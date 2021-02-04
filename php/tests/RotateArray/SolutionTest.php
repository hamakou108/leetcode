<?php

namespace RotateArray;

use PHPUnit\Framework\TestCase;

class SolutionTest extends TestCase
{
    public function testName1()
    {
        $s = new Solution();

        $nums = array();
        $s->rotate($nums, 3);
        $this->assertEquals(array(), $nums);
    }

    public function testName2()
    {
        $s = new Solution();

        $nums = array(1);
        $s->rotate($nums, 3);
        $this->assertEquals(array(1), $nums);
    }

    public function testName3()
    {
        $s = new Solution();

        $nums = array(1,2,3);
        $s->rotate($nums, 1);
        $this->assertEquals(array(3,1,2), $nums);
    }

    public function testName4()
    {
        $s = new Solution();

        $nums = array(1,2,3);
        $s->rotate($nums, 3);
        $this->assertEquals(array(1,2,3), $nums);
    }

    public function testName5()
    {
        $s = new Solution();

        $nums = array(1,2,3);
        $s->rotate($nums, 4);
        $this->assertEquals(array(3,1,2), $nums);
    }

    public function testName6()
    {
        $s = new Solution();

        $nums = array(1,2,3,4,5);
        $s->rotate($nums, 3);
        $this->assertEquals(array(3,4,5,1,2), $nums);
    }

    public function testName7()
    {
        $s = new Solution();

        $nums = array(1,2,3);
        $s->rotate($nums, 0);
        $this->assertEquals(array(1,2,3), $nums);
    }
}
