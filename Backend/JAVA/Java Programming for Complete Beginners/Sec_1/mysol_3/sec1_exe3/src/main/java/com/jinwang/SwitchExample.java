package com.jinwang;

import java.util.Scanner;

public class SwitchExample {

    public static void run(Scanner input) {

        input.nextLine(); // clear leftover newline if needed

        System.out.print("Enter your instructions: ");
        String text = input.nextLine();

        switch (text) {
            case "run":
                System.out.println("Program is running");
                break;
            case "stop":
                System.out.println("Program stopped");
                break;
            default:
                System.out.println("Instructions not recognized");
        }
    }

}
