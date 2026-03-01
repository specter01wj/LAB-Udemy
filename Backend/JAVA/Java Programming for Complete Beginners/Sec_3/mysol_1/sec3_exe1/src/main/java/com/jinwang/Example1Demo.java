package com.jinwang;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Example1Demo {

    public static void run() throws FileNotFoundException {

        File file = new File("example.txt");

        Scanner readFile = new Scanner(file);
        System.out.println("File opened successfully.");

        readFile.close();
    }

}
