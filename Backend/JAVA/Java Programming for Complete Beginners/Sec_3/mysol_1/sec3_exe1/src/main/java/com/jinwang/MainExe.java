package com.jinwang;

import java.io.FileNotFoundException;

public class MainExe {

    public static void main(String[] args) {

        System.out.println("=== Example 1 ===");
        try {
            Example1Demo.run();
        } catch (FileNotFoundException e) {
            System.out.println("Example1: File not found.");




            
        }

        System.out.println("\n=== Example 2 ===");
        Example2Demo.run();

        System.out.println("\n=== Example 3 ===");
        Example3Demo.run();
    }

}
