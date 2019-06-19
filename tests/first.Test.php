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

    public function testMultiple()
    {
        $this->assertEquals(5, add(3, 2));
        $this->assertEquals(4, add(3, 2));

    }
}