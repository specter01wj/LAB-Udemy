package com.jinwang;

public class EvenNumberCounter {

    public void countAndDisplayEvens(int limit) {

        for (int i = 2; i <= limit; i++) {

            if (i % 2 == 0) {

                System.out.println(i);

            }

        }

    }

}
