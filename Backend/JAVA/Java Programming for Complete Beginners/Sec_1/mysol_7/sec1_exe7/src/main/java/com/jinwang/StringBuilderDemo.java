package com.jinwang;

public class StringBuilderDemo {

    public static void run() {

        String example1 = "Hello! ";
        example1 += "My name ";
        example1 += "is David.";

        System.out.println(example1);

        StringBuilder example2 = new StringBuilder();
        example2.append("Hello! ")
                .append("My name ")
                .append("is Mike.");

        System.out.println(example2.toString());

        String name = "Tom.";
        StringBuilder example3 = new StringBuilder("Hello! ");
        example3.append("My name ")
                .append("is ")
                .append(name);

        System.out.println(example3);
    }
}
