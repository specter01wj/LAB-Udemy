package com.jinwang.semaphore;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class SemaphoreDemo {

    public static void run() {

        System.out.println("Starting tasks...");

        ExecutorService executor = Executors.newCachedThreadPool();

        for (int i = 0; i < 300; i++) {
            executor.submit(() -> MessageService.getInstance().send());
        }

        executor.shutdown();

        try {
            executor.awaitTermination(10, TimeUnit.MINUTES);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        System.out.println("All tasks finished.");
    }
}
