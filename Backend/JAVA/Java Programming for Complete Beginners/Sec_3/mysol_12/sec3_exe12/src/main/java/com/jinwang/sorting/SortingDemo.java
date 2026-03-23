package com.jinwang.sorting;

import java.util.*;

class SortByLength implements Comparator<String> {

    @Override
    public int compare(String s1, String s2) {
        return Integer.compare(s1.length(), s2.length());
    }
}

class ReverseAlphabetical implements Comparator<String> {

    @Override
    public int compare(String s1, String s2) {
        return s2.compareTo(s1);
    }
}

public class SortingDemo {

    public static void run() {

        System.out.println("=== Sort Strings ===");

        List<String> colors = new ArrayList<>();

        colors.add("green");
        colors.add("purple");
        colors.add("grey");
        colors.add("black");
        colors.add("white");
        colors.add("red");

        // sort reverse alphabetical
        Collections.sort(colors, new ReverseAlphabetical());

        for (String color : colors) {
            System.out.println(color);
        }

        System.out.println("\n=== Sort Integers ===");

        List<Integer> values = new ArrayList<>();

        values.add(59);
        values.add(2);
        values.add(5);

        
        values.add(9);
        values.add(21);

        // anonymous comparator (descending)
        Collections.sort(values, new Comparator<Integer>() {
            @Override
            public int compare(Integer v1, Integer v2) {
                return v2.compareTo(v1);
            }
        });

        for (Integer v : values) {
            System.out.println(v);
        }
    }
}
