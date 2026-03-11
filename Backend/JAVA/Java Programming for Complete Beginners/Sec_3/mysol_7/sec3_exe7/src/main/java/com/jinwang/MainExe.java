package com.jinwang;

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
