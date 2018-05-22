package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
        int myIntVal = 5;
        float myFloatVal = 5f;
        double myDoubleVal = 5d;
        System.out.println("myFloatValue = " + myFloatVal);

        // Convert a given number of pounds to kilograms
        // 1. Create a variable to store the number of pounds
        // 2. Calculate the number of Kilograms for the number above and store in a variable.
        // 3. Print out the result.
        //
        // NOTES: 1 pound is equal to 0.45359237 kilograms.

        double myPound = 400d;
        double pound2Kilo = myPound * 0.45359d;
        System.out.println("Kilogram: " + pound2Kilo);

    }
}
