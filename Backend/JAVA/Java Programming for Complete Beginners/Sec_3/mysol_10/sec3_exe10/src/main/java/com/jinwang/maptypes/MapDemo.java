package com.jinwang.maptypes;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.TreeMap;

public class MapDemo {

    public static void run() {

        System.out.println("=== LinkedHashMap ===");
        sortedMaps(new LinkedHashMap<>());

        System.out.println("\n=== TreeMap ===");
        sortedMaps(new TreeMap<>());
    }

    public static void sortedMaps(Map<Integer, String> map) {

        map.put(4, "ice cream");
        map.put(8, "pie");
        map.put(0, "pizza");
        map.put(2, "hamburger");
        map.put(12, "fries");
        map.put(27, "hot dog");

        for (Integer key : map.keySet()) {
            System.out.println(key + ": " + map.get(key));
        }
    }
}
