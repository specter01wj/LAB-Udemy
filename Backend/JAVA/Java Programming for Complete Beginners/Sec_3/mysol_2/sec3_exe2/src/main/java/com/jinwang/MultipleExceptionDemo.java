package com.jinwang;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.ParseException;

public class MultipleExceptionDemo {

    public static void run() {

        MultipleExceptions me = new MultipleExceptions();

        System.out.println("=== Handling start() ===");

        try {
            me.start();

        } catch (IOException e) {
            System.out.println("IO Exception occurred.");

        } catch (ParseException e) {
            System.out.println("Parse Exception: " + e.getMessage());

        } catch (Exception e) {
            System.out.println("General Exception.");
        }

        System.out.println("\n=== Handling example() ===");

        try {
            me.example();

        } catch (FileNotFoundException e) {
            System.out.println("File not found.");

        } catch (IOException e) {
            System.out.println("IO exception occurred.");
        }
    }
}
