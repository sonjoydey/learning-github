<?php
use PHPUnit\Framework\TestCase;

class StackTest extends TestCase
{
    public function testTrue()
    {
        $this->assertTrue(true);
    }

    public function testFalse()
    {
        $this->assertFalse(false);
    }

    public function testMultiple()
    {
        $this->assertEquals(5, 2+3);
        $this->assertEquals(4, 2+2);

    }
}