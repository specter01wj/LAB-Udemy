package com.jinwang.threadpool;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

class Task implements Runnable {

    private final int id;

    public Task(int id) {
        this.id = id;
    }

    @Override
    public void run() {

        System.out.println("Task " + id + " started...");

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        System.out.println("Task " + id + " finished.");
    }
}

public class ThreadPoolDemo {

    public static void run() {

        System.out.println("Starting thread pool...");

        ExecutorService executor = Executors.newFixedThreadPool(2);

        for (int i = 1; i <= 5; i++) {
            executor.submit(new Task(i));
        }

        executor.shutdown();
        System.out.println("All tasks submitted.");

        try {
            executor.awaitTermination(1, TimeUnit.HOURS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();




            
        }

        System.out.println("All tasks completed.");
    }
}
