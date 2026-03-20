package com.jinwang.settypes;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

public class SetDemo {

    public static void run() {

        System.out.println("=== HashSet ===");
        testSet(new HashSet<>());

        System.out.println("\n=== LinkedHashSet ===");
        testSet(new LinkedHashSet<>());

        System.out.println("\n=== TreeSet ===");
        testSet(new TreeSet<>());
    }

    private static void testSet(Set<String> set) {

        if (set.isEmpty()) {
            System.out.println("Set is empty before adding items");
        }

        set.add("red");
        set.add("blue");
        set.add("yellow");
        set.add("black");
        set.add("grey");
        set.add("green");
        set.add("green"); // duplicate

        System.out.println(set);

        for (String item : set) {
            System.out.println(item);
        }

        if (set.contains("purple")) {
            System.out.println("Contains purple");
        }
        if (set.contains("blue")) {
            System.out.println("Contains blue");
        }

        // second set
        HashSet<String> test2 = new HashSet<>();

        test2.add("red");
        test2.add("blue");
        test2.add("yellow");
        test2.add("black");
        test2.add("white");
        test2.add("beige");

        // difference
        HashSet<String> differentItems = new HashSet<>(test2);
        differentItems.removeAll(set);

        System.out.println("Different items: " + differentItems);
    }
}
