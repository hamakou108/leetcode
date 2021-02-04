<?php

namespace ContainsDuplicate;

use PHPUnit\Framework\TestCase;

class SolutionTest extends TestCase
{

    public function testName1()
    {
        $s = new Solution();

        $target = array();
        $actual = $s->containsDuplicate($target);
        $this->assertEquals(false, $actual);
    }

    public function testName2()
    {
        $s = new Solution();

        $target = array(1);
        $actual = $s->containsDuplicate($target);
        $this->assertEquals(false, $actual);
    }

    public function testName3()
    {
        $s = new Solution();

        $target = array(1,1);
        $actual = $s->containsDuplicate($target);
        $this->assertEquals(true, $actual);
    }

    public function testName4()
    {
        $s = new Solution();

        $target = array(1,1,1);
        $actual = $s->containsDuplicate($target);
        $this->assertEquals(true, $actual);
    }

    public function testName5()
    {
        $s = new Solution();

        $target = array(1,1,2);
        $actual = $s->containsDuplicate($target);
        $this->assertEquals(true, $actual);
    }

    public function testName6()
    {
        $s = new Solution();

        $target = array(1,2,2,3);
        $actual = $s->containsDuplicate($target);
        $this->assertEquals(true, $actual);
    }

    public function testName7()
    {
        $s = new Solution();

        $target = array(1,2,3,2);
        $actual = $s->containsDuplicate($target);
        $this->assertEquals(true, $actual);
    }

    public function testName8()
    {
        $s = new Solution();

        $target = array(3,1,4,2,3);
        $actual = $s->containsDuplicate($target);
        $this->assertEquals(true, $actual);
    }

    public function testName9()
    {
        $s = new Solution();

        $target = array(3,1,4,2,5);
        $actual = $s->containsDuplicate($target);
        $this->assertEquals(false, $actual);
    }

    public function testName10()
    {
        $s = new Solution();

        $target = array(0,4,5,0,3,6);
        $actual = $s->containsDuplicate($target);
        $this->assertEquals(true, $actual);
    }
}