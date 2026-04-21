package com.jinwang.reentrantlock;

public class ReentrantLockDemo {

    public static void run() {

        final ReentrantLockExample example = new ReentrantLockExample();

        Thread t1 = new Thread(() -> {
            try {
                example.threadOne();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        Thread t2 = new Thread(() -> {
            try {
                example.threadTwo();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
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

        example.finished();
    }

}
