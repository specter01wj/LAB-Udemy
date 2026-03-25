package com.jinwang.synchronizeddemo;

public class SynchronizedDemo {

    private int number = 0;

    // critical section
    public synchronized void increment() {
        number++;
    }

    public static void run() {

        SynchronizedDemo demo = new SynchronizedDemo();
        demo.execute();
    }

    private void execute() {

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 20000; i++) {
                increment();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 20000; i++) {
                increment();
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        System.out.println("Number is: " + number);
    }
}
