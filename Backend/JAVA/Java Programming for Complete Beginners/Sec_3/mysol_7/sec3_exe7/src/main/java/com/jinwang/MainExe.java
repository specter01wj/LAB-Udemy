package com.jinwang;

import com.jinwang.serialization.WritingDemo;
import com.jinwang.serialization.ReadingDemo;
import com.jinwang.serializationmulti.WritingMultiDemo;
import com.jinwang.serializationmulti.ReadingMultiDemo;

public class MainExe {

    public static void main(String[] args) {

        System.out.println("=== Serialization Demo ===");

        WritingDemo.run();
        ReadingDemo.run();

        System.out.println();

        
        System.out.println("=== Serialization Multiple Objects Demo ===");

        WritingMultiDemo.run();
        ReadingMultiDemo.run();
    }

}
