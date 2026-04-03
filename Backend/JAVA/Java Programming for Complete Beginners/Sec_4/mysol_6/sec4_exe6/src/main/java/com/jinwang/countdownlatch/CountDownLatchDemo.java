package com.jinwang.countdownlatch;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class Task implements Runnable {

    private final CountDownLatch latch;

    public Task(CountDownLatch latch) {
        this.latch = latch;
    }

    @Override
    public void run() {

        System.out.println(Thread.currentThread().getName() + " started.");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        latch.countDown();
    }
}

public class CountDownLatchDemo {

    public static void run() {

        System.out.println("Starting tasks...");

        CountDownLatch latch = new CountDownLatch(6);

        ExecutorService executor = Executors.newFixedThreadPool(6);

        for (int i = 0; i < 6; i++) {
            executor.submit(new Task(latch));
            
        }

        executor.shutdown();

        try {
            latch.await();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        System.out.println("All threads completed.");
    }
}
