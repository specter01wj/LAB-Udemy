package com.jinwang;

public class RuntimeExceptionDemo {

    public static void run() {

        System.out.println("=== ArithmeticException ===");

        try {
            int value = 11;
            value = value / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero.");
            
        }

        System.out.println("\n=== NullPointerException ===");

        try {
            String empty = null;
            System.out.println(empty.length());
        } catch (NullPointerException e) {
            System.out.println("String is null.");
        }

        System.out.println("\n=== ArrayIndexOutOfBoundsException ===");

        try {
            String[] numbers = { "one", "two", "three" };
            System.out.println(numbers[3]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Invalid array index.");
        }

    }
}
