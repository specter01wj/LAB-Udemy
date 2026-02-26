package com.jinwang;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileReadDemo {

    public static void run() {

        File file = new File("test.txt");

        try (Scanner scanner = new Scanner(file)) {

            if (scanner.hasNextInt()) {
                int value = scanner.nextInt();
                System.out.println("Value is: " + value);
            }

            scanner.nextLine(); // move to next line if needed

            while (scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }

        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
        }
    }
}
