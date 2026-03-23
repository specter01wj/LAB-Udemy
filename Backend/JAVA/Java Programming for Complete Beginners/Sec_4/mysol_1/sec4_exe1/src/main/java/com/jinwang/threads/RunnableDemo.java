package com.jinwang.threads;

class MyRunnable implements Runnable {

    @Override
    public void run() {

        for (int i = 0; i < 8; i++) {
            System.out.println(Thread.currentThread().getName() + " -> " + i);

            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}

public class RunnableDemo {

    public static void run() {

        System.out.println("\n=== Runnable ===");

        Thread t1 = new Thread(new MyRunnable());
        Thread t2 = new Thread(new MyRunnable());

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

}
