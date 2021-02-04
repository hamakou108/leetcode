<?php

namespace BestTimeToBuyAndSellStockIi;

use PHPUnit\Framework\TestCase;

class SolutionTest extends TestCase
{
    public function testName1()
    {
        $s = new Solution();

        $result = $s->maxProfit(array());
        $this->assertEquals(0, $result);
    }

    public function testName2()
    {
        $s = new Solution();

        $result = $s->maxProfit(array(1));
        $this->assertEquals(0, $result);
    }

    public function testName3()
    {
        $s = new Solution();

        $result = $s->maxProfit(array(1,3));
        $this->assertEquals(2, $result);
    }

    public function testName4()
    {
        $s = new Solution();

        $result = $s->maxProfit(array(3,1));
        $this->assertEquals(0, $result);
    }

    public function testName5()
    {
        $s = new Solution();

        $result = $s->maxProfit(array(7,1,5,3,6,4));
        $this->assertEquals(7, $result);
    }

    public function testName6()
    {
        $s = new Solution();

        $result = $s->maxProfit(array(1,2,3,4,5));
        $this->assertEquals(4, $result);
    }

    public function testName7()
    {
        $s = new Solution();

        $result = $s->maxProfit(array(7,6,4,3,1));
        $this->assertEquals(0, $result);
    }

    public function testName8()
    {
        $s = new Solution();

        $result = $s->maxProfit(array(6,1,3,2,4,7));
        $this->assertEquals(7, $result);
    }

    public function testName9()
    {
        $s = new Solution();

        $result = $s->maxProfit(array(1,7,4,2));
        $this->assertEquals(6, $result);
    }
}