package com.jinwang;

public class CastingDemo {

    public static void run() {

        byte byteValue = 3;
        short shortValue = 38;
        int intValue = 29;
        long longValue = 93024;

        float floatValue = 923.5f;
        double doubleValue = 2341.4;

        System.out.println("Byte max value: " + Byte.MAX_VALUE);

        intValue = (int) longValue;
        System.out.println("Casting long to int: " + intValue);

        intValue = (int) floatValue;
        System.out.println("Casting float to int: " + intValue);
    }

}
