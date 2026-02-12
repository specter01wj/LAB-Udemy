package com.jinwang;

public class IfStatements {

    public static void run() {

        int amount = 0;

        while (true) {

            System.out.println("In the loop");

            if (amount == 6) {
                break;
            }

            amount++;
            System.out.println("Out of the loop");
        }
    }

}
