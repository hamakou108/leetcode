<?php

namespace SingleNumber;

use PHPUnit\Framework\TestCase;

class SolutionTest extends TestCase
{
    public function testName1()
    {
        $s = new Solution();

        $target = array(1);
        $actual = $s->singleNumber($target);
        $this->assertEquals(1, $actual);
    }

    public function testName2()
    {
        $s = new Solution();

        $target = array(2,2,1);
        $actual = $s->singleNumber($target);
        $this->assertEquals(1, $actual);
    }

    public function testName3()
    {
        $s = new Solution();

        $target = array(4,1,2,1,2);
        $actual = $s->singleNumber($target);
        $this->assertEquals(4, $actual);
    }
}
