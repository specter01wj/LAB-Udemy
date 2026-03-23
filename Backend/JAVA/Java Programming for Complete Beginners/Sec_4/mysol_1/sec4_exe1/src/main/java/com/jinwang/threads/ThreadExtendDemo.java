package com.jinwang.threads;

class MyThread extends Thread {

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

public class ThreadExtendDemo {

    public static void run() {

        System.out.println("=== Extend Thread ===");

        Thread t1 = new MyThread();
        Thread t2 = new MyThread();

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
