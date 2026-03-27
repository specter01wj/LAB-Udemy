package com.jinwang.multilocks;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class MultipleLocksDemo {

    private final Random random = new Random();

    private final Object lock1 = new Object();
    private final Object lock2 = new Object();

    private final List<Integer> list1 = new ArrayList<>();
    private final List<Integer> list2 = new ArrayList<>();

    public static void run() {

        new MultipleLocksDemo().execute();
    }

    private void firstCalculation() {

        synchronized (lock1) {
            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                
            }

            list1.add(random.nextInt(200));
        }
    }

    private void secondCalculation() {

        synchronized (lock2) {
            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }

            list2.add(random.nextInt(200));
        }
    }

    private void process() {

        for (int i = 0; i < 1000; i++) {
            firstCalculation();
            secondCalculation();
        }
    }

    private void execute() {

        System.out.println("Started...");

        long start = System.currentTimeMillis();

        Thread t1 = new Thread(this::process);
        Thread t2 = new Thread(this::process);

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        long end = System.currentTimeMillis();

        System.out.println("Duration: " + (end - start) + " ms");
        System.out.println("List1: " + list1.size() + "; List2: " + list2.size());
    }
}
