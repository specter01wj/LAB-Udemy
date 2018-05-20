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

    }
}
