package com.jinwang.collections;

import java.util.ArrayList;
import java.util.LinkedList;

public class ListDemo {

    public static void run() {

        System.out.println("=== ArrayList ===");

        ArrayList<Integer> values = new ArrayList<>();
        // [0][1][2]...

        values.add(20);
        values.add(60);
        values.add(200);

        // access by index
        System.out.println("Index 2: " + values.get(2));

        // normal loop
        for (int i = 0; i < values.size(); i++) {
            System.out.println(values.get(i));
        }

        // remove last
        values.remove(values.size() - 1);

        // enhanced loop
        for (Integer v : values) {
            System.out.println(v);
        }

        System.out.println("\n=== LinkedList ===");

        LinkedList<Integer> linkedList = new LinkedList<>();
        // [0] -> [1] -> [2]...

        linkedList.add(20);
        linkedList.add(60);
        linkedList.add(200);

        // same operations
        System.out.println("Index 2: " + linkedList.get(2));

        for (Integer v : linkedList) {
            System.out.println(v);
        }
    }
}
