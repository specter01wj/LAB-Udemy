package com.jinwang;

public class TernaryDemo {

    public static void run() {

        System.out.println("Simple ternary: " + (true ? "true" : "false"));

        int number = 100;
        number = number > 20 ? number : 20;
        System.out.println("Updated number: " + number);

        int[] numbers = {5, 43, 75, 57, 84};
        int lowestNumber = Integer.MAX_VALUE;

        for (int currentNumber : numbers) {
            lowestNumber = currentNumber < lowestNumber
                    ? currentNumber
                    : lowestNumber;
        }

        System.out.println("Lowest number: " + lowestNumber);
    }
}
