<?php
use PHPUnit\Framework\TestCase;
require_once(__DIR__."/../index.php");

class StackTest extends TestCase
{
    public function testexpectedString()
    {
        $this->assertTrue(expectedString("jenkins"));
        $this->assertFalse(expectedString("fail"));
    }

    public function testexpectedStringAnother()
    {
        $this->assertTrue(expectedString("jenkins"));
        $this->assertFalse(expectedString("false"));
    }

    public function testMultiple()
    {
        $this->assertEquals(5, add(3, 2));
        $this->assertEquals(6, add(3, 3));
    }

    public function testMultipleAgain()
    {
        $this->assertEquals(5, add(3, 2));
        $this->assertEquals(4, add(2, 2));
        $this->assertEquals(6, add(4, 2));
        $this->assertEquals(7, add(5, 2));
    }
}