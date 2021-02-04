<?php

namespace ReverseInteger;

use PHPUnit\Framework\TestCase;

class SolutionTest extends TestCase
{

    public function testName1()
    {
        $s = new Solution();
        $actual = $s->reverse(0);
        $this->assertSame(0, $actual);
    }

    public function testName2()
    {
        $s = new Solution();
        $actual = $s->reverse(1);
        $this->assertSame(1, $actual);
    }

    public function testName3()
    {
        $s = new Solution();
        $actual = $s->reverse(12);
        $this->assertSame(21, $actual);
    }

    public function testName4()
    {
        $s = new Solution();
        $actual = $s->reverse(-123);
        $this->assertSame(-321, $actual);
    }

    public function testName5()
    {
        $s = new Solution();
        $actual = $s->reverse(120);
        $this->assertSame(21, $actual);
    }

    public function testName6()
    {
        $s = new Solution();
        $actual = $s->reverse(pow(2,31) - 7);
        $this->assertSame( 1463847412, $actual);
    }

    public function testName7()
    {
        $s = new Solution();
        $actual = $s->reverse(pow(2,31) - 6);
        $this->assertSame(0, $actual);
    }

    public function testName8()
    {
        $s = new Solution();
        $actual = $s->reverse(pow(2,31));
        $this->assertSame(0, $actual);
    }

    public function testName9()
    {
        $s = new Solution();
        $actual = $s->reverse(-1 * pow(2,31) + 7);
        $this->assertSame(-1463847412, $actual);
    }

    public function testName10()
    {
        $s = new Solution();
        $actual = $s->reverse(-1 * pow(2,31) + 6);
        $this->assertSame(0, $actual);
    }

    public function testName11()
    {
        $s = new Solution();
        $actual = $s->reverse(-1 * pow(2,31) - 1);
        $this->assertSame(0, $actual);
    }

    public function testName12()
    {
        $s = new Solution();
        $actual = $s->reverse(1534236469);
        $this->assertSame(0, $actual);
    }
}
