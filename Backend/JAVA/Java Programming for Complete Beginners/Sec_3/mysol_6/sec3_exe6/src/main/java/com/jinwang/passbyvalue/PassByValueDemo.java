package com.jinwang.passbyvalue;

public class PassByValueDemo {

    public static void run() {

        PassByValueDemo application = new PassByValueDemo();

        int number = 10;
        System.out.println("1: Number = " + number);

        application.display(number);

        System.out.println("4: Number = " + number);

        System.out.println();

        Cat cat = new Cat("Luna");
        System.out.println("1: " + cat);

        application.display(cat);

        System.out.println("4: " + cat);
    }

    public void display(int number) {

        System.out.println("2: Number = " + number);

        number = 8;

        System.out.println("3: Number = " + number);
    }

    public void display(Cat cat) {

        System.out.println("2: " + cat);

        cat = new Cat("Sunshine");
        cat.setName("Oliver");

        System.out.println("3: " + cat);
    }
}
