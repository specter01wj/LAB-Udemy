package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
        // int 2exp31
        int myMinValue = -2_147_483_648;
        int myMaxValue = 2147483647;
        int myTotal = (myMinValue/2);

        //byte 2exp7
        byte myByteValue = 127;
        byte myNewByteValue = (byte)(myByteValue/2);

        //short 2exp15
        short myShortValue = -32768;
        short myNewShortValue = (short) (myShortValue/2);

        //long 2exp63
        long myLongValue = 9_223_372_036_854_775_807L;

        System.out.println(myNewByteValue);

        // 1. Create a byte variable and set it to any valid byte number.
        // 2. Create a short variable and set it to any valid short number.
        // 3. Create a int variable and set it to any valid in number.
        // 4. Create a variable of type long, and make it equal to
        //    50000 + 10 times the sum of the byte, plus the short plus the int

        byte byteValue = 10;
        short shortValue = 20;
        int intValue = 50;

        long longTotal = (long) (50000L + 10L * (byteValue + shortValue + intValue));
        short shortTotal = (short) (1000 + 10 * (byteValue + shortValue + intValue));
        System.out.println("longTotal = " + longTotal);
        System.out.println("shortTotal = " + shortTotal);


    }
}
