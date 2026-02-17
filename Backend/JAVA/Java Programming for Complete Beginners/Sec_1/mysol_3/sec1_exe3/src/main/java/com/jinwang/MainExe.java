package com.jinwang;

import java.util.Scanner;

public class MainExe {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("=== Scanner Decimal ===");
        ScannerDecimal.run(input);

        System.out.println("\n=== Do While Loop ===");
        DoWhileLoop.run(input);

        System.out.println("\n=== Switch Example ===");
        SwitchExample.run(input);

        input.close();
    }

}
