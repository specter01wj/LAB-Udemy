package com.jinwang;

class Program {

    private int value;
    private String text;

    public Program() {
        this(5);
        System.out.println("First Constructor");
        value = 12;
    }

    public Program(int value) {
        this.value = value;




        
        System.out.println("Second Constructor");
    }

    public Program(int value, String text) {
        this();
        this.value = value;
        this.text = text;
        System.out.println("Third Constructor");
    }
}

public class ConstructorDemo {

    public static void run() {

        new Program();
        new Program(2);
        new Program(5, "Hi");
    }

}
