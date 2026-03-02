package com.jinwang;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Example3Demo {

    public static void run() {

        try {
            read();
        } catch (FileNotFoundException e) {
            System.out.println("File not found in read() method.");



            
        }
    }

    private static void read() throws FileNotFoundException {

        File file = new File("example.txt");

        Scanner readFile = new Scanner(file);
        System.out.println("File opened inside read().");

        readFile.close();
    }

}
