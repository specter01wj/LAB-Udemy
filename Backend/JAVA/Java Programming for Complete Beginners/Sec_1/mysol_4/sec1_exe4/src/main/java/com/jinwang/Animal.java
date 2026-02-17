package com.jinwang;

public class Animal {

    String animal;
    int value;
    int month;

    void run() {
        System.out.println("Running");
        for (int i = 0; i < 4; i++) {
            System.out.println("My " + animal + " is " + value + " years old.");
        }
    }

    int calculateMonthsToBirthday() {
        return 12 - month;
    }

    void talk(String text) {
        System.out.println(text);
    }

    void walk(int speed) {
        System.out.println("Walking " + speed + " km per hour");
    }

    void timer(int minutes, double seconds) {
        System.out.println("It took " + minutes + "m and " + seconds + "s to get down the hill.");
    }

}
