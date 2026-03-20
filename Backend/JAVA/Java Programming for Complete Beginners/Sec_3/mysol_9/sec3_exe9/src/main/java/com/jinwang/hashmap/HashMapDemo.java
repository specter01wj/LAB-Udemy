package com.jinwang.hashmap;

import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {

    public static void run() {

        System.out.println("=== HashMap Demo ===");

        HashMap<Integer, String> map = new HashMap<>();

        map.put(3, "Dog");
        map.put(5, "Cat");
        map.put(10, "Tiger");
        map.put(14, "Lion");
        map.put(72, "Elephant");

        // overwrite key
        map.put(5, "Tortoise");

        // get value
        String animal = map.get(5);
        System.out.println("Key 5: " + animal);

        // iterate
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
