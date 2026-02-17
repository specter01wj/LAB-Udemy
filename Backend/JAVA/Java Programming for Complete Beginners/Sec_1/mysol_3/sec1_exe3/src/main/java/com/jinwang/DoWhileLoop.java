package com.jinwang;

import java.util.Scanner;

public class DoWhileLoop {

    public static void run(Scanner input) {

        int number;

        do {
            System.out.print("Enter a number: ");
            number = input.nextInt();
        }
        while (number != 9);

        System.out.println("You got 9!");
    }

}
