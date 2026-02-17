package com.jinwang;

public class OneDimensionalArrayDemo {

    public static void run() {

        int[] numbers = new int[5];

        System.out.println("Default first value: " + numbers[0]); // default 0

        numbers[0] = 15;
        numbers[1] = 20;
        numbers[2] = 25;
        numbers[3] = 30;
        numbers[4] = 35;

        System.out.println("Using loop:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }

}
