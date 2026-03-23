package com.jinwang.threads;

public class AnonymousThreadDemo {

    public static void run() {

        System.out.println("\n=== Anonymous Runnable ===");

        Thread t1 = new Thread(() -> {

            for (int i = 0; i < 8; i++) {
                System.out.println(Thread.currentThread().getName() + " -> " + i);

                try {
                    Thread.sleep(200);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        });

        t1.start();

        try {
            t1.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

}
