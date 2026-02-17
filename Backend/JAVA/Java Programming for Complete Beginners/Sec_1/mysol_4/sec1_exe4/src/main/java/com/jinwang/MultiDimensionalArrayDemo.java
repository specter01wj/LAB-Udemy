package com.jinwang;

public class MultiDimensionalArrayDemo {

    public static void run() {

        int[] oneDimensionalArray = {12, 49, 922};
        System.out.println("Second element: " + oneDimensionalArray[1]);

        int[][] multiArray = {
                {12, 49, 922},
                {23, 56, 78, 12},
                {12, 34, 56}
        };

        System.out.println("multiArray[1][3]: " + multiArray[1][3]);
        System.out.println("multiArray[2][1]: " + multiArray[2][1]);

        double[][] doubleArray = new double[4][2];
        doubleArray[3][1] = 2.6;
        System.out.println("doubleArray[3][1]: " + doubleArray[3][1]);

        System.out.println("Full matrix:");
        for (int row = 0; row < multiArray.length; row++) {
            for (int col = 0; col < multiArray[row].length; col++) {
                System.out.print(multiArray[row][col] + "\t");
            }
            System.out.println();
        }
    }

}
