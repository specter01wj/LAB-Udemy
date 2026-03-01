package com.jinwang;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Example2Demo {

    public static void run() {

        File file = new File("example.txt");

        try {
            Scanner readFile = new Scanner(file);

            System.out.println("File opened successfully.");
            readFile.close();

        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + file.getAbsolutePath());
        }

        System.out.println("Program continues...");
    }

}
